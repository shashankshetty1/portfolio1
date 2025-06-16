// Footer Component
// Site footer with copyright and social links

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/Tooltip";
import { Github, Mail, Phone } from "lucide-react";
import { ANIMATION_DURATION } from "@/lib/animations";
import { PERSONAL_INFO } from "@/data/portfolioData";

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => {
  // Social media links
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

  return (
    <motion.footer
      className="py-8 border-t border-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright Text */}
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            © 2024 {PERSONAL_INFO.name}. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: ANIMATION_DURATION.normal,
                }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Tooltip content={label}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    onClick={() => window.open(href, "_blank")}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
