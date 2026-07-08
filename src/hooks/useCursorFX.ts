import { useEffect } from 'react';
import type { RefObject } from 'react';

const HOVER_SELECTOR = 'a, button, .card, .tag, .clist a';

/**
 * Drives the custom cursor: a small dot that tracks the mouse exactly,
 * and a ring that eases toward it. Only runs on devices with a real
 * mouse (fine pointer + hover) and when the visitor hasn't asked for
 * reduced motion.
 */
export function useCursorFX(dotRef: RefObject<HTMLDivElement>, ringRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrame: number;

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }

    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      animationFrame = requestAnimationFrame(loop);
    }
    loop();

    function handleMouseDown() {
      ring?.classList.add('is-down');
    }
    function handleMouseUp() {
      ring?.classList.remove('is-down');
    }
    function handleDocMouseLeave() {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    }
    function handleDocMouseEnter() {
      if (dot) dot.style.opacity = '';
      if (ring) ring.style.opacity = '';
    }
    function handleHoverEnter() {
      ring?.classList.add('is-hover');
      dot?.classList.add('is-hover');
    }
    function handleHoverLeave() {
      ring?.classList.remove('is-hover');
      dot?.classList.remove('is-hover');
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleDocMouseLeave);
    document.addEventListener('mouseenter', handleDocMouseEnter);

    const hoverEls = document.querySelectorAll<HTMLElement>(HOVER_SELECTOR);
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleDocMouseLeave);
      document.removeEventListener('mouseenter', handleDocMouseEnter);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
