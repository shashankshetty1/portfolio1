import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

const Tooltip = ({
  content,
  children,
  position = "top",
  delay = 0,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: delay / 1000,
            }}
            className={cn(
              "absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap",
              "before:content-[''] before:absolute before:w-2 before:h-2 before:bg-gray-900 before:rotate-45",
              positionClasses[position],
              position === "top" &&
                "before:top-full before:left-1/2 before:-translate-x-1/2 before:-mt-1",
              position === "bottom" &&
                "before:bottom-full before:left-1/2 before:-translate-x-1/2 before:-mb-1",
              position === "left" &&
                "before:left-full before:top-1/2 before:-translate-y-1/2 before:-ml-1",
              position === "right" &&
                "before:right-full before:top-1/2 before:-translate-y-1/2 before:-mr-1",
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
