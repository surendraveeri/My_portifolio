import { useScrollProgress } from '../hooks/useScrollProgress';

export default function BackToTop() {
  const { showBackToTop } = useScrollProgress();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      className={`to-top${showBackToTop ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
      type="button"
    >
      &#8593;
    </button>
  );
}
