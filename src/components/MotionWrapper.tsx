// MotionWrapper.tsx
import { motion, MotionProps } from 'framer-motion';
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type MotionWrapperProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'down';
  as?: T;
} & Omit<MotionProps, 'transition'> &
  Omit<ComponentPropsWithoutRef<T>, keyof MotionProps>;

export default function MotionWrapper<T extends ElementType = 'div'>({
  children,
  direction = 'up',
  as,
  ...rest
}: MotionWrapperProps<T>) {
  const MotionComponent = motion(as || 'div');

  const variants = {
    hidden:
      direction === 'up'
        ? { opacity: 0, y: 30 }
        : direction === 'down'
          ? { opacity: 0, y: -30 }
          : direction === 'left'
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
      transition={{ duration: 0.5, ease: 'easeIn' }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
