import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

// Explicitly specify the path to the .env file if in a specific directory or ensure it's loaded before anything else
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || "", 
});

if (!process.env.OPENAI_API_KEY && !process.env.VITE_OPENAI_API_KEY) {
    console.warn("⚠️ WARNING: OPENAI_API_KEY is not defined in the environment.");
}

const RESUME_CONTEXT = `
Name: Amogh Lonare
Role: Data Analyst | Game Developer | Business Analyst
Location: Southampton, UK (Current) / Pune, India (Home)

# Summary
MSc Business Analytics candidate with 3+ years at Ubisoft Entertainment SA supporting release readiness. Specialized in data cleaning, KPI tracking (Tableau/Power BI), statistical analysis, and simulation modeling.

# Professional Experience
1. Data Analyst (Gaming) | Ubisoft Entertainment SA, Pune (2022 – 2025)
- Designed 10+ KPI dashboards, improving reporting efficiency by 35%.
- Reduced manual reporting by 50% through SQL optimization and automation.
- Performed statistical analysis for anomaly detection and decision support.

2. Data Analyst Intern | Kuber Enterprise (2018 – 2019)
- Cleaned and analyzed complex data using Python/Excel, improving accuracy by 20%.

3. Retail & Hospitality Experience (Part Time)
- Online Assistant | Sainsbury's: High-volume fulfilment, 198 IPH picking rate.
- Supermarket Assistant | Waitrose (Dec '25 - Jan '26): Managed tills and logistics.
- Team Member | Taco Bell: High-pressure customer service.

# Contact & Links
- Email: lonareamogh@gmail.com
- LinkedIn: https://www.linkedin.com/in/amoghlonare (placeholder)
- Instagram: https://www.instagram.com/amoghlonare (placeholder)

# Projects
1. Northrop Grumman Challenge: Multi-agent LLM module "The Brain" for secure reasoning.
2. MedTech Innovation Programme: Logic for smart medication dispenser.
3. BOSS Global Business Competition 2026: Supply chain optimization and forecasting.
4. IoT Solar Tracker: Arduino-based automated tracking system.

# Education
- MSc Business Analytics | University of Southampton (Present)
- BE Information Technology | Mumbai University (2022)

# Skills
- Tools: Python, SQL, Excel, AnyLogic, Tableau, Power BI.
- Methods: Predictive Modelling, Simulation, Optimization, Risk Assessment.

# Research
Interested in Decision Analytics, Simulation Modeling, and AI-driven business strategy. Currently exploring multi-agent LLM reasoning for secure enterprise applications.
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const messageString = JSON.stringify(messages);

        if (messageString.length > 20000) {
            return res.json({
                text: "Amogh has put in guardrails to limit the cost of this AI. For deeper discussions or to get in touch, please reach out directly: \n- Email: lonareamogh@gmail.com"
            });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `You are Amogh Lonare's AI Assistant. 
          Use the provided resume context to answer questions about Amogh:
          ${RESUME_CONTEXT}
          
          Guidelines:
          - Respond in exactly 3-4 professional and data-driven sentences.
          - If asked for contact info, provide Amogh's email.
          - Refer to Amogh in the third person (e.g., "Amogh has experience in...").
          - Be professional, analytical, and insightful.`
                },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 300,
        });

        res.json({
            text: response.choices[0].message.content
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Chat API Bridge running on http://localhost:${PORT}`);
});
