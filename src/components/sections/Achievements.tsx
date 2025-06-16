// Achievements Section Component
// Sports achievements, certifications, and leadership responsibilities

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Certifications from "./Certifications";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  iconSpin,
  ANIMATION_DURATION,
} from "@/lib/animations";
import { ACHIEVEMENTS, RESPONSIBILITIES } from "@/data/portfolioData";

// =============================================================================
// ACHIEVEMENTS SECTION COMPONENT
// =============================================================================

const Achievements = () => {
  // Animation hooks
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();

  return (
    <motion.section
      id="achievements"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24 bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div className="max-w-6xl mx-auto" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <Trophy className="inline-block mr-3 h-10 w-10 text-primary" />
            Achievements & Certifications
          </h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Achievements & Leadership */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate={sectionControls}
            >
              {/* Sports Achievements */}
              <h3 className="text-2xl font-semibold mb-6">
                Sports Achievements
              </h3>

              <div className="space-y-4">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -30 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.2,
                          duration: ANIMATION_DURATION.slow,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.001,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                    }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    <Card className="p-4 cursor-pointer hover:bg-primary/5 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-3">
                          {/* Animated Achievement Icon */}
                          <motion.div
                            whileHover={iconSpin}
                            transition={{ duration: 0.6 }}
                          >
                            <achievement.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          </motion.div>

                          {/* Achievement Details */}
                          <div>
                            <h4 className="font-semibold">
                              {achievement.title}
                            </h4>
                            <p className="text-primary text-sm">
                              {achievement.event}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {achievement.date}
                            </p>
                            <p className="text-muted-foreground text-sm mt-1">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Leadership & Responsibility */}
              <h3 className="text-2xl font-semibold mb-6 mt-8">
                Leadership & Responsibility
              </h3>

              <div className="space-y-4">
                {RESPONSIBILITIES.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -30 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: (ACHIEVEMENTS.length + index) * 0.2,
                          duration: ANIMATION_DURATION.slow,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.001,
                      transition: { duration: 0.1, ease: "easeOut" },
                    }}
                  >
                    <Card className="p-4 hover:bg-primary/5 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-3">
                          {/* Leadership Icon */}
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          </motion.div>

                          {/* Responsibility Description */}
                          <p className="text-muted-foreground text-sm">
                            {responsibility}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Certifications */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate={sectionControls}
            >
              <Certifications />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
