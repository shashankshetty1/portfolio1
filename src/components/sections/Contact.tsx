// Enhanced Contact Section Component
// Interactive contact section with modern animations and engaging design

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  Github,
  Globe,
  MessageSquare,
  Send,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  ANIMATION_DURATION,
} from "@/lib/animations";
import { PERSONAL_INFO } from "@/data/portfolioData";

// =============================================================================
// ENHANCED CONTACT SECTION COMPONENT
// =============================================================================

const Contact = () => {
  // Animation hooks
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();

  // Enhanced contact methods with icons and links
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      description: "Send me an email anytime",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      description: "Let's have a conversation",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/shashankshetty1",
      href: PERSONAL_INFO.github,
      description: "Check out my repositories",
      color: "bg-gray-700",
      hoverColor: "hover:bg-gray-800",
    },
    {
      icon: MapPin,
      title: "Location",
      value: PERSONAL_INFO.location,
      href: "#",
      description: "Based in Bangalore, India",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      initial="initial"
      animate={sectionControls}
      variants={fadeInUp}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-500/5" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-brand-500 rounded-2xl mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageSquare className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            variants={fadeInUp}
          >
            Ready to turn your ideas into reality? I'm excited to hear about
            your next project.
            <br />
            <motion.span
              className="text-primary font-medium"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Let's start the conversation!
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Enhanced Contact Information */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
            initial="initial"
            animate={sectionControls}
          >
            <div className="text-center lg:text-left">
              <motion.h3
                className="text-2xl font-bold mb-3"
                whileHover={{ scale: 1.05 }}
              >
                Get in Touch
              </motion.h3>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to connect with me
              </p>
            </div>

            <div className="grid gap-6">
              {contactMethods.map(
                (
                  {
                    icon: Icon,
                    title,
                    value,
                    href,
                    description,
                    color,
                    hoverColor,
                  },
                  index,
                ) => (
                  <motion.div
                    key={title}
                    variants={{
                      initial: { opacity: 0, x: -50, scale: 0.9 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          delay: index * 0.15,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Card
                      className="p-6 cursor-pointer border-2 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                      onClick={() => window.open(href, "_blank")}
                    >
                      {/* Hover gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />

                      <div className="flex items-center space-x-4 relative z-10">
                        {/* Enhanced Icon */}
                        <motion.div
                          className={`w-12 h-12 ${color} ${hoverColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                          whileHover={{
                            rotate: 360,
                            transition: { duration: 0.6 },
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Contact Info */}
                        <div className="flex-1">
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                            {title}
                          </h4>
                          <p className="text-primary font-medium">{value}</p>
                          <p className="text-sm text-muted-foreground">
                            {description}
                          </p>
                        </div>

                        {/* Arrow Icon */}
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ),
              )}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center lg:text-left p-6 bg-gradient-to-br from-primary/10 to-brand-500/10 rounded-xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mr-3"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-bold text-lg">Ready to Start?</h4>
              </div>
              <p className="text-muted-foreground">
                Every great project begins with a simple conversation.
                <span className="text-primary font-medium">
                  {" "}
                  Let's make it happen!
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={sectionControls}
          >
            <div className="text-center mb-8">
              <motion.h3
                className="text-2xl font-bold mb-3 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-3"
                >
                  <Send className="w-6 h-6 text-primary" />
                </motion.div>




                Send a Message

                
              </motion.h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as
                possible
              </p>
            </div>

            {/* Enhanced Contact Form Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-brand-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
