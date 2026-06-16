import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const technologies = [
  "Python", "Django", "Frappe", "Vue 3", "React", "React Native",
  "TypeScript", "Tailwind CSS", "Vite", "Node.js", "REST APIs", "JWT",
  "Ollama", "Gemma 4 31B", "ChromaDB", "Wren AI", "Groq LLM", "LangChain",
  "PostgreSQL", "MariaDB", "Redis", "AWS", "Docker", "Zoho Catalyst", "Oracle APEX",
];

export default function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={containerRef}
        className="flex gap-3 w-max"
        animate={contentWidth ? { x: [0, -contentWidth] } : {}}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* Duplicate twice for seamless loop */}
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
