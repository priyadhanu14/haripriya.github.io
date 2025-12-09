---
title: Neural Brain graph analysis for Burst trigger pattern
date: 2025-01-01
external_link: https://github.com/priyadhanu14/GNN-Spiking-Neural-Networks 
tags:
  - PyTorch Geometric, Graph neural Networks, spatio-temporal analysis
featured: true
image:
  filename: "/media/neural_graph_demo.svg"

---

Status: Completed (Thesis project). Manuscript submitted to IJCNN (WCCI) 2026; thesis available on ProQuest.

Developed a sub-graph classifier using Graph Neural Networks that identifies network burst patterns with a 90% detection accuracy.

Key details:

- **Dataset & scale:** Processed and analyzed >5M temporal events collected from 500+ neurons across multiple experimental sessions (preprocessed and stored on S3-compatible storage).  
- **Model & tooling:** Implemented using PyTorch, PyTorch Geometric and PyTorch Lightning. Data preprocessing and parallel ETL pipelines built with Dask and Python multiprocessing.  
- **MLOps & tracking:** Experiment tracking with Weights & Biases and MLflow; model checkpointing and mixed-precision training for faster iterations.  
- **Performance:** 90% detection accuracy on held-out test sets; F1 ≈ 0.88; ~12% absolute improvement over RNN baselines (same training/validation splits).  
- **Systems impact:** Parallelized pipeline reduced preprocessing time from ~3 hours to ~1.5 hours on multi-node runs.  
- **Reproducibility:** Code, trained checkpoints and evaluation notebooks available in the repository linked above; Dockerfile included for reproducible environments.  

Comparison to baselines: evaluated against standard RNN and CNN baselines (same feature pipeline); GNNs produced superior temporal-spatial pattern detection, especially for multi-neuron coordinated bursts.

<!--more-->

<!--more-->
