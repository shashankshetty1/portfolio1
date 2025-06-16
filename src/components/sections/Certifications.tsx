// Compact Professional Certifications Component
// Smaller, well-organized certification cards with efficient layout

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Tooltip from "@/components/Tooltip";
import {
  Award,
  Cloud,
  Code2,
  Database,
  Building2,
  Palette,
  Zap,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, ANIMATION_DURATION } from "@/lib/animations";
import { CERTIFICATIONS, type Certification } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// CERTIFICATION UTILITIES
// =============================================================================

// Get appropriate icon for each certification category
const getCertificationIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "cloud":
      return Cloud;
    case "development":
      return Code2;
    case "data science":
      return Database;
    case "management":
      return Building2;
    case "frontend":
      return Palette;
    case "programming":
      return Zap;
    default:
      return Award;
  }
};

// Get category-specific colors for visual organization
const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "cloud":
      return "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400";
    case "development":
      return "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400";
    case "data science":
      return "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400";
    case "management":
      return "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400";
    case "frontend":
      return "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400";
    case "programming":
      return "bg-yellow-50 text-yellow-600 dark:bg-yellow-950/50 dark:text-yellow-400";
    default:
      return "bg-gray-50 text-gray-600 dark:bg-gray-950/50 dark:text-gray-400";
  }
};

// =============================================================================
// COMPACT CERTIFICATION CARD COMPONENT
// =============================================================================

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CompactCertificationCard = ({
  certification,
  index,
}: CertificationCardProps) => {
  const Icon = getCertificationIcon(certification.category);
  const categoryColor = getCategoryColor(certification.category);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delay: index * 0.05,
            duration: ANIMATION_DURATION.normal,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        scale: 1.001,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      className="group"
    >
      <Tooltip content={certification.description} position="top">
        <Card className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md border hover:border-primary/30 h-full">
          {/* Category Color Stripe */}
          <div className={cn("h-1 w-full", categoryColor.split(" ")[0])} />

          <CardContent className="p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              {/* Icon */}
              <motion.div
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  categoryColor,
                )}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="h-4 w-4" />
              </motion.div>

              {/* Verification Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
              </motion.div>
            </div>

            {/* Certification Content */}
            <div className="space-y-2">
              {/* Title */}
              <h4 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {certification.name}
              </h4>

              {/* Issuer */}
              <div className="flex items-center text-xs text-muted-foreground">
                <Building2 className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{certification.issuer}</span>
              </div>

              {/* Date and Category */}
              <div className="flex items-center justify-between">
                {certification.date && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{certification.date}</span>
                  </div>
                )}

                <Badge
                  variant="outline"
                  className={cn("text-xs", categoryColor)}
                >
                  {certification.category}
                </Badge>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </CardContent>
        </Card>
      </Tooltip>
    </motion.div>
  );
};

// =============================================================================
// MAIN CERTIFICATIONS COMPONENT
// =============================================================================

const Certifications = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();

  // Sort certifications by priority (if available) or by name
  const sortedCertifications = [...CERTIFICATIONS].sort((a, b) => {
    if (a.priority && b.priority) {
      return a.priority - b.priority;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="space-y-6"
    >
      {/* Compact Section Header */}
      <motion.div variants={fadeInUp} className="text-center">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
          <Award className="h-5 w-5 mr-2 text-primary" />
          Professional Certifications
        </h3>
        <p className="text-muted-foreground text-sm">
          {CERTIFICATIONS.length} certified skills across multiple domains
        </p>
      </motion.div>

      {/* Compact Grid Layout */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.1,
            },
          },
        }}
        initial="initial"
        animate={sectionControls}
      >
        {sortedCertifications.map((cert, index) => (
          <CompactCertificationCard
            key={`${cert.name}-${cert.issuer}`}
            certification={cert}
            index={index}
          />
        ))}
      </motion.div>

      {/* Compact Summary Stats */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"
      >
        {[
          {
            label: "Total",
            value: CERTIFICATIONS.length,
            icon: Award,
            color: "text-blue-500",
          },
          {
            label: "Categories",
            value: new Set(CERTIFICATIONS.map((c) => c.category)).size,
            icon: Code2,
            color: "text-green-500",
          },
          {
            label: "Providers",
            value: new Set(CERTIFICATIONS.map((c) => c.issuer)).size,
            icon: Building2,
            color: "text-purple-500",
          },
          {
            label: "Recent",
            value: CERTIFICATIONS.filter(
              (c) => c.date?.includes("2024") || c.date?.includes("2025"),
            ).length,
            icon: Calendar,
            color: "text-orange-500",
          },
        ].map(({ label, value, icon: Icon, color }, index) => (
          <motion.div
            key={label}
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.001,
              transition: { duration: 0.1 },
            }}
            className="text-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <Icon className={cn("h-4 w-4 mx-auto mb-1", color)} />
            <div className={cn("text-lg font-bold", color)}>{value}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
