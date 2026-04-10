import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-8 md:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <span className="text-muted text-xs tracking-widest uppercase">
        Drawhaus &copy; {new Date().getFullYear()}
      </span>
      <div className="flex items-center gap-6 flex-wrap">
        <Link
          href="/for-creators"
          className="text-muted text-xs tracking-wide transition-colors hover:text-parchment"
        >
          For Creators
        </Link>
        <Link
          href="/for-fans"
          className="text-muted text-xs tracking-wide transition-colors hover:text-parchment"
        >
          For Fans
        </Link>
        <Link
          href="/how-it-works"
          className="text-muted text-xs tracking-wide transition-colors hover:text-parchment"
        >
          How it works
        </Link>
        <Link
          href="/terms"
          className="text-muted text-xs tracking-wide transition-colors hover:text-parchment"
        >
          Terms
        </Link>
        <span className="text-muted text-xs tracking-wide">drawhaus.co</span>
      </div>
    </footer>
  );
}
