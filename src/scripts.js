// Theme Toggle Functionality
let themeToggle = document.getElementById("theme-toggle");
let body = document.body;

// Check for saved theme preference
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.innerHTML = savedTheme === "dark-mode" ? "🌙" : "☀️";
} else {
  body.classList.add("light-mode");
  themeToggle.innerHTML = "🌙";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
    themeToggle.innerHTML = "🌙";
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.replace("light-mode", "dark-mode");
    themeToggle.innerHTML = "☀️";
    localStorage.setItem("theme", "dark-mode");
  }
});
