# 🍳 AI Recipe Generator


Preview Page [https://ai-recipe-generator-two-lovat.vercel.app/](https://ai-recipe-generator-two-lovat.vercel.app/)

A modern, intelligent web application that transforms your available ingredients into delicious, personalized recipes using the power of artificial intelligence. Built with Next.js and styled with Pepsi's signature brand colors for a vibrant, professional user experience.

![AI Recipe Generator](https://img.shields.io/badge/AI-Recipe%20Generator-blue?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🤖 AI-Powered Recipe Generation**: Uses Google's Gemini AI to create personalized recipes
- **🎨 Modern UI Design**: Beautiful Pepsi-inspired color scheme with gradient backgrounds
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Real-time Generation**: Fast recipe generation with loading states and animations
- **🔒 Type Safety**: Built with TypeScript for robust development experience
- **🎯 User-Friendly**: Simple ingredient input with clear, step-by-step recipe output

## 🚀 Tech Stack

### Frontend
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.9.2** - Type-safe JavaScript
- **Tailwind CSS 4.0** - Utility-first CSS framework
 
### Backend & AI
- **Google Generative AI** - Gemini AI integration for recipe generation
- **Next.js API Routes** - Serverless API endpoints
- **Node.js** - JavaScript runtime environment

### Development Tools
- **ESLint** - Code linting and formatting
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager
- Google AI Studio API key

### 1. Clone the Repository
```bash
git clone https://github.com/MuhannadSatouf/ai-recipe-generator.git
cd ai-recipe-generator
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
GOOGLE_API_KEY=your_google_gemini_api_key_here
```

**Getting your Google Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key to your `.env.local` file

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📖 Usage

1. **Enter Ingredients**: Type in the ingredients you have available (e.g., "chicken, rice, broccoli, tomatoes")
2. **Generate Recipe**: Click the "✨ Generate My Recipe" button
3. **Get Results**: Receive a personalized recipe with:
   - Recipe title
   - Complete ingredient list
   - Step-by-step cooking instructions

## 🎨 Design Philosophy

The application features a modern design inspired by Pepsi's brand identity:

- **Primary Colors**: Pepsi Blue (#004B93) and Pepsi Red (#E31837)
- **Gradient Backgrounds**: Smooth transitions between brand colors
- **Clean Typography**: Professional and readable fonts
- **Interactive Elements**: Hover effects and smooth animations
- **Accessibility**: High contrast ratios and keyboard navigation support

## 📁 Project Structure

```
ai-recipe-generator/
├── app/
│   ├── api/
│   │   └── generate-recipe/
│   │       └── route.ts          # API endpoint for recipe generation
│   ├── globals.css               # Global styles and Pepsi theme
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main application page
├── public/                       # Static assets
├── .env.local                    # Environment variables (not tracked)
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🌐 API Endpoints

### POST `/api/generate-recipe`

Generates a recipe based on provided ingredients.

**Request Body:**
```json
{
  "ingredients": "chicken, rice, broccoli"
}
```

**Response:**
```json
{
  "recipe": "Delicious Chicken and Rice Bowl\n\nIngredients:\n- 2 chicken breasts\n- 1 cup rice\n- 1 head broccoli\n..."
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GOOGLE_API_KEY` environment variable in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google AI** for providing the Gemini API
- **Next.js Team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Pepsi** for the inspiring brand colors and design aesthetic


**Made with ❤️ and AI** | **Powered by Google Gemini** # ai-recipe-generator
# ai-recipe-generator
