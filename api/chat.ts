import { OpenAI } from 'openai';

export const config = {
    runtime: 'edge',
};

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const RESUME_CONTEXT = `
Name: Monu Kumari
Role: UX/UI Designer / Product Designer
Location: Tokyo, Japan

# Summary
Product Designer with 3 years of experience building intuitive, data-driven, and user-focused digital products, including AI-driven solutions. Currently based in Tokyo, I am passionate about simplifying complex workflows and creating meaningful experiences that enhance user satisfaction and product value.

# Professional Experience
1. UX Designer | Coditas Solutions (Oct 2022 – Oct 2025)
- Leading end-to-end design for global clients across B2C, SaaS, Healthcare, and AI sectors.
- AI Initiatives: Spearheaded an AI roleplay module that boosted sales practice by 75% and increased prospect conversions by 45%.
- Conversational UX: Designed dialogue paths and tone for LLM training, improving patient engagement by 69% in medical contexts.
- Accessibility: Optimized complex user flows to meet WCAG standards, achieving a 100% improvement in overall usability.
- Design Systems: Established scalable design systems to ensure consistency and accelerate product delivery.

2. Associate UX Designer | Coditas Solutions (2023 – 2024)
- Healthcare: Led the design of patient profiles and medical file management, reducing user errors by 12%.
- Inventory Management: Redesigned tracking and categorization flows, boosting operational efficiency by 80%.
- LMS & HRM: Designed comprehensive Learning Management Systems with personalized paths and streamlined HRM recruitment processes.

3. Product Stylist | FirstCry.com (Mar 2020 – Jul 2021)
- Led creative styling for apparel shoots and seasonal R&D.

# Education
- Advance Certification in UX UI Design | IIT Guwahati (2022)
- Bachelor of Computer Science | Pune University (2016)
- Diploma in Fashion Design and Styling | TTA (2020)

# Skills
- UX/UI Design: User Research, Journey Mapping, Wireframing, Prototyping, Design Systems, Accessibility (WCAG).
- Tools: Figma, Framer, Webflow, Whimsical, Adobe Illustrator, HTML, CSS, Cursor.
- Languages: English (Fluent), Hindi (Fluent), Japanese (Beginner/N5).

# Featured Projects
1. Accessibility for Conectella: Research and UI optimization for users with color vision deficiencies.
2. Seva.AI — An AI Companion: Conversational UX and interface design for emotional well-being.
3. AI Roleplay for Connectella: UX design for an AI-powered module simulating sales scenarios.
`;

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { messages } = await req.json();
        const messageString = JSON.stringify(messages);

        if (messageString.length > 20000) { 
            return new Response(JSON.stringify({
                text: "Monu has put in guardrails to limit the cost of this AI. For deeper discussions or to get in touch, please reach out directly: \n- LinkedIn: https://www.linkedin.com/in/monu-kumari-136185195/ \n- Behance: https://www.behance.net/monuverma \n- Email: vmonu7514@gmail.com"
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `You are Monu Kumari's AI Assistant. 
          Use the provided resume context to answer questions about Monu:
          ${RESUME_CONTEXT}
          
          Guidelines:
          - Respond in exactly 3-4 professional sentences.
          - If asked for contact info, provide Monu's LinkedIn, Behance, or Email.
          - Refer to Monu in the third person (e.g., "Monu has experience in...").
          - Be professional, creative, and UX-focused.`
                },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 300,
        });

        return new Response(JSON.stringify({
            text: response.choices[0].message.content
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
