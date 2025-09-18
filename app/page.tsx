"use client";

import { useState } from 'react';

export default function HomePage() {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setRecipe('');

    try {
      const response = await fetch('/api/generate-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();
      if (data.recipe) {
        setRecipe(data.recipe);
      }
    } catch (error) {
      console.error('Failed to generate recipe:', error);
      alert('Failed to generate recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-black">AI Recipe Generator 🍳</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Enter your ingredients (e.g., chicken, rice, broccoli)
            </label>
            <input
              id="ingredients"
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              placeholder="e.g., tomatoes, basil, pasta"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {isLoading ? 'Generating...' : 'Generate Recipe'}
          </button>
        </form>

        {recipe && (
          <div className="p-4 mt-6 border border-gray-200 rounded-md bg-gray-50">
            <h2 className="text-xl font-semibold text-black">Your Recipe:</h2>
            <p className="mt-2 whitespace-pre-wrap text-black">{recipe}</p>
          </div>
        )}
      </div>
    </main>
  );
}
