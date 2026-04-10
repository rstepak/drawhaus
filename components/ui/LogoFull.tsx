export default function LogoFull({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Drawhaus"
      style={{ height: '38px', width: 'auto' }}
    >
      <rect x="0" y="0" width="40" height="40" rx="2" stroke="#C6A355" strokeWidth="1.5" fill="none" />
      <path d="M12 8 L12 32 L20 32 Q29 32 29 20 Q29 8 20 8 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="12" y1="20" x2="29" y2="20" stroke="#C6A355" strokeWidth="1.5" />
      <text x="52" y="25" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="15" fontWeight="500" letterSpacing="0.28em" fill="currentColor">DRAWHAUS</text>
    </svg>
  );
}
