// src/hooks/useScrollReveal.ts
import { useEffect, useRef }    from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  selector?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) => {
  const { threshold = 0.1, selector = '.scroll-reveal' } = options;
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = currentRef.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, selector]);

  return sectionRef;
};
