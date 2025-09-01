// MotionWrapper.tsx
import { motion, MotionProps } from "framer-motion";
import { ReactNode, ElementType } from "react";

type MotionWrapperProps<T extends ElementType = "div"> = {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  as?: T;
} & Omit<MotionProps, 'transition'>;

export default function MotionWrapper<T extends ElementType = "div">({
  children,
  direction = "up",
  as,
  ...rest
}: MotionWrapperProps<T>) {
  const MotionComponent = motion(as || "div");

  const variants = {
    hidden:
      direction === "up"
        ? { opacity: 0, y: 30 }
        : direction === "left"
        ? { opacity: 0, x: 30 }
        : { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}