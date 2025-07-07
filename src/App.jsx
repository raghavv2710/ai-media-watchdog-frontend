import React, { useState, useEffect } from 'react';
import { predictText, predictFile, predictYouTube } from './api';
import ResultCard from './components/ResultCard';

const inputTypes = [
  { label: 'Text', value: 'text' },
  { label: 'YouTube Link', value: 'youtube' },
  { label: 'Document', value: 'file' },
];

function UnifiedInput({ setResults, darkMode }) {
  const [inputType, setInputType] = useState('text');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res;
    if (inputType === 'text') {
      res = await predictText(text);
    } else if (inputType === 'youtube') {
      res = await predictYouTube(url);
    } else if (inputType === 'file') {
      res = await predictFile(file);
    }
    setResults(res);
    setLoading(false);
  };

  // Color classes based on darkMode
  const bgClass = darkMode ? 'bg-[#1A1A1A]/80' : 'bg-white/80';
  const borderClass = darkMode ? 'border-[#ACBED8]' : 'border-[#ACBED8]';
  const textClass = darkMode ? 'text-[#FBFEF9]' : 'text-[#13505B]';
  const inputBg = darkMode ? 'bg-[#222] text-[#FBFEF9]' : 'bg-white text-[#13505B]';
  const btnActive = darkMode
    ? 'bg-[#DE1A1A] text-[#FBFEF9] border-[#DE1A1A] scale-105 shadow-lg'
    : 'bg-[#13505B] text-white border-[#13505B] scale-105 shadow-lg';
  const btnInactive = darkMode
    ? 'bg-[#222] text-[#ACBED8] border-[#ACBED8] hover:bg-[#333]'
    : 'bg-white text-[#13505B] border-[#ACBED8] hover:bg-blue-50';
  const submitBtn = darkMode
    ? 'bg-gradient-to-r from-[#DE1A1A] to-[#ACBED8] text-[#FBFEF9]'
    : 'bg-gradient-to-r from-[#13505B] to-[#ACBED8] text-white';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${bgClass} p-6 rounded-xl shadow-xl space-y-4 animate-fade-in`}
    >
      <div className="flex justify-center gap-4 mb-2">
        {inputTypes.map((type) => (
          <button
            type="button"
            key={type.value}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
              inputType === type.value ? btnActive : btnInactive
            }`}
            onClick={() => setInputType(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
      {inputType === 'text' && (
        <div className="transition-all duration-300">
          <label className={`block font-medium mb-1 ${textClass}`}>Enter Text</label>
          <textarea
            className={`w-full border rounded p-2 ${inputBg} ${borderClass}`}
            rows={3}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste text here..."
            required
          />
        </div>
      )}
      {inputType === 'youtube' && (
        <div className="transition-all duration-300">
          <label className={`block font-medium mb-1 ${textClass}`}>YouTube Video Link</label>
          <input
            type="url"
            className={`w-full border rounded p-2 ${inputBg} ${borderClass}`}
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            required
          />
        </div>
      )}
      {inputType === 'file' && (
        <div className="transition-all duration-300">
          <label className={`block font-medium mb-1 ${textClass}`}>Upload Document (PDF, DOCX, TXT)</label>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={e => setFile(e.target.files[0])}
            className={`w-full ${inputBg}`}
            required
          />
        </div>
      )}
      <button
        type="submit"
        className={`w-full ${submitBtn} px-4 py-2 rounded-lg font-bold shadow-lg hover:from-[#DE1A1A] hover:to-[#ACBED8] transition-all duration-200 mt-2`}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  );
}

export default function App() {
  const [results, setResults] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Try to load from localStorage, default to false
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aiwatchdog-dark') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('aiwatchdog-dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aiwatchdog-dark', 'false');
    }
  }, [darkMode]);

  // Color palette for dark and light mode
  const bgGradient = darkMode
    ? 'bg-gradient-to-br from-[#1A1A1A] via-[#222] to-[#13505B]'
    : 'bg-gradient-to-br from-[#FBFEF9] via-white to-[#ACBED8]';
  const navBg = darkMode ? 'bg-[#1A1A1A]' : 'bg-[#FBFEF9]';
  const navText = darkMode ? 'text-[#FBFEF9]' : 'text-[#13505B]';
  const navHover = darkMode ? 'hover:text-[#DE1A1A]' : 'hover:text-[#ACBED8]';
  const heroText = darkMode ? 'text-[#FBFEF9]' : 'text-[#13505B]';
  const heroHighlight = darkMode ? 'text-[#DE1A1A]' : 'text-[#550C18]';
  const aboutBg = darkMode ? 'bg-[#222]' : 'bg-[#FBFEF9]';
  const aboutText = darkMode ? 'text-[#FBFEF9]' : 'text-[#13505B]';
  const footerBg = darkMode ? 'bg-[#1A1A1A]' : 'bg-[#FBFEF9]';
  const footerText = darkMode ? 'text-[#FBFEF9]' : 'text-[#13505B]';

  return (
    <div className={`min-h-screen ${bgGradient} flex flex-col transition-colors duration-500`}>
      {/* Navbar */}
      <nav className={`flex items-center justify-between px-8 py-4 ${navBg} shadow-md sticky top-0 z-10 animate-fade-in-down transition-colors duration-500`}>
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-extrabold ${navText} tracking-tight`}>AI Media Watchdog</span>
        </div>
        {/* Group About, Analyze, and Toggle together on the right */}
        <div className="flex items-center gap-6">
          <div className={`flex gap-6 ${navText} font-semibold`}>
            <a href="#about" className={`${navHover} transition`}>About</a>
            <a href="#analyze" className={`${navHover} transition`}>Analyze</a>
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className={`ml-6 p-2 rounded-full border-2 ${darkMode ? 'border-[#DE1A1A] text-[#DE1A1A] bg-[#222]' : 'border-[#13505B] text-[#13505B] bg-white'} transition-colors duration-300 shadow hover:scale-110`}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero/Intro Section */}
      <header className={`flex flex-col items-center justify-center flex-1 py-12 animate-fade-in transition-colors duration-500`}>
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg ${heroText}`}>AI Media Watchdog</h1>
        <p className={`text-lg md:text-xl max-w-2xl text-center mb-8 ${heroText}`}>
          Instantly analyze text, documents, or YouTube videos for <span className={`font-bold ${heroHighlight}`}>sentiment</span> and <span className={`font-bold ${heroHighlight}`}>toxicity</span> using state-of-the-art AI models. Fast, private, and free.
        </p>
      </header>

      {/* Analyze Section */}
      <section id="analyze" className="flex flex-col items-center py-8 animate-fade-in-up">
        <div className="w-full max-w-xl">
          <UnifiedInput setResults={setResults} darkMode={darkMode} />
          {results && <ResultCard results={results} darkMode={darkMode} />}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${aboutBg} py-12 px-4 mt-8 animate-fade-in transition-colors duration-500`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-2xl font-bold mb-4 ${aboutText}`}>About AI Media Watchdog</h2>
          <p className={`${aboutText} text-lg mb-2`}>
            AI Media Watchdog is an open-source tool designed to help you quickly assess the sentiment and toxicity of any text, document, or YouTube video. Powered by advanced language models, it provides instant, privacy-respecting analysis for journalists, educators, researchers, and anyone concerned about online content.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-auto py-6 ${footerBg} ${footerText} text-center animate-fade-in-up transition-colors duration-500`}>
        <div><b>© {new Date().getFullYear()} AI Media Watchdog. Built with ❤️ for safe, transparent media.</b></div>
      </footer>
    </div>
  );
}

// Tailwind Animations (add to global CSS if not present):
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// .animate-fade-in-up { animation: fadeInUp 0.8s ease; }
// .animate-fade-in-down { animation: fadeInDown 0.8s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
// @keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px);} to { opacity: 1; transform: none; } }
