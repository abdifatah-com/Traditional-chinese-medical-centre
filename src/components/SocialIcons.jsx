export function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H3.7v11.2h2.8V9zM5.1 3.5A1.7 1.7 0 1 0 5.1 7a1.7 1.7 0 0 0 0-3.5zM20.3 13.3c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.7 1-3.2 1.7V9H10.2c0 1.6 0 11.2 0 11.2h2.8v-6.3c.2-.8.6-1.6 1.6-1.6 1.1 0 1.6.8 1.6 2v5.9h2.8v-6.4h.3z" />
    </svg>
  );
}

export function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.2l-4.8-6.3L5.3 21H2.2l7.3-8.3L2 3h6.3l4.4 5.8L17.5 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5z" />
    </svg>
  );
}

const iconClass = 'w-4 h-4';

const activeClass =
  'inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/25 border border-[#1877F2]/50 text-[#7ab8ff] hover:bg-[#1877F2] hover:text-white transition-all';

const inactiveClass =
  'inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 opacity-35 cursor-not-allowed';

export default function SocialLinks({ tone = 'dark' }) {
  const muted = tone === 'light'
    ? 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-400 opacity-40 cursor-not-allowed'
    : inactiveClass;

  const facebook = tone === 'light'
    ? 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all'
    : activeClass;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href="https://www.facebook.com/XaruntaCaafimaadkaEeShiinaha"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={facebook}
      >
        <FacebookIcon className={iconClass} />
      </a>
      <span aria-label="Instagram coming soon" title="Instagram coming soon" className={muted}>
        <InstagramIcon className={iconClass} />
      </span>
      <span aria-label="LinkedIn coming soon" title="LinkedIn coming soon" className={muted}>
        <LinkedInIcon className={iconClass} />
      </span>
      <span aria-label="X coming soon" title="X coming soon" className={muted}>
        <XIcon className={iconClass} />
      </span>
    </div>
  );
}
