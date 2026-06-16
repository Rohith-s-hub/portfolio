import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/content";

interface Props {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

const categoryStyles: Record<string, string> = {
  AI: "bg-teal-50 text-teal-700 ring-teal-500/10",
  Cybersecurity: "bg-rose-50 text-rose-700 ring-rose-500/10",
  Engineering: "bg-amber-50 text-amber-700 ring-amber-500/10",
};

export default function BlogCard({ post, index = 0, variant = "default" }: Props) {
  const categoryClass = categoryStyles[post.category] || "bg-indigo-50 text-indigo-700 ring-indigo-500/10";

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="group grid lg:grid-cols-2 gap-0 bg-white rounded-3xl border border-slate-200/80 overflow-hidden card-hover"
      >
        <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden aspect-[4/3] lg:aspect-auto">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
            <span className={`pill pill-sm ring-1 ${categoryClass}`}>
              {post.category}
            </span>
            <span className="font-mono text-slate-400">·</span>
            <span className="font-mono">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span className="font-mono text-slate-400">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <Link to={`/blog/${post.slug}`}>
            <h3 className="heading-editorial text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors duration-200">
              {post.title}
            </h3>
          </Link>

          <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm font-medium text-slate-900">{post.author.name}</span>
            </div>
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors group/link">
              Read
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group flex gap-4 py-4 border-b border-slate-100 last:border-0 cursor-pointer"
      >
        <Link to={`/blog/${post.slug}`} className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-slate-100">
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        </Link>
        <div className="flex-1 min-w-0 py-0.5">
          <span className={`pill pill-sm ring-1 mb-2 ${categoryClass}`}>{post.category}</span>
          <Link to={`/blog/${post.slug}`} className="block font-display font-semibold text-slate-900 text-[15px] leading-snug line-clamp-2 group-hover:text-indigo-700 transition-colors mt-2">
            {post.title}
          </Link>
          <div className="text-xs font-mono text-slate-400 mt-2">
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </motion.article>
    );
  }

  // Default card
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden card-hover"
    >
      <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden aspect-[16/10]">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>

      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <span className={`pill pill-sm ring-1 ${categoryClass}`}>
            {post.category}
          </span>
          <span className="font-mono text-slate-400">·</span>
          <span className="font-mono">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="heading-editorial text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs font-medium text-slate-700">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
