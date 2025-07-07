import React, { useState } from 'react';
import { predictYouTube } from '../api';

export default function YouTubeInput({ setResults }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await predictYouTube(url);
    setResults(res);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <label className="block font-medium">YouTube Video Link</label>
      <input
        type="url"
        className="w-full border rounded p-2"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="https://youtube.com/watch?v=..."
        required
      />
      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Video'}
      </button>
    </form>
  );
}
