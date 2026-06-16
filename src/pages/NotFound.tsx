import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="heading-editorial text-[10rem] md:text-[14rem] font-bold leading-none gradient-text-muted mb-2"
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="heading-editorial text-3xl md:text-4xl font-bold text-slate-900 mb-3"
        >
          Page not found.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-600 mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 text-sm font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse the blog
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
