import { motion } from "framer-motion";
import { MapPin, Mail, Award, BookOpen, Briefcase, GraduationCap, CheckCircle2, Code2, UserCircle2, ArrowRight, Sparkles } from "lucide-react";
import GitHubIcon from "../components/icons/GitHubIcon";
import { Link } from "react-router-dom";
import { author, skills, experience, education, certifications, achievements } from "../data/content";

export default function About() {
  return (
    <div className="relative pt-32 pb-20">
      {/* Hero */}
      <section className="relative pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto md:mx-0"
            >
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-[2rem] overflow-hidden bg-slate-100 ring-1 ring-slate-200">
                <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-5"
              >
                <Sparkles className="w-3 h-3" />
                Available for opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="heading-editorial text-4xl md:text-6xl font-bold text-slate-900 mb-4"
              >
                Hi, I'm <span className="gradient-text-muted">{author.name}.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-lg text-slate-600 mb-6 font-medium"
              >
                {author.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
              >
                {author.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mb-8"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {author.location}
                </div>
                <a href={`mailto:${author.email}`} className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  {author.email}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href={author.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <UserCircle2 className="w-4 h-4" />
                  LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                >
                  Contact me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            Toolbox
          </div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
            Skills & <span className="gradient-text-muted">technologies.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A production-grade stack for building AI-powered, enterprise-ready systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="p-6 bg-white border border-slate-200/80 rounded-2xl card-hover"
            >
              <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-1">0{idx + 1}</div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-[11px] font-mono font-medium text-slate-600 bg-slate-100 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3 h-3" />
            Experience
          </div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            The <span className="gradient-text-muted">journey.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-10 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="absolute left-0 md:left-1/2 top-1.5 w-8 h-8 -translate-x-0 md:-translate-x-1/2 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4 text-slate-600" />
                </div>

                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold mb-2">{exp.period}</div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <div className="text-slate-600 text-sm font-medium mb-4">
                    {exp.company} · {exp.location}
                  </div>
                  <ul className="space-y-2.5 text-left">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3 h-3" />
            Education
          </div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Academic <span className="gradient-text-muted">background.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white border border-slate-200/80 rounded-2xl card-hover"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${
                i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 mb-2">{edu.period || "—"}</div>
              <h3 className="font-display text-base font-bold text-slate-900 mb-1">{edu.degree}</h3>
              <div className="text-sm text-slate-600 mb-1">{edu.institution}</div>
              <div className="text-xs text-slate-400 mb-3">{edu.location}</div>
              <div className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-md">
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3 h-3" />
            Certifications
          </div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Credentials & <span className="gradient-text-muted">courses.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl card-hover"
            >
              <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-slate-900 leading-snug mb-1 text-[15px]">{cert.name}</h3>
                <div className="text-sm text-slate-600">{cert.issuer}</div>
              </div>
              <div className="text-[11px] font-mono text-slate-400 shrink-0">{cert.year}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3 h-3" />
            Achievements
          </div>
          <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Moments I'm <span className="gradient-text-muted">proud of.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5 p-6 bg-white border border-slate-200/80 rounded-2xl"
            >
              <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white font-display font-bold text-sm">
                {i + 1}
              </div>
              <p className="text-slate-700 leading-relaxed text-sm">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] p-12 text-center bg-gradient-to-br from-slate-900 to-slate-800"
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Let's build something <span className="text-indigo-300">remarkable.</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Whether it's an AI platform, an enterprise backend, or a cybersecurity product — I'd love to chat.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-all"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
