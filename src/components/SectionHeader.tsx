import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  description?: string;
  link?: { to: string; label: string };
}

export default function SectionHeader({ badge, badgeIcon: BadgeIcon, title, description, link }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
    >
      <div className="max-w-2xl">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4">
            {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
            {badge}
          </div>
        )}
        <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
          {title}
        </h2>
        {description && <p className="text-slate-600">{description}</p>}
      </div>
      {link && (
        <Link
          to={link.to}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors self-start md:self-auto"
        >
          {link.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </motion.div>
  );
}
