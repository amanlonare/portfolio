export const CHATBOT_CONTEXT = `
Name: Aman Lonare
Role: Senior AI Engineer / Entrepreneur / Senior ML Engineer

# About
I am a Senior AI Engineer specializing in building production-grade ML and LLM systems. With over 5 years of experience, I focus on end-to-end AI platforms, including scalable RAG systems, agentic workflows (LangGraph), and MLOps (AWS SageMaker). I bridge the gap between cutting-edge research and reliable, high-performance deployment.

# Technical Skills
- Programming & Dev: Python, Go, SQL, Bash, Dart, React, FastAPI, Flask, Cursor, Claude Code
- AI & ML: TensorFlow, PyTorch, Hugging Face, ETL Pipelines, A/B Testing, RLHF, DSPy, PydanticAI
- LLM & Agents: LangGraph, RAG, Context Engineering, Agentic AI, MCP, Vector/Graph DB (Pinecone, Neo4j, ChromaDB), DPO/PEFT, OpenAI/Anthropic/Bedrock
- MLOps & Cloud: AWS (SageMaker, Bedrock, EMR, SageMaker DDP), MLflow, Airflow, Kubernetes, Docker, Terraform, CI/CD, LangSmith, Langfuse
- Tools: Vercel, Apache Spark, Flutter, Git
- Languages: English (Fluent), Hindi (Fluent), Japanese (N5, N4 candidate [06/2026])

# Professional Experience
1. AI Engineer at Archetype Studio (Aug 2023 - Present)
   - Multi-Agent Orchestration: Architected a system using LangGraph and AWS Bedrock with a hierarchical Supervisor-Worker pattern for Planning, Coder, Ops, Researcher, and Growth agents.
   - Advanced RAG: Engineered layout-aware chunking (Docling, Tree-sitter) for 5K+ PDFs/code. Built hybrid RAG using Pinecone & Neo4j with dependency-aware context expansion and cross-encoder reranking. 
   - RAG Evaluation: Achieved 92% faithfulness and context recall using RAGAS. Integrated Langfuse for observability.
   - MLOps & Production: Scaled a mobile model platform to 1M+ daily predictions (500K users) using SageMaker. Achieved 40% faster training via SageMaker DDP and 50% faster incident response with Model Monitor.
   - Edge AI: Developed an iOS transportation mode detection system (99.3% accuracy) using Flutter/m2cgen, reducing AWS costs by 70%.

2. AI Engineer (Founding Team) at MindYogi.me (Dec 2025 - Jan 2026)
   - Agentic RAG: Developed a LangGraph-based RAG chatbot with self-reflective and adaptive retrieval strategies.
   - Low-Latency Voice AI: Built a voice agent achieving <2s latency using custom WebSockets, Fennec ASR, and Inworld TTS.

3. AI Engineer at Hypothesis AI (May 2025 - July 2025)
   - Voice AI: Deployed a multilingual voice agent for E-commerce abandoned checkout recovery, boosting conversions by 90%.
   - Integration: Built an event-driven framework with FastAPI connecting Shopify to Mixpanel.

4. Research Software Engineer at Hitachi R&D (Jan 2021 - July 23)
   - Distributed Systems: Developed tools for CQRS & Event Sourcing in microservices using Kafka & EventStoreDB.
   - Patent: Submitted system/method for modeling CQRS & ES based applications.

5. Research Assistant at IIT Bombay (Sept 2020 - Nov 20)
   - Geospatial AI: Developed a portal for real-time agricultural monitoring using remote sensing and satellite imagery.

# Featured Projects
- AI Agentic Doc Processor: Event-driven LlamaIndex workflow with Groq LLM for automated form extraction.
- Local Multimodal AI: Chatbot with Ollama and ChromaDB, including Whisper-based voice transcription and Streamlit UI.
- FarmGPT: MCP-driven agricultural advisor with RAG and asynchronous SSE streaming.

# Education & Publications
- M.Tech, Technology & Development, IIT Bombay (9.3/10). Focus: ML in Remote Sensing, Statistics.
- B.Tech, Mechanical Engineering, IIT Kanpur.
- Publication: "Village level identification of sugarcane in Sangali, Maharashtra..." (Journal of Agrometeorology).

# Contact
- Location: Tokyo, Japan
- LinkedIn: linkedin.com/in/aman-lonare-546229103/
- GitHub: github.com/amanlonare
- Portfolio: amanlonare.github.io

# Full Resume Text (Raw)
AMAN LONARE
Email: amanlonare95@gmail.com | Phone: +81-80-7557-2462 | Location: Tokyo, Japan
SUMMARY
AI Engineer with 5+ years of experience building production-grade ML & LLM systems. Specializes in end-to-end AI platforms, including scalable RAG systems, agentic workflows, & MLOps for reliable, high-performance deployment.
TECHNICAL SKILLS
Programming & Development: Python, Go, SQL, Bash, Dart, React, FastAPI, Flask, Cursor, Claude Code
AI and ML: TensorFlow, PyTorch, Hugging Face, ETL Pipeline, A/B Testing, RLHF, DSPy, PydanticAI
LLMs: LangGraph, RAG, Context Engineering, Agentic AI, MCP, Vector/Graph DB, DPO/PEFT, OpenAI
MLOps: AWS SageMaker & Bedrock, MLflow, Airflow, CI/CD, Model Monitoring, LLMOps, Celery, LangSmith
Cloud & Tools: Docker, Kubernetes, Terraform, AWS EMR, Git, Vercel, Apache Spark, Flutter
Communication: English (Fluent), Hindi (Fluent), Japanese (N5, N4 candidate (Expected [06/2026]))
PROFESSIONAL EXPERIENCE (5+ YEARS)
AI Engineer | Archetype Studio, JPN | Full Time Aug 2023 – Present
- Project: Multi-Agent Orchestration for End-to-End Engineering (in progress)
- Architected a production-grade multi-agent system using LangGraph and AWS Bedrock with hierarchical Supervisor-Worker orchestration for planning, coding, ops, researcher, and growth workflows
- Engineered layout-aware chunking pipeline using Docling and Tree-sitter for 5K+ PDFs & source code
- Designed hybrid RAG pipeline using Pinecone & Neo4j, combining semantic retrieval, metadata filtering, dependency-aware context expansion, & Qwen-based cross-encoder reranking to reduce hallucinations
- Built self-corrective RAG, reducing hallucinations with validation and refinement, achieving strong RAG evaluation performance using RAGAS (faithfulness: 92%, context recall: 92%) across 5K+ document dataset
- Established robust evaluation pipelines & integrated Langfuse for observability, & monitoring of agents
- Project: AI Copilot for Internal FinTech Platform (Client: Omise Japan)
- Architected & implemented core developer pipelines enabling end-to-end AI workflows, including Advanced RAG ingestion, API & schema tooling, & execution runners, leveraging deep agents for agentic workflows
- Integrated AI coding assistants into the development workflow to accelerate scaffolding and deployment
- Engineered modular prompt templates, guardrails, adapters, & test oracles for reliability & reproducibility
- Implemented observability and evaluation dashboards to track latency, errors, token usage, and success rates
- Project: Production-Scale AI System for Mobile Model Optimization & Deployment
- Deployed production ready model & AI platform, scaling to 1M+ daily predictions for 500K+ users
- Introduced MLOps culture by setting up CI/CD pipelines with Amazon SageMaker tools, reducing integration time for new models from days to hours & increasing deployment frequency from bi-annual to monthly
- Owned end-to-end system design from data ingestion to scalable model deployment & monitoring in production
- Performed feature engineering and hyperparameter tuning (SageMaker HPO) to optimize model performance
- Achieved 40% faster training speeds by implementing distributed training using SageMaker DDP
- Cut incident response time by 50% through custom monitoring system built with SageMaker Model Monitor
- Improved model accuracy by 23% & reduced corrections by 25% through semi-automated continuous retraining
- Project: AI-Driven Edge Computing System for Multi-Modal Transportation Classification
- Designed & developed an edge-based transportation mode detection system for iOS platform serving 500K+ users with 1M+ daily predictions, achieving 99.3% accuracy in classifying 15 transportation modes
- Optimized model footprint by 90% through hierarchical ML architecture while maintaining inference latency
- Built cross-platform ML pipeline with m2cgen to convert Python models to native Dart, preserving performance
- Reduced AWS costs by 70% by migrating ML inference to edge devices via Flutter implementation
- Reduced operational costs 60% by implementing local feedback caching to eliminate OpenStreetMap API calls
AI Engineer | Hypothesis AI, IND | Consulting May 2025 – July 2025
- Project: Multilingual AI Voice Agent for Abandoned Checkout Recovery in E-commerce
- Designed scalable multilingual AI voice agent using OpenAI & RAG, achieving latency in milliseconds
- Engineered multilingual (6 languages), context-aware prompts, boosting abandoned checkout recovery by 90%
- Developed event-driven integration framework with FastAPI, connecting Shopify with third party services and analytics platform (mixpanel), enabling seamless omni-channel customer engagement
AI Engineer (Founding Team) | MindYogi.me, IND | Consulting Dec 2025 – Jan 2026
- Project: Advanced RAG-Enabled Chatbot and Voice Interface for Personalized Wellness Content
- Developed a scalable serverless architecture for a mental health platform (MindYogi), implementing AI-driven content generation workflows and text-to-speech synthesis powered by state-of-the-art models
- Designed and implemented an advanced agentic RAG chatbot using LangGraph, incorporating self-reflective, corrective, and adaptive retrieval strategies to improve grounding and minimize hallucinations
- Optimized the retrieval pipeline on Pinecone using recursive, context-enriched hybrid chunking, with reranking, caching, and query rewriting/expansion nodes, with continuous grounding and relevance evaluation via RAGAS
- Optimized a 10+ node LangGraph pipeline with advanced inference techniques, reducing TTFT to <5 seconds
- Building a low-latency voice agent using Fennec ASR, Baseten inference, and Inworld TTS, achieving <2s end-of-speech to first audio frame latency at around $0.50 per hour of voice output
- Deployed real-time chatbot and voice inference as modular REST API services supporting multiple consumers, with low latency, monitoring, and production reliability
Research Software Engineer | Hitachi R&D, Tokyo, JPN | Full Time Jan 2021 – July 2023
- Project: Distributed Data Management Framework for Microservice Architecture
- Developed tool for assisting the implementation of CQRS & Event Sourcing design patterns
- Reduced development time by 15% using Domain Driven Design software development approach
- Improved scalability & availability of the developed application using Kafka & EventStoreDB tools
Patent: System & method to assist modelling CQRS & ES based application [Submitted]
Research Assistant | IIT Bombay, Mumbai, IND | Full Time Sept 2020 – Nov 2020
- Department: Centre for Technology Alternatives for Rural Areas (CTARA)
- Developed a web portal for farmers to help them in assessing their crop in real-time using remote sensing
- Estimated and predicted the crop acreage by processing the spatiotemporal satellite images of the crop
PROJECTS
- AI-Powered Agentic Document Processing System for Automated Form Completion
- Developed an agentic, event-driven AI workflow with LlamaIndex for automated form filling tasks
- Integrated Groq LLM for dynamic extraction from both structured and unstructured documents
- Used Hugging Face embeddings for vector store indexing and efficient contextual document retrieval
- Implemented human-in-the-loop feedback system to iteratively refine agent accuracy and user alignment
- Multimodal AI System with Local LLMs for Document, Image, & Voice Processing
- Architected multimodal AI chatbot integrating Ollama LLMs and ChromaDB for local document processing
- Implemented semantic document search with ChromaDB vector storage for context-aware responses
- Enabled real-time audio transcription using Whisper models and designed intuitive UI with Streamlit
- Developed robust state management with thread-safe SQLite pooling, ensuring secure local deployment
- FarmGPT: MCP-Driven RAG & LLM Agricultural Advisor
- Architected modular decision support system using Model Context Protocol (MCP) for agriculture
- Integrated RAG servers and ChromaDB vector database for semantic search and document retrieval
- Engineered embeddings & prompt engineering for optimal LLM interaction with PLLaMa & agentic LLMs
- Implemented asynchronous SSE for real-time data streaming and API-first design for actionable farmer guidance
EDUCATION
Indian Institute of Technology Bombay | M.Tech in Technology & Development Aug 2018 - July 2020
- CGPA: 9.3/10 | Machine Learning in Remote Sensing | Advanced Statistics | Satellite Image Processing
- Publications: Lonare, A., Maheshwari, B., & Chinnasamy, P. (2022). Village level identification of sugarcane in Sangali, Maharashtra using open source data. Journal of Agrometeorology
Indian Institute of Technology Kanpur | B.Tech in Mechanical Engineering July 2013 - Aug 2017
`;
