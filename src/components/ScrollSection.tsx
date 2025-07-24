import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      className={className}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};