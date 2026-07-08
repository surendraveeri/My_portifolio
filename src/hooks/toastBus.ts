type ToastListener = (text: string) => void;

const listeners = new Set<ToastListener>();

/** Call this from anywhere to show a toast message. */
export function showToast(text: string) {
  listeners.forEach((listener) => listener(text));
}

/** Used internally by the <Toast /> component to subscribe to messages. */
export function subscribeToast(listener: ToastListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
