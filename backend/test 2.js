import 'dotenv/config'
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",   // ✅ latest working model
    contents: "Say hello in one short line",
  });

  console.log(response.text);
}

run();