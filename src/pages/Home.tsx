import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import TechMarquee from "../components/TechMarquee";
import { author, blogPosts, projects, stats } from "../data/content";

const milestones = [["2024", "Technunison", "Full-stack internship: Frappe, Python, Vue and AWS."], ["2025", "Oblivion", "A local-first coding agent shipped to PyPI."], ["2026", "CascadeX", "Vulnerability intelligence built as a real product."], ["Now", "The next build", "Placement prep, sharper systems, more public notes."]];

export default function Home() {
  return <>
    <section className="home-hero"><div className="section-shell">
      <div className="eyebrow">Final-year CS · Sivakasi, India</div>
      <h1 className="home-hero__title">Build useful.<br /><em>Prove it.</em><br />Ship it.</h1>
      <div className="home-hero__bottom"><div><div className="hero-actions"><Link className="cta" to="/projects">See the work <ArrowUpRight size={16}/></Link><Link className="secondary-cta" to="/blog">Read the build log <ArrowRight size={16}/></Link></div></div><p>{author.name} is an AI-integrated full-stack developer building security tools, local agents, and software that earns its complexity.</p></div>
    </div><span className="hero-index">01 — 05</span></section>
    <div className="marquee-wrap"><TechMarquee /></div>
    <section className="editorial-section"><div className="section-shell"><div className="section-head"><div><div className="section-kicker">Selected systems</div><h2 className="section-title">Work with teeth.</h2></div><Link className="card-link" to="/projects">All projects <ArrowRight size={16}/></Link></div><div className="projects-grid">{projects.slice(0,3).map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div></div></section>
    <section className="editorial-section editorial-section--cream"><div className="section-shell about-feature"><div className="about-feature__copy"><div className="section-kicker">About Rohith</div><h2 className="section-title">A practical bias toward shipped systems.</h2><p>I work across AI, backend engineering, and security because the most interesting products live where those concerns collide. Less theater. More useful software.</p><Link className="card-link" to="/about">The longer version <ArrowRight size={16}/></Link></div><div className="about-feature__image"><img src={author.avatar} alt="Rohith R"/></div></div></section>
    <section className="editorial-section editorial-section--dark"><div className="section-shell"><div className="stat-strip">{stats.map(s=><div className="stat-card" key={s.label}><div className="stat-card__value">{s.value}</div><div className="stat-card__label">{s.label}</div></div>)}</div><div className="timeline">{milestones.map(([year,title,copy])=><article className="timeline-item" key={title}><small>{year}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="editorial-section"><div className="section-shell"><div className="section-head"><div><div className="section-kicker">Writing</div><h2 className="section-title">Notes from the build.</h2></div><Link className="card-link" to="/blog">All writing <ArrowRight size={16}/></Link></div><div className="articles-grid">{blogPosts.slice(0,3).map((post,index)=><BlogCard key={post.id} post={post} index={index}/>)}</div></div></section>
    <section className="editorial-section editorial-section--dark"><div className="section-shell"><div className="quote-block"><p className="quote-block__text">The product is not the model. It is the work someone can now do better.</p><div className="quote-block__meta">A belief that shapes every build</div></div></div></section>
    <section className="editorial-section"><div className="section-shell"><div className="now-banner"><div><div className="section-kicker">Now building</div><h2 className="section-title">CascadeX, with less noise and more signal.</h2><p>I’m refining the risk engine and product story for a vulnerability platform that treats attack paths as the real unit of work.</p></div><div className="hero-actions"><Link className="secondary-cta" to="/projects">View project <ArrowUpRight size={16}/></Link><Link className="secondary-cta" to="/now">What’s current</Link></div></div></div></section>
  </>;
}
