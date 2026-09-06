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
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="eyebrow">
            {blogPosts.length} articles · updated regularly
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            The Journal.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }}>
            Essays on AI, full-stack engineering, cybersecurity platforms, and the craft of building production-grade software.
          </motion.p>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="" style={{maxWidth:520, margin:'18px auto'}}>
            <div style={{position:'relative'}}>
              <Search className="muted" style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)'}} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search essays, tags, topics..."
                style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: 12, border: '1px solid var(--border-soft)' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="page-width" style={{marginTop:28, marginBottom:28}}>
        <div className="flex items-center gap-2 mb-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          Categories
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            const style = categoryStyles[cat.name] || categoryStyles.All;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${ isActive ? 'active' : ''}`}
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

      {/* Featured + grid */}
      <section className="page-width" style={{marginBottom:40}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18,borderBottom:'1px solid #eef2f7',paddingBottom:12}}>
          <h2 style={{fontWeight:700}}>{hasFilters ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''}` : 'All essays'}</h2>
          <div className="muted" style={{fontSize:13,display:'flex',alignItems:'center',gap:8}}><Clock />Sorted by date</div>
        </div>

        {filtered.length === 0 ? (
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="card" style={{textAlign:'center',padding:40}}>
            <div style={{fontSize:40,marginBottom:8}}>🔍</div>
            <h3 style={{fontWeight:800,fontSize:20,marginBottom:8}}>No posts found</h3>
            <p className="muted">Try a different search term or category.</p>
            <div style={{marginTop:16}}>
              <button onClick={()=>{setQuery('');setActiveCategory('All');setActiveTag(null)}} className="cta">Reset filters</button>
            </div>
          </motion.div>
        ) : (
          <div className="posts-grid">
            {(hasFilters ? filtered : filtered.filter((p)=>p.id !== featured.id)).map((post,i)=> (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
