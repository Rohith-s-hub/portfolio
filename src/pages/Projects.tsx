import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Rocket, Filter, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero */}
      <section className="relative pb-14">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-6"
          >
            <Rocket className="w-3 h-3" />
            {projects.length} projects · production-grade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-editorial text-5xl md:text-7xl font-bold text-slate-900 mb-5"
          >
            Selected <span className="gradient-text-muted">work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A curated collection of projects — from vulnerability intelligence platforms to local AI coding agents. Each one started as a real problem.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 mb-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          Filter by category
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeFilter === "All"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            All ({projects.length})
          </button>
          {categories.map((cat) => {
            const count = projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CascadeX Spotlight */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider mb-3">Spotlight</div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
            Deep dive into <span className="gradient-text-muted">CascadeX.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The project I'm currently focused on — an industry-grade vulnerability intelligence platform with a patent-pending cascade-risk algorithm.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-16"
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/80 mb-5">
                Flagship project · 2025
              </div>
              <h3 className="heading-editorial text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                CascadeX
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                A vulnerability intelligence platform that doesn't just list CVEs — it reasons about attack paths across your infrastructure, combining CVSS, EPSS, and MITRE ATT&CK into one prioritized risk signal.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Graph-based attack-path analysis engine",
                  "Multi-metric risk aggregation (CVSS + EPSS + ATT&CK)",
                  "Compliance mapping: SOC2, PCI DSS, HIPAA, NIST 800-53",
                  "Docker-deployed, JWT-secured, RBAC everywhere",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3 text-white/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Rohith-s-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-all"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@rohith.dev"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur text-white text-sm font-semibold rounded-full border border-white/10 hover:bg-white/15 transition-all"
                >
                  Request demo
                </a>
              </div>
            </div>

            {/* Tech stack visual */}
            <div className="relative">
              <div className="relative bg-slate-950/40 backdrop-blur border border-white/10 rounded-3xl p-7 shadow-2xl">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[10px] font-mono text-white/40">cascadex — architecture</span>
                </div>

                <div className="space-y-2.5 font-mono text-sm">
                  {[
                    { label: "Frontend", value: "React · TypeScript · D3", color: "text-cyan-300" },
                    { label: "Backend", value: "Django · PostgreSQL", color: "text-emerald-300" },
                    { label: "Risk Engine", value: "Graph-based · CVSS + EPSS", color: "text-amber-300" },
                    { label: "Threat Intel", value: "NVD API · MITRE ATT&CK", color: "text-pink-300" },
                    { label: "Deployment", value: "Docker · JWT · RBAC", color: "text-indigo-300" },
                    { label: "Compliance", value: "SOC2 · PCI · HIPAA · NIST", color: "text-violet-300" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-white/40">{row.label}</span>
                      <span className={row.color}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between text-[10px] text-white/40 mb-2 font-mono">
                    <span>Risk computation latency</span>
                    <span className="text-emerald-300">~42ms</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 px-3 py-1.5 bg-white rounded-xl shadow-lg text-[10px] font-bold text-slate-900"
              >
                🚀 Patent pending
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-24 text-center">
        <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Interested in collaborating?
        </h2>
        <p className="text-slate-600 mb-8">
          I'm always open to conversations about AI, cybersecurity, and enterprise engineering projects.
        </p>
        <a
          href="mailto:hello@rohith.dev"
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
        >
          Let's talk
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
