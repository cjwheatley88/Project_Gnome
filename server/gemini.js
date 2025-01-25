import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config(); // Load environment variables

const APIKEY = process.env.APIKEY;
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateContent(prompt) {
  //console.log('Received prompt:', prompt); // Log the received prompt
  //console.log('Using API Key:', APIKEY); // Log the API key

  try {
    const result = await model.generateContent(prompt);
    const content = await result.response.text(); // Ensure the response is awaited
    console.log('Generated content:', content); // Log the API response
    return content;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}


