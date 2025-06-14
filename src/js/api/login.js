const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  try {
    const res = await fetch("https://v2.api.noroff.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "c949bdba-e191-40b8-962d-b009ea056f4c",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.errors?.[0]?.message || "Login failed");
    }

    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("profileName", data.name);

    alert("Login successful!");
    window.location.href = "/index.html"; // ✅ Redirect to your feed or home
  } catch (error) {
    alert(error.message);
  }
});
