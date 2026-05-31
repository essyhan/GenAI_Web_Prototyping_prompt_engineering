# ⚡ AI-Driven Rapid Prototyping: "Steam Girl" Universe Website

## 📌 Project Overview
While traditional AI projects focus on model training, the ability to rapidly deploy prototypes using multiple LLMs is becoming a critical skill. This project demonstrates an **AI-driven web development workflow** to create a promotional website for an AI-generated character, "Steam Girl" (an expansion of the Pixar *Elemental* universe). 

The core objective was to design a fully functional, aesthetically pleasing website from scratch by orchestrating various Generative AI tools and applying advanced prompt engineering techniques, without writing manual front-end code.

## 🛠️ Multi-LLM Workflow & Tech Stack
To maximize efficiency, I strategically selected different AI models based on their specific strengths:
* **Ideation & Planning:** `Perplexity Pro` 
    * Utilized for structural planning and researching web design trends suitable for Pixar-style animation themes.
* **Prompt Engineering:** `ChatGPT-4o` 
    * Designed structured, highly specific prompts to guide the downstream coding agent effectively.
* **Web Development & Execution:** `Cursor Agent (Claude 4.0)` 
    * Generated the actual HTML/CSS code. Acted as the primary developer, iterating on the codebase based on prompt feedback.
* **Testing & Deployment:** `Live Server` 
    * Used for real-time rendering, feedback loop integration, and continuous UI/UX updates.

## 🙋‍♀️ My Role: Prompt Orchestration
As the sole creator of this project, this marked my **first deep dive into Prompt Engineering**. Rather than manually coding, my role shifted entirely to an **AI Orchestrator**:
1.  **System Prompt Design:** Translated creative concepts into structured technical requirements (e.g., layout grids, color palettes, responsive design rules) for the AI.
2.  **Model Integration:** Connected the output of one model (ChatGPT's prompt) as the input for another (Cursor's coding agent).
3.  **Iteration & Refinement:** Continuously debugged and refined the AI-generated code by injecting precise corrective prompts until the desired visual and functional outcome was achieved.

## 💡 Key Insights & Limitations
* **Model Specialization:** I learned that while foundational models are powerful, utilizing specialized tools (Cursor for coding, Perplexity for research) yields significantly faster and higher-quality results than relying on a single omnipotent LLM.
* **The Human-in-the-Loop:** Even with advanced LLMs, the human role in strategic decision-making, ethical consideration (e.g., copyright awareness in GenAI), and selecting the right model for the right task remains indispensable.
