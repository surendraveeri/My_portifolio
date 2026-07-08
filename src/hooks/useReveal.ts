import { useEffect, useRef } from 'react';

/**
 * Attach the returned ref to any element with the `reveal` class.
 * When the element scrolls into view, this adds the `in` class
 * (which the CSS uses to trigger the fade/slide-up animation),
 * then stops observing it.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
