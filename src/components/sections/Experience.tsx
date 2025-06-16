// Experience Section Component
// Professional experience and internships

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { fadeInUp, ANIMATION_DURATION } from "@/lib/animations";
import { EXPERIENCE } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// EXPERIENCE SECTION COMPONENT
// =============================================================================

const Experience = () => {
  // Animation hooks
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const {
    ref: cardsRef,
    controls: cardsControls,
    variants: staggerVariants,
  } = useStaggerAnimation();

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24 bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <Briefcase className="inline-block mr-3 h-10 w-10 text-primary" />
            Experience
          </h2>

          {/* Experience Timeline */}
          <motion.div
            ref={cardsRef}
            className="space-y-8"
            variants={staggerVariants}
            initial="initial"
            animate={cardsControls}
          >
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: ANIMATION_DURATION.slow },
                  },
                }}
                whileHover={{
                  scale: 1.001,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <Card
                  className={cn(
                    "p-6 cursor-pointer relative overflow-hidden transition-all duration-300",
                    // Highlight current position
                    job.current && "ring-2 ring-primary/20 bg-primary/5",
                  )}
                >
                  {/* Current Position Indicator */}
                  {job.current && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-brand-600"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      {/* Job Details */}
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-primary font-medium">
                          {job.company}
                        </p>

                        {/* Job Type Badge */}
                        <motion.div
                          whileHover={{ scale: 1.001 }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          <Badge
                            variant="outline"
                            className={cn(
                              "mt-1 transition-all duration-300",
                              job.current && "border-primary text-primary",
                            )}
                          >
                            {job.type}
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Period and Location */}
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        {/* Period */}
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Job Description */}
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {job.description}
                    </motion.p>

                    {/* Current Position Pulse Effect */}
                    {job.current && (
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
