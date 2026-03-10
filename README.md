# Monu Kumari - AI Engineer Portfolio

A modern, high-performance interactive portfolio built with React, Vite, and Tailwind CSS. This portfolio features an integrated **AI Assistant** capable of answering questions about my professional experience, skills, and background, powered by OpenAI/Gemini.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS (v4), Framer Motion, Three.js
- **Backend (Serverless):** Node.js, Express (local proxy), Vercel Edge Functions
- **AI Integration:** OpenAI API (`gpt-3.5-turbo`), `@google/genai`
- **Deployment:** Vercel

## Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

Ensure the following are set before running the app:
- `OPENAI_API_KEY=your_openai_api_key`
- `VITE_OPENAI_API_KEY=your_openai_api_key_fallback`
- `GEMINI_API_KEY=your_gemini_api_key`

---

## 🚀 Running Locally

You'll need an active Node.js environment (v18+ recommended).

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   > *Note: This command uses concurrently to start both the Vite frontend server and a local Express API backend (running `api-server.js` on port 3001) to simulate the serverless functions locally.*

3. Open your browser and navigate to `http://localhost:3000`

