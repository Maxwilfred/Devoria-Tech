import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Carte signature à spotlight : un halo menthe suit le curseur (spring),
 * et la bordure s'illumine au survol. Îlot isolé — hydraté uniquement sur
 * les appareils avec survol (voir client:media), le mobile reçoit la carte
 * statique rendue côté serveur.
 */
export default function SpotlightCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 180, damping: 24, mass: 0.4 });

  const background = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, var(--color-accent-soft), transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={ref}
      className={`spotlight-card ${hovered ? 'is-hovered' : ''} ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        aria-hidden="true"
        className="spotlight-card__glow"
        style={{ background, opacity: hovered ? 1 : 0 }}
      />
      <div className="spotlight-card__content">{children}</div>
    </div>
  );
}
