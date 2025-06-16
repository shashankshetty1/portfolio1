// Hero Section Component
// Main landing section with animated introduction, professional image, and call-to-action

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/Tooltip";
import { Mail, ArrowDown, Github, Phone, Sparkles, Code } from "lucide-react";
import {
  gradientShift,
  floatingAnimation,
  iconWiggle,
  ANIMATION_DURATION,
} from "@/lib/animations";
import { PERSONAL_INFO } from "@/data/portfolioData";

// =============================================================================
// HERO SECTION COMPONENT
// =============================================================================

const Hero = () => {
  // Social media links with icons and labels
  const socialLinks = [
    {
      icon: Github,
      href: PERSONAL_INFO.github,
      label: "GitHub",
    },
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
    },
    {
      icon: Phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      label: "Phone",
    },
  ];

  // Smooth scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-brand-500/10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 lg:col-span-2"
          >
            {/* Animated Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-primary to-brand-600 bg-clip-text text-transparent inline-block"
                animate={gradientShift}
              >
                Shashank
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Shetty
              </motion.span>
            </motion.h1>

            {/* Animated Role/Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-xl sm:text-2xl font-semibold text-primary">
                  Computer Science Engineer
                </span>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Computer Science Engineering graduate with a passion for building innovative solutions through code and technology{" "}
                <motion.span
                  className="text-primary font-medium"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  code
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-primary font-medium"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  technology
                </motion.span>
                .
              </p>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Primary CTA - Contact */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 rounded-full group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("#contact")}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />

                  <motion.div
                    whileHover={iconWiggle}
                    className="flex items-center relative z-10"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </motion.div>
                </Button>
              </motion.div>

              {/* Secondary CTA - View Work */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 rounded-full group hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => scrollToSection("#projects")}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowDown className="mr-2 h-5 w-5" />
                  </motion.div>
                  View My Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: ANIMATION_DURATION.normal,
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Tooltip content={label}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                      onClick={() => window.open(href, "_blank")}
                    >
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                    </Button>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative order-1 lg:order-2 lg:col-span-1 flex justify-center lg:justify-end"
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              {/* Gradient Orb */}
              <motion.div
                className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/30 to-brand-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Secondary Orb */}
              <motion.div
                className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-brand-400/20 to-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Main Image Container */}
            <motion.div
              className="relative w-72 h-72 mx-auto"
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                filter: "drop-shadow(0 30px 60px rgba(59, 130, 246, 0.25))",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-primary/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Professional Image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotateY: 0,
                }}
                transition={{
                  duration: 1.0,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  boxShadow:
                    "0 35px 80px rgba(59, 130, 246, 0.3), 0 0 0 2px rgba(59, 130, 246, 0.2)",
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8f8c427692d64d0eb6a4791a13c7e91d%2F03c66f5b2a27400a9ad1eebb82286fa8?format=webp&width=800"
                  alt="Shashank Shetty - Computer Science Engineer"
                  className="w-full h-full object-cover rounded-3xl"
                  loading="eager"
                  initial={{ filter: "brightness(0.7) contrast(1.2)" }}
                  animate={{
                    filter: "brightness(1) contrast(1)",
                  }}
                  transition={{ duration: 1.5, delay: 1 }}
                  whileHover={{
                    filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                    transition: { duration: 0.3 },
                  }}
                />

                {/* Dynamic Overlay Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.3) 50%, transparent 60%)",
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                />

                {/* Enhanced Floating Tech Icons */}
                <motion.div
                  className="absolute top-1/4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-primary/30"
                  initial={{ scale: 0, x: 50, opacity: 0 }}
                  animate={{
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    y: [0, -10, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 0.6,
                      delay: 1.4,
                      type: "spring",
                      stiffness: 150,
                    },
                    x: { duration: 0.6, delay: 1.4 },
                    opacity: { duration: 0.6, delay: 1.4 },
                    y: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    },
                    rotate: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-purple-400/30"
                  initial={{ scale: 0, x: -50, opacity: 0 }}
                  animate={{
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    y: [0, 8, 0],
                    rotate: [0, -8, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 0.6,
                      delay: 1.6,
                      type: "spring",
                      stiffness: 150,
                    },
                    x: { duration: 0.6, delay: 1.6 },
                    opacity: { duration: 0.6, delay: 1.6 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5,
                    },
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: -15,
                    boxShadow: "0 12px 30px rgba(168, 85, 247, 0.4)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={floatingAnimation}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
