import React from 'react'

interface SkillCategory {
  category: string
  skills: string[]
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'C#', 'PySpark', 'SQL', 'T-SQL', 'Bash']
    },
    {
      category: 'AI/ML & LLM Systems',
      skills: [
        'Azure OpenAI', 'LangChain', 'GPT-4', 'RAG Architecture', 'Vector Search', 'FAISS', 
        'Semantic Embeddings', 'Copilot Agents', 'Model Context Protocol (MCP)', 'Azure AI Foundry', 
        'MLflow', 'Prompt Engineering', 'Agent Orchestration', 'SageMaker', 'Customer Segmentation', 
        'Churn Prediction', 'Demand Forecasting', 'Recommendation Engines'
      ]
    },
    {
      category: 'Cloud Platforms & Data Engineering',
      skills: [
        'Azure Data Factory', 'Databricks', 'ADLS Gen2', 'Azure Stream Analytics', 'Event Hubs', 
        'Azure ML', 'Azure DevOps', 'AWS (SageMaker, S3, Lambda, Redshift, Glue)', 'GCP', 
        'Snowflake', 'Apache Spark', 'SharePoint', 'FastAPI'
      ]
    },
    {
      category: 'Data Visualization & Analytics',
      skills: [
        'Power BI', 'SQL Server', 'Consumer Analytics', 'Basket Analysis', 'KPI Dashboards', 'GIS-Integrated Workflows'
      ]
    },
    {
      category: 'Governance, Security & Delivery',
      skills: [
        'Data Governance', 'Responsible AI', 'HIPAA Compliance', 'CI/CD Pipelines', 'Git', 'Agile / Scrum', 
        'Cross-Functional Collaboration', 'Stakeholder Alignment'
      ]
    }
  ]

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">TECHNICAL SKILLS & COMPETENCIES</h2>
        <p className="section-subtitle">
          Core technical toolset spanning machine learning, large language models, cloud data engineering, and business intelligence.
        </p>

        <div className="grid">
          {skillCategories.map((cat, idx) => (
            <div className="card" key={idx}>
              <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginBottom: '1.2rem' }}>
                {cat.category}
              </h3>
              <div className="tech-stack">
                {cat.skills.map((skill, sIdx) => (
                  <span className="tech-tag" key={sIdx} style={{ fontSize: '0.85rem', padding: '0.35rem 0.8rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
