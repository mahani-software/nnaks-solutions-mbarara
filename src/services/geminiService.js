import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, formatCurrency } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

// Construct the system instruction with product knowledge
const productContext = PRODUCTS.map(p =>
  `- ${p.name} (${p.category}): ${formatCurrency(p.price)}. ${p.description} Specs: ${p.specs.join(', ')}`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are 'Ankole Bot', the friendly and knowledgeable sales assistant for NNAKS SOLUTION ENGINEERING CO LTD in Uganda.
Your goal is to help customers find the best electronics for their needs and budget.
Currency is UGX (Ugandan Shillings).

Here is our current inventory:
${productContext}

Guidelines:
1. Be polite, concise, and helpful.
2. If a user asks for a recommendation, suggest products from our inventory that match their criteria.
3. If the user asks about something we don't have, politely suggest a close alternative or say we don't have it in stock.
4. Keep the tone local and welcoming (e.g., occasional friendly "Hello there", "Welcome").
5. Format prices clearly in UGX.
`;

export const sendMessageToGemini = async (history, message) => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please check the shop settings.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting to the server. Please try again later.";
  }
};