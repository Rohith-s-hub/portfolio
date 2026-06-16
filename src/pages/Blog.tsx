import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X, Clock, ArrowRight, Filter } from "lucide-react";
import BlogCard from "../components/BlogCard";
import { blogPosts, categories } from "../data/content";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [query, activeCategory, activeTag]);

  const featured = blogPosts[0];
  const hasFilters = query || activeCategory !== "All" || activeTag;

  const categoryStyles: Record<string, { bg: string; text: string; ring: string }> = {
    All: { bg: "bg-slate-900", text: "text-white", ring: "" },
    AI: { bg: "bg-teal-50", text: "text-teal-700", ring: "ring-teal-500/10" },
    Cybersecurity: { bg: "bg-rose-50", text: "text-rose-700", ring: "ring-rose-500/10" },
    Engineering: { bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-500/10" },
  };

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero */}
      <section className="relative pb-14">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-6"
          >
            {blogPosts.length} articles · updated regularly
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-editorial text-5xl md:text-7xl font-bold text-slate-900 mb-5"
          >
            The <span className="gradient-text-muted">Journal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-10"
          >
            Essays on AI, full-stack engineering, cybersecurity platforms, and the craft of building production-grade software.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search essays, tags, topics..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 mb-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          Categories
        </div>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            const style = categoryStyles[cat.name] || categoryStyles.All;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? `${style.bg} ${style.text} ${style.ring ? `ring-1 ${style.ring}` : ""}`
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat.name}
                <span className={`text-xs font-mono ${isActive ? "opacity-70" : "text-slate-400"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-1">Tags:</span>
          {allTags.slice(0, 16).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                activeTag === tag
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tag}
            </button>
          ))}
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-all"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Featured + Sidebar (only when no filters) */}
      {!hasFilters && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
          <BlogCard post={featured} variant="featured" index={0} />
        </section>
      )}

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <h2 className="font-display text-lg font-semibold text-slate-900">
            {hasFilters
              ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`
              : "All essays"}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            Sorted by date
          </div>
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center bg-slate-50/50 border border-slate-100 rounded-3xl"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="heading-editorial text-2xl font-bold text-slate-900 mb-2">No posts found</h3>
            <p className="text-slate-600 mb-6">Try a different search term or category.</p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
                setActiveTag(null);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Reset filters
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(hasFilters ? filtered : filtered.filter((p) => p.id !== featured.id)).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
