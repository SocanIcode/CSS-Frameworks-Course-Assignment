import { fetchAllPosts } from "../../api/post/feed.js";

export async function renderFeed() {
  const container = document.getElementById("post-box");
  container.innerHTML = "";

  try {
    const { data: posts } = await fetchAllPosts();

    posts.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("p-4", "bg-white", "rounded", "shadow", "mb-4");

      card.innerHTML = `
        <h4 class="text-lg font-bold mb-2">${post.title}</h4>
        <img src="${post.media?.url || "#"}" alt="${post.media?.alt || "Post image"}" class="w-full mb-2 rounded border" />
        <p class="text-gray-600">${post.body}</p>
        <div>
      
      <div class="reaction-buttons flex gap-2 bg-gray-50 w-full h-auto p-2 mt-0 rounded-sm">
        <button data-emoji="thumbsUp" class="emoji-btn">👍</button>
        <button data-emoji="thumbsDown" class="emoji-btn">👎</button>
        <button data-emoji="heart" class="emoji-btn">❤️</button>
        <button data-emoji="laugh" class="emoji-btn">😂</button>
      </div>
      <div>
        <h2>Comments</h2>
        <div id="commentsContainer"></div>
        <form id="commentForm" class="flex gap-2 bg-gray-50 w-full h-auto p-2 mt-0 rounded-sm">
          <input type="text" placeholder="Add comment"
            class="border px-2 py-1 rounded w-full mb-2" />
          <button type="submit" class="bg-gray-400 text-white px-2 py-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
            </svg>
          </button>
        </form>
      </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p class='text-red-500'>Failed to load posts.</p>";
    console.error(error);
  }
}
