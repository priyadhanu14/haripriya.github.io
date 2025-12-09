---
title: "Multi-Agent Conversational AI for Restaurant Ordering"
date: 2025-12-01
external_link: https://github.com/priyadhanu14/Multi-Agent_Restaurant_Chatbot
tags:
  - OpenAI Agent SDK
  - Conversational AI
  - PostgreSQL
  - Agentic AI
  - Production
featured: true
image:
  filename: "/media/multi_agent_demo.svg"

---

Nov 2025 - Dec 2025

Engineered an end-to-end multi-agent conversational AI system using the OpenAI Agent SDK and Python to enable natural-language restaurant menu browsing and order placement.

Highlights:

- **Agent architecture:** Designed an orchestration layer with specialized agents for menu recommendations, order validation, inventory checking, and payment processing. The orchestrator routes user intents to the appropriate agent and maintains conversational context.
- **Backend & persistence:** Implemented PostgreSQL integration for persistent order management, menu and inventory storage, and order history. Real-time inventory tracking ensured correct availability during the ordering flow.
- **Tech stack:** OpenAI Agent SDK, Python (FastAPI for API layer), PostgreSQL (psycopg2 / SQLAlchemy), Redis for ephemeral session state, Docker for containerization.
- **Production readiness:** Containerized services, designed logging and observability, and demonstrated agentic patterns for modular, testable agent components suitable for deployment.
- **Reproducibility:** Code and deployment instructions available on GitHub; includes Dockerfiles and example Postgres schema.

Repository: https://github.com/priyadhanu14/Multi-Agent_Restaurant_Chatbot

<!--more-->
