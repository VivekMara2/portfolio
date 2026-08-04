import React from 'react'

interface ProjectItem {
  id: string
  title: string
  badge: string
  badgeColor?: string
  subtitle?: string
  githubUrl: string
  description: string
  highlights: { title: string; detail: string }[]
  tags: string[]
}

export const Projects: React.FC = () => {
  const projectsList: ProjectItem[] = [
    {
      id: 'docintel-engine',
      title: 'DocIntel-Engine',
      badge: '⚡ ENTERPRISE DOCUMENT AI',
      badgeColor: 'rgba(56, 189, 248, 0.15)',
      subtitle: 'Multi-Modal Intelligent Document Extraction Platform',
      githubUrl: 'https://github.com/VivekMara2/DocIntel-Engine',
      description: 'End-to-end document intelligence engine leveraging multi-modal LLMs, OCR, and intelligent parsing to automatically analyze, extract structured data, and index enterprise documents at scale.',
      highlights: [
        {
          title: 'Multi-Modal Document Parsing',
          detail: 'Extracts tables, metadata, and key-value pairs from complex PDFs, invoices, and unstructured scans.'
        },
        {
          title: 'Automated Processing Pipeline',
          detail: 'High-throughput async queue for real-time document analysis and structured schema validation.'
        },
        {
          title: 'Structured Schema Output',
          detail: 'Converts unstructured document text into validated Pydantic & JSON schemas for downstream systems.'
        },
        {
          title: 'FastAPI Microservice',
          detail: 'Production-ready REST API endpoints with authentication, rate limiting, and result streaming.'
        }
      ],
      tags: ['PYTHON', 'FASTAPI', 'LLM', 'DOCUMENT AI', 'OCR', 'PYDANTIC', 'DOCKER', 'LANGCHAIN']
    },
    {
      id: 'vectorcraft',
      title: 'VectorCraft',
      badge: '⚡ VECTOR SEARCH & EMBEDDINGS',
      badgeColor: 'rgba(168, 85, 247, 0.15)',
      subtitle: 'High-Performance Vector Indexing & Semantic Search Engine',
      githubUrl: 'https://github.com/VivekMara2/VectorCraft',
      description: 'Lightweight, high-performance vector search engine and indexing framework designed for dense embedding retrieval, similarity search, and RAG optimization at scale.',
      highlights: [
        {
          title: 'Dense Embeddings Indexing',
          detail: 'Optimized vector indexing using FAISS and HNSW algorithms for sub-millisecond similarity retrieval.'
        },
        {
          title: 'Hybrid Sparse-Dense Search',
          detail: 'Combines BM25 keyword matching with dense vector similarity scores for optimal precision.'
        },
        {
          title: 'Semantic Chunking Engine',
          detail: 'Custom token-level chunking algorithms tailored for structural coherence and context retention.'
        },
        {
          title: 'Benchmarking & Metrics',
          detail: 'Built-in evaluation suite measuring recall@k, precision, and vector query latency.'
        }
      ],
      tags: ['PYTHON', 'VECTOR DB', 'FAISS', 'EMBEDDINGS', 'SEMANTIC SEARCH', 'RAG', 'NUMPY', 'PYTORCH']
    },
    {
      id: 'enterprise-llm',
      title: 'Enterprise LLM Knowledge Assistant',
      badge: '⚡ PRODUCTION RAG SYSTEM',
      badgeColor: 'rgba(52, 211, 153, 0.15)',
      subtitle: '50,000+ Documents Scaled',
      githubUrl: 'https://github.com/VivekMara2/portfolio',
      description: 'Built an end-to-end LLM-powered knowledge assistant using LangChain, OpenAI GPT-4, FAISS vector store, and FastAPI, implementing RAG architecture with semantic chunking to enable context-aware Q&A across 50,000+ enterprise documents.',
      highlights: [
        {
          title: 'Retrieval-Augmented Generation (RAG)',
          detail: 'Hybrid dense and sparse retrieval combining FAISS vector embeddings with keyword index search for context precision.'
        },
        {
          title: 'Semantic Chunking Engine',
          detail: 'Intelligent document chunking tuned for structural coherence across 50,000+ heterogeneous enterprise documents.'
        },
        {
          title: 'FastAPI Microservice API',
          detail: 'Production-ready async REST API powering low-latency semantic search, prompt orchestration, and response streaming.'
        },
        {
          title: 'Enterprise Guardrails & Evaluation',
          detail: 'Implemented strict prompt safety, hallucination evaluation metrics, and secure API access control.'
        }
      ],
      tags: ['LANGCHAIN', 'OPENAI GPT-4', 'FAISS', 'VECTOR SEARCH', 'FASTAPI', 'RAG ARCHITECTURE', 'PYTHON']
    }
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">FEATURED PROJECTS</h2>
        <p className="section-subtitle">
          Building end-to-end AI/ML systems, document intelligence platforms, and production-grade LLM applications.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.2rem'
                }}
              >
                <span
                  className="hero-badge"
                  style={{
                    background: project.badgeColor || 'rgba(56, 189, 248, 0.15)',
                    borderColor: 'rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8'
                  }}
                >
                  {project.badge}
                </span>
                {project.subtitle && (
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{project.subtitle}</span>
                )}
              </div>

              <h3
                style={{
                  fontSize: '1.8rem',
                  color: '#38bdf8',
                  marginBottom: '1rem',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {project.title}
              </h3>

              <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.75', marginBottom: '2rem' }}>
                {project.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.2rem',
                  marginBottom: '2rem'
                }}
              >
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '1.2rem'
                    }}
                  >
                    <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.4rem' }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem'
                }}
              >
                <div className="tech-stack" style={{ marginBottom: 0 }}>
                  {project.tags.map((tag, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    margin: 0
                  }}
                >
                  🔗 VIEW ON GITHUB
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
