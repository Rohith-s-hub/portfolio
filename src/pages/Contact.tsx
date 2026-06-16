import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle2, Code2, Clock, MessageSquare } from "lucide-react";
import { author } from "../data/content";

const topics = [
  { icon: "🤖", label: "AI Platforms", desc: "LLM apps, agents, semantic systems" },
  { icon: "🛡️", label: "Cybersecurity", desc: "Vulnerability intelligence, risk platforms" },
  { icon: "🏢", label: "Enterprise Backends", desc: "Frappe, Django, scalable systems" },
  { icon: "💼", label: "Full-Stack Apps", desc: "React / Vue frontends + APIs" },
  { icon: "📝", label: "Writing & Talks", desc: "Guest posts, podcasts, lectures" },
  { icon: "✨", label: "Something Else", desc: "Have an idea? Let's talk" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Responding within 24 hours
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-editorial text-5xl md:text-7xl font-bold text-slate-900 mb-5"
          >
            Let's <span className="gradient-text-muted">talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Have a project, an idea, or just want to say hi? Pick a channel below — or fill out the form.
          </motion.p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-12">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Mail className="w-5 h-5" />,
              title: "Email",
              value: author.email,
              href: `mailto:${author.email}`,
            },
            {
              icon: <Code2 className="w-5 h-5" />,
              title: "GitHub",
              value: "Rohith-s-hub",
              href: author.github,
            },
            {
              icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              title: "LinkedIn",
              value: "Rohith Rajkumar",
              href: author.linkedin,
            },
          ].map((channel, i) => (
            <motion.a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl card-hover"
            >
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                {channel.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{channel.title}</div>
                <div className="font-display font-semibold text-slate-900 truncate text-[15px]">{channel.value}</div>
              </div>
              <div className="text-slate-400 group-hover:text-slate-900 transition-all">→</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">Contact form</div>
              </div>
              <h2 className="heading-editorial text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Send a message.
              </h2>
              <p className="text-slate-600 text-sm mb-8">
                Tell me about your project or idea — the more context, the better.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="heading-editorial text-2xl font-bold text-slate-900 mb-2">Message sent!</h3>
                  <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", topic: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Your name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">What's this about?</label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all"
                    >
                      <option value="">Select a topic</option>
                      {topics.map((t) => (
                        <option key={t.label} value={t.label}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and what you're hoping to achieve..."
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    Send message
                  </button>

                  <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <Clock className="w-3 h-3" />
                    Or email directly to <a href={`mailto:${author.email}`} className="text-indigo-700 font-medium hover:underline">{author.email}</a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-slate-900 rounded-3xl text-white"
            >
              <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-3">What I'm looking for</div>
              <h3 className="heading-editorial text-2xl font-bold mb-3">Interesting problems.</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                I'm most excited about projects at the intersection of AI, cybersecurity, and enterprise systems. If you're building something that requires deep technical work and real-world impact, let's talk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white border border-slate-200/80 rounded-3xl"
            >
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Popular topics</div>
              <div className="space-y-3">
                {topics.map((t) => (
                  <div key={t.label} className="flex items-start gap-3">
                    <span className="text-base leading-none">{t.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.label}</div>
                      <div className="text-xs text-slate-500">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white border border-slate-200/80 rounded-3xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Based in</div>
              </div>
              <div className="font-display text-lg font-bold text-slate-900 mb-1">{author.location}</div>
              <div className="text-sm text-slate-600">Working remotely · open to collaborations worldwide.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-amber-50 border border-amber-100 rounded-3xl"
            >
              <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider mb-1">⏱ Response time</div>
              <div className="font-display text-3xl font-bold text-slate-900">&lt; 24 hours</div>
              <div className="text-xs text-slate-600 mt-1">Usually faster on weekdays.</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 mt-24">
        <div className="text-center mb-10">
          <div className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider mb-3">FAQ</div>
          <h2 className="heading-editorial text-4xl font-bold text-slate-900">Frequently asked.</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              q: "What kinds of projects do you take on?",
              a: "I focus on AI-powered platforms, enterprise backends, vulnerability-intelligence systems, and full-stack applications. If your project involves Python, React/Vue, or LLMs — I'd love to hear about it.",
            },
            {
              q: "Are you available for full-time roles?",
              a: "Yes! I'm currently open to full-time opportunities in AI engineering, backend engineering, and cybersecurity roles. Remote or hybrid (India).",
            },
            {
              q: "Do you work on freelance projects?",
              a: "Selectively. I take on a small number of well-scoped freelance or consulting engagements each quarter.",
            },
            {
              q: "What's your typical response time?",
              a: "I respond to most messages within 24 hours. For urgent matters, email works best.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 bg-white border border-slate-200/80 rounded-2xl"
            >
              <h3 className="font-display font-bold text-slate-900 text-[17px] mb-2">
                <span className="text-indigo-600 mr-2">Q.</span>
                {item.q}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
