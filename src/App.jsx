import React, { useState } from 'react';
import TextInput from './components/TextInput';
import FileUpload from './components/FileUpload';
import YouTubeInput from './components/YouTubeInput';
import ResultCard from './components/ResultCard';

export default function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">AI Media Watchdog</h1>
      <div className="w-full max-w-xl space-y-6">
        <TextInput setResults={setResults} />
        <FileUpload setResults={setResults} />
        <YouTubeInput setResults={setResults} />
        {results && <ResultCard results={results} />}
      </div>
    </div>
  );
}
