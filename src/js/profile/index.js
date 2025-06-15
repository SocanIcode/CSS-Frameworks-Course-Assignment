import { fetchProfilePosts } from "../api/profile/viewProfilePost.js";
import { renderProfilePosts } from "../ui/profile/renderProfilePost.js";

const username = "SOCANICODE";
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const posts = await fetchProfilePosts(username);
    renderProfilePosts(posts);
  } catch (error) {
    console.error("Failed to load profile posts:", error);
  }
});
