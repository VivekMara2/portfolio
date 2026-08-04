import React from 'react'

export const Projects: React.FC = () => {
  const projectHighlights = [
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      detail: 'Hybrid dense and sparse retrieval combining FAISS vector embeddings with keyword index search for max context precision.'
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
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">FEATURED PROJECT</h2>
        <p className="section-subtitle">
          Building end-to-end AI/ML systems and production-grade LLM applications.
        </p>

        <div className="card" style={{ padding: '2.5rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            <span className="hero-badge" style={{ background: 'rgba(52, 211, 153, 0.12)', borderColor: 'rgba(52, 211, 153, 0.3)', color: '#34d399' }}>
              ⚡ PRODUCTION AI SYSTEM
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>50,000+ Documents Scaled</span>
          </div>

          <h3 style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Enterprise LLM Knowledge Assistant
          </h3>

          <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.75', marginBottom: '2rem' }}>
            Built an end-to-end LLM-powered knowledge assistant using LangChain, OpenAI GPT-4, FAISS vector store, and FastAPI, implementing RAG architecture with semantic chunking and hybrid retrieval to enable context-aware document Q&A across 50,000+ enterprise documents.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            {projectHighlights.map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1.2rem' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.4rem' }}>
                  {item.title}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-stack">
            {['LANGCHAIN', 'OPENAI GPT-4', 'FAISS', 'VECTOR SEARCH', 'FASTAPI', 'RAG ARCHITECTURE', 'SEMANTIC EMBEDDINGS', 'PYTHON'].map((tag, idx) => (
              <span className="tech-tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
