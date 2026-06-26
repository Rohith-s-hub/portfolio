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
      className="group relative flex flex-col h-full bg-white dark:bg-[#131316] rounded-3xl border border-slate-200/80 dark:border-white/[0.06] overflow-hidden card-hover transition-all duration-300 hover:border-slate-300 dark:hover:border-white/[0.12]"
    >
      {/* Header */}
      <div className="relative h-48 px-7 pt-7 pb-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#1a1a1f] dark:to-[#0f0f12] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/80 mb-3">
              {project.category}
            </div>
            <div className="text-[11px] font-mono text-white/50">
              {project.year} · {project.status}
            </div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur border border-white/10 rounded-xl text-white group-hover:bg-white group-hover:text-slate-900 dark:group-hover:bg-white/15 dark:group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="absolute bottom-6 left-7 right-7">
          <h3 className="heading-editorial text-2xl md:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-7">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="space-y-2.5 mb-6">
          {project.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="leading-snug">{feature}</span>
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/[0.10] transition-colors"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/[0.10] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                PyPI
              </a>
            )}
          </div>
        )}

        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] rounded-full transition-colors"
              >
                {t}
              </span>
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
