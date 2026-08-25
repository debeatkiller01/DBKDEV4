import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export const AmbientGlow: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const smoothX = useSpring(mouseX, { damping: 45, stiffness: 220, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 45, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideScreen = window.innerWidth >= 1024;
      setIsDesktop(hasFinePointer && isWideScreen && !prefersReducedMotion);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!isDesktop || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.035)_0%,_rgba(37,99,235,0.01)_45%,_transparent_70%)] blur-2xl pointer-events-none will-change-transform"
      />
    </div>
  );
};
