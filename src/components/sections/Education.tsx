// Education Section Component
// Interactive academic timeline with achievements and visual progress indicators

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  BookOpen,
  Award,
  Target,
  Zap,
  Trophy,
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";
import { fadeInUp, ANIMATION_DURATION } from "@/lib/animations";
import { EDUCATION } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// EDUCATION UTILITIES
// =============================================================================

// Convert percentage/CGPA to progress bar value
const getProgressValue = (grade: string): number => {
  if (grade.includes("CGPA")) {
    const cgpa = parseFloat(grade.split(":")[1]);
    return (cgpa / 10) * 100; // Convert CGPA to percentage
  }
  if (grade.includes("Percentage")) {
    return parseFloat(grade.split(":")[1].replace("%", ""));
  }
  return 0;
};

// Get achievement level based on grade
const getAchievementLevel = (
  grade: string,
): {
  level: string;
  color: string;
  icon: any;
} => {
  const progress = getProgressValue(grade);
  if (progress >= 85) {
    return {
      level: "Excellence",
      color: "text-green-500",
      icon: Trophy,
    };
  } else if (progress >= 80) {
    return {
      level: "Distinction",
      color: "text-blue-500",
      icon: Star,
    };
  } else if (progress >= 75) {
    return {
      level: "Merit",
      color: "text-purple-500",
      icon: Award,
    };
  }
  return {
    level: "Good",
    color: "text-orange-500",
    icon: Target,
  };
};

// Get educational level icon
const getEducationIcon = (degree: string) => {
  if (
    degree.toLowerCase().includes("bachelor") ||
    degree.toLowerCase().includes("engineering")
  ) {
    return GraduationCap;
  }
  if (
    degree.toLowerCase().includes("pre-university") ||
    degree.toLowerCase().includes("college")
  ) {
    return BookOpen;
  }
  return Award;
};

// =============================================================================
// TIMELINE CONNECTION COMPONENT
// =============================================================================

const TimelineConnection = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => {
  if (index === total - 1) return null;

  return (
    <motion.div
      className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30"
      initial={{ height: 0 }}
      animate={{ height: "4rem" }}
      transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
    />
  );
};

// =============================================================================
// EDUCATION CARD COMPONENT
// =============================================================================

interface EducationCardProps {
  education: (typeof EDUCATION)[0];
  index: number;
  total: number;
}

const EducationCard = ({ education, index, total }: EducationCardProps) => {
  const Icon = getEducationIcon(education.degree);
  const achievement = getAchievementLevel(education.grade);
  const progressValue = getProgressValue(education.grade);
  const AchievementIcon = achievement.icon;

  return (
    <motion.div
      className="relative"
      variants={{
        initial: {
          opacity: 0,
          x: index % 2 === 0 ? -60 : 60,
          y: 30,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: ANIMATION_DURATION.slow },
        },
      }}
      whileHover={{
        scale: 1.001,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
    >
      {/* Timeline Connection */}
      <TimelineConnection index={index} total={total} />

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-primary"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <Card
        className={cn(
          "ml-12 p-6 cursor-pointer border-2 transition-all duration-300 relative overflow-hidden",
          education.current
            ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
            : "border-border hover:border-primary/50 hover:shadow-lg",
        )}
      >
        {/* Current Study Indicator */}
        {education.current && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-brand-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}

        {/* Floating Achievement Badge */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <div className="flex items-center space-x-1">
            <AchievementIcon className={cn("h-4 w-4", achievement.color)} />
            <span className={cn("text-xs font-medium", achievement.color)}>
              {achievement.level}
            </span>
          </div>
        </motion.div>

        <CardContent className="p-0">
          {/* Header Section */}
          <div className="flex items-start space-x-4 mb-4">
            {/* Education Icon */}
            <motion.div
              className={cn(
                "p-3 rounded-xl transition-all duration-300 flex-shrink-0",
                education.current
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
              )}
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>

            {/* Education Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-1 leading-tight">
                {education.degree}
              </h3>
              <p className="text-primary font-medium text-base mb-1">
                {education.institution}
              </p>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            {/* Grade Display */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Academic Performance
              </span>
              <motion.div
                whileHover={{ scale: 1.001 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <Badge
                  variant={education.current ? "default" : "outline"}
                  className="font-medium"
                >
                  {education.grade}
                </Badge>
              </motion.div>
            </div>

            {/* Animated Progress Bar */}
            <div className="space-y-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.3 + 0.7 }}
              >
                <Progress
                  value={progressValue}
                  className="h-2 bg-muted"
                  // Custom progress bar styling
                />
              </motion.div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <motion.span
                  className={cn("font-medium", achievement.color)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 1 }}
                >
                  {progressValue.toFixed(1)}%
                </motion.span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Current Status */}
          {education.current && (
            <motion.div
              className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 1.2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Zap className="h-4 w-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-primary">
                  Currently Pursuing
                </span>
              </div>
            </motion.div>
          )}

          {/* Interactive Hover Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-500/5 opacity-0 rounded-lg"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

// =============================================================================
// STATS SUMMARY COMPONENT
// =============================================================================

const EducationStats = () => {
  const currentEducation = EDUCATION.find((edu) => edu.current);
  const completedEducation = EDUCATION.filter((edu) => !edu.current);
  const averageGrade =
    EDUCATION.reduce((acc, edu) => {
      return acc + getProgressValue(edu.grade);
    }, 0) / EDUCATION.length;

  const stats = [
    {
      label: "Years of Education",
      value: "6+",
      icon: BookOpen,
      color: "text-blue-500",
    },
    {
      label: "Current CGPA",
      value: currentEducation?.grade.split(":")[1] || "8.3",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      label: "Institutions",
      value: EDUCATION.length,
      icon: GraduationCap,
      color: "text-purple-500",
    },
    {
      label: "Average Score",
      value: `${averageGrade.toFixed(1)}%`,
      icon: Star,
      color: "text-yellow-500",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="initial"
      animate="animate"
    >
      {stats.map(({ label, value, icon: Icon, color }, index) => (
        <motion.div
          key={label}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.001,
            transition: { duration: 0.1 },
          }}
          className="text-center p-4 bg-gradient-to-br from-muted/50 to-transparent rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
        >
          <Icon className={cn("h-6 w-6 mx-auto mb-2", color)} />
          <motion.div
            className={cn("text-2xl font-bold", color)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.1 }}
          >
            {value}
          </motion.div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// =============================================================================
// MAIN EDUCATION COMPONENT
// =============================================================================

const Education = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const {
    ref: cardsRef,
    controls: cardsControls,
    variants: staggerVariants,
  } = useStaggerAnimation();

  return (
    <motion.section
      id="education"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24"
    >
      <div className="container-custom">
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-3 bg-primary/10 rounded-full mr-4"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <GraduationCap className="h-8 w-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Educational Journey
              </h2>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A progressive academic path focused on computer science excellence
              and continuous learning
            </motion.p>
          </div>

          {/* Education Timeline */}
          <motion.div
            ref={cardsRef}
            className="space-y-8 relative"
            variants={staggerVariants}
            initial="initial"
            animate={cardsControls}
          >
            {/* Vertical Timeline Line */}
            <motion.div
              className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
              style={{ height: `${(EDUCATION.length - 1) * 200}px` }}
              initial={{ height: 0 }}
              animate={{ height: `${(EDUCATION.length - 1) * 200}px` }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {EDUCATION.map((edu, index) => (
              <EducationCard
                key={index}
                education={edu}
                index={index}
                total={EDUCATION.length}
              />
            ))}
          </motion.div>

          {/* Education Statistics */}
          <EducationStats />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
