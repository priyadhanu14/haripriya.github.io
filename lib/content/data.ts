import type { SiteContent } from "@/lib/content/types";

export const siteContent: SiteContent = {
  profile: {
    fullName: "Haripriya",
    headline: "Applied AI Engineer focusing in backend systems",
    bioShort:
      "I build dependable AI-enabled products with backend-first architecture and a research + engineering mindset. My work balances experimentation with production readiness.",
    email: "you@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    resumeUrl: "/resume.pdf"
  },
  work: [
    {
      slug: "multimodal-support-assistant",
      title: "Multimodal Support Assistant",
      category: "project",
      start: "2025-04",
      end: "2025-08",
      summary:
        "Designed a production-ready support assistant with retrieval-augmented responses and confidence-aware routing.",
      role: "Applied AI Engineer",
      stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "LangChain"],
      outcomes: [
        "Reduced median resolution time by 31% in pilot use.",
        "Implemented fallback policies that protected answer quality under uncertain predictions."
      ],
      proofLinks: [
        { label: "GitHub", url: "https://github.com/your-username/support-assistant" }
      ],
      confidential: false
    },
    {
      slug: "adaptive-retrieval-research",
      title: "Adaptive Retrieval for Low-Resource Queries",
      category: "research",
      start: "2024-09",
      end: "2025-01",
      summary:
        "Investigated adaptive chunking and hybrid ranking for domain-specific retrieval quality under sparse data constraints.",
      role: "Research Engineer",
      stack: ["PyTorch", "SentenceTransformers", "FAISS", "Weights & Biases"],
      outcomes: [
        "Improved top-3 retrieval relevance by 18% over baseline.",
        "Produced a reproducible evaluation harness for rapid ablations."
      ],
      proofLinks: [{ label: "Paper", url: "https://arxiv.org/abs/0000.00000" }],
      confidential: false
    },
    {
      slug: "systems-design-hackathon",
      title: "Real-Time Incident Triage (Hackathon Winner)",
      category: "hackathon",
      start: "2024-02",
      end: "2024-02",
      summary:
        "Built an event-stream triage service that prioritizes critical infrastructure alerts with explainable scoring.",
      role: "Backend + ML Lead",
      stack: ["Node.js", "Kafka", "Docker", "Scikit-learn"],
      outcomes: [
        "Won 1st place for reliability and practical incident response value.",
        "Delivered end-to-end demo with dashboard and API within 36 hours."
      ],
      proofLinks: [{ label: "Demo", url: "https://example.com/demo" }],
      confidential: false
    },
    {
      slug: "predictive-maintenance-competition",
      title: "Predictive Maintenance Challenge",
      category: "competition",
      start: "2023-10",
      end: "2023-12",
      summary:
        "Built a feature-rich model pipeline to predict equipment failures using telemetry and maintenance logs.",
      role: "Data/ML Engineer",
      stack: ["Python", "XGBoost", "Pandas", "MLflow"],
      outcomes: [
        "Placed in top 8% leaderboard ranking.",
        "Documented error analysis that improved calibration for rare failures."
      ],
      proofLinks: [{ label: "Certificate", url: "https://example.com/certificate" }],
      confidential: false
    },
    {
      slug: "ta-distributed-systems",
      title: "Teaching Assistant - Distributed Systems",
      category: "teaching",
      start: "2022-08",
      end: "2023-05",
      summary:
        "Supported course delivery for distributed systems labs, debugging sessions, and student project architecture reviews.",
      role: "Teaching Assistant",
      stack: ["Go", "Docker", "Kubernetes", "gRPC"],
      outcomes: [
        "Mentored 70+ students across labs and project checkpoints.",
        "Introduced structured rubrics that improved project feedback consistency."
      ],
      proofLinks: [{ label: "Course Site", url: "https://example.edu/course" }],
      confidential: false
    },
    {
      slug: "enterprise-research-pilot",
      title: "Enterprise Knowledge Pilot (Confidential)",
      category: "project",
      start: "2025-09",
      end: "present",
      summary:
        "Delivered a secure knowledge workflow with retrieval and policy-driven response controls for regulated internal teams.",
      role: "Applied AI Engineer",
      stack: ["Python", "FastAPI", "Azure", "Vector DB"],
      outcomes: [
        "Established audit-friendly response flow with traceability.",
        "Defined deployment runbooks for secure operational handoff."
      ],
      proofLinks: [{ label: "Public-safe Summary", url: "https://example.com/case-summary" }],
      confidential: true
    }
  ],
  experience: [
    {
      title: "Applied AI Engineer",
      organization: "Current Team / Organization",
      start: "2025-01",
      end: "present",
      summary: "Building backend-centric AI systems with measurable product impact."
    },
    {
      title: "Research Engineer",
      organization: "University Lab",
      start: "2024-01",
      end: "2024-12",
      summary: "Focused on retrieval, evaluation workflows, and practical model experimentation."
    },
    {
      title: "Bachelors in Engineering",
      organization: "Your University",
      start: "2019-08",
      end: "2023-05",
      summary: "Built foundations in software systems, machine learning, and collaborative problem-solving."
    }
  ],
  skills: [
    "Python",
    "TypeScript",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS/Azure",
    "PyTorch",
    "LangChain",
    "CI/CD"
  ]
};
