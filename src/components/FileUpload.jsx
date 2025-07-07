import React, { useState } from 'react';
import { predictFile } from '../api';

export default function FileUpload({ setResults }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const res = await predictFile(file);
    setResults(res);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <label className="block font-medium">Upload Document (PDF, DOCX, TXT)</label>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={e => setFile(e.target.files[0])}
        className="w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze File'}
      </button>
    </form>
  );
}
