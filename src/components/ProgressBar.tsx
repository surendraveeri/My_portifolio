import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ProgressBar() {
  const { progress } = useScrollProgress();
  return <div className="progress" style={{ width: `${progress}%` }} />;
}
