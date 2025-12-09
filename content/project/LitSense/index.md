---
title: "LitSense: Semantic Literature Recommendation System"
date: 2025-10-01
external_link: https://huggingface.co/spaces/haripriyad/LitSense
tags:
  - LLM
  - FAISS
  - Retrieval
  - HuggingFace
featured: true
image:
  filename: "/media/litsense_demo.svg"

---

Sep 2025 - Oct 2025

Developed a content-based semantic literature recommender using a large language model for embedding generation and FAISS for fast nearest-neighbor retrieval. The tool supports multilingual queries and genre filters.

Highlights:

- **Approach:** Generated dense embeddings using an LLM (GPT-3.5 embeddings / similar) and indexed papers with FAISS for sub-second retrieval over the corpus.
- **Evaluation:** Manual precision evaluation reported ~95% relevance in top-5 results (human-evaluated on a curated validation set).
- **Features:** Genre filters, multilingual query support (via LLM prompt templates), and similarity scoring thresholds for fine-grained ranking.
- **Deployment:** Hosted as a Hugging Face Space for interactive demos; repo and demo linked in the external link. Tracking experiments and hyperparameters with Weights & Biases.

Demo: https://huggingface.co/spaces/haripriyad/LitSense

<!--more-->
