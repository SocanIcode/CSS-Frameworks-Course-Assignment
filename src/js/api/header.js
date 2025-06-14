import { API_KEY, ACCESS_TOKEN } from "./constants.js";

export function headers(authRequired = false) {
  const baseHeaders = {
    "Content-Type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  };

  if (authRequired) {
    baseHeaders["Authorization"] = ACCESS_TOKEN;
  }

  return baseHeaders;
}
