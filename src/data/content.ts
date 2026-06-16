export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  cover: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  year: string;
  status: string;
  color: string;
  features: string[];
  link?: string;
}

export const author = {
  name: "R. Rohith",
  role: "AI & Full-Stack Developer",
  bio: "Product developer with experience in full-stack development and hands-on expertise in AI-powered applications, cybersecurity platforms, and enterprise software systems. Passionate about backend engineering, AI systems, and building production-grade infrastructure.",
  location: "Sivakasi, Tamil Nadu",
  email: "lemestarkid@gmail.com",
  github: "https://github.com/Rohith-s-hub",
  linkedin: "https://linkedin.com/in/rohith-rajkumar-040676315",
  avatar: "/images/rohith-avatar.png",
};

export const skills = {
  Languages: ["Python", "C", "JavaScript", "TypeScript"],
  "Web & Frontend": ["Vue 3", "React", "React Native", "HTML", "CSS", "Tailwind CSS", "Vite"],
  "Backend & APIs": ["Frappe Framework", "Django", "Node.js", "REST APIs", "JWT Auth"],
  "AI & ML": ["Ollama", "Gemma 4 31B", "ChromaDB", "Wren AI", "Groq LLM", "LangChain"],
  Databases: ["MariaDB", "PostgreSQL", "MySQL", "Redis", "ChromaDB"],
  "Cloud & DevOps": ["AWS", "Zoho Catalyst", "Oracle APEX Cloud", "Docker"],
  Tools: ["Git", "GitHub", "Pinia", "Chart.js", "Nmap", "Webhook Integrations"],
  "Core CS": ["DSA", "OOP", "SDLC", "System Design", "Database Design"],
};

export const experience = [
  {
    company: "Technunison Software India Pvt. Ltd.",
    location: "Coimbatore",
    role: "Trainee Full Stack Developer (Intern)",
    period: "2024 – 2025",
    highlights: [
      "Gained production experience in Python, Frappe Framework, Vue.js, REST APIs, MariaDB, and AWS cloud deployment.",
      "Worked on real-world enterprise development tasks including ERPNext customization, database handling, and JavaScript-based UI development.",
      "Strengthened problem-solving skills and understanding of enterprise software development practices.",
    ],
  },
];

export const education = [
  {
    institution: "Ayya Nadar Janaki Ammal College (ANJAC)",
    location: "Sivakasi",
    degree: "B.Sc. Computer Science",
    period: "2022 – 2025",
    score: "CGPA: 7.8",
  },
  {
    institution: "K. Kamarajar Matriculation Higher Secondary School",
    location: "Sivakasi",
    degree: "Higher Secondary Education",
    period: "",
    score: "75%",
  },
  {
    institution: "Velammal Vidyalaya",
    location: "Mel Ayanambakkam, Chennai",
    degree: "Senior Secondary Education",
    period: "",
    score: "80%",
  },
];

export const certifications = [
  { name: "Oracle APEX Cloud Developer Certified Professional", issuer: "Oracle University", year: "2024" },
  { name: "Google AI Essentials", issuer: "Coursera / Google", year: "2024" },
  { name: "AI Skills Passport", issuer: "EY & Microsoft", year: "2024" },
  { name: "AI Fundamentals and Applications", issuer: "Anudip Foundation, Chennai", year: "2024" },
];

export const achievements = [
  "First Prize — Part II English, 63rd College Day & Founders' Day, ANJAC. Certificate received from V. Narayanan, Secretary — Department of Space, Govt. of India & Chairman, ISRO, Bengaluru.",
  "Built CascadeX, an industry-grade vulnerability intelligence platform, as an independent student project; patent filing in progress.",
  "Built production Hospital Management System integrating 31B-parameter LLM with multi-layer semantic caching architecture.",
];

export const projects: Project[] = [
  {
    id: "1",
    title: "CascadeX",
    description: "Vulnerability Cascade Intelligence Platform combining CVSS, EPSS, and MITRE ATT&CK for enterprise risk assessment.",
    longDescription: "CascadeX is a vulnerability intelligence platform that prioritizes cyber risk by combining CVSS, EPSS, MITRE ATT&CK, and real-time asset context to identify and visualize exploit-prone exploits across infrastructure. It features a graph-based attack path analysis engine with JWT-secured RBAC, Docker deployment, compliance mapping (SOC2, PCI DSS, HIPAA, NIST 800-53), webhook integrations, and automated risk scoring to accelerate vulnerability remediation.",
    tech: ["Django", "PostgreSQL", "React", "TypeScript", "NVD API", "EPSS", "MITRE ATT&CK", "Docker"],
    category: "Cybersecurity",
    year: "2025",
    status: "Active · Patent Pending",
    color: "from-indigo-500 via-purple-500 to-pink-500",
    features: [
      "Multi-metric risk aggregation (CVSS + EPSS + ATT&CK)",
      "Graph-based attack path analysis engine",
      "JWT-secured RBAC with Docker deployment",
      "Compliance mapping for SOC2, PCI DSS, HIPAA, NIST",
      "Automated webhook-driven risk scoring",
    ],
  },
  {
    id: "2",
    title: "AI-Powered Hospital Management System",
    description: "Full-stack hospital management platform with 12+ clinical and financial modules, powered by a 31B-parameter LLM.",
    longDescription: "A full-stack Hospital Management Platform with 12+ clinical and financial modules, supporting role-based workflows for administrators, doctors, receptionists, pharmacists, lab technicians, and billing staff. Designed an enterprise-grade AI analytics layer that converts conversational queries into validated SQL, leveraging Wren AI, Ollama, Redis, and ChromaDB for secure, context-aware reporting and real-time dashboard generation.",
    tech: ["Python", "Frappe", "Vue 3", "MariaDB", "Redis", "Ollama", "ChromaDB", "Wren AI"],
    category: "AI · Healthcare",
    year: "2025",
    status: "Production",
    color: "from-teal-500 via-cyan-500 to-blue-500",
    features: [
      "12+ clinical and financial modules",
      "Role-based access and workflow orchestration",
      "31B-parameter LLM with semantic caching",
      "Natural language to validated SQL",
      "Real-time conversational analytics",
    ],
  },
  {
    id: "3",
    title: "Oblivion",
    description: "Local AI coding agent with voice persona — fully offline, zero dependency, powered by LiteLLM and cloud-aware reasoning.",
    longDescription: "Oblivion is a fully local AI coding agent powered by Ollama and LiteLLM, featuring codebase-aware reasoning, semantic search, voice interaction, and autonomous developer tooling with zero dependency. It features a hybrid retrieval and execution framework combining AST-aware code parsing, SQLite FTS5, ChromaDB embeddings, workspace-safe file operations, multi-file code generation, and self-correcting workflows for reliable software development assistance.",
    tech: ["Python", "Textual", "ChromaDB", "SQLite FTS5", "Ollama", "LiteLLM", "faster-whisper", "ElevenLabs"],
    category: "AI · Developer Tools",
    year: "2025",
    status: "Active",
    color: "from-amber-500 via-orange-500 to-rose-500",
    features: [
      "Fully local · zero cloud dependency",
      "Codebase-aware reasoning with AST parsing",
      "Voice persona and interaction",
      "Self-correcting multi-file generation",
      "Hybrid retrieval + execution engine",
    ],
  },
  {
    id: "4",
    title: "AI Weather Intelligence System",
    description: "Combines real-time weather APIs with LLM reasoning to produce human-readable current and forecast insights.",
    longDescription: "Combines real-time weather APIs with LLM reasoning to produce human-readable current and forecast insights. Supports dynamic coordinate switching for any location and is deployed within the Zoho enterprise environment, offering both on-demand and scheduled weather intelligence briefings.",
    tech: ["Groq LLM", "Weather APIs", "Zoho Catalyst"],
    category: "AI · Data",
    year: "2024",
    status: "Deployed",
    color: "from-sky-500 via-indigo-500 to-violet-500",
    features: [
      "Real-time weather API aggregation",
      "LLM-generated natural language summaries",
      "Dynamic coordinate switching",
      "Scheduled briefings",
      "Zoho enterprise deployment",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-cascadex-vulnerability-intelligence",
    title: "Building CascadeX: A Vulnerability Intelligence Platform That Actually Prioritizes Risk",
    excerpt: "How I architected an industry-grade vulnerability intelligence platform by combining CVSS, EPSS, and MITRE ATT&CK into a single risk signal — and why the graph-based attack path engine changes everything.",
    content: `The cybersecurity industry has a data problem. We have more vulnerability feeds than ever — CVSS scores, EPSS exploit probabilities, MITRE ATT&CK tactics — but no unified way to reason about them.

## The Signal Problem

Every scanner produces a different score. Every analyst uses a different framework. And every enterprise has a different asset topology. The result? Teams drown in false positives while real risk goes unnoticed.

## Why CascadeX Exists

I built CascadeX to solve this by treating vulnerability intelligence as a **graph problem**, not a list problem. Here's what makes it different:

- **Multi-metric aggregation** — CVSS base + temporal + environmental, blended with EPSS exploit probability and ATT&CK tactic weight.
- **Graph-based attack paths** — assets become nodes, vulnerabilities become edges, and we compute reachability from every external surface.
- **Compliance-first RBAC** — JWT-secured access with SOC2 / PCI DSS / HIPAA / NIST 800-53 mapping baked in.

## The Architecture

The backend is Django + PostgreSQL with a Redis caching layer for hot risk computations. The frontend is React + TypeScript with a custom D3-based risk graph. Everything ships as a Docker Compose stack.

## What's Next

We're filing a patent on the cascade-risk scoring algorithm and rolling out webhook-based auto-remediation playbooks in Q3. The goal is simple: stop producing reports, start reducing risk.`,
    date: "2025-04-18",
    readTime: "8 min read",
    category: "Cybersecurity",
    tags: ["CVSS", "EPSS", "MITRE ATT&CK", "Django", "Risk"],
    cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
  {
    id: "2",
    slug: "31b-llm-hospital-management",
    title: "Putting a 31B-Parameter LLM Inside a Hospital Management System",
    excerpt: "A deep dive into the architecture behind an AI-native hospital platform — how we safely ran a 31B LLM inside clinical workflows using semantic caching, SQL validation, and role-based context windows.",
    content: `When you're deploying an LLM in a healthcare environment, "it works on my machine" is not enough. You need audit trails, role-based context, validated SQL, and — above all — speed.

## The Stack That Made It Possible

- **Ollama + Gemma 4 31B** — the core reasoning engine, self-hosted on-prem.
- **ChromaDB** — semantic cache over 500+ hospital-specific terms and procedures.
- **Wren AI** — the semantic-to-SQL translation layer with schema validation.
- **Redis** — hot-path caching for dashboard queries under 80ms.
- **Frappe + Vue 3** — the enterprise shell that doctors and staff actually use.

## The Hard Part: Context

A doctor should never see the billing system's schema. A billing clerk should never see PHI. We solved this with **role-bound context windows** — the LLM only sees the schema and records its user is authorized to touch.

## The Result

12+ modules. 200+ daily active users. Natural-language dashboards that generate in under 3 seconds. And a semantic cache hit rate north of 60%.

If you're deploying LLMs in regulated environments, start with the guardrails — not the model.`,
    date: "2025-03-02",
    readTime: "11 min read",
    category: "AI",
    tags: ["LLM", "Healthcare", "Ollama", "Semantic Cache", "Gemma"],
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
  {
    id: "3",
    slug: "oblivion-local-ai-coding-agent",
    title: "Oblivion: Building a Local AI Coding Agent With Zero Cloud Dependency",
    excerpt: "Why I built a fully local AI coding agent with voice persona, AST-aware retrieval, and self-correcting workflows — and why local-first is the future of developer tooling.",
    content: `Cloud-based coding assistants are convenient. But they leak your codebase, hallucinate on private APIs, and cost a fortune at scale. I wanted something different: an agent that runs entirely on my laptop, understands my repo, and talks back.

## Meet Oblivion

Oblivion is a local-first AI coding agent powered by Ollama + LiteLLM. It uses:

- **AST-aware code parsing** — understands real symbols, not just text chunks.
- **SQLite FTS5 + ChromaDB** — hybrid retrieval (keyword + semantic) over the whole repo.
- **faster-whisper + ElevenLabs (local TTS)** — voice persona and interaction.
- **Self-correcting workflows** — generates code, runs lint/tests, iterates.

## The Key Insight

Most code agents treat your repo like a bag of tokens. Oblivion treats it like a **graph of symbols** — imports, exports, function calls, types. That's why its context is sharper and its edits are safer.

## Zero Dependency

No API keys. No telemetry. No vendor lock-in. Just a Textual TUI that runs on any machine with 16GB+ RAM.

Local-first isn't a nostalgia play — it's the only way to build AI tooling you can actually trust.`,
    date: "2025-02-10",
    readTime: "9 min read",
    category: "AI",
    tags: ["Local AI", "Coding Agent", "Ollama", "LiteLLM", "AST"],
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
  {
    id: "4",
    slug: "enterprise-frappe-vue-lessons",
    title: "Lessons From Shipping Enterprise Frappe + Vue 3 Apps in Production",
    excerpt: "Hard-won lessons from my internship at Technunison — ERPNext customization, database handling at scale, and the JavaScript patterns that actually survive enterprise audits.",
    content: `Enterprise software is a different sport. Performance matters. Audit trails matter. Backwards compatibility is non-negotiable. Here's what I learned shipping Frappe + Vue 3 apps in production.

## Frappe Is Not Just A Framework

Frappe gives you opinionated ORM, role system, doctypes, and hooks out of the box. The learning curve is steep — but once you internalize the "docype-first" philosophy, you ship 10x faster.

## Vue 3 Composition API Shines Here

Enterprise UIs are full of complex forms, wizards, and dashboards. Pinia + Composition API made state management predictable across dozens of components.

## Database Handling At Scale

- Never do \`SELECT *\` in a Frappe report. Use \`frappe.db.get_list\` with explicit fields.
- Indexes are not optional. Profile every report query.
- Redis cache the hot paths — dashboard counts, recent activity, role-based menus.

## The JavaScript That Survives Audits

- No global \`window\` pollution.
- Every async call wrapped in try/catch with user-facing error messages.
- Every mutation logged to Frappe's Version doctype for the audit trail.

Shipping enterprise software isn't about being clever — it's about being reliable.`,
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Engineering",
    tags: ["Frappe", "Vue 3", "ERPNext", "Enterprise", "Python"],
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
  {
    id: "5",
    slug: "groq-weather-intelligence",
    title: "Fast Weather Intelligence With Groq LLM: A Weekend Project That Went Enterprise",
    excerpt: "How combining real-time weather APIs with Groq's ultra-fast LLM produced a surprisingly useful intelligence tool — and how it ended up deployed on Zoho Catalyst.",
    content: `Sometimes the best projects start as weekend hacks. I wanted a weather briefing that didn't just show numbers — it explained them.

## The Core Idea

Hit a weather API for current conditions + forecast. Feed the raw JSON into an LLM with a structured prompt. Get back a natural-language, location-aware briefing.

## Why Groq

Speed. A 70B model on traditional hardware takes 5–10 seconds. Groq returns the same quality in under 700ms. For a real-time briefing tool, that's the difference between "magic" and "annoying".

## The Deployment

It started as a CLI. Then a colleague asked for a web version. I wrapped it in Zoho Catalyst, added coordinate switching, saved briefings, and scheduled email digests.

## The Lesson

The most useful AI products aren't the most complex ones — they're the ones that **augment a real workflow** with a clear input/output contract. Weather → JSON → LLM → human briefing. Simple, fast, useful.`,
    date: "2024-10-22",
    readTime: "5 min read",
    category: "AI",
    tags: ["Groq", "LLM", "Weather", "Zoho Catalyst"],
    cover: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
  {
    id: "6",
    slug: "system-design-notes-from-trenches",
    title: "System Design Notes From The Trenches: Scaling From Prototype To Production",
    excerpt: "A practical guide to the system design decisions that separate a working prototype from a system that survives real users, real data, and real outages.",
    content: `Every system design interview starts with "design Twitter." Every real system starts with "design this internal tool by Friday." Here's what I wish someone had told me.

## 1. Start With The Data Model, Not The UI

The UI changes every sprint. The schema is forever. Spend the first week on tables, indexes, and access patterns.

## 2. Idempotency Is A Feature

Every write endpoint should be idempotent. Use client-generated IDs. Use \`ON CONFLICT DO NOTHING\`. Your future self — and your billing system — will thank you.

## 3. Observability Before Scale

Logs, metrics, and traces are not "later" work. Add them on day one. The first production outage you debug will pay back the investment 100x.

## 4. Caches Are Leases, Not Storage

Redis is fast. Redis is also volatile. Never store something in a cache that you can't afford to recompute.

## 5. Backwards Compatibility Is A Product

Every API change should be additive for at least two versions. Deprecation is a process, not a delete key.

System design isn't about drawing boxes on a whiteboard — it's about the decisions you'll live with for the next five years.`,
    date: "2024-08-14",
    readTime: "6 min read",
    category: "Engineering",
    tags: ["System Design", "Architecture", "Scaling", "Backend"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
    author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
  },
];

export const categories = [
  { name: "All", count: blogPosts.length, color: "from-indigo-500 to-purple-500" },
  { name: "AI", count: blogPosts.filter(p => p.category === "AI").length, color: "from-teal-500 to-cyan-500" },
  { name: "Cybersecurity", count: blogPosts.filter(p => p.category === "Cybersecurity").length, color: "from-rose-500 to-orange-500" },
  { name: "Engineering", count: blogPosts.filter(p => p.category === "Engineering").length, color: "from-amber-500 to-yellow-500" },
];

export const stats = [
  { label: "Projects Shipped", value: "12+", icon: "rocket" },
  { label: "Articles Written", value: blogPosts.length.toString(), icon: "pen" },
  { label: "Years Coding", value: "5+", icon: "code" },
  { label: "Coffee Cups", value: "∞", icon: "coffee" },
];
