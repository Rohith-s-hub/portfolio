export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
    >
      Skip to content
    </a>
  );
}
