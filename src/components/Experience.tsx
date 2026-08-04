import React from 'react'

interface WorkRole {
  company: string
  title: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
}

export const Experience: React.FC = () => {
  const experiences: WorkRole[] = [
    {
      company: 'Garver',
      title: 'Data Scientist',
      location: 'Dallas, TX',
      period: 'July 2025 – Present',
      bullets: [
        'Computed patient utilization trends by analyzing complex healthcare datasets using Python, applying Regression analysis to predictive models that improved appointment scheduling accuracy by 32% across telehealth operations.',
        'Architected scalable forecasting solutions with SageMaker, evaluating more than 250K annual patient appointments to identify no-show risks and optimize provider allocation through advanced predictive analytics.',
        'Engineered intelligent knowledge retrieval workflows using LangChain and FAISS, reducing clinical documentation search time by 45% and improving evidence-based operational decision-making for healthcare teams.',
        'Managed enterprise healthcare data transformation pipelines using PySpark, integrating over 20 clinical and claims data sources to improve interoperability, reporting efficiency by 40%, and enterprise data quality.',
        'Monitored model performance, corrected analytical inconsistencies, and modified machine learning workflows while maintaining HIPAA Compliance, resulting in zero production security incidents and improving analytical reliability.',
        'Participated in executive analytics reviews by designing interactive dashboards with Metabase, translating predictive insights into strategic recommendations that improved patient engagement metrics by 22%.',
        'Troubleshot production analytics environments using GitHub and Jupyter Hub, improving reproducible experimentation, accelerating issue resolution by 35%, and strengthening collaboration across data science teams.'
      ],
      tags: ['PYTHON', 'SAGEMAKER', 'LANGCHAIN', 'FAISS', 'PYSPARK', 'METABASE', 'HIPAA COMPLIANCE', 'REGRESSION ANALYSIS', 'JUPYTER HUB']
    },
    {
      company: 'North Dakota University',
      title: 'Data Scientist',
      location: 'North Dakota, USA',
      period: 'July 2024 – June 2025',
      bullets: [
        'Analyzed retail customer behavior using SQL and ClickHouse, performing Causal inference analysis to identify factors influencing purchasing behavior, improving merchandising decisions and increasing campaign effectiveness by 24%.',
        'Built consumer intelligence solutions with Azure ML, Azure Data Factory, Databricks, and ADLS Gen2, enabling customer segmentation, churn prediction, and recommendation models that improved customer retention by 18%.',
        'Oriented business stakeholders by integrating predictive insights into Power BI, delivering executive KPI dashboards that reduced reporting turnaround time by 30% and supported data-driven business decisions.',
        'Motivated cross-functional teams by automating model lifecycle management using MLflow and Azure DevOps, reducing deployment effort by 35%, improving release consistency, and enhancing collaboration across analytics initiatives.',
        'Participated in leadership planning sessions, interpreted complex analytical findings, and influenced strategic decisions across 10+ business initiatives by communicating statistical insights clearly and supporting Agile project delivery.'
      ],
      tags: ['SQL', 'CLICKHOUSE', 'CAUSAL INFERENCE', 'AZURE ML', 'DATABRICKS', 'ADLS GEN2', 'POWER BI', 'MLFLOW', 'AZURE DEVOPS']
    },
    {
      company: 'Accenture',
      title: 'Data Scientist',
      location: 'Hyderabad, India',
      period: 'Aug 2021 – June 2022',
      bullets: [
        'Implemented Azure-based ML platforms using Azure ML, Azure Data Factory, Databricks, and ADLS Gen2 to build and deploy consumer analytics models for a large retail client, enabling customer segmentation, churn prediction, and personalized recommendation engines across multiple product lines.',
        'Designed real-time consumer behavior scoring pipelines using PySpark, Azure Stream Analytics, and Event Hubs, processing high-volume transactional data to surface purchasing patterns, basket analysis insights, and promotional effectiveness metrics for merchandising teams.',
        'Automated model training, validation, and deployment workflows via Azure DevOps CI/CD pipelines and MLflow, compressing release cycles by 30%.',
        'Integrated AI-driven consumer insights with downstream Power BI dashboards and enterprise APIs, delivering actionable KPIs on customer lifetime value, retention risk, and campaign ROI to cross-functional business stakeholders across marketing, supply chain, and store operations.'
      ],
      tags: ['AZURE ML', 'PYSPARK', 'STREAM ANALYTICS', 'EVENT HUBS', 'DATABRICKS', 'MLFLOW', 'POWER BI', 'CI/CD']
    }
  ]

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
        <p className="section-subtitle">
          Proven track record of designing, building, and deploying production-grade AI/ML systems and enterprise analytics.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, idx) => (
            <div className="card" key={idx} style={{ padding: '2.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: '#38bdf8', marginBottom: '0.2rem' }}>{exp.title}</h3>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#f8fafc' }}>{exp.company}</div>
                  <div style={{ fontSize: '0.92rem', color: '#94a3b8', marginTop: '0.2rem' }}>📍 {exp.location}</div>
                </div>
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.4rem 1rem', borderRadius: '20px', color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem' }}>
                  {exp.period}
                </div>
              </div>

              <ul style={{ paddingLeft: '1.2rem', color: '#cbd5e1', lineHeight: '1.75', fontSize: '1rem', marginBottom: '1.5rem' }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ marginBottom: '0.75rem' }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="tech-stack">
                {exp.tags.map((tag, tIdx) => (
                  <span className="tech-tag" key={tIdx}>
                    {tag}
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
