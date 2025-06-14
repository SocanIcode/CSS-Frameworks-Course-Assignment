import { renderFeed } from "./ui/post/renderCard.js";

document.addEventListener("DOMContentLoaded", () => {
  renderFeed();

  // Profile menu toggle
  const profileToggleBtn = document.getElementById("profileToggleBtn");
  const profileMenu = document.getElementById("profileMenu");
  if (profileToggleBtn && profileMenu) {
    profileToggleBtn.addEventListener("click", () => {
      profileMenu.classList.toggle("hidden");
    });
  }

  // Edit profile form toggle
  const editBtn = document.getElementById("editProfileBtn");
  const editForm = document.getElementById("updateProfileForm");
  if (editBtn && editForm) {
    editBtn.addEventListener("click", () => {
      editForm.classList.toggle("hidden");
    });
  }

  // Sidebar slide toggle (e.g. followers/following)
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebarPanel = document.getElementById("sidebarPanel");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  if (sidebarToggleBtn && sidebarPanel && sidebarOverlay) {
    sidebarToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebarPanel.classList.remove("translate-x-full");
      sidebarOverlay.classList.remove("hidden");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebarPanel.classList.add("translate-x-full");
      sidebarOverlay.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        sidebarPanel.classList.add("translate-x-full");
        sidebarOverlay.classList.add("hidden");
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");

  if (mobileMenuToggle && mobileMenu && mobileOverlay) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.remove("-translate-x-full");
      mobileOverlay.classList.remove("hidden");
    });

    mobileOverlay.addEventListener("click", () => {
      mobileMenu.classList.add("-translate-x-full");
      mobileOverlay.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        mobileMenu.classList.add("-translate-x-full");
        mobileOverlay.classList.add("hidden");
      }
    });
  }
});
