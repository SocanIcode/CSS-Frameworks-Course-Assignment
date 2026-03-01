import { API_POSTS_BASE } from "../constants.js";
import { headers } from "../header.js";

export async function fetchAllPosts() {
  const response = await fetch(
    `${API_POSTS_BASE}?_author=true&_comments=true&_reactions=true`,
    {
      method: "GET",
      headers: headers(true),
    },
  );

  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
}
