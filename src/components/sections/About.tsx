// About Section Component
// Information about skills, technologies, and personal background

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Tooltip from "@/components/Tooltip";
import { Sparkles, Zap } from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  iconSpin,
  ANIMATION_DURATION,
} from "@/lib/animations";
import {
  SKILLS,
  SKILL_CATEGORIES,
  COURSEWORK,
  SOFT_SKILLS,
} from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// ABOUT SECTION COMPONENT
// =============================================================================

const About = () => {
  // Animation hooks for different sections
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const {
    ref: skillCardsRef,
    controls: skillCardsControls,
    variants: staggerVariants,
  } = useStaggerAnimation();

  // Separate animation control for skills section
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation({
    margin: "-50px",
  });

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24 bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am Shashank Shetty, a Computer Science Engineering graduate from
            AMC Engineering College with a strong academic background and a deep
            interest in technology. I am highly adaptable, quick to learn new
            software and tools, and excel in both independent and collaborative
            environments. With proven leadership abilities and a team-oriented
            approach, I am committed to delivering results and embracing new
            challenges with confidence.
          </p>
        </motion.div>

        {/* Main Content Grid with Glow Effect */}
        <div className="grid lg:grid-cols-2 gap-12 items-center relative group">
          {/* Subtle glow overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl -m-8"
            transition={{ duration: 0.5 }}
          />

          {/* Left Column - Skill Categories */}
          <motion.div
            className="space-y-6 relative z-10"
            variants={fadeInLeft}
            initial="initial"
            animate={sectionControls}
          >
            <motion.div
              ref={skillCardsRef}
              className="grid grid-cols-2 gap-4"
              variants={staggerVariants}
              initial="initial"
              animate={skillCardsControls}
            >
              {SKILL_CATEGORIES.map(
                ({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={title}
                    variants={{
                      initial: { opacity: 0, y: 50 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: ANIMATION_DURATION.normal },
                      },
                    }}
                    whileHover={{
                      scale: 1.002,
                      boxShadow:
                        "0 0 20px rgba(59, 130, 246, 0.15), 0 2px 4px rgba(0,0,0,0.04)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="p-6 text-center cursor-pointer border-2 hover:border-primary/50 transition-all duration-300">
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={iconSpin}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      </motion.div>

                      {/* Category Info */}
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {description}
                      </p>
                    </Card>
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Detailed Skills & Info */}
          <motion.div
            className="space-y-6 relative z-10"
            variants={fadeInRight}
            initial="initial"
            animate={sectionControls}
          >
            {/* Skills Section */}
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>

            {/* Animated Skill Badges */}
            <motion.div
              ref={skillsRef}
              className="flex flex-wrap gap-2"
              initial="initial"
              animate={skillsControls}
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.002,
                    transition: {
                      duration: 0.1,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  style={{
                    // Ensure the element stays visible
                    willChange: "transform",
                  }}
                >
                  <Tooltip content={`${skill.category} Technology`}>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "px-3 py-1 cursor-pointer transition-colors duration-200 select-none",
                        "hover:shadow-sm active:shadow-none",
                        skill.color,
                      )}
                    >
                      {skill.name}
                    </Badge>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Information */}
            <div className="space-y-4">
              {/* Coursework Section */}
              <motion.div
                whileHover={{}}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h4 className="font-semibold mb-2 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-primary" />
                  Relevant Coursework:
                </h4>
                <p className="text-muted-foreground text-sm">
                  {COURSEWORK.join(", ")}
                </p>
              </motion.div>

              {/* Soft Skills Section */}
              <motion.div
                whileHover={{}}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h4 className="font-semibold mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-primary" />
                  Soft Skills:
                </h4>
                <p className="text-muted-foreground text-sm">
                  {SOFT_SKILLS.join(", ")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
