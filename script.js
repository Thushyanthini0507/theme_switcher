const themeSelector = document.getElementById("theme-name");

// Load saved theme
const savedTheme = localStorage.getItem("theme-name");

if (savedTheme) {
  document.body.className = savedTheme;
  themeSelector.value = savedTheme;
} else {
  document.body.className = "light"; // default
}

// Change theme
themeSelector.addEventListener("change", function () {
  document.body.className = this.value;
  localStorage.setItem("theme-name", this.value);
});
