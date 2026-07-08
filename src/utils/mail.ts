import { siteConfig } from '../data/siteConfig';
import { copyToClipboard } from './clipboard';
import { showToast } from '../hooks/toastBus';

/**
 * Opens Gmail's web compose window in a new tab. This is used instead of
 * plain `mailto:` links because those only work if the visitor's browser
 * has a mail app configured — Gmail's compose URL works in any browser.
 * The address (or full message) is also copied to the clipboard as a
 * fallback, with a toast confirming what happened.
 */
export function openGmailCompose(options?: { subject?: string; body?: string }) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: siteConfig.email,
  });
  if (options?.subject) params.set('su', options.subject);
  if (options?.body) params.set('body', options.body);

  const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`;
  window.open(gmailUrl, '_blank');

  const clipboardText = options?.body
    ? `To: ${siteConfig.email}\nSubject: ${options.subject ?? ''}\n\n${options.body}`
    : siteConfig.email;

  copyToClipboard(clipboardText);
  showToast(
    options?.body
      ? 'Opening Gmail — message copied too, just in case'
      : `Opening Gmail… (${siteConfig.email} copied too)`
  );
}
