const button = document.querySelector("#theme-toggle");
const saved = localStorage.getItem("theme");

if (saved) {
  document.documentElement.dataset.theme = saved;
}

button?.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});
