import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";

interface Props { project: Project; index?: number; }

export default function ProjectCard({ project, index = 0 }: Props) {
  const destination = project.blogSlug ? `/blog/${project.blogSlug}` : project.link || project.links?.github;
  const content = <>
    <div className="project-card__visual" aria-hidden="true">
      <div className="terminal-bar"><i /><i /><i /><span>{project.title.toLowerCase()}.app</span></div>
      <div className="terminal-lines"><b>01</b><span>{project.category}</span><b>02</b><span>STATUS: {project.status}</span><b>03</b><span>BUILD / {project.year}</span></div>
      <strong>{String(index + 1).padStart(2, "0")}</strong>
    </div>
    <div className="project-card__content">
      <div className="meta-row"><span className="label">{project.category}</span><span>{project.year}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-row">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="card-bottom"><span className="project-status">{project.status}</span><span className="arrow-link"><ArrowUpRight size={18} /></span></div>
    </div>
  </>;
  if (!destination) return <article className="editorial-card project-card">{content}</article>;
  const external = destination.startsWith("http");
  return external ? <a className="editorial-card project-card" href={destination} target="_blank" rel="noreferrer">{content}</a> : <Link className="editorial-card project-card" to={destination}>{content}</Link>;
}
