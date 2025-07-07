import React from 'react';

export default function ResultCard({ results }) {
  if (results.error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded shadow mt-4">
        <strong>Error:</strong> {results.error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Prediction Results</h2>
      <div className="space-y-1">
        <div><span className="font-medium">Sentiment:</span> {results.sentiment}</div>
        <div><span className="font-medium">Toxicity:</span> {results.toxicity}</div>
      </div>
      {results.details && (
        <pre className="mt-2 text-xs bg-white p-2 rounded overflow-x-auto">{JSON.stringify(results.details, null, 2)}</pre>
      )}
    </div>
  );
}