import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, Code2, Mail, Rss } from "lucide-react";

const footerLinks = [
  {
    title: "Writing",
    links: [
      { label: "Latest posts", to: "/blog" },
      { label: "AI essays", to: "/blog" },
      { label: "Engineering", to: "/blog" },
      { label: "Cybersecurity", to: "/blog" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Résumé", href: "mailto:hello@rohith.dev?subject=R%C3%A9sum%C3%A9%20Request" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/Rohith-s-hub" },
      { label: "LinkedIn", href: "https://linkedin.com/in/rohith-rajkumar-040676315" },
      { label: "Email", href: "mailto:hello@rohith.dev" },
      { label: "RSS", href: "/blog" },
    ],
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-32 border-t border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 pb-14 border-b border-slate-200"
        >
          <div>
            <h3 className="heading-editorial text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Stay in the loop.
            </h3>
            <p className="text-slate-600 max-w-md">
              Monthly essays on AI, full-stack engineering, and cybersecurity. No spam — just ideas worth sharing.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-3 lg:justify-end"
          >
            <div className="relative w-full sm:w-80">
              <label htmlFor="footer-email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Main footer */}
        <div className="grid md:grid-cols-5 gap-10 py-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">R</span>
              </div>
              <div>
                <div className="font-display font-semibold text-[15px] text-slate-900 leading-none">Rohith</div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium tracking-wide">AI · Full-Stack · Security</div>
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
              Building production-grade systems at the intersection of AI, full-stack engineering, and cybersecurity.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://github.com/Rohith-s-hub" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 bg-slate-100 rounded-full transition-all" aria-label="GitHub">
                <Code2 className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:hello@rohith.dev" className="flex items-center justify-center w-9 h-9 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 bg-slate-100 rounded-full transition-all" aria-label="Email">
                <Mail className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 bg-slate-100 rounded-full transition-all" aria-label="RSS">
                <Rss className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => {
                  const isExternal = "href" in link;
                  const props = isExternal
                    ? { href: link.href, target: "_blank", rel: "noreferrer" }
                    : { to: link.to };
                  const El = isExternal ? "a" : Link;
                  return (
                    <li key={link.label}>
                      <El
                        {...(props as any)}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors link-underline"
                      >
                        {link.label}
                      </El>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} R. Rohith. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link to="/" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-slate-900 transition-colors">Terms</Link>
            <button
              onClick={scrollTop}
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
