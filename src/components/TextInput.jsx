//TestInput.jsx
import React, { useState } from 'react';
import { predictText } from '../api';

export default function TextInput({ setResults }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await predictText(text);
    setResults(res);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <label className="block font-medium">Enter Text</label>
      <textarea
        className="w-full border rounded p-2"
        rows={3}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type or paste text here..."
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Text'}
      </button>
    </form>
  );
}
