import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import { blogPosts, categories } from "../data/content";

export default function Blog() {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All"); const [tag,setTag]=useState<string|null>(null);
  const tags=useMemo(()=>[...new Set(blogPosts.flatMap(p=>p.tags))].sort(),[]);
  const posts=useMemo(()=>blogPosts.filter(p=>(category==="All"||p.category===category)&&(!tag||p.tags.includes(tag))&&(!query||`${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()))),[category,tag,query]);
  return <div className="page-shell"><section className="section-shell"><header className="page-intro"><div className="eyebrow">Writing / 2024—2026</div><h1 className="page-title">The<br/>build log.</h1><p className="page-intro__body">Specific notes on AI-integrated development, secure systems, and the decisions behind projects that left the notebook.</p><div className="search-field"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search notes, systems, tags…" aria-label="Search articles"/></div></header><div className="filter-bar" aria-label="Filter articles">{categories.map(c=><button className={`filter-button ${category===c.name&&!tag?"active":""}`} key={c.name} onClick={()=>{setCategory(c.name);setTag(null)}}>{c.name} / {c.count}</button>)}</div><div className="filter-bar" aria-label="Filter tags">{tags.map(t=><button className={`filter-button ${tag===t?"active":""}`} key={t} onClick={()=>setTag(tag===t?null:t)}>{t}</button>)}</div><div className="result-line"><span>{posts.length} {posts.length===1?"entry":"entries"}</span><span>Newest first</span></div>{posts.length?<div className="articles-grid">{posts.map((post,index)=><BlogCard key={post.id} post={post} index={index}/>)}</div>:<div className="empty-state"><div className="section-kicker">No result</div><h2 className="section-title">Try another angle.</h2><button className="cta" onClick={()=>{setQuery("");setCategory("All");setTag(null)}}>Reset filters</button></div>}</section></div>;
}
