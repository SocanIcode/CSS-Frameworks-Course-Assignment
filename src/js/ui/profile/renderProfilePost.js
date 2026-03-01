/**
 * Render a single post in the profile page
 * @param {Object} post - The post data object
 * @param {HTMLElement} container - The container to render into
 */
export function renderProfilePost(post, container) {
  container.innerHTML = `
   <h2 class="sr-only">Post</h2>
          <h3 id="post-title" class="text-xl font-semibold text-gray-800 mb-4">
            title
          </h3>

          <div class="rounded-lg overflow-hidden mb-4">
            <img
              id="post-image"
              src="https://wudasi6951.live-website.com/wp-content/uploads/2025/03/sketchperfect-7.jpg"
              alt="Post image"
              class="w-full object-cover border border-gray-300"
            />
          </div>

          <div>
            <p
              id="post-descriptionn"
              class="text-justify text-gray-600 text-sm"
            ></p>
          </div>
          <div
            class="reaction-buttons flex gap-2 bg-gray-50 w-full h-auto p-2 mt-0 rounded-sm"
            id="reactionButtons"
          >
            <button data-emoji="thumbsUp" class="emoji-btn">👍</button>
            <button data-emoji="thumbsDown" class="emoji-btn">👎</button>
            <button data-emoji="heart" class="emoji-btn">❤️</button>
            <button data-emoji="laugh" class="emoji-btn">😂</button>
          </div>

          <div>
            <h2>Comments</h2>
            <h3>Recent Comments</h3>
            <div id="commentsContainer"></div>
            <form
              id="commentForm"
              class="flex gap-2 bg-gray-50 w-full h-auto p-2 mt-0 rounded-sm"
            >
              <input
                type="text"
                placeholder="Add comment"
                class="border px-2 py-1 rounded w-full mb-2"
              />
              <button type="submit" class="btn text-white px-2 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
                  />
                </svg>
              </button>
            </form>
          </div>
  `;
}
