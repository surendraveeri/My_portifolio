import { useEffect, useRef, useState } from 'react';
import { subscribeToast } from '../hooks/toastBus';

export default function Toast() {
  const [text, setText] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return subscribeToast((message) => {
      setText(message);
      setVisible(true);
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setVisible(false), 3200);
    });
  }, []);

  if (!text) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 28,
        transform: 'translateX(-50%)',
        background: 'var(--ink)',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: 999,
        fontSize: '0.86rem',
        fontWeight: 600,
        boxShadow: '0 12px 30px rgba(21,19,28,0.25)',
        zIndex: 400,
        opacity: visible ? 1 : 0,
        transition: 'opacity .25s ease',
        pointerEvents: 'none',
      }}
    >
      {text}
    </div>
  );
}
