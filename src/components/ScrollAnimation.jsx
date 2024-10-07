import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({
  children,
  animation = "fadeUp",
  delay = 0.2,
  duration = 0.75,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    fadeUp: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 150 },
    },
    fadeRight: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -150 },
    },
    fadeLeft: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 50 },
    },
    scale: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{ duration, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
