import { MotionConfig } from "./motionFactory";
import { CardAnimationType, PageAnimationType } from "@/hooks/useTheme";

// Card Animations
export const cardAnimations: Record<CardAnimationType, (index: number) => MotionConfig> = {
  depth: (index: number) => ({
    initial: { opacity: 0, scale: 0.8, z: -100 },
    animate: { opacity: 1, scale: 1, z: 0 },
    exit: { opacity: 0, scale: 0.8, z: -100 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.34, 1.56, 0.64, 1],
      scale: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        restDelta: 0.001
      }
    }
  }),
  
  vanish: (index: number) => ({
    initial: { opacity: 0, scale: 1.5, filter: "blur(150px)" },
    animate: { opacity: 1,  scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0,  scale: 1.5, filter: "blur(150px)" },
    transition: {
      duration: 2,
      delay: index * 0.1,
      ease: "easeInOut"
    }
  }),
  
  slider: (index: number) => {
    const isLeft = index % 1 === 0 || index % 1 === 1;
    const direction = isLeft ? -1 : 1;
    const offset = direction * 1000;
    
    return {
      initial: { x: -offset, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: offset, opacity: 0 },
      transition: {
        duration: 2,
        delay: index * 0.1,
        ease: "easeInOut"
      }
    };
  },
  
  spin: (index: number) => ({
    initial: { scale: 0, rotate: -900 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 900 },
    transition: {
      duration: 2,
      delay: index * 0.1,
      ease: "easeInOut"
    }
  })
};

// Page Animations
export const pageAnimations: Record<PageAnimationType, MotionConfig> = {
  elastic: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { 
      duration: 0.3, 
      ease: [0.34, 1.56, 0.64, 1] 
    }
  },
  
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  
  zoom: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
    transition: { 
      duration: 0.4, 
      ease: "easeInOut" 
    }
  },
  
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 10, scale: 0.95 },
    transition: { 
      duration: 0.5, 
      ease: [0.34, 1.56, 0.64, 1] 
    }
  }
};
