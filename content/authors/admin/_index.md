---
interests:
  - Artificial Intelligence / Machine Learning
  - Explainable AI
  - Computational Neuroscience
  - MLOps


education:
  - area: MS Computer Science & Software Engineering
    institution: University of Washington Bothell
    date_start: 2023-09-20
    date_end: 2025-08-22         # program end on I-20
    summary: |
      **Thesis** – *Graph Neural Networks for Burst-Trigger Pattern Detection in Large-Scale Spike-Train Data*  
      • **Status:** Expected graduation August 2025; thesis archived in ProQuest (University of Washington).  
      • **Advisor:** Prof. Michael Stiber  
      • **GPA:** 3.95/4.0
      • **Coursework highlights:** Parallel Programming, Computer Vision, Machine Learning, Advanced Data Structures, Deep Learning, Natural Language Processing, Reinforcement Learning, Distributed Systems
      • Teaching Assistant for Java & Data-Structures labs
    # button:
    #   text: "View Thesis Proposal"
    #   url: "https://your-thesis-link.com"

  - area: BE Computer Science & Engineering
    institution: Anna University, India
    date_start: 2019-07-19
    date_end: 2023-05-31
    summary: |
      GPA: 3.65/4.0

      Key projects:
      - Vulnerability Detection in Software Code using Deep Neural Network
      - Automated Laboratory Test Analysis using Image Processing

work:
  - position: Teaching Assistant – Java & Data Structures
    company_name: University of Washington Bothell
    company_url: "https://www.uwb.edu"
    company_logo: ""
    date_start: 2024-09-01
    date_end: 2025-08-22        # present (use ISO date for Hugo parsing)
    summary: |2-
      - Computer Programming in JAVA
      - Conduct weekly lab sessions, grading, and one-on-one tutoring for ~80 students

  - position: Graduate ML Researcher
    company_name: Intelligent Networks Lab, University of Washington Bothell
    company_url: "https://depts.washington.edu/biocomp/"
    date_start: 2024-01-01
    date_end: 2025-08-22
    summary: |2-
      - **Research focus:** Developed Graph Neural Network models for spike-train analysis using the PyTorch ecosystem (PyTorch, PyTorch Geometric, PyTorch Lightning).\
      - **Dataset & scale:** Processed and analyzed >5M temporal events across 500+ neurons (held-out test splits used for evaluation).\
      - **Model performance:** Achieved 90% burst-trigger pattern detection accuracy (≈12% absolute improvement over RNN baselines); strong precision/recall trade-offs observed on held-out test sets.\
      - **Systems & tooling:** Implemented optimized data loaders, mixed-precision training, and model checkpointing with PyTorch Lightning; used Dask and multiprocessing for parallel ETL, reducing preprocessing latency by ~50%.\
      - **Explainability & collaboration:** Integrated SHAP and attention-based explanations for model interpretability, enabling actionable insights for neuroscience collaborators.\
      - **Dissemination:** Thesis published in ProQuest; manuscript in preparation and submitted for IJCNN (WCCI) 2026 review.

  - position: Machine Learning Engineer Intern
    company_name: Renault Nissan Technology & Business Centre India
    company_url: "https://rntbci.in/"
    date_start: 2021-09-01
    date_end: 2022-03-31
    summary: |2-
      - **Modeling:** Analyzed raw vehicle sensor telemetry and trained ensemble models (Decision Trees, Random Forests) on >10K records to predict component anomalies.
      - **Metrics & Validation:** Adopted 5-fold stratified cross-validation; achieved ROC-AUC 0.95 on held-out data and high average precision, demonstrating robust detection performance.
      - **Operationalization:** Packaged model as a Docker container and integrated into the QA pipeline for nightly batch inference; alerted engineers to flagged units, reducing downstream failure rates.
      - **Impact:** Contributed to optimizations in power consumption and engine diagnostics by surfacing early-failure signals to the engineering team.
      
  - position: Web Development Engineer Intern
    company_name: Loyola‑ICAM College of Engineering & Technology
    company_url: "https://licet.ac.in/"
    date_start: 2021-08-01
    date_end: 2022-09-01
    summary: |2-
      Co‑built a student portal (React, Node, Express, SQL) used by 5 000+ users; improved query performance for 10 k+ records.

## Skills
skills:
  - name: Programming Languages
    items:
      - name: Python
        description: "Expert: NumPy, Pandas, typing"
        percent: 95
        icon: code-bracket
      - name: C++
        description: "Performance-oriented code, basic systems integration"
        percent: 60
        icon: code-bracket
      - name: Java
        description: "Data structures, concurrent programming"
        percent: 90
        icon: code-bracket
      - name: SQL
        description: "Query optimization, indexing, schema design"
        percent: 85
        icon: code-bracket

  - name: ML & Deep Learning Frameworks
    items:
      - name: PyTorch Ecosystem
        description: "PyTorch, PyTorch Geometric, PyTorch Lightning"
        percent: 95
        icon: chart-network
      - name: TensorFlow & JAX
        description: "TensorFlow, Keras, JAX (working knowledge)"
        percent: 70
        icon: chart-network
      - name: ML Libraries
        description: "scikit-learn, XGBoost, LightGBM"
        percent: 85
        icon: chart-network
      - name: Modern Architectures
        description: "Transformers, Attention, Graph Neural Networks"
        percent: 85
        icon: chart-network

  - name: MLOps & Infrastructure
    items:
      - name: Containerization & Orchestration
        description: "Docker, Kubernetes (basic)"
        percent: 80
        icon: server
      - name: Experiment Tracking & Model Ops
        description: "Weights & Biases, MLflow, model versioning"
        percent: 80
        icon: server
      - name: CI/CD & Monitoring
        description: "GitHub Actions, basic model monitoring"
        percent: 70
        icon: server

  - name: Cloud & Distributed Systems
    items:
      - name: Cloud Platforms
        description: "AWS (S3, EC2), GCP basics"
        percent: 70
        icon: cloud
      - name: Distributed Computing
        description: "Dask, Ray, Spark (basics)"
        percent: 75
        icon: cloud

  - name: Tools & Versioning
    items:
      - name: Version Control
        description: "Git, DVC (data versioning)"
        percent: 90
        icon: git-branch
      - name: Dev Tools
        description: "Bash, Make, Dockerfiles"
        percent: 85
        icon: code

  # - name: Hobbies
  #   color: "#eeac02"
  #   color_border: "#f0bf23"
  #   items:
  #     - name: Cooking (non-veg specialties)
  #       description: "Chicken Chettinad, biryani experiments"
  #       percent: 100
  #       icon: fork-knife
  #     - name: Hiking
  #       description: "PNW trails & weekend summit goals"
  #       percent: 70
  #       icon: person-simple-walk
  #     - name: Photography
  #       description: "Landscape & astrophotography"
  #       percent: 80
  #       icon: camera


languages:
  - name: English
    percent: 100


# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
# awards:
#   - title: Neural Networks and Deep Learning
#     url: https://www.coursera.org/learn/neural-networks-deep-learning
#     date: '2023-11-25'
#     awarder: Coursera
#     icon: coursera
#     summary: |
#       I studied the foundational concept of neural networks and deep learning. By the end, I was familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.
#   - title: Blockchain Fundamentals
#     url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
#     date: '2023-07-01'
#     awarder: edX
#     icon: edx
#     summary: |
#       Learned:
#       - Synthesize your own blockchain solutions
#       - Gain an in-depth understanding of the specific mechanics of Bitcoin
#       - Understand Bitcoin’s real-life applications and learn how to attack and destroy Bitcoin, Ethereum, smart contracts and Dapps, and alternatives to Bitcoin’s Proof-of-Work consensus algorithm
#   - title: 'Object-Oriented Programming in R'
#     url: https://www.datacamp.com/courses/object-oriented-programming-with-s3-and-r6-in-r
#     certificate_url: https://www.datacamp.com
#     date: '2023-01-21'
#     awarder: datacamp
#     icon: datacamp
#     summary: |
#       Object-oriented programming (OOP) lets you specify relationships between functions and the objects that they can act on, helping you manage complexity in your code. This is an intermediate level course, providing an introduction to OOP, using the S3 and R6 systems. S3 is a great day-to-day R programming tool that simplifies some of the functions that you write. R6 is especially useful for industry-specific analyses, working with web APIs, and building GUIs.
---

## About Me

Haripriya Dhanasekaran bridges computational neuroscience and production-scale machine learning systems. She recently completed her MS thesis at the University of Washington Bothell, where she engineered Graph Neural Network models to detect burst-trigger patterns in spike-train recordings. Her thesis-scale system processed over 5 million temporal events across 500+ neurons and achieved 90% detection accuracy (≈12% absolute improvement over RNN baselines). The project also delivered a 50% reduction in data-processing latency through multi-node, parallelized ETL pipelines.

Her work uniquely combines scientific rigor (interpretable GNNs, SHAP-based explanations) with systems engineering (PyTorch, PyTorch Geometric, Dask for parallel pipelines, and model optimization). Outside research, she mentors 80+ students as a Java & Data-Structures teaching assistant.
