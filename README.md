
https://matcha-chatbot.stacccy.dev/

## 🚀 Multi-Agent Matcha AI Web App
A multi-agent AI web app powered by OpenAI Agent Kit, showcasing clean domain separation between a matcha knowledge agent and a London café discovery agent.

🍵 1. Matcha Knowledge Agent

    Model: gpt-5-nano + minimal RAG (matcha knowledge base) (@todo)

    Example
    User: Why is matcha so popular lately?
    Answer:
    Matcha’s popularity comes from its smooth flavor, energizing caffeine, and the vibe of ancient tea rituals—plus it’s versatile for lattes, smoothies, and baking.

☕ 2. London Café Discovery Agent
    
    Model: gpt-5-nano + db

    Uses our internal café database to generate structured recommendation cards (name, vibe, rating). (@todo: the UI formats it into cards)

    Example
    User: What are the best matcha spots in Marylebone?
    Answer:
    Here are some great matcha spots in Marylebone:

    1. Chazunoya Matcha Bar
       • Area: Marylebone
       • Vibe: Calm, minimalist Japanese-inspired café with seasonal sweets
       • Google rating: ~4.4–4.6

    2. Cha Cha Matcha 
       • Area: Near Bond Street / Marble Arch
       • Vibe: Bright, playful, modern matcha drinks
       • Google rating: ~4.2–4.5

    3. TEANZ
       • Area: Marylebone / Fitzrovia
       • Vibe: Quiet, tea-focused café offering ceremonial-grade matcha
       • Google rating: ~4.3–4.5


## Getting Started

Please set up the environment variables before running the app.
```.env
OPENAI_API_KEY
```


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Tech Stack

create-next-app

react

next.js

[openai agent](https://platform.openai.com/docs/guides/agent-builder) 