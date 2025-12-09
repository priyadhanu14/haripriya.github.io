import os
import argparse
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score
import joblib
import mlflow


def generate_data(n=1000, d=10):
    X = np.random.randn(n, d)
    y = (X.sum(axis=1) + np.random.randn(n) * 0.5 > 0).astype(int)
    return X, y


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--tracking-uri', default='file:./mlruns')
    parser.add_argument('--model-dir', default='model')
    args = parser.parse_args()

    mlflow.set_tracking_uri(args.tracking_uri)
    mlflow.set_experiment('mlops-demo')

    X, y = generate_data(2000, 16)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    with mlflow.start_run() as run:
        clf = RandomForestClassifier(n_estimators=50, random_state=42)
        clf.fit(X_train, y_train)
        preds = clf.predict(X_test)
        acc = accuracy_score(y_test, preds)
        f1 = f1_score(y_test, preds)

        mlflow.log_metric('accuracy', acc)
        mlflow.log_metric('f1', f1)

        os.makedirs(args.model_dir, exist_ok=True)
        joblib.dump(clf, os.path.join(args.model_dir, 'rf_model.joblib'))
        mlflow.log_artifact(os.path.join(args.model_dir, 'rf_model.joblib'))

        print(f"Saved model with acc={acc:.3f}, f1={f1:.3f}")
