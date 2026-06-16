import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ArrowRight, ArrowUpRight, Rocket, PenTool, Code2, ShieldCheck, BrainCircuit, Terminal, Coffee, Sparkles } from "lucide-react";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import TechMarquee from "../components/TechMarquee";
import { blogPosts, projects, author, stats } from "../data/content";

const roles = [
  "AI & Full-Stack Developer",
  "Cybersecurity Engineer",
  "Enterprise Systems Builder",
];

const statIcons: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-4 h-4" />,
  pen: <PenTool className="w-4 h-4" />,
  code: <Code2 className="w-4 h-4" />,
  coffee: <Coffee className="w-4 h-4" />,
};

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setRoleIdx((roleIdx + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  const featuredPosts = blogPosts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden aurora-bg">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-xs font-semibold text-slate-600 mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for opportunities · 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6"
            >
              Building the
              <br />
              <span className="gradient-text-muted">intelligent edge</span>
              <br />
              of software.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-lg md:text-xl text-slate-600 font-medium">
                I'm {author.name} —{" "}
              </span>
              <span className="text-lg md:text-xl text-slate-900 font-semibold">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-5 bg-indigo-600 ml-1 align-middle cursor-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {author.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
              >
                Read the journal
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                View projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-slate-200"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-9 h-9 mb-3 rounded-xl bg-slate-100 text-slate-700">
                    {statIcons[stat.icon]}
                  </div>
                  <div className="font-display text-3xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-5">
          <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.25em]">
            Technologies I work with
          </p>
        </div>
        <TechMarquee />
      </section>

      {/* FEATURED POSTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Latest writing"
            badgeIcon={PenTool}
            title={<>
              Essays on <span className="gradient-text-muted">AI & systems.</span>
            </>}
            description="Deep dives, architecture notes, and lessons from building production software."
            link={{ to: "/blog", label: "View all posts" }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Focus areas
            </div>
            <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
              Explore by <span className="gradient-text-muted">topic.</span>
            </h2>
            <p className="text-slate-600">
              Three threads I keep coming back to in my work and writing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "AI & Machine Learning",
                desc: "Production LLMs, semantic caching, local-first agents, and responsible AI patterns.",
                icon: <BrainCircuit className="w-5 h-5" />,
                color: "text-teal-600",
                bg: "bg-teal-50",
                border: "border-teal-100",
                tag: "AI",
              },
              {
                title: "Full-Stack Engineering",
                desc: "Django, Frappe, Vue, React, and system-design decisions that survive real users.",
                icon: <Terminal className="w-5 h-5" />,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                border: "border-indigo-100",
                tag: "Engineering",
              },
              {
                title: "Cybersecurity",
                desc: "Vulnerability intelligence, attack-path analysis, compliance, and CascadeX research.",
                icon: <ShieldCheck className="w-5 h-5" />,
                color: "text-rose-600",
                bg: "bg-rose-50",
                border: "border-rose-100",
                tag: "Cybersecurity",
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 bg-white border border-slate-200 rounded-3xl card-hover"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${cat.bg} ${cat.color} mb-5`}>
                  {cat.icon}
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Topic 0{i + 1}</div>
                <h3 className="heading-editorial text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{cat.desc}</p>
                <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-indigo-700 transition-colors group-hover:gap-2">
                  Browse {cat.tag} posts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Selected work"
            badgeIcon={Rocket}
            title={<>
              Projects I'm <span className="gradient-text-muted">proud of.</span>
            </>}
            description="From vulnerability intelligence to local AI coding agents — each one solved a real problem."
            link={{ to: "/projects", label: "All projects" }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center bg-gradient-to-br from-slate-900 to-slate-800"
          >
            <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Let's build something together
              </div>
              <h2 className="heading-editorial text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                Have a project in mind?
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
                Whether it's an AI-powered platform, an enterprise backend, or a cybersecurity product — I'd love to hear about it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-all"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 backdrop-blur text-white text-sm font-semibold rounded-full border border-white/10 hover:bg-white/15 transition-all"
                >
                  About me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
