import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>&copy; 2026 {siteConfig.fullName}</span>
      </div>
    </footer>
  );
}
