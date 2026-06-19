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

// ═══════════════════════════════════════════════════════════════
// CASCADEX — Updated Project Entry
// ═══════════════════════════════════════════════════════════════

export const projects: Project[] = [
  {
    id: "1",
    title: "CascadeX",
    description: "Vulnerability Cascade Intelligence Platform — combines CVSS, EPSS, MITRE ATT&CK, and real-time asset context to predict which CVEs attackers will actually exploit against your infrastructure.",
    longDescription: "CascadeX is a full-stack vulnerability intelligence platform that transforms how organizations prioritize cyber risk. Instead of dumping 180,000+ CVEs on security teams, it identifies the exact handful that will be exploited against YOUR specific assets in the next 30 days. Built around a custom Cascade Intelligence Engine that fuses real exploit probability (EPSS from FIRST.org), CVSS severity scoring, MITRE ATT&CK kill chain mapping, and asset-confirmed matching, CascadeX visualizes vulnerabilities as living attack chains — not static lists. The platform features an honest graph engine where every edge carries a confidence level (confirmed/inferred/heuristic), preventing the false certainty that plagues legacy scanners. With JWT-secured RBAC, Google + GitHub OAuth, Docker-containerized deployment, compliance assessment for SOC2/PCI DSS/HIPAA/NIST 800-53, real-time webhook integrations (Slack/Jira/PagerDuty), automated CISA KEV tracking, and a custom 60/40 CVSS-EPSS blended risk model, CascadeX delivers what enterprise security teams have been asking for: a system that admits what it doesn't know, proves what it does, and turns vulnerability management from a list problem into a graph problem. Live in production on Vercel + Railway, fully open-source under MIT license, and currently in the patent filing process.",
    tech: ["Django 6.0", "PostgreSQL", "Redis", "React 18", "TypeScript", "Vite", "Tailwind CSS", "NVD API", "FIRST.org EPSS", "CISA KEV", "MITRE ATT&CK", "Docker", "Nginx", "Gunicorn", "JWT", "OAuth2"],
    category: "Cybersecurity",
    year: "2026",
    status: "Live in Production · Open Source · Patent Pending",
    color: "from-indigo-500 via-purple-500 to-pink-500",
    features: [
      "EPSS-blended risk scoring (60% CVSS + 40% exploitation probability)",
      "Asset-confirmed CVE cascade chains with confidence-level edges",
      "Multi-mode kill chain visualization (Cascade / Blast Radius / Infrastructure)",
      "MITRE ATT&CK tactic & technique mapping for every vulnerability",
      "Compliance engine covering SOC2, PCI DSS, HIPAA, and NIST 800-53",
      "JWT authentication with Google + GitHub OAuth single sign-on",
      "Role-based access control (Admin / Analyst / Viewer) with owner-scoped data isolation",
      "Real-time monitoring with Slack, Jira, PagerDuty, and custom webhook integrations",
      "CISA Known Exploited Vulnerability (KEV) catalog auto-sync",
      "Historical trending with risk posture snapshots",
      "Active network scanning with nmap-based asset discovery",
      "Honest confidence labels on every chain edge (confirmed/inferred/heuristic)",
    ],
    link: "https://cascadex.vercel.app",
  },
  // ... rest of your projects
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
  title: "CascadeX: I Built a Vulnerability Intelligence Platform That Tells You Which CVEs Will Actually Be Exploited Next Week",
  excerpt: "Three months. One developer. Zero shortcuts. A complete deep-dive into how I architected an industry-grade security platform from scratch — combining EPSS exploit probability, asset-confirmed kill chains, MITRE ATT&CK mapping, and a custom graph intelligence engine into a system that does what every legacy scanner refuses to: tell the truth about what it knows and what it's guessing.",
  content: `# The 180,000 Problem

There are over 180,000 known vulnerabilities in the National Vulnerability Database right now. New ones get added at a rate of 80–100 per day. Every single one of them is technically "exploitable." Every single one of them has a CVSS score. And every single one of them is, according to most security tools, "critical."

This is the lie that security teams live with every day.

When everything is critical, nothing is critical. When your dashboard shows 47 "high-severity" CVEs on Monday morning, the team triages the first three, gets called into a meeting, and never touches the other 44. By Friday, the count is 78. By next Monday, it's 91. And somewhere in that pile is the one — the single CVE — that an actual attacker will use against you next week.

The security industry has known this for years. The response has been... more dashboards. More feeds. More integrations. More noise.

I wanted to build something different.

## Why I Built CascadeX

I'm Rohith. I'm a full-stack developer with a focus on AI systems and security infrastructure. Over the past three months, I built **CascadeX** — a vulnerability cascade intelligence platform — entirely from scratch, as a solo project.

The core thesis was simple:

> Vulnerability management isn't a list problem. It's a graph problem.

And the secondary thesis was even simpler:

> Security tools should be **honest** about what they know and what they're guessing.

CascadeX is the product of those two ideas, taken seriously, for 90 days straight.

## The EPSS Revelation

Here's the moment that changed how I thought about everything.

I was looking at a CVE — CVE-2020-5849. Its CVSS score is **MEDIUM**. Its description is "vulnerability in NETGEAR routers." Boring. Forgettable. The kind of thing that sits at the bottom of every triage queue.

Its **EPSS score**? **93.7%**.

That number means there's a 93.7% probability this CVE will be exploited in the next 30 days. It's actively being used by threat actors right now. Botnets are scanning for it. Exploit kits include it by default. And yet — because its CVSS is only MEDIUM — most security teams have it buried under hundreds of "CRITICAL" vulnerabilities that nobody is actually exploiting.

EPSS (Exploit Prediction Scoring System) is maintained by FIRST.org. It's trained on real exploit data from millions of sensors worldwide. It's free. It has no API key requirement. And almost no commercial security tool uses it as a first-class signal.

**That's the gap. That's the wedge.**

CascadeX uses a custom blended risk formula:

\`\`\`
Risk Score = 60% CVSS + 40% EPSS
\`\`\`

A CRITICAL CVE with 0.5% exploitation probability scores lower than a MEDIUM CVE with 93.7% probability. Because that's the truth. That's what actually matters when you're deciding what to fix on a Tuesday morning at 9 AM.

## The Asset-Confirmation Problem

The second big insight came from realizing that even a "real" vulnerability isn't a risk if you don't have the affected software.

Most vulnerability tools work like this:

1. Fetch CVE feed
2. Show all CVEs to user
3. Mark them all as "critical"
4. ???
5. Stress

CascadeX works like this:

1. Fetch CVE feed (NVD)
2. Enrich with EPSS exploitation probability (FIRST.org)
3. Cross-reference with CISA Known Exploited Vulnerabilities catalog
4. Map to MITRE ATT&CK tactics for kill chain classification
5. **Match against YOUR actual asset inventory** (services, versions, OS)
6. Compute confidence-scored cascade chains between matched CVEs
7. Visualize as a live attack graph with honest confidence labels

When you register \`web-prod-01\` running \`nginx 1.24.0\` on \`Debian 12\` in CascadeX, the platform automatically:

- Pulls every CVE affecting nginx < 1.25
- Pulls every CVE affecting Debian 12 kernel
- Identifies which ones chain together (Auth Bypass → Privilege Escalation → Data Exfil)
- Marks those edges as **CONFIRMED** (green) because they exist on the same real asset
- Tells you exactly which 3 CVEs to fix first to break the chain

That's not a list. That's intelligence.

## The Honesty Principle

Here's the thing that I think most security tools get wrong: they pretend to know more than they do.

Every vendor wants to give you a number. A risk score. A "we'll handle it" badge. Confidence sells. Uncertainty doesn't.

But uncertainty is the truth in security. We don't know which exploits will be weaponized next month. We don't know which attacker is targeting your industry today. We don't know if your nginx 1.24 is actually exposed or sitting behind seven layers of WAF.

CascadeX leans into this honesty.

Every edge in the cascade graph is color-coded by confidence:

| Color | Confidence Level | Meaning |
|-------|------------------|---------|
| 🟢 Green | Confirmed (95%) | Both CVEs are present on the same real asset in your inventory |
| 🟣 Indigo | High Inferred (85%) | A proven CWE chain relationship exists between these vulnerabilities |
| 🟡 Amber | Probable (65%) | Same vendor + active exploit available, but not confirmed on your assets |
| ⚫ Grey | Heuristic (45%) | Phase-order inference only, no strong evidence |

When CascadeX doesn't know something, **it says so**. When CascadeX is guessing, **it labels the guess**. When CascadeX has evidence, **it shows the evidence**.

This is what enterprise security teams have been begging for — and what no commercial tool has delivered.

## The Architecture

Let me show you what powers this.

### Backend Stack

\`\`\`
Framework:        Django 6.0
Database:         PostgreSQL 16
Cache:            Redis 7
WSGI Server:      Gunicorn
Reverse Proxy:    Nginx
Containerization: Docker + Docker Compose
Authentication:   JWT (SimpleJWT) + OAuth2 (allauth)
\`\`\`

### Frontend Stack

\`\`\`
Framework:        React 18
Language:         TypeScript 5
Build Tool:       Vite
Styling:          Tailwind CSS
Animations:       Framer Motion
Graph Renderer:   Custom SVG engine (no D3 dependency)
State:            React hooks + Context API
\`\`\`

### Intelligence Layer

\`\`\`
CVE Source:           NVD API v2 (National Vulnerability Database)
Exploit Probability:  FIRST.org EPSS API
Known Exploited:      CISA KEV Catalog (auto-sync)
Kill Chain Mapping:   MITRE ATT&CK framework
Asset Discovery:      nmap-based active scanner
Risk Engine:          Custom blended scoring (60/40 CVSS-EPSS)
\`\`\`

### Compliance Coverage

\`\`\`
SOC 2 Type II
PCI DSS v4.0
HIPAA Security Rule
NIST 800-53 Rev 5
\`\`\`

### Deployment

\`\`\`
Frontend:   Vercel (cascadex.vercel.app)
Backend:    Railway (Docker container)
Database:   Railway managed PostgreSQL
Cost:       $0/month (free tiers)
\`\`\`

## The Intelligence Engine: How It Actually Works

This is the heart of CascadeX. The Intelligence Engine processes every vulnerability through a 7-stage pipeline:

### Stage 1 — Attack Stage Classification

Every CVE is mapped to a kill chain phase based on its CWE classifications:

\`\`\`
CWE-200 (Information Exposure)     → Reconnaissance
CWE-287 (Authentication Bypass)    → Initial Access
CWE-78  (OS Command Injection)     → Execution
CWE-269 (Privilege Escalation)     → Escalation
CWE-400 (Resource Exhaustion)      → Impact
\`\`\`

This isn't just academic — it's how we determine whether a CVE is an **entry point** (attackers use it to get in) or a **payload** (attackers use it after they're in).

### Stage 2 — Asset Matching

The Asset Matcher does fuzzy matching between CVE-affected products and your inventory services. It handles vendor normalization (e.g., \`debian_linux\` → vendor: \`debian\`, product: \`linux\`), version range parsing, and CPE 2.3 matching.

Match confidence is scored:
- Exact CPE match → 95%
- Vendor + product + version match → 85%
- Vendor + product match → 70%
- Vendor match only → 40%

### Stage 3 — Risk Calculation

The blended risk formula:

\`\`\`python
cvss_component        = (cvss_score / 10) * 100 * 0.25
exploit_component     = exploit_maturity_score * 0.20
epss_component        = epss_score * 100 * 0.25
exposure_component    = exposure_modifier * 0.15
criticality_component = asset_criticality_score * 0.15

final_risk = sum(all_components)  # 0-100 scale
\`\`\`

Notice EPSS gets equal weight to CVSS. That's intentional. That's the whole point.

### Stage 4 — Time-to-Exploit Estimation

Based on attack vector, complexity, privileges required, and exploit maturity, we estimate how long an attacker would need:

\`\`\`
Network + No Auth + Weaponized Exploit  → Hours
Network + Low Auth + PoC Available      → Days
Local + High Auth + Theoretical         → Months
\`\`\`

### Stage 5 — Connection Building

For every pair of CVEs, the engine evaluates whether they form a viable attack chain:

\`\`\`python
score = 0

# CWE chain pattern matching
if source_cwes ∩ chain_patterns and target_cwes ∩ next_phase:
    score += 50

# Same vendor amplifies probability
if source.vendors ∩ target.vendors:
    score += 20

# Source has exploit = chain is more credible
if source.exploit_available:
    score += 15

# Target is critical = chain is high-impact
if target.severity in (CRITICAL, HIGH):
    score += 15

# EPSS boost — high probability source = real chain
if source.epss_score > 0.5:
    score += 10
\`\`\`

Chains with score ≥ 40 become edges in the graph. Chains with score ≥ 70 are flagged as "viable attack paths."

### Stage 6 — Status Determination

A CVE's status is determined by both risk score AND asset context:

\`\`\`
risk >= 80 + asset_match  → CRITICAL
risk >= 60 + asset_match  → WARNING
risk >= 40                → ELEVATED
exploit_maturity = weaponized → EXPLOITED
\`\`\`

### Stage 7 — System Status Aggregation

The final pass aggregates everything into a top-level posture:

\`\`\`
COMPROMISED  → Active exploitation detected on critical assets
CRITICAL     → Multiple weaponized exploits + asset matches
AT_RISK      → Several entry points + active exploits
ELEVATED     → Entry points exist but no active exploitation
GUARDED      → Vulnerabilities present but mitigated
SECURE       → No applicable threats detected
\`\`\`

## The Cascade Graph — Three Ways to See Your Risk

The visualization layer has three modes:

### Mode 1: Cascade

Shows CVEs as nodes in a kill chain flow. Entry points on the left, impact on the right. Edges show how attackers could chain vulnerabilities together. This is the **attacker's mental model** of your environment.

### Mode 2: Blast Radius

Hierarchical view: Vendor → Product → CVE. Useful when you want to understand the impact radius of, say, "all nginx CVEs" or "everything affecting Linux kernel 6.1."

### Mode 3: Infrastructure

Asset-centric view: your servers on the left, their CVEs on the right. Shows exactly which boxes are vulnerable to what.

All three modes share the same graph data. You're just looking at it from different angles.

## The Compliance Engine

Compliance is usually a separate product. In CascadeX it's a first-class feature.

The Compliance Engine assesses your vulnerability posture against four major frameworks:

**SOC 2 Type II**
- CC6.1 — Logical access controls
- CC7.1 — Vulnerability identification
- CC7.2 — Vulnerability remediation

**PCI DSS v4.0**
- Req 6.3.1 — Vulnerability management process
- Req 6.3.2 — Vulnerability scoring
- Req 11.3 — Penetration testing

**HIPAA Security Rule**
- § 164.308(a)(1)(ii)(A) — Risk analysis
- § 164.308(a)(1)(ii)(B) — Risk management

**NIST 800-53 Rev 5**
- RA-5 — Vulnerability scanning
- SI-2 — Flaw remediation

For every framework, every control, CascadeX shows:
- Which CVEs fail this control
- Why they fail
- What evidence is missing
- How to remediate

No more "compliance officer asks for screenshots, security team scrambles for two weeks." It's all live, evidence-backed, exportable.

## Real-Time Monitoring & Integrations

CascadeX ships with a webhook integration system for real-time alerting:

- **Slack** — New critical CVEs detected, scan completions, system status changes
- **Jira** — Auto-create tickets for high-priority remediations with full context
- **PagerDuty** — Page on-call when active exploits detected on critical assets
- **Custom Webhooks** — Send to any URL with signed payloads

Each integration tracks delivery history with status codes, response previews, and retry logic. If your Slack webhook fails, you'll know exactly why.

## Authentication & Multi-Tenancy

Security platforms have security requirements. CascadeX uses:

- **JWT tokens** with access (12h) + refresh (7d) rotation
- **Google OAuth 2.0** for SSO via FIRST.org's certified flow
- **GitHub OAuth** for developer-friendly login
- **Role-based access control** (Admin / Analyst / Viewer)
- **Owner-scoped data** — users never see each other's assets
- **API key management** with per-key rate limiting
- **CSRF protection** on all state-changing endpoints
- **HSTS + Secure headers** for production deployments

Every action is auditable. Every data access is scoped. Every token is revocable.

## What I Learned Building This

Three months. One developer. Zero shortcuts. Here's what I learned:

### 1. Real Threat Intelligence Is Free

EPSS is free. CISA KEV is free. MITRE ATT&CK is free. NVD is free. The data security teams need to make smart decisions has been freely available for years. Most commercial tools just don't use it.

### 2. EPSS Changes Everything

Once you start prioritizing by exploitation probability instead of severity, you stop chasing ghosts. A MEDIUM CVE being actively exploited beats a CRITICAL CVE that nobody touches. Every. Single. Time.

### 3. Honesty Is the Hardest Feature

It's easy to give a confident-sounding score. It's hard to admit uncertainty. CascadeX's confidence labeling system took longer to design than the entire risk engine. Because users *want* certainty, even when certainty is a lie.

### 4. Asset Context Multiplies Signal

A vulnerability without an affected asset is information. A vulnerability **confirmed** on your specific asset is intelligence. The difference is the entire value of the platform.

### 5. Graphs Beat Lists

The moment I switched from rendering CVEs as a table to rendering them as a kill chain graph, the platform clicked. Security IS a graph problem. Trying to express it as a list is what's been holding the industry back.

### 6. Deploy Early. Iterate Public.

I deployed to production at week 8. Found 47 bugs in production that never appeared in dev. Fixed them. Found 23 more from the next 100 users. Fixed those too. Shipping is the most important feature.

## What's Next

CascadeX v1.0 is live in production at **[cascadex.vercel.app](https://cascadex.vercel.app)**. Fully open source under MIT license. Patent filing in progress for the cascade-risk scoring algorithm.

Roadmap:

- **Q1**: OSV database integration for additional vulnerability sources
- **Q2**: Auto-remediation playbooks (Slack /command → patched server)
- **Q2**: Multi-cloud asset discovery (AWS, GCP, Azure)
- **Q3**: ML-based attack path prediction
- **Q3**: Native Kubernetes operator
- **Q4**: Marketplace for community-contributed risk rules

## The Mission

I built CascadeX because I was tired of security tools that give you 47 critical CVEs every morning and call it "intelligence."

Real intelligence isn't a list. It's a decision: **"You should fix these 3 things this week. Here's the evidence."**

That's what CascadeX is. That's what every security team deserves.

If you work in cybersecurity, DevSecOps, cloud infrastructure, or just care about building things that actually matter — go try it. It's free. It's open source. It's running right now.

And if you build security tools — please, please, **stop pretending to know things you don't know**. The industry is starving for honesty.

---

## Try It

🌐 **Live App**: [cascadex.vercel.app](https://cascadex.vercel.app)
📦 **Source Code**: [github.com/Rohith-s-hub/CascadeX](https://github.com/Rohith-s-hub/CascadeX)
📚 **API Docs**: Available at \`/api/docs\` on the live deployment
💬 **Feedback**: lemestarkid@gmail.com

Built solo. Powered by real data. Designed to be honest.

— Rohith`,
  date: "2026-06-17",
  readTime: "24 min read",
  category: "Cybersecurity",
  tags: ["CascadeX", "CVSS", "EPSS", "MITRE ATT&CK", "Django", "React", "TypeScript", "Vulnerability Management", "DevSecOps", "Risk Intelligence", "Open Source"],
  cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=900&fit=crop",
  author: { name: "R. Rohith", avatar: "/images/rohith-avatar.png" },
},
  
  {
    id: "2",
    slug: "31b-llm-hospital-management",
    title: "Putting a 31-Billion-Parameter LLM Inside a Live Hospital Management System: How I Made Doctors Talk to Their Database in Plain English",
    excerpt: "A complete architectural deep-dive into how I built a production-grade hospital platform that converts natural language questions into validated SQL queries — using Gemma 4 (31B), Wren AI, ChromaDB, and a 3-layer caching system that cuts query latency from 45 seconds to under 200 milliseconds. 12 clinical modules. 6 user roles. Zero technical training required.",
    content: `# The Hospital Data Problem Nobody Talks About

Every hospital sits on a goldmine of structured data. Patient records. Appointment histories. Lab results. Billing logs. Doctor performance metrics. Medicine inventory levels.

The data is **there**. Pristine. Indexed. Queryable.

And yet, ask a hospital administrator a simple question — *"Which doctor brought in the most revenue last month?"* — and you'll watch them open three different dashboards, export two CSV files, message the IT team, and finally give up.

The information exists. The infrastructure exists. What doesn't exist is a **bridge between human curiosity and database truth**.

I built that bridge.

## What I Built

**Star Hospital Management System** is a full-stack healthcare platform that embeds a 31-billion-parameter large language model directly into the clinical workflow. Doctors, receptionists, pharmacists, and administrators can ask questions in plain English — and get answers backed by validated SQL queries executed against the live database.

Examples of real questions the system handles today:

> *"Which doctor generated the highest revenue last month?"*
> *"Show me today's appointments for Dr. Sneha"*
> *"List patients with pending bills over ₹5,000"*
> *"How many lab tests are pending sample collection?"*
> *"Top 5 medicines running low on stock"*

The system translates these into SQL, executes them through a semantic layer, formats the results with Indian currency and date conventions, and presents everything in a ChatGPT-style conversational interface — complete with auto-generated charts.

## The Scope

This isn't a demo. This is a production-grade clinical platform managing real workflows:

- **64 patients** with full demographics, medical history, and contact records
- **17 doctors** across **10 specialized departments**
- **173 appointments** with status tracking, no-show detection, and rescheduling
- **173 clinical encounters** with diagnosis, complaints, and chief findings
- **Itemized prescriptions** with medications, dosages, and frequencies
- **Lab tests** with full lifecycle tracking (Ordered → Sample Collected → Completed)
- **12 medicines** with real-time inventory and reorder-level alerting
- **Billing** with auto-generated invoices, payment tracking, and PDF generation

All accessible through six distinct role-based interfaces: administrator, doctor, receptionist, pharmacist, lab technician, and billing staff.

## The Stack

Here's what makes it work:

### Backend
- **Frappe Framework** (Python 3.11) — full-stack framework with built-in ORM, auth, API routing, and job queue
- **MariaDB 10.x** — primary relational store
- **Redis 7.x** — session store, multi-layer cache, pub/sub for real-time events
- **Ollama** — LLM inference runtime hosting **Gemma 4 (31B parameters)**
- **Wren AI** — semantic SQL engine that resolves JOINs through declared relationships
- **ChromaDB** — vector database for semantic question caching
- **Fernet (AES-256)** — encryption for cached SQL and conversation history at rest

### Frontend
- **Vue 3** (Composition API) with Vite, Pinia, and Vue Router
- **Tailwind CSS** for styling
- **Chart.js + vue-chartjs** for auto-generated visualizations
- **socket.io-client** for real-time event streaming
- **Lucide Vue Next** for icons
- **Day.js** for date manipulation

### Infrastructure
- **Gunicorn** WSGI server
- **Node.js** Socket.IO server (port 9001) for real-time pub/sub
- **Vite proxy** to handle cross-origin cookie forwarding

## The Heart of the System: Natural Language to SQL

The flagship feature lives in a single 1,800-line file that exposes three endpoint tiers:

| Endpoint | Purpose | Capabilities |
|----------|---------|--------------|
| ask() | Single-shot queries | Basic caching, semantic search |
| ask_pro() | Production queries | Full formatting, domain rules, natural language answers |
| ask_chat() | Conversational | Multi-turn memory, pronoun resolution, context awareness |

Every question flows through a 10-stage pipeline:

1. Authentication + quota check
2. Preprocessing (typo correction, abbreviation expansion, PII masking)
3. Cache Layer 1: Exact match (SHA-256 → Redis)
4. Cache Layer 2: Semantic match (ChromaDB, cosine ≥ 0.95)
5. LLM generation (only on cache miss)
6. SQL cleanup + validation (SELECT-only enforcement)
7. Wren AI execution
8. Self-healing retry on failure
9. Post-processing (currency, dates, null handling)
10. Cache persistence + audit logging

## The Caching Strategy That Made It Fast

LLM calls are slow. A 31B model takes 15–45 seconds to generate SQL. Wren AI then takes another 5–10 seconds to execute. That's a 50-second response time for a single question. Unusable.

The solution: **three independent caching layers, each catching different patterns**.

### Layer 1 — Exact Cache (Redis, 30-day TTL)

Catches identical repeated questions via SHA-256 hashing of normalized question text. Hit rate: **35–45%**.

### Layer 2 — Semantic Cache (ChromaDB)

After every successful query, the normalized question is indexed in ChromaDB with its SQL. For every new question, a cosine similarity search finds semantically equivalent past questions.

*"How many doctors do we have?"* matches *"What's the total number of doctors?"* at 0.97 similarity → reuse SQL.

Hit rate: **10–15%** additional.

### Layer 3 — Result Cache (Redis, Smart TTL)

The actual query results are cached with TTL based on data volatility:

- Real-time data ("today", "pending") → 30 seconds
- Aggregates (COUNT, SUM) → 10 minutes
- Structural data ("all departments") → 1 hour
- Default → 5 minutes

Hit rate: **20–30%**.

### The Combined Effect

| Scenario | Without Cache | With Cache | Improvement |
|----------|---------------|------------|-------------|
| First unique question | 30–60s | 30–60s | 0% |
| Same question, 2nd time | 30–60s | <200ms | **99.5% faster** |
| Similar paraphrase | 30–60s | <500ms | **99% faster** |
| Same SQL, different words | 30–60s | <100ms | **99.8% faster** |

In production, **~75% of queries hit some cache layer**. The system feels instant.

## Conversational Memory

The system supports multi-turn conversations with pronoun resolution:

> **User:** "Show me top 5 doctors by revenue"
> **AI:** *[returns table of 5 doctors]*
> **User:** "And yesterday?"
> **AI:** *[understands "and" = continuation, applies "yesterday" filter to the same query]*
> **User:** "Their phone numbers"
> **AI:** *[understands "their" refers to the 5 doctors, fetches contact info]*

Per-user, per-session history is stored in Redis with a 30-minute inactivity TTL. The last 5 Q/A pairs are retained.

A smart context-detection function determines whether to inject history into the LLM prompt:

| Question | Needs Context? | Reason |
|----------|----------------|--------|
| "List all doctors" | No | Standalone action verb |
| "Show appointments today" | No | Complete question |
| "And yesterday?" | **Yes** | Continuation word "and" |
| "Their phone numbers" | **Yes** | Pronoun "their" |
| "Show them" | **Yes** | "them" references prior query |

This saves tokens, reduces latency, and prevents the LLM from being confused by irrelevant history.

## Prompt Engineering for Healthcare SQL

The production prompt is ~2,000 tokens. The single most important rule lives at the top:

> **The name column is the PRIMARY KEY ID (like "DOC-2026-0010"), NOT a person's name!**
> Use doctor_name, patient_name, department_name, medicine_name, test_name instead.

Without this rule, the LLM consistently generates SELECT name FROM doctors and returns IDs instead of human-readable names. With it, queries are accurate.

Other critical rules baked into the prompt:

**JOIN path enforcement** — In our data model, billings.appointment is always NULL. Revenue queries must join through encounters. This is documented with WRONG vs CORRECT examples directly in the prompt.

**Date formatting enforcement** — Wren AI returns dates as raw millisecond timestamps. Every date column must be wrapped in DATE_FORMAT().

**Status enum values** are declared explicitly so the LLM doesn't invent non-existent states like 'scheduled' (lowercase) or 'in-progress'.

**Domain vocabulary synonyms** are listed so user phrasings map correctly: doctor = physician/dr/specialist; bill = invoice/charge/fee; medicine = medication/drug/pharma.

## Self-Healing SQL Generation

When the generated SQL fails execution, the system doesn't just throw an error. It retries with a corrective prompt that includes the original question, the failed SQL, and the database error message.

The LLM corrects its own mistakes about **80% of the time** on the second attempt.

## Security: 10 Layers Deep

Healthcare data is sacred. The system implements defense-in-depth:

1. **Authentication** — Frappe session cookies (HttpOnly)
2. **Authorization** — Role-based module access matrix (6 roles × 12 modules)
3. **API Security** — Frappe whitelist decorators + admin checks
4. **SQL Injection Prevention** — Wren parameterizes; no string concatenation
5. **AI Safety** — SELECT-only validation; INSERT/UPDATE/DELETE/DROP blocked
6. **Data Encryption** — AES-256 Fernet for cached SQL and conversations at rest
7. **PII Protection** — Regex masking in audit logs (patient IDs, phones, emails)
8. **Rate Limiting** — 200 AI queries per user per day
9. **Audit Trail** — Every query and admin action logged with timestamps
10. **Password Security** — Frappe's pbkdf2_sha256 hashing

Audit logs never contain raw patient identifiers — PII is regex-masked at write time.

## Real-Time Synchronization

When a pharmacist deducts medicine stock, every other user sees the update **instantly** — no refresh required. This is powered by Frappe's built-in Socket.IO server and Redis pub/sub.

Events broadcast in real-time:

| Event | Trigger | Frontend Action |
|-------|---------|-----------------|
| stock_update | Medicine restock/deduct | Update store in-place, show toast |
| appointment_update | Booking/cancellation | Refresh appointment list |
| lab_test_update | Status change | Update status badge |
| payment_recorded | Bill payment | Refresh billing data |

The biggest engineering challenge was **cross-origin cookie forwarding**. The Vue frontend runs on localhost:5173 while Socket.IO runs on hospital.local:9001. Browsers block cookies across different origins, so the WebSocket connection was authenticating as Guest and never receiving events.

**Solution:** Route Socket.IO through Vite's proxy. Now both API and WebSocket requests appear as same-origin from the browser.

## Smart Auto-Visualization

The frontend automatically detects when a query result deserves a chart — no user request required.

Chart type selection:

| Data Pattern | Chart Type |
|--------------|------------|
| Time-series column (month/date/year) | Line |
| Few categories (≤6) + distribution keyword | Pie |
| Ranking / comparison | Bar |
| Default | Bar |

Users can toggle between bar ↔ pie ↔ line without re-querying.

## What I Learned

Building this taught me hard lessons that no tutorial covers:

### 1. Domain Knowledge Beats Model Size

The 31B model is powerful. But without the name-column rule, it consistently fails. **A 4B model with the right prompt beats a 70B model without it.**

### 2. Caching Is The Real Product

Users don't care about LLMs. They care about speed. **75% cache hit rate** is what makes the system feel magical, not the underlying model.

### 3. Self-Healing Beats Perfect Generation

The LLM will get SQL wrong. Accept it. Build a retry loop. **80% of failed queries succeed on the second attempt** with the right error-feedback prompt.

### 4. Context Detection Must Be Smart

Naive context injection (always include history) wastes tokens and confuses the model. **A simple verb-whitelist + pronoun detector** outperforms complex NLP.

### 5. Vue Reactivity Has Sharp Edges

When pushing objects into a reactive array, **mutate the proxy, not the original reference**. This bug cost me 6 hours.

### 6. Cross-Origin Cookies Are A Nightmare

Always use a proxy in development. **Same-origin** is the only sane way to handle authenticated WebSockets.

### 7. Real Healthcare Data Has Real Edge Cases

Bills can have NULL appointment references. Names can contain emoji. Phone numbers can have formatting. **Defensive coding isn't optional in healthcare.**

## Performance Numbers

After a typical day (~50–100 queries):

- **Cold query (LLM + Wren):** 20–55 seconds
- **Warm query (any cache hit):** 50–200 milliseconds
- **Exact cache hit rate:** 35–45%
- **Semantic cache hit rate:** 10–15% additional
- **Result cache hit rate:** 20–30% additional
- **LLM generation required:** 15–30% of all queries

## What's Next

The platform is production-ready. Next milestones:

- **Voice input** via Whisper for hands-free clinical queries
- **Multi-hospital deployments** with tenant isolation
- **Federated learning** so clinical insights improve across deployments without sharing PHI
- **Mobile apps** for doctors with offline-first SQL caching
- **Predictive analytics** — appointment no-show prediction, inventory forecasting

## The Mission

I built this because I watched my own family struggle to get information from hospital systems. The data was there. The interfaces weren't.

If you build healthcare software — please, **stop forcing users to learn your dashboards**. Meet them where they are. They speak English, not SQL.

Every hospital deserves a system where asking *"how many patients did we treat today?"* takes 200 milliseconds and zero training.

That's what this is.

---

## Try It

**Architecture:** Full Frappe + Vue 3 + Ollama + Wren AI stack
**Model:** Gemma 4 (31B parameters, cloud-hosted)
**Security:** 10-layer defense-in-depth with AES-256 encryption
**Performance:** Under 200ms for 75% of queries via 3-layer caching
**Interface:** ChatGPT-style conversational UI with auto-charts

Built solo. Deployed in production. Designed for humans, not databases.

— Rohith`,
    date: "2026-06-19",
    readTime: "22 min read",
    category: "AI",
    tags: ["LLM", "Healthcare", "Gemma", "Wren AI", "ChromaDB", "Frappe", "Vue 3", "Natural Language to SQL", "RAG", "Real-time Systems"],
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
    title: "Lessons From Shipping Enterprise Frappe + Vue 3 Apps in Production: A Field Guide Written in Blood",
    excerpt: "After a long week of shipping a role-based hospital management system on top of Frappe with a Vue 3 SPA frontend, these are the eight lessons that cost us the most time — and the ones I wish someone had told me on day one. Real bugs, real fixes, and the production patterns that actually survive enterprise audits.",
    content: `# Lessons From Shipping Enterprise Frappe + Vue 3 Apps in Production

A field guide written in blood, after a long week of shipping a role-based hospital management system on top of Frappe with a Vue 3 SPA front-end. These are the lessons that cost us the most time — and the ones I wish someone had told me on day one.

## Why This Stack At All?

Frappe gives you a mature Python backend with auth, ORM, doctypes, role permissions, and a battle-tested admin out of the box. Vue 3 gives you a modern, fast SPA frontend that your users will actually enjoy using. Marrying them sounds simple.

**It is not.**

The seams between the two are where production bugs live: session cookies, CORS, role enforcement, custom whitelisted endpoints, hot-reload caches, and the assumption that *"the backend already does this, the frontend doesn't need to."*

Here are the eight lessons that bit us hardest.

---

## 1. Role-Based Access Control: Frontend Filters, Backend Enforces

The most common mistake I made early was treating role-based access as a frontend concern. Hide the sidebar item, redirect the route, problem solved. Right?

**Wrong. Frontend filters are UX hints. They are not security.**

Any user with browser DevTools can paste this and instantly bypass it:

\`\`\`javascript
window.location.href = '/some-restricted-page'
// then call any /api/method/... endpoint with their valid session cookie
\`\`\`

The fix is mandatory:

- **Frontend filters** the sidebar and redirects unauthorized routes (UX)
- **Backend rejects** every API call from users without the right role (security)

In our hospital app, doctors must only see their own patients. We learned this isn't enough on the frontend:

\`\`\`javascript
// Frontend (UX layer)
if (!authStore.canAccess('Patients')) return next('/dashboard')
\`\`\`

The actual enforcement lives in the API endpoint:

\`\`\`python
def get_current_doctor_id():
    user = frappe.session.user
    if not user or user == "Guest":
        return None
    return frappe.db.get_value("Doctor", {"email": user}, "name")

@frappe.whitelist()
def get_my_appointments():
    doctor_id = get_current_doctor_id()
    if not doctor_id:
        return {"success": False, "error": "Not a doctor"}
    return frappe.db.sql("""
        SELECT * FROM tabAppointment WHERE doctor = %s
    """, doctor_id, as_dict=True)
\`\`\`

> **Rule of thumb:** If you ever find yourself thinking *"the frontend will handle this filter"*, stop. Add it on the backend too.

---

## 2. Avoid Big-Bang Refactors. Phase Everything.

We tried to refactor our Settings page from a sidebar item into a ChatGPT-style avatar dropdown + modal. **In one bundle.** Six things changed simultaneously:

1. Remove sidebar Settings item
2. Remove top-bar gear icon
3. Add avatar dropdown
4. Add new SettingsModal component
5. Remove standalone logout button
6. Add a router redirect from /settings

**Result:** white screen, modal that wouldn't close, missing icon components, three hours debugging Vue HMR cache issues, eventual rollback to the previous state.

The fix that worked the second time: **3 micro-phases, each independently verifiable.**

- **Phase 1:** Create the new modal file. Don't wire it. Verify it compiles.
- **Phase 2:** Wire the avatar dropdown AND keep the old sidebar item + gear icon as backup. Verify dropdown works.
- **Phase 3:** Remove the old paths only after Phase 2 is proven solid.

> **Rule of thumb:** If your change touches more than 2 files OR more than ~50 lines, split it. Verify after each split.

---

## 3. Dark Mode + Tailwind Gradients Are a Trap

Tailwind's dark variants work beautifully for solid colors:

\`\`\`html
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
\`\`\`

But the moment you introduce gradients, your global dark-mode overrides in style.css stop working:

\`\`\`html
<!-- This stays light in dark mode unless you explicitly add dark: variants -->
<div class="bg-gradient-to-br from-blue-50 to-indigo-100">
  Header text barely readable on white-ish background
</div>
\`\`\`

**Why?** Because style.css overrides bg-white, bg-slate-50, etc. via !important rules. But gradients are background-image: linear-gradient(...), not background-color. CSS specificity for gradients requires explicit Tailwind dark variants:

\`\`\`html
<div class="bg-gradient-to-br from-blue-50 to-indigo-100
            dark:from-blue-950/40 dark:to-indigo-950/30">
\`\`\`

We had to audit and fix every gradient in 11+ pages after launch.

> **Rule of thumb:** Every bg-gradient-to-* needs a matching dark:from-* and dark:to-*. No exceptions. Add a lint rule if you can.

---

## 4. Don't Trust Python Regex Patchers on Vue SFC Files

To avoid pasting huge files into terminals, I built shell bundles that used Python regex patchers to surgically edit Vue files in place. Insert a watcher here, swap an emoji there, add an import block.

**These patchers broke files in subtle ways at least four times.**

The root causes:

- Vue Single File Components have three sections (template, script setup, style) with completely different parsing rules
- Whitespace, indentation, and quote style matter
- Inserting code in the wrong spot (e.g., an import inside script setup's body instead of the top) silently breaks Vite compilation
- Stack traces blame the user-facing component, not the patcher

**What we learned to do instead:**

- For tiny changes (1-3 lines): patcher is fine
- For anything bigger: always rewrite the entire file with cat heredoc, even if it's 500 lines. Backup first. The certainty is worth the bandwidth.

> **Rule of thumb:** If your regex needs more than 2 anchors, just generate the whole file.

---

## 5. AI / LLM Integration: SELECT-Only, Table Whitelist, Always Sanitize

We integrated a natural-language-to-SQL feature for admins (powered by Ollama). The temptation: throw the user's question + schema at an LLM, run whatever SQL comes back.

**This is a SQL injection generator with extra steps.**

What we shipped instead, in layers:

\`\`\`python
# Defence in depth — every layer must pass

# 1. Role check
if not is_admin(user): reject

# 2. Daily quota
if requests_today >= 200: reject

# 3. LLM call with strict system prompt
sql = call_llm(prompt + question)

# 4. Parse + sanitize
sql = strip_markdown_fences(sql)            # Remove markdown fences
sql = sql.rstrip(';').strip()                # No trailing semicolons

# 5. Whitelist check — defence in depth
if not sql.upper().startswith(('SELECT', 'WITH')): reject
if ';' in sql: reject                        # Multi-statement
for keyword in FORBIDDEN_KEYWORDS:           # UPDATE, DELETE, DROP, ALTER
    if re.search(keyword, sql, re.I): reject

# 6. Table whitelist
referenced = set(re.findall(r"(tab[A-Za-z]+)", sql))
if referenced - ALLOWED_TABLES: reject

# 7. Auto-inject LIMIT
if 'LIMIT' not in sql.upper(): sql += ' LIMIT 1000'

# 8. Finally execute
results = frappe.db.sql(sql, as_dict=True)
\`\`\`

Each layer is independent. The LLM could go rogue, the prompt could be jailbroken, the user could try injection — **none of it gets past the whitelist + keyword filter + SELECT-only parser.**

> **Rule of thumb:** Never trust an LLM's output. Treat it like user input from a hostile network.

---

## 6. Auto-Provisioning Linked Records (Doctor ↔ User)

In Frappe, login is via the User doctype. But your business records (Doctor, Patient, Employee) are separate doctypes that live and die by their email field matching a User.

Originally we created a Doctor record, and then manually asked admins to create a matching User via Frappe Desk. **Half the time it didn't happen.** The doctor couldn't log in. Confusion.

The fix is to auto-provision the User the moment a Doctor record is created:

\`\`\`python
@frappe.whitelist()
def create_doctor(doctor_name, email, phone):
    # 1. Validate email isn't already taken
    if frappe.db.exists("User", email):
        return {"success": False, "error": "Email already registered"}

    # 2. Create the Doctor record
    doctor = frappe.new_doc("Doctor")
    doctor.update({"doctor_name": doctor_name, "email": email})
    doctor.insert(ignore_permissions=True)

    # 3. Generate a predictable password (e.g., firstname@123)
    first_name = doctor_name.split()[0].lower()
    password = f"{first_name}@123"

    # 4. Create the User with Doctor role
    user = frappe.new_doc("User")
    user.email = email
    user.first_name = doctor_name
    user.new_password = password
    user.enabled = 1
    user.user_type = "System User"
    user.append("roles", {"role": "Doctor"})
    user.insert(ignore_permissions=True)

    # 5. Return credentials so receptionist can hand them to the doctor
    return {
        "success": True,
        "credentials": {"email": email, "password": password}
    }
\`\`\`

The frontend then shows the credentials in a modal with Copy/Print buttons.

> **Rule of thumb:** If two records must always exist together (User ↔ Doctor, User ↔ Customer), create them in the same atomic operation. Returning credentials to the UI saves a follow-up support ticket.

---

## 7. Vite HMR Caching Will Lie to Your Face

I once spent 40 minutes debugging an avatar dropdown that *"wouldn't close"*. I added logging, traced events, blamed Vue's reactivity system, then Teleport, then v-click-outside.

**The actual cause:** Vite HMR was serving a stale cached version of MainLayout.vue from a previous broken attempt. The code on disk was correct. The browser was running ghost code.

How to know you're in this trap:

- grep on disk shows correct code
- Hard refresh doesn't fix it
- Console shows errors referencing line numbers that don't exist in the current file
- localhost:5173 and localhost:5174 both running (Vite auto-picked a free port because the old one was held)

The cure:

\`\`\`bash
# Kill all node processes
pkill -f vite

# Verify dead
pgrep -fa vite

# Clear Vite cache
cd frontend
rm -rf node_modules/.vite .vite

# Restart
npm run dev
\`\`\`

Then close ALL browser tabs pointing at localhost:5173, open a fresh one, hard refresh.

> **Rule of thumb:** If "the code says X but the browser does Y" after a hard refresh, suspect Vite cache before anything else. Restart Vite. Often that's all it needs.

---

## 8. Migrate Emojis to Icon Libraries Before Production

Emojis in your UI look fine on your Mac. They look like a hobby project on your client's Windows machine. They look like missing characters in some Linux distros.

We started with:

\`\`\`html
<button>📞 Call</button>
<button>✉️ Email</button>
<span>👨‍⚕️ Doctors</span>
\`\`\`

We ended with:

\`\`\`html
<button><Phone class="w-4 h-4" /> Call</button>
<button><Mail class="w-4 h-4" /> Email</button>
<span><Stethoscope class="w-4 h-4" /> Doctors</span>
\`\`\`

The migration:

- **Heroicons** (@heroicons/vue) for general UI: nav, actions, layout
- **Lucide** (lucide-vue-next) for medical specialty icons: Stethoscope, Brain, HeartPulse, Pill, Syringe

Both are tree-shakeable. Only the icons you import end up in the bundle.

For sidebar nav items where icon-as-string is needed:

\`\`\`javascript
// 1. Import the components
import { HomeIcon, UserGroupIcon, BeakerIcon } from '@heroicons/vue/24/outline'

// 2. Map names to components
const ICONS = { HomeIcon, UserGroupIcon, BeakerIcon }

// 3. Store the NAME in your nav config
const navItems = [
  { label: 'Dashboard', path: '/', icon: 'HomeIcon' },
  { label: 'Patients',  path: '/patients', icon: 'UserGroupIcon' },
]

// 4. Render via component is binding
// <component :is="ICONS[item.icon]" class="w-5 h-5" />
\`\`\`

**Critical gotcha:** Every icon name in your nav config MUST exist in the ICONS map. We shipped a SparklesIcon reference in nav config but forgot to add it to the map. Vue silently rendered nothing for that item. A grep integrity check would have caught it.

> **Rule of thumb:** Emojis are fine for personality (the wave 👋 on the welcome banner). Everything else should be a real icon component. Add a CI check that imports = usages.

---

## The Meta-Lesson: Treat Your Codebase Like a Production System Even In Dev

Half the pain in this project came from treating dev as throwaway. We'd skip backups, skip phasing, skip integrity checks, then waste hours when something broke.

The patterns that consistently saved us:

| Before doing | Cost | Saves |
|--------------|------|-------|
| Big change | 10s to back up the file | Hours of unwinding |
| Bundle | 10s to write grep verification | Confusion about whether it worked |
| Refactor | 30s to write a phased plan | Days of debugging tangled state |
| LLM-generated code | 1 min to read line-by-line | Production SQL injection |

**Build the muscle memory. Your future self will thank you.**

---

## Try It

These lessons came from shipping a real role-based hospital management system on Frappe + Vue 3 + Tailwind CSS. The system is in production today, serving doctors, receptionists, pharmacists, and admins across multiple workflows.

If you're building enterprise SaaS on this stack — **steal these patterns**. They cost us weeks. They'll save you the same.

Built solo. Shipped to production. Audited by real users.

— Rohith`,
    date: "2026-06-19",
    readTime: "14 min read",
    category: "Engineering",
    tags: ["Frappe", "Vue 3", "Tailwind CSS", "Enterprise", "Production", "RBAC", "LLM Security", "Vite", "DevOps"],
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
    title: "System Design Notes From The Trenches: A Field Manual For Engineers Who Have Bled For Their Code",
    excerpt: "Every system design interview starts with 'design Twitter.' Every real system starts with 'design this internal tool by Friday.' This is the journal of patterns, anti-patterns, and hard-won lessons from shipping production systems across cybersecurity, healthcare, and enterprise SaaS — the document I wish someone had handed me on day one.",
    content: `# System Design Notes From The Trenches

## A Field Manual For Engineers Who Have Bled For Their Code

---

## Preface

Every system design interview starts with *"design Twitter."*

Every real system starts with *"design this internal tool by Friday."*

The gap between those two sentences is where careers are made and broken. It's where elegant architectures collide with the absurdity of production. It's where you learn — usually the hard way — that the most beautiful design document is worthless if it can't survive contact with reality.

This is not a tutorial. This is a journal. These are the patterns I extracted from shipping production systems across cybersecurity (CascadeX), healthcare (Star Hospital Management), and enterprise SaaS — and the scars I collected along the way.

If you're a junior engineer staring at a blank Notion page wondering how to architect your first real system — **this is the document I wish someone had handed me on day one.**

---

## Part 1: The Mindset Shift

### A Prototype Solves One Problem. A System Survives A Thousand.

The first lesson nobody teaches you is that a prototype and a production system are **fundamentally different species**. They share DNA but they are not the same animal.

A prototype:
- Answers one question
- Runs on your laptop
- Has one user (you)
- Lives for days
- Tolerates restarts
- Can be deleted without consequence

A production system:
- Answers questions that haven't been asked yet
- Runs on infrastructure you've never seen
- Has users with shapes you didn't predict
- Lives for years
- Cannot tolerate restarts during business hours
- Cannot be deleted because real people depend on it

When you start writing code, you're not just solving the problem in front of you. You're making promises about every future Tuesday at 3 PM when something breaks. **Architecture is the contract you sign with your future self.**

---

## Part 2: The Five Decisions That Define Everything

After shipping enough systems, I've noticed that the same five decisions dominate the lifetime cost of any platform. Get them right early, and the rest is craft. Get them wrong, and you'll spend years paying interest on technical debt that compounds daily.

### Decision 1: The Data Model

The UI changes every sprint. **The database schema is forever.**

I've watched teams burn entire quarters because they treated the data model as an afterthought. They started with "we'll figure out the schema as we go." Six months later, they had three different "user" tables, denormalized JSON blobs where relations should be, and a billing system that couldn't reliably compute revenue because nobody could remember which timestamp meant what.

**The Rule:** Spend the first week on tables, relationships, indexes, and access patterns. Write down your top 10 queries before you write a single endpoint. If your schema can't answer them efficiently, change the schema — not the queries.

Example from CascadeX: The first version stored CVEs in a single flat table. Three weeks in, I needed to answer *"which assets are affected by which CVEs, grouped by CWE category, sorted by EPSS exploitation probability."* That query was impossible without a redesign. The new schema took two days. The migration took five. **The pain was permanent.**

### Decision 2: Idempotency

Every write endpoint should be idempotent. If a user clicks "Submit Payment" twice, you should not charge them twice. If a network hiccup causes a retry, you should not create two orders.

This sounds obvious. **It is not what most engineers do.**

The pattern that saves you:

- Generate client-side IDs (UUIDs) for every write operation
- Use them as your primary keys (or as unique constraints alongside auto-increment IDs)
- Wrap inserts in conflict-handling clauses

For PostgreSQL:

\`\`\`sql
INSERT INTO payments (client_id, amount, currency, user_id)
VALUES ($1, $2, $3, $4)
ON CONFLICT (client_id) DO NOTHING
RETURNING id;
\`\`\`

That single ON CONFLICT clause is the difference between a system that survives the chaos of real networks and a system that generates angry support tickets for the next decade.

### Decision 3: Observability Before Scale

You cannot fix what you cannot see. And you will never have time to add observability "later." **There is no later. There is only the next fire.**

The day-one minimum:

- **Structured logs** — every log line is JSON with timestamp, user_id, request_id, and event type
- **Metrics** — request count, latency percentiles (p50, p95, p99), error rate
- **Traces** — at minimum, log request IDs across service boundaries so you can stitch together a user's journey

When CascadeX's deployed version started returning 502 errors at random, observability is what let me trace the problem in 15 minutes instead of 3 hours. Without request IDs in the logs, I would have been guessing. With them, I could see exactly which endpoint, which user, which database query failed.

**The first production outage you debug will pay back the observability investment a hundred times over.**

### Decision 4: Caches Are Leases, Not Storage

Redis is fast. Redis is also volatile. Memcached is fast. Memcached is also volatile.

If something is in a cache, you must be able to recompute it from a more durable source. Cached data has an expiration date — sometimes one you set, sometimes one that arrives when a node restarts at 3 AM and your warm cache evaporates.

The pattern:

- Cache reads, never writes
- Always have a "compute from scratch" path
- Use TTLs aggressively — even on data you think is stable
- Invalidate by event, not by polling

In the Hospital Management System's AI Assistant, I have three cache layers (exact, semantic, result). Every single one has a TTL. Every single one has a fallback path that regenerates the data from MariaDB if the cache is empty. **The cache makes the system fast. The database makes the system correct. Never confuse the two.**

### Decision 5: Backwards Compatibility Is A Product Feature

The moment your API has its second consumer, you have entered a covenant. You cannot break the contract without notice, without versioning, without a deprecation path. Every change must be additive for at least two release cycles.

This is brutal. It feels slow. **It is the only thing that lets you ship without breaking your users.**

The patterns:

- Add new fields, never rename existing ones
- Add new endpoints, never remove old ones (deprecate, then sunset on a schedule)
- Version your APIs (/api/v1/, /api/v2/) when you must make breaking changes
- Document the deprecation in your changelog before you deploy the new version

If you must break an API, write a migration tool first. Make the migration optional for 90 days. Then make it required. Then remove the old path.

---

## Part 3: The Patterns That Earned Their Keep

These are the architectural decisions that paid for themselves the moment something went wrong.

### Pattern 1: The Event Bus

Direct service-to-service calls are simple. They're also fragile. When Service A calls Service B synchronously, A's failure rate becomes B's failure rate. Latency stacks. Coupling spreads.

The fix: put an event bus between services.

\`\`\`
Service A → publishes "user.created" event → Event Bus
                                                  ↓
                                            Service B (consumes async)
                                            Service C (consumes async)
                                            Service D (consumes async)
\`\`\`

Now A doesn't care if B is alive. A doesn't care if you add C and D later. A publishes the event and moves on.

For small systems, Redis pub/sub is enough. For larger systems, RabbitMQ, Kafka, or NATS. The technology doesn't matter as much as the discipline: **synchronous calls are for queries, asynchronous events are for state changes.**

### Pattern 2: The Idempotency Token

Every mutating API endpoint accepts a header:

\`\`\`
Idempotency-Key: a-unique-uuid-per-operation
\`\`\`

The server stores the result of every request keyed by this token. If the same token arrives twice, the server returns the cached result without re-executing the operation.

This is how Stripe handles payments. This is how every payment system worth trusting handles writes. **It should be how you handle every important mutation.**

### Pattern 3: The Circuit Breaker

When a downstream service is failing, your service has three options:

1. Keep calling it and waste resources on requests that will time out
2. Stop calling it and crash
3. **Detect the failure, stop calling for a window, then carefully retry**

Option 3 is the circuit breaker pattern. After N consecutive failures, the breaker opens. Calls fail immediately instead of waiting for timeouts. After M seconds, the breaker enters "half-open" — letting one request through. If it succeeds, the breaker closes. If it fails, the breaker stays open longer.

Libraries like resilience4j, pybreaker, or cockatiel implement this in 10 lines of config. Add it to every external service call. **Especially the ones you trust.**

### Pattern 4: The Outbox Pattern

You need to update a database AND publish an event. If you update the database first and the event publish fails, your event is lost. If you publish first and the database write fails, your event is a lie.

Two-phase commit is hard. Distributed transactions are harder. **The pattern that actually works:**

1. In a single database transaction, write your business data AND insert a row into an outbox table
2. A separate process reads the outbox table and publishes events to your event bus
3. After successful publish, the outbox row is marked as sent

This guarantees that every state change is eventually reflected in your event stream, without requiring distributed transactions.

### Pattern 5: The Saga

For multi-step workflows that touch multiple services, don't try to make them atomic. Use a saga: a series of local transactions where each step has a compensating action that can roll back the previous steps if something fails downstream.

Example: a hospital appointment booking saga

| Step | Action | Compensating Action |
|------|--------|---------------------|
| 1 | Reserve doctor's time slot | Release slot |
| 2 | Create patient encounter | Delete encounter |
| 3 | Charge insurance | Refund insurance |
| 4 | Send confirmation email | Send cancellation |

If Step 3 fails, the saga executes the compensating actions for Steps 1 and 2. **The system reaches a consistent state without distributed locks or two-phase commits.**

---

## Part 4: The Anti-Patterns That Killed My Weekends

Equally important — the patterns I've watched destroy production systems. If you're doing any of these, **stop.**

### Anti-Pattern 1: Doing Joins In Application Code

I have seen engineers pull 10,000 user records, then pull 50,000 order records, then loop through both in Python to "join" them. **The database has been doing this for 50 years.** Faster. Better. Without exhausting your memory.

Let the database do its job.

### Anti-Pattern 2: Caching Without Invalidation

A cache that never invalidates is a memory leak with extra steps. Every cached value must have either:

- A TTL (so it expires naturally)
- An invalidation event (so it expires when the source data changes)
- Both (so it expires when the data changes OR after a maximum age)

Without invalidation, you will eventually serve stale data to a user who notices and tells everyone.

### Anti-Pattern 3: Logging Sensitive Data

I have audited production logs that contained credit card numbers, JWT tokens, password reset codes, and full medical records.

**This is a breach waiting to happen.** Sanitize at the log boundary, not at the data boundary. Add a centralized PII redaction function. Run it on every log message. Audit your logs quarterly.

In CascadeX, every log statement passes through a redactor that masks email addresses, IP addresses, and authentication tokens. The cost is 2 milliseconds per log line. **The benefit is not being on the front page of TechCrunch.**

### Anti-Pattern 4: Hardcoded Configuration

If your database URL is in your code, you have already lost. Every environment-specific value belongs in environment variables. Every secret belongs in a secrets manager. **Code is for logic, configuration is for environments.**

The 12-factor app principles are 15 years old. They're 15 years old because they're still right.

### Anti-Pattern 5: The "Just A Quick Script"

Every production disaster I've witnessed started with *"I'll just write a quick script to migrate the data."* The script ran in 10 minutes on the test environment. It ran for 6 hours on production, with no progress logging, no checkpoints, no rollback plan. Someone killed it halfway through. **The data was now in three different states.**

**There is no such thing as a quick script in production.** Every operation that touches real data deserves:

- A dry-run mode that shows you what would happen
- Progress logging
- Idempotent operations (so re-running is safe)
- A rollback plan
- A code review

---

## Part 5: The Lessons That Cost Me Sleep

The painful, specific, hard-earned wisdom.

### Lesson 1: Your First Production Deployment Will Fail

It won't be a small failure. It will be a *"the entire stack is down and the only person who understands the deployment is on a plane"* failure.

The lesson is not "deploy more carefully." The lesson is **build a deployment system that can recover from failure without you**. Health checks. Auto-rollback. Blue-green deployments. Infrastructure as code.

When CascadeX first deployed to Railway, the entire backend crashed because a single Python dependency was missing from the Docker image. The fix took 20 minutes. The diagnosis took 90 minutes because I didn't have proper logs from the container startup phase. The next deployment had complete startup logging. The next failure took 8 minutes to diagnose.

### Lesson 2: Migrations Run Twice

Every database migration must be safe to run twice. **Because it will be.**

A node will restart in the middle of a migration. A CI pipeline will retry a failed deploy. A junior engineer will run the wrong command. Your migrations must be idempotent.

\`\`\`sql
-- Bad
ALTER TABLE users ADD COLUMN email VARCHAR(255);

-- Good
ALTER TABLE users ADD COLUMN IF NOT EXISTS email VARCHAR(255);
\`\`\`

Add IF NOT EXISTS everywhere. Add IF EXISTS to your DROP statements. Test your migrations by running them twice in a row on a fresh database. If they fail the second time, fix them before merging.

### Lesson 3: The Database Is Always The Bottleneck

It's not your application server. It's not the network. It's not Python being slow. **It's almost always the database.**

Profile your slow endpoints. You will find:

- An N+1 query problem
- A missing index
- A full table scan on a 10-million-row table
- A transaction that holds locks for 30 seconds
- An ORM that's silently doing 47 queries to render one page

The fix is almost never "scale the database vertically." The fix is almost always **"fix the queries."**

### Lesson 4: Stateless Services, Stateful Databases

Your application servers should be cattle, not pets. If one dies, another one comes up to replace it instantly. No state lives on disk. No state lives in process memory. **All state lives in the database, the cache, or external storage.**

This is what lets you scale horizontally. This is what lets you deploy without downtime. This is what lets you sleep at night.

### Lesson 5: Build For The 1% Failure Case

Networks fail. Disks fail. RAM fails. Power fails. AWS regions fail.

Your code will run inside a chaos monkey. Plan for it.

Every external call has a timeout. Every retry has a backoff. Every queue has a dead-letter destination. Every batch has a checkpoint. Every long operation can be resumed.

This sounds like over-engineering until 3 AM on Black Friday when AWS us-east-1 starts dropping packets and your system either degrades gracefully or **catches fire spectacularly.**

---

## Part 6: The Skills That Aren't In Job Descriptions

The non-obvious skills that separate engineers who ship from engineers who debate.

### Skill 1: Reading Other People's Code

Most engineers can write code. **Few can read code.** When you're debugging a production issue at 2 AM, the bottleneck is how fast you can understand 5,000 lines of unfamiliar code in a stack trace.

Practice reading open source projects. Practice reading legacy code. Practice tracing a request from API endpoint to database query and back. The faster you read, the faster you fix.

### Skill 2: Writing Postmortems Without Blame

Every production incident is a gift. It teaches you something about your system. **But only if you extract the lesson honestly.**

A good postmortem:

- States the timeline of events factually
- Identifies the root cause (the actual root cause, not the symptom)
- Lists action items with owners and dates
- **Names no individuals as the cause**

A bad postmortem assigns blame. The result is engineers hide mistakes. The system becomes less safe, not more.

### Skill 3: Saying No

The most powerful word in engineering is **"no."** No to feature creep. No to scope expansion. No to "can you just add this one thing?" No to architectures you don't believe in.

You cannot ship everything. You can only ship the right things. **The art of engineering is choosing.**

### Skill 4: Documenting Your Decisions

The code shows what you did. **Only documentation shows why.**

Write Architecture Decision Records (ADRs) — short markdown files that capture:

- The context (what problem were you solving)
- The decision (what you chose)
- The alternatives (what you considered and rejected)
- The consequences (what this commits you to)

Future you will thank present you. Future teammates will worship you.

### Skill 5: Knowing When To Stop

Perfect is the enemy of shipped. Your first version will be wrong. Your second version will be less wrong. Your tenth version might be right.

Ship the first version. Listen to your users. Iterate. **A system in production teaches you more in a week than six months of architecture diagrams.**

---

## Part 7: The Closing Truth

System design isn't about drawing boxes on a whiteboard. It's about the decisions you'll live with for the next five years.

Every shortcut you take today becomes a tax your team pays forever. Every pattern you establish becomes the foundation that future features must build on. Every assumption you bake in becomes a constraint that shapes everything downstream.

This is why senior engineers seem cautious. It's not because they don't know how to write code fast. It's because they've seen what happens when you ship too fast without thinking. They've been the person who has to migrate a billion rows because of a schema decision someone made in 2019 over coffee.

**Build like someone will maintain this code at 3 AM during an outage. Because someone will. And eventually, that someone will be you.**

---

## Try It Yourself

Take one of your existing prototypes. Pick a single endpoint. Now answer:

- Is the data model normalized?
- Is the write idempotent?
- Is the read cached safely?
- Are the logs structured?
- Is the deployment automated?
- Can you roll back in one command?

If you can't answer "yes" to all six, **you have a prototype. Not a system.** That's fine — but know which one you have, and choose deliberately when you cross the line.

---

## Try It

These notes came from shipping production systems across cybersecurity, healthcare, and enterprise SaaS. The patterns work. The anti-patterns hurt. **The lessons cost me weeks of weekends.**

Steal them all. Save your own weekends.

Built solo. Deployed in production. Survived contact with reality.

— Rohith`,
    date: "2026-06-19",
    readTime: "18 min read",
    category: "Engineering",
    tags: ["System Design", "Architecture", "Scaling", "Backend", "Production", "Patterns", "Anti-Patterns", "Distributed Systems", "DevOps"],
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
  { label: "Years Coding", value: "2+", icon: "code" },
  { label: "Coffee Cups", value: "∞", icon: "coffee" },
];
