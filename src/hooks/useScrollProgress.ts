import { useEffect, useState } from 'react';

export interface ScrollProgressState {
  progress: number;
  showBackToTop: boolean;
}

/**
 * Tracks how far down the page the visitor has scrolled.
 * Returns a 0–100 progress percentage (for the top progress bar)
 * and a boolean for whether the "back to top" button should show.
 */
export function useScrollProgress(showAfterPx = 600): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({ progress: 0, showBackToTop: false });

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
      setState({ progress, showBackToTop: y > showAfterPx });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterPx]);

  return state;
}
