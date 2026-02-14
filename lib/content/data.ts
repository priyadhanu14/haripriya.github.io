import type { SiteContent } from "@/lib/content/types";
import { withBasePath } from "@/lib/utils/paths";

export const siteContent: SiteContent = {
  profile: {
    fullName: "Haripriya Dhanasekaran",
    headline: "Applied AI Engineer & Researcher | Backend Systems",
    bioShort:
      "I build reliable AI products end-to-end, from experimentation to scalable backend deployment. My work blends applied research, distributed systems thinking, and production-focused engineering.",
    email: "haripriyadhanasekaran14@gmail.com",
    linkedin: "https://www.linkedin.com/in/haripriyadhanasekaran14",
    github: "https://github.com/priyadhanu14",
    resumeUrl: withBasePath("/resume.pdf")
  },
  work: [
    {
      slug: "callsphere-voice-agent-platform",
      title: "Voice Agent Platform for Customer Support",
      category: "project",
      start: "2025-09",
      end: "present",
      summary:
        "Built and shipped Python/FastAPI services powering an end-to-end voice agent pipeline (Twilio -> ASR -> LLM -> TTS) with strong reliability safeguards.",
      role: "AI Engineer Intern, CallSphere LLC",
      stack: ["Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "LangChain", "FAISS", "OpenAI SDK"],
      outcomes: [
        "Reduced p95 latency by 40% in internal testing while handling 1000+ concurrent calls.",
        "Ran 50+ RAG evaluations and improved retrieval quality using embeddings, reranking, and SQL-based joins.",
        "Improved reliability for high-throughput traffic with caching, retries, and fault isolation."
      ],
      proofLinks: [
        { label: "GitHub Profile", url: "https://github.com/priyadhanu14" }
      ],
      confidential: false
    },
    {
      slug: "uw-gnn-burst-analysis",
      title: "Scalable GNN Burst Analysis for Neural Data",
      category: "research",
      start: "2024-01",
      end: "2025-08",
      summary:
        "Developed scalable graph-learning pipelines for 10,000+ neurons and 5TB+ HDF5 time-series data in a university research lab setting.",
      role: "ML Researcher, University of Washington Bothell",
      stack: ["PyTorch Geometric", "Dask", "MPI", "HDF5", "MLflow", "Linux", "GPU"],
      outcomes: [
        "Achieved 95% F1 on supervised neural burst analysis tasks.",
        "Reduced pipeline processing time from ~12 hours to ~85 minutes using distributed multi-GPU workflows.",
        "Tracked 100k+ experiment metrics across 180+ runs to improve reproducibility."
      ],
      proofLinks: [{ label: "Lab", url: "https://depts.washington.edu/biocomp/index.html" }],
      confidential: false
    },
    {
      slug: "renault-hvac-prediction",
      title: "HVAC Compressor Load Prediction",
      category: "project",
      start: "2021-09",
      end: "2022-03",
      summary:
        "Built regression models for automotive HVAC compressor load under real-world drive cycles and packaged experimentation workflows for repeatable deployment.",
      role: "Machine Learning Engineer, Renault Nissan Technology & Business Centre",
      stack: ["XGBoost", "Scikit-learn", "Python", "Docker", "Git"],
      outcomes: [
        "Reached R² of 0.914 and improved MAE by ~35% (RMSE by ~18%) over baseline approaches.",
        "Built an internal AutoML-style experimentation workflow and saved 20+ developer hours."
      ],
      proofLinks: [{ label: "GitHub Profile", url: "https://github.com/priyadhanu14" }],
      confidential: false
    },
    {
      slug: "ai-vuln-detection",
      title: "AI-Powered Vulnerability Detection",
      category: "project",
      start: "2025-01",
      end: "2025-05",
      summary:
        "Designed an LLM-assisted secure code analysis system combining AST graph features and text context for vulnerability detection.",
      role: "Project Lead",
      stack: ["Hugging Face", "RAG", "LLMs", "Python", "AST Analysis"],
      outcomes: [
        "Reached 85% precision on CWE-style vulnerability detection datasets.",
        "Analyzed 5,000+ LOC with under 2-second latency in benchmark flows."
      ],
      proofLinks: [{ label: "GitHub", url: "https://github.com/priyadhanu14" }],
      confidential: false
    },
    {
      slug: "deep-agent-system",
      title: "Deep Agent (Multi-Agent Orchestration)",
      category: "project",
      start: "2024-11",
      end: "2025-02",
      summary:
        "Built a multi-agent orchestration setup that parallelized web tasks and automated report generation for faster research-style workflows.",
      role: "Project Contributor",
      stack: ["OpenAI APIs", "Agent Orchestration", "Python"],
      outcomes: [
        "Orchestrated 5 parallel agents and generated 1,000+ reports in under 5 minutes.",
        "Delivered significantly faster turnaround compared to manual baseline workflows."
      ],
      proofLinks: [{ label: "GitHub", url: "https://github.com/priyadhanu14" }],
      confidential: false
    },
    {
      slug: "parallel-tsp-solver",
      title: "Parallelized TSP Solver (Distributed Optimization)",
      category: "project",
      start: "2024-03",
      end: "2024-06",
      summary:
        "Implemented a distributed optimization solver using simulated annealing across Spark + MPI infrastructure.",
      role: "Project Contributor",
      stack: ["Java", "Spark", "MPI", "AWS EC2", "SSH"],
      outcomes: [
        "Cut compute time by ~50% on a 16-node EC2 cluster.",
        "Demonstrated scalable performance gains for large combinatorial optimization runs."
      ],
      proofLinks: [{ label: "GitHub", url: "https://github.com/priyadhanu14" }],
      confidential: false
    }
  ],
  experience: [
    {
      title: "AI Engineer Intern",
      organization: "CallSphere LLC",
      start: "2025-09",
      end: "present",
      summary:
        "Built scalable backend APIs and voice-agent infrastructure using FastAPI, AWS, RAG, and production-minded reliability practices."
    },
    {
      title: "ML Researcher",
      organization: "Biocomputing and Data Science Lab, University of Washington Bothell",
      organizationUrl: "https://depts.washington.edu/biocomp/index.html",
      start: "2024-01",
      end: "2025-08",
      summary:
        "Led model development and distributed experimentation for neural burst analysis, improving performance and throughput at research scale."
    },
    {
      title: "Machine Learning Engineer",
      organization: "Renault Nissan Technology & Business Centre",
      start: "2021-09",
      end: "2022-03",
      summary: "Built predictive HVAC models and repeatable ML workflows for engineering use in automotive production settings."
    },
    {
      title: "Master's in Computer Science & Software Engineering",
      organization: "University of Washington Bothell",
      start: "2023-08",
      end: "2025-08",
      summary: "Graduate focus on AI systems, distributed machine learning, and production-grade software engineering."
    }
  ],
  skills: [
    "Python",
    "Java",
    "TypeScript",
    "FastAPI",
    "OpenAI SDK",
    "LangChain",
    "RAG Systems",
    "PyTorch Geometric",
    "XGBoost",
    "Scikit-learn",
    "Dask / MPI",
    "MLflow",
    "AWS (EC2)",
    "Docker",
    "PostgreSQL",
    "FAISS",
    "Spark",
    "CI/CD"
  ]
};
