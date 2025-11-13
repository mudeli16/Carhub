import axios from 'axios';

// allow configuring base URL and key from env vars (backwards-compatible)
const UNSPLASH_BASE = process.env.REACT_APP_API_BASE_URL || process.env.REACT_APP_UNSPLASH_BASE_URL || 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_API_KEY || process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

if (!ACCESS_KEY && process.env.NODE_ENV !== 'test') {
  // warn in dev that key is missing (don't expose secrets in logs)
  // eslint-disable-next-line no-console
  console.warn('Missing Unsplash access key: set REACT_APP_API_KEY or REACT_APP_UNSPLASH_ACCESS_KEY in your .env');
}

const client = axios.create({
  baseURL: UNSPLASH_BASE,
  headers: ACCESS_KEY
    ? {
        // Unsplash v1 expects Client-ID <ACCESS_KEY>
        Authorization: `Client-ID ${ACCESS_KEY}`,
      }
    : {},
  timeout: 15000,
});

export async function searchPhotos(query, page = 1, perPage = 12) {
  const res = await client.get('/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return res.data; // { total, total_pages, results }
}

export async function getRandomPhotos(count = 1) {
  const res = await client.get('/photos/random', {
    params: { count },
  });
  return res.data; // array when count>1
}

export default client;
