// src/api/axiosClient.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    // adjust Authorization format to your API (Bearer, Api-Key, X-API-Key, etc.)
    // Use a proper env var name (set REACT_APP_API_TOKEN in .env) instead of embedding secrets
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN || ''}`,
    "Content-Type": "application/json",
  },
});

export default axiosClient;
