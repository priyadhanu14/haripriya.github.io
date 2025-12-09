---
title: "MLOps Deployment Demo — Model Serving & Tracking"
date: 2025-12-01
external_link: https://github.com/priyadhanu14/mlops-deployment-demo
tags:
  - MLOps
  - MLflow
  - Docker
  - Deployment
  - FastAPI
featured: true
image: /media/mlops_demo.svg
---

A small end-to-end demo demonstrating model training, experiment tracking (MLflow), containerized serving, and a minimal monitoring checklist.

Highlights:

- Training script logs experiments to MLflow and saves a serialized model artifact.
- A FastAPI-based prediction service loads the model artifact and exposes a `/predict` endpoint.
- Dockerfile included for reproducible container builds and deployment; example `docker-compose.yml` demonstrates running MLflow server + model service.
- CI/CD notes: a GitHub Actions workflow example is included to show how to build, test, and publish the Docker image.

Repository scaffold (created under `/project_demo_mlops`): simple `train.py`, `serve.py` (FastAPI), `Dockerfile`, `requirements.txt`, and `README.md`.

Demo repo: https://github.com/priyadhanu14/mlops-deployment-demo

<!--more-->
