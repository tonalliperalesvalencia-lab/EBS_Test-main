import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/** Convenience: wraps a section in an observer div */
export function Reveal({ children, className = '', anim = 'anim-fade-up', delay = 'd-0', as: Tag = 'div', style = {} }) {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      className={`${visible ? `${anim} ${delay}` : 'opacity-0'} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
