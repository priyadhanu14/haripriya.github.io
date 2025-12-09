---
title: "Neural Brain Graph Analysis for Burst-Trigger Pattern Detection (Thesis / Preprint)"
authors:
  - Haripriya Dhanasekaran
  - Michael Stiber
publishDate: '2025-01-01'
publication_types: ['preprint']
publication: 'Technical Report / Thesis'
tags:
  - Graph Neural Networks
  - Spiking Neural Networks
  - PyTorch Geometric
  - MLOps
external_link: https://github.com/priyadhanu14/GNN-Spiking-Neural-Networks
featured: true
---

**Status:** Thesis archived in ProQuest; manuscript submitted to IJCNN (WCCI) 2026 for peer review. A reproducible codebase and evaluation notebooks are available at the linked repository.

Abstract: |
  We present a graph-based method for identifying burst-trigger patterns in large-scale spike-train recordings. The approach models neurons and short temporal windows as graph nodes and uses message-passing GNNs to detect coordinated burst events. Experiments on datasets totaling over 5M temporal events across 500+ recorded neurons show 90% detection accuracy and F1≈0.88, improving ≈12 percentage points over RNN baselines. The pipeline includes parallel ETL (Dask), mixed-precision training (PyTorch Lightning), and experiment tracking (Weights & Biases / MLflow) to ensure reproducibility and scalability.

Methods & Resources:
- Code: https://github.com/priyadhanu14/GNN-Spiking-Neural-Networks
- Thesis: University of Washington ProQuest archive (available on request)
- Dataset: Experimental spike-train recordings (processed); contact for access

- Video demo (short): `/media/thesis_demo_thumbnail.svg`  <!-- Replace with YouTube or mp4 when available -->

<!-- Add links to PDFs, slides, poster or supplemental materials below if desired -->
