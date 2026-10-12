'use client';
import { motion, MotionProps, Variants } from 'motion/react';
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type Direction = 'up' | 'left' | 'right' | 'down';

type MotionWrapperProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  as?: T;
} & Omit<MotionProps, 'transition'> &
  Omit<ComponentPropsWithoutRef<T>, keyof MotionProps>;

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
};

// motion.create returns a new component type each call, so cache per tag to
// avoid remounting children on every render.
const motionComponents = new Map<ElementType, ElementType>();
function getMotionComponent(as: ElementType): ElementType {
  let component = motionComponents.get(as);
  if (!component) {
    component = motion.create(as as string);
    motionComponents.set(as, component);
  }
  return component;
}

export const springTransition = {
  type: 'spring',
  stiffness: 110,
  damping: 20,
  mass: 0.9,
} as const;

export default function MotionWrapper<T extends ElementType = 'div'>({
  children,
  direction = 'up',
  delay = 0,
  as,
  ...rest
}: MotionWrapperProps<T>) {
  const MotionComponent = getMotionComponent(as || 'div');

  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ ...springTransition, delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
