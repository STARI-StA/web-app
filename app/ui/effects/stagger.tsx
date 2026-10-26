import { easeOut, motion } from "motion/react";
import React from "react";

interface StaggerProps {
  children: React.ReactNode
  className?: string
  horizontal?: boolean
  displacement?: number
  delay?: number
}

export default function Stagger( {children, className, horizontal, delay, displacement} : StaggerProps ) {

  // Parent Variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: (delay ?? 0.2),
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      translateY: ((horizontal ?? false) ? 0 : (displacement ?? 100)),
      translateX: ((horizontal ?? false) ? (displacement ?? 100) : 0)
    },

    visible: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: easeOut
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true}}
      className={className}>
      
      {
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              variants: childVariants
            } as any);
          }
          return child;
        })
      }
      
    </motion.div>
  );
}