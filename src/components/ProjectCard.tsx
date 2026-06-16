import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/content";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden card-hover"
    >
      {/* Header */}
      <div className="relative h-48 px-7 pt-7 pb-6 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/80 mb-3">
              {project.category}
            </div>
            <div className="text-[11px] font-mono text-white/50">{project.year} · {project.status}</div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur border border-white/10 rounded-xl text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
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
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="space-y-2.5 mb-6">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
