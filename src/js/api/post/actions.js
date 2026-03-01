import { API_POST_COMMENT, API_POST_REACT } from "../../constants.js";
import { headers } from "../../header.js";

export async function reactToPost(postId, emoji) {
  const res = await fetch(API_POST_REACT(postId, emoji), {
    method: "PUT",
    headers: headers(true),
  });
  if (!res.ok) throw new Error("Failed to react");
  return res.json();
}

export async function postComment(postId, body) {
  const res = await fetch(API_POST_COMMENT(postId), {
    method: "POST",
    headers: headers(true),
    body: JSON.stringify({ body }),
  });
  if (!res.ok) throw new Error("Failed to comment");
  return res.json();
}
