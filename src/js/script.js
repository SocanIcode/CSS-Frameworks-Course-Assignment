const editBtn = document.getElementById("editProfileBtn");
const editForm = document.getElementById("updateProfileForm");

editBtn.addEventListener("click", () => {
  editForm.classList.toggle("hidden");
});
