import joblib
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI()
MODEL_PATH = 'model/rf_model.joblib'
model = None

class Input(BaseModel):
    input: list

@app.on_event('startup')
def load_model():
    global model
    model = joblib.load(MODEL_PATH)

@app.post('/predict')
def predict(data: Input):
    x = np.array(data.input).reshape(1, -1)
    y = model.predict(x).tolist()
    return {'prediction': y}
