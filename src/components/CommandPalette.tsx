import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Folder, User, Mail, X } from "lucide-react";
import { blogPosts, projects } from "../data/content";

const navItems = [
  { title: "Home", to: "/", icon: User },
  { title: "Blog", to: "/blog", icon: FileText },
  { title: "Projects", to: "/projects", icon: Folder },
  { title: "About", to: "/about", icon: User },
  { title: "Contact", to: "/contact", icon: Mail },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const postResults = useMemo(() => {
    if (!query) return [];
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const projectResults = useMemo(() => {
    if (!query) return [];
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const navResults = useMemo(() => {
    if (!query) return [];
    return navItems.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const allResults = useMemo(
    () => [
      ...postResults.map((p) => ({ type: "post" as const, title: p.title, subtitle: "Blog post", to: `/blog/${p.slug}` })),
      ...projectResults.map((p) => ({ type: "project" as const, title: p.title, subtitle: "Project", to: "/projects" })),
      ...navResults.map((n) => ({ type: "page" as const, title: n.title, subtitle: "Page", to: n.to })),
    ],
    [postResults, projectResults, navResults]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSelect = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % allResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + allResults.length) % allResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = allResults[selectedIndex];
      if (item) handleSelect(item.to);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="text-xs">Search</span>
        <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 text-slate-500 rounded">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl z-[70] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 border-b border-slate-100">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search posts, projects, pages..."
                  className="flex-1 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-7 h-7 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {!query && (
                  <div className="px-3 py-6 text-center text-sm text-slate-500">
                    Type to search posts, projects, and pages.
                  </div>
                )}

                {query && allResults.length === 0 && (
                  <div className="px-3 py-6 text-center text-sm text-slate-500">
                    No results found for "{query}".
                  </div>
                )}

                {allResults.map((item, i) => (
                  <button
                    key={`${item.type}-${item.title}`}
                    onClick={() => handleSelect(item.to)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                      i === selectedIndex ? "bg-slate-100" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                      item.type === "post" ? "bg-teal-50 text-teal-600" :
                      item.type === "project" ? "bg-indigo-50 text-indigo-600" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {item.type === "post" ? <FileText className="w-4 h-4" /> :
                       item.type === "project" ? <Folder className="w-4 h-4" /> :
                       <Search className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.subtitle}</div>
                    </div>
                    <ArrowIcon />
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center justify-between px-4 py-2.5 border-t border-slate-100 text-[11px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span><kbd className="font-mono bg-slate-100 rounded px-1">↑</kbd> <kbd className="font-mono bg-slate-100 rounded px-1">↓</kbd> to navigate</span>
                  <span><kbd className="font-mono bg-slate-100 rounded px-1">↵</kbd> to select</span>
                </div>
                <span><kbd className="font-mono bg-slate-100 rounded px-1">esc</kbd> to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
