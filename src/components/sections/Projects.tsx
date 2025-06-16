// Projects Section Component
// Showcase of featured projects and work

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import {
  fadeInUp,
  iconWiggle,
  ANIMATION_DURATION,
  SPRING_CONFIG,
} from "@/lib/animations";
import { PROJECTS } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// PROJECTS SECTION COMPONENT
// =============================================================================

const Projects = () => {
  // Animation hooks
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const {
    ref: projectsRef,
    controls: projectsControls,
    variants: staggerVariants,
  } = useStaggerAnimation();

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my technical
            skills and innovative thinking.
          </p>
        </motion.div>

        {/* Projects Grid with Glow Effect */}
        <motion.div
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8 relative group"
          variants={staggerVariants}
          initial="initial"
          animate={projectsControls}
        >
          {/* Subtle glow overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl -m-6"
            transition={{ duration: 0.5 }}
          />

          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 60 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: ANIMATION_DURATION.slow },
                },
              }}
              whileHover={{
                scale: 1.001,
                filter: "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.12))",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative z-10"
            >
              <Card
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg border hover:border-primary/20 hover:shadow-primary/10"
                style={{
                  transition: "all 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(59, 130, 246, 0.15), 0 10px 25px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Project Image */}
                <motion.div
                  className="aspect-video overflow-hidden relative"
                  whileHover={{ scale: 1.002 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: ANIMATION_DURATION.normal }}
                  />
                </motion.div>

                {/* Project Content */}
                <CardContent className="p-6">
                  {/* Title and Type */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <motion.div
                      whileHover={{ scale: 1.001 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Period */}
                  <p className="text-sm text-muted-foreground mb-1">
                    {project.period}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={{
                      animate: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="initial"
                    animate="animate"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        variants={{
                          initial: { opacity: 0, scale: 0 },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            transition: { delay: techIndex * 0.05 },
                          },
                        }}
                        whileHover={{
                          scale: 1.001,
                          transition: { duration: 0.1 },
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {/* View Code Button */}
                    <motion.div
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.999 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="group hover:bg-primary hover:text-white transition-all duration-300"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <motion.div
                          whileHover={iconWiggle}
                          className="flex items-center"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </motion.div>
                      </Button>
                    </motion.div>

                    {/* Live Demo Button */}
                    <motion.div
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.999 }}
                    >
                      <Button
                        size="sm"
                        className="group relative overflow-hidden"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />

                        <motion.div
                          whileHover={iconWiggle}
                          className="flex items-center relative z-10"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
