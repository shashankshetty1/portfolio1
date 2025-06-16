// Animation Variants and Utilities for Portfolio
// Centralized animation configurations using Framer Motion

import { Variants } from "framer-motion";

// =============================================================================
// SCROLL ANIMATION VARIANTS
// =============================================================================

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// =============================================================================
// HOVER ANIMATION VARIANTS
// =============================================================================

export const cardHover = {
  scale: 1.05,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

export const iconWiggle = {
  rotate: [0, -10, 10, -10, 0],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

export const iconSpin = {
  rotate: 360,
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

// =============================================================================
// SPECIAL EFFECTS
// =============================================================================

export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// =============================================================================
// ANIMATION CONSTANTS
// =============================================================================

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 0.8,
} as const;

export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
} as const;

export const SPRING_CONFIG = {
  gentle: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
} as const;
