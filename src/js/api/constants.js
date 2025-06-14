export const API_KEY = "70c41b8e-9399-4a78-8bb1-8e05b0bf3c09";
export const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU09DQU5JQ09ERSIsImVtYWlsIjoiYXplc2FtMDI3NDVAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3NDU3MDg2MTl9.ZZ4OUekOyb0bbVD0C_sROe13PMekYxqgrv1Mj_5qw6Y";

export const API_BASE = "https://v2.api.noroff.dev";
export const API_SOCIAL = `${API_BASE}/social`;
export const API_POSTS_BASE = `${API_SOCIAL}/posts`;
export const API_POST_BY_ID = (id) => `${API_POSTS_BASE}/${id}`;
export const API_POST_REACT = (id, symbol) =>
  `${API_POSTS_BASE}/${id}/react/${encodeURIComponent(symbol)}`;
export const API_POST_COMMENT = (id) => `${API_POSTS_BASE}/${id}/comment`;
