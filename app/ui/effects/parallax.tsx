import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import React, { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode
  className?: string,
};


export default function Parallax( {children, className} : ParallaxProps ) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end start"]
  });

  const parallaxProgress = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div ref={ref} className={`flex-1 ${className}`} style={{
      translateY: parallaxProgress
    }}>
      {children}
    </motion.div>
  ); 
}