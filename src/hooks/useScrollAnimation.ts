// Custom Hook for Scroll-Triggered Animations
// Provides consistent scroll animation behavior across components

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  /**
   * Only trigger animation once when element enters viewport
   * @default true
   */
  once?: boolean;
  /**
   * Margin before triggering animation (negative values trigger earlier)
   * @default "-100px"
   */
  margin?: string;
  /**
   * Threshold for triggering animation (0 = any part, 1 = entire element)
   * @default 0.1
   */
  threshold?: number;
}

/**
 * Custom hook for scroll-triggered animations
 *
 * @example
 * ```tsx
 * const { ref, controls } = useScrollAnimation();
 *
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial="initial"
 *     animate={controls}
 *     variants={fadeInUp}
 *   >
 *     Content here
 *   </motion.div>
 * );
 * ```
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { once = true, margin = "-100px", threshold = 0.1 } = options;

  const controls = useAnimation();
  const ref = useRef(null);

  // Use Framer Motion's useInView hook for better performance
  const inView = useInView(ref, {
    once,
    margin,
    amount: threshold,
  });

  useEffect(() => {
    if (inView) {
      // Start animation when element enters viewport
      controls.start("animate");
    } else if (!once) {
      // Reset animation when element leaves viewport (if once is false)
      controls.start("initial");
    }
  }, [controls, inView, once]);

  return {
    ref,
    controls,
    inView,
  };
};

/**
 * Hook for staggered children animations
 * Use this for parent containers that need to animate children with delays
 */
export const useStaggerAnimation = (
  options: UseScrollAnimationOptions = {},
) => {
  const { ref, controls, inView } = useScrollAnimation(options);

  return {
    ref,
    controls,
    inView,
    // Pre-configured variants for stagger containers
    variants: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    },
  };
};
