// const API_URL = import.meta.env.VITE_API_URL || 'https://ai-media-watchdog.onrender.com';
const API_URL = import.meta.env.VITE_API_URL || 'https://ai-media-watchdog.onrender.com';

export async function predictText(text) {
  try {
    const res = await fetch(`${API_URL}/analyze_text`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return data.result || data; // Unwrap 'result' if present
  } catch (err) {
    return { error: err.message };
  }
}

export async function predictFile(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API_URL}/analyze_file/`, {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return data.result || data; // Unwrap 'result' if present
  } catch (err) {
    return { error: err.message };
  }
}

export async function predictYouTube(url) {
  try {
    const res = await fetch(`${API_URL}/analyze_youtube/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ url }),
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return data.result || data; // Unwrap 'result' if present
  } catch (err) {
    return { error: err.message };
  }
}
