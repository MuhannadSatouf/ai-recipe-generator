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
    const prompt = `
You are an expert chef AI. Create a delicious and easy-to-follow recipe based on the ingredients provided.

**Ingredients available:** ${ingredients}

**Your task is to generate a complete recipe with the following structure:**

1.  **Title:** A creative and appealing name for the dish.
2.  **Description:** A brief, one-sentence summary of the dish (e.g., "A hearty and flavorful pasta dish perfect for a weeknight dinner.").
3.  **Preparation Time:** An estimation of how long the recipe will take to prepare.
4.  **Servings:** The number of people this recipe will serve.
5.  **Ingredients List:**
    *   List all the ingredients from the provided list with specific quantities (e.g., 1 cup, 2 tbsp, 100g).
    *   You may add 1-2 common pantry staples if necessary (e.g., salt, pepper, olive oil), but clearly mark them as "optional" or "pantry staple".
6.  **Step-by-Step Instructions:**
    *   Provide clear, numbered steps for preparing the dish.
    *   Keep the instructions concise and easy for a beginner to understand.
7.  **Chef's Tip (Optional):** Include a helpful tip, such as a serving suggestion or a possible variation.

**Constraints:**
*   The recipe must be simple and suitable for a beginner cook.
*   Prioritize using only the ingredients provided.

Generate the recipe now.
`;


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