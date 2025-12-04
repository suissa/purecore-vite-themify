import { motion, HTMLMotionProps } from "framer-motion";
import { ComponentType } from "react";

export interface MotionConfig {
  initial?: HTMLMotionProps<"div">["initial"];
  animate?: HTMLMotionProps<"div">["animate"];
  exit?: HTMLMotionProps<"div">["exit"];
  transition?: HTMLMotionProps<"div">["transition"];
}

export const MotionFactory = (config: MotionConfig): ComponentType<HTMLMotionProps<"div">> => {
  return (props) => (
    <motion.div
      initial={config.initial}
      animate={config.animate}
      exit={config.exit}
      transition={config.transition}
      {...props}
    />
  );
};
