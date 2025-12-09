# MLOps Deployment Demo

This is a minimal demo that shows: training and logging with MLflow, exporting a model artifact, and serving the model with FastAPI inside Docker.

Structure:

- `train.py` — trains a small sklearn model on synthetic data, logs metrics and model to MLflow.
- `serve.py` — FastAPI app that loads the MLflow model and serves predictions at `/predict`.
- `Dockerfile` — container for the FastAPI model server.
- `requirements.txt` — Python dependencies.

Run locally (quick start):

1. Start MLflow server (optional) or use local filesystem tracking:

```bash
pip install -r requirements.txt
python train.py --tracking-uri ./mlruns
```

2. Start the server (after `train.py` saves the model to `model/`):

```bash
uvicorn serve:app --reload --port 8000
```

3. POST to `http://localhost:8000/predict` with JSON body `{ "input": [0.1, 0.2, 0.3] }` to get a prediction.
