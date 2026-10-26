import { circIn, circInOut, circOut, cubicBezier, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import React, { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode
  range: number,
  angle: number,
  cutoff?: string,
  className?: string
};


export default function Parallax( {children, range, angle, cutoff, className} : ParallaxProps ) {
  const ref = useRef(null);
  const offset = [`start ${cutoff ?? "30%"}`, "end start"] as [any, any];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  const xRange = Math.cos(angle)*range;
  const yRange = Math.sin(angle)*range;

  const parallaxYProgress = useTransform(scrollYProgress, [0, 1], [0, xRange])
  const parallaxXProgress = useTransform(scrollYProgress, [0, 1], [0, yRange])
  const opacityProgress = useTransform(scrollYProgress, [0,1], [1,0], {ease: circInOut})

  return (
    <motion.div ref={ref} className={`${className}`} style={{
      translateY: parallaxYProgress,
      translateX: parallaxXProgress,
      opacity: opacityProgress
    }}>
      {children}
    </motion.div>
  ); 
}