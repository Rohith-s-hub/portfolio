import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/content";

interface Props {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

export default function BlogCard({ post, index = 0, variant = "default" }: Props) {
  // Featured: larger card with image left on wide screens; compact: small list row
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="card journal-feature"
      >
        <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
          <Link to={`/blog/${post.slug}`} className="shrink-0" aria-label={post.title}>
            <img src={post.cover} alt={post.title} style={{width: 420, height: 260, objectFit: 'cover', borderRadius: 8}} loading="lazy" />
          </Link>
          <div>
            <div className="meta">
              <span className="pill">{post.category}</span>
              <span>·</span>
              <time className="muted">{new Date(post.date).toLocaleDateString()}</time>
              <span>·</span>
              <div style={{display:'inline-flex', alignItems:'center', gap:6}} className="muted"><Clock className="" />{post.readTime}</div>
            </div>

            <Link to={`/blog/${post.slug}`}>
              <h3 className="title">{post.title}</h3>
            </Link>

            <p className="excerpt line-clamp-3">{post.excerpt}</p>

            <div>
              <Link to={`/blog/${post.slug}`} className="read">Read →</Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.04 }}
        className="card compact"
      >
        <Link to={`/blog/${post.slug}`}>
          <img src={post.cover} alt={post.title} />
        </Link>
        <div>
          <div className="meta"><span className="pill">{post.category}</span></div>
          <Link to={`/blog/${post.slug}`}>
            <h4 style={{margin:'6px 0',fontWeight:700}}>{post.title}</h4>
          </Link>
          <div className="muted" style={{fontSize:13}}>{new Date(post.date).toLocaleDateString()}</div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card"
    >
      <Link to={`/blog/${post.slug}`}>
        <h3 className="title">{post.title}</h3>
      </Link>
      <div className="meta" style={{marginTop:8}}>
        <span className="pill">{post.category}</span>
        <span style={{marginLeft:8}} className="muted">{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <p className="excerpt line-clamp-3" style={{marginTop:12}}>{post.excerpt}</p>
      <div>
        <Link to={`/blog/${post.slug}`} className="read">Read →</Link>
      </div>
    </motion.article>
  );
}
