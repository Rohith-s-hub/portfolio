import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, BookOpen, ExternalLink } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import type { Project } from "../data/content";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const hasBlogPost = Boolean(project.blogSlug);

  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full pro-card overflow-hidden"
    >
      {/* Header */}
      <div className="card-header">
        <div className="card-header-top">
          <div className="category-pill">{project.category}</div>
          <div className="header-meta">{project.year} · {project.status}</div>
        </div>
        <div className="card-header-title">
          <h3 className="heading-editorial">{project.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-6">
        <p className="text-sm leading-relaxed mb-5 muted">
          {project.description}
        </p>

        <div className="space-y-2.5 mb-6">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="leading-snug muted">{feature}</span>
            </div>
          ))}
        </div>

        {project.links && (project.links.github || project.links.pypi) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.links.github && (
              <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="chip"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
            )}
            {project.links.pypi && (
              <a
                href={project.links.pypi}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="chip"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                PyPI
              </a>
            )}
          </div>
        )}

        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/[0.06]">
          <div className="flex flex-wrap gap-2 mb-4 tech-list">
            {project.tech.slice(0, 6).map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>

          {hasBlogPost && (
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              <BookOpen className="w-4 h-4" />
              Read the full essay
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );

  if (hasBlogPost && project.blogSlug) {
    return (
      <Link to={`/blog/${project.blogSlug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
