import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "../data/content";

interface Props { post: BlogPost; index?: number; variant?: "default" | "compact" | "featured"; }

export default function BlogCard({ post, index = 0, variant = "default" }: Props) {
  return (
    <article className={`editorial-card article-card article-card--${variant}`} style={{ "--card-index": index } as React.CSSProperties}>
      <Link to={`/blog/${post.slug}`} className="article-card__image" aria-label={`Read ${post.title}`}>
        <div className="article-card__mesh" aria-hidden="true">
          <span>/{post.category.toLowerCase().replace(/\s+/g, "-")}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
      </Link>
      <div className="article-card__content">
        <div className="meta-row">
          <span className="label">{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
        </div>
        <Link to={`/blog/${post.slug}`}><h3>{post.title}</h3></Link>
        <p>{post.excerpt}</p>
        <div className="card-bottom">
          <span><Clock size={14} /> {post.readTime}</span>
          <Link to={`/blog/${post.slug}`} className="arrow-link" aria-label={`Read ${post.title}`}><ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </article>
  );
}
