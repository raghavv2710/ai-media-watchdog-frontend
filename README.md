# AI Media Watchdog Frontend

A clean, user-friendly React + Tailwind CSS frontend for sentiment and toxicity analysis of text, documents, and YouTube videos. Connects to a FastAPI backend for predictions.

## Features
- Enter text manually
- Upload PDF, DOCX, or TXT files
- Submit a YouTube video link
- View sentiment and toxicity predictions
- Fully responsive and modern UI

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Setup
1. Clone this repository:
   ```sh
   git clone <your-repo-url>
   cd ai-media-watchdog-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and set your backend API URL:
   ```sh
   cp .env.example .env
   # Edit .env as needed
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Build for Production
```sh
npm run build
```
The production-ready files will be in the `dist/` folder.

## Deployment
- Deploy the `dist/` folder as a static site (e.g., Render, Vercel, Netlify).
- Ensure your backend API is accessible and CORS is configured.

## Environment Variables
- `VITE_API_URL`: The URL of your FastAPI backend (see `.env.example`).

## License
MIT
