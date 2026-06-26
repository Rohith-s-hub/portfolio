import { useEffect, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ChevronRight, Share2, Bookmark, Heart, ArrowRight, Check } from "lucide-react";
import { blogPosts } from "../data/content";
import BlogCard from "../components/BlogCard";
import ReadingProgress from "../components/ReadingProgress";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Generate headings for table of contents
  const headings = useMemo(() => {
    if (!post) return [];
    return post.content
      .split("\n\n")
      .filter((block) => block.startsWith("## "))
      .map((block) => {
        const text = block.replace("## ", "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return { id, text };
      });
  }, [post]);

  // Highlight active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const onScroll = () => {
      const headingEls = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];

      if (headingEls.length === 0) return;

      const scrollY = window.scrollY + 140;
      let current = headings[0].id;

      for (const el of headingEls) {
        if (el.offsetTop <= scrollY) {
          current = el.id;
        }
      }
      setActiveHeading(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 text-center">
        <h1 className="heading-editorial text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Post not found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate("/blog")} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white/10 dark:border dark:border-white/15 text-white text-sm font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-white/15 transition-all">
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </button>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  };

  const renderContent = (content: string) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // ── Headings ─────────────────────────────────────────
          h1: ({ children }) => (
            <h1 className="heading-editorial text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-16 mb-6 scroll-mt-32">
              {children}
            </h1>
          ),
          h2: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            return (
              <h2
                id={id}
                className="heading-editorial text-2xl md:text-3xl font-bold text-slate-900 mt-14 mb-5 scroll-mt-32"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => (
            <h3 className="heading-editorial text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-32">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="heading-editorial text-lg md:text-xl font-semibold text-slate-900 mt-8 mb-3">
              {children}
            </h4>
          ),

          // ── Paragraphs ───────────────────────────────────────
          p: ({ children }) => (
            <p className="text-lg md:text-[19px] text-slate-700 leading-[1.85] mb-6">
              {children}
            </p>
          ),

          // ── Bold + Italic ────────────────────────────────────
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-800">{children}</em>
          ),

          // ── Links ────────────────────────────────────────────
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-indigo-600 hover:text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:decoration-indigo-500 transition-colors"
            >
              {children}
            </a>
          ),

          // ── Lists ────────────────────────────────────────────
          ul: ({ children }) => (
            <ul className="my-7 space-y-3 list-none">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-7 space-y-3 list-decimal list-inside text-lg text-slate-700">
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => {
            // Check if it's part of an ordered list
            const isOrdered = (props as any).ordered;
            if (isOrdered) {
              return <li className="text-lg text-slate-700 leading-relaxed pl-2">{children}</li>;
            }
            return (
              <li className="flex items-start gap-3 text-lg text-slate-700 leading-relaxed">
                <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{children}</span>
              </li>
            );
          },

          // ── Code Blocks ──────────────────────────────────────
          code: ({ node, className, children, ...props }: any) => {
            // Detect inline vs block code
            // Block code: has language-xxx className OR contains newlines
            const text = String(children);
            const isBlock = (className && className.startsWith("language-")) || text.includes("\n");

            if (!isBlock) {
              // Inline code: `code` style
              return (
                <code className="px-1.5 py-0.5 mx-0.5 text-[0.9em] font-mono bg-slate-100 text-rose-600 rounded border border-slate-200">
                  {children}
                </code>
              );
            }
            // Block code — let <pre> wrapper handle the styling
            return (
              <code className="block text-slate-100 font-mono text-sm leading-relaxed" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-7 p-5 bg-slate-900 text-slate-100 rounded-xl overflow-x-auto text-sm leading-relaxed font-mono shadow-lg ring-1 ring-slate-800">
              {children}
            </pre>
          ),

          // ── Blockquote ───────────────────────────────────────
          blockquote: ({ children }) => (
            <blockquote className="my-8 pl-6 py-3 border-l-4 border-indigo-500 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-500/[0.07] text-slate-700 dark:text-slate-300 italic text-lg rounded-r-lg">
              {children}
            </blockquote>
          ),

          // ── Tables ───────────────────────────────────────────
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-xl ring-1 ring-slate-200 shadow-sm">
              <table className="w-full text-left">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-50 border-b border-slate-200">{children}</thead>
          ),
          tbody: ({ children }) => <tbody className="divide-y divide-slate-100">{children}</tbody>,
          tr: ({ children }) => <tr className="hover:bg-slate-50/50 transition-colors">{children}</tr>,
          th: ({ children }) => (
            <th className="px-5 py-3 text-sm font-semibold text-slate-900">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-5 py-3 text-sm text-slate-700">{children}</td>
          ),

          // ── Horizontal Rule ──────────────────────────────────
          hr: () => <hr className="my-12 border-t-2 border-slate-100" />,

          // ── Images ───────────────────────────────────────────
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="my-8 rounded-xl ring-1 ring-slate-200 shadow-md w-full"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  const categoryStyles: Record<string, string> = {
    AI: "bg-teal-50 text-teal-700 ring-teal-500/10",
    Cybersecurity: "bg-rose-50 text-rose-700 ring-rose-500/10",
    Engineering: "bg-amber-50 text-amber-700 ring-amber-500/10",
  };
  const categoryClass = categoryStyles[post.category] || "bg-indigo-50 text-indigo-700 ring-indigo-500/10";

  return (
    <div className="relative">
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-32 pb-10">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to journal
            </Link>
          </motion.div>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono"
          >
            <Link to="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">{post.category}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`inline-flex items-center gap-2 pill pill-sm ring-1 mb-6 ${categoryClass}`}
          >
            {post.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="heading-editorial text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-200"
          >
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold text-slate-900">{post.author.name}</div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center w-9 h-9 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all" aria-label="Like">
                <Heart className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-9 h-9 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all" aria-label="Save">
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={handleShare}
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                  copied
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
                aria-label="Share"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden bg-slate-100"
        >
          <img src={post.cover} alt={post.title} className="w-full h-[280px] md:h-[460px] object-cover" />
        </motion.div>
      </section>

      {/* Content layout with TOC */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose-editorial"
          >
            {renderContent(post.content)}

            {/* Tags */}
            <div className="mt-14 pt-8 border-t border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Tags</div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="mt-12 p-8 bg-slate-50/70 border border-slate-100 rounded-3xl">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider mb-1">Written by</div>
                  <h3 className="heading-editorial text-xl font-bold text-slate-900 mb-2">{post.author.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    AI & full-stack developer building production-grade systems. Writing about engineering, cybersecurity, and the craft of software.
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors">
                    More about Rohith
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* TOC Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Table of contents</div>
                <nav className="border-l border-slate-200">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`block pl-4 py-2 text-sm transition-all border-l-2 -ml-px ${
                        activeHeading === h.id
                          ? "text-indigo-700 border-indigo-600 font-semibold"
                          : "text-slate-500 border-transparent hover:text-slate-900 hover:border-slate-300"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider mb-2">Keep reading</div>
                <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-slate-900">Related essays.</h2>
              </div>
              <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
