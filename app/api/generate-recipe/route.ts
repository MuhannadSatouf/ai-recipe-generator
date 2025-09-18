// app/api/generate-recipe/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'Google API key is not configured. Please add GOOGLE_API_KEY to your .env.local file.' 
      }, { status: 500 });
    }

    const { ingredients } = await request.json();

    if (!ingredients) {
      return NextResponse.json({ error: 'Ingredients are required' }, { status: 400 });
    }

    // Initialize the Google Generative AI client with the API key
    const genAI = new GoogleGenerativeAI(apiKey);

    // Use the gemini-1.5-flash model (more reliable)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // The AI prompt
    const prompt = `Create a simple recipe using the following ingredients: ${ingredients}. Provide a title, a list of ingredients, and step-by-step instructions.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const recipeText = response.text();

    return NextResponse.json({ recipe: recipeText });

  } catch (error) {
    console.error('API Error:', error);
    
    // Check if it's an API key error
    if (error instanceof Error && error.message.includes('API key not valid')) {
      return NextResponse.json({ 
        error: 'Invalid Google API key. Please check your GOOGLE_API_KEY in .env.local file.' 
      }, { status: 500 });
    }
    
    return NextResponse.json({ error: 'Failed to generate recipe' }, { status: 500 });
  }
}