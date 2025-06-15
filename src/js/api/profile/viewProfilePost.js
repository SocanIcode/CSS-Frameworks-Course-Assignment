import { API_PROFILE_POSTS } from "../constants.js";
import { headers } from "../header.js";

/**
 * Fetch posts by a specific profile name
 * @param {string} profileName
 */
export async function fetchProfilePosts(profileName) {
  try {
    const res = await fetch(
      `${API_PROFILE_POSTS(profileName)}?_comments=true&_reactions=true`,
      {
        method: "GET",
        headers: headers(true),
      },
    );

    if (!res.ok) {
      throw new Error("Could not fetch profile posts");
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile posts:", error);
    return [];
  }
}
