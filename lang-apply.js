const lang = localStorage.getItem("language") || "en";

// Apply translations to page elements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
});

// Helper function to get translation for alerts or JS
function t(key) {
  const lang = localStorage.getItem("language") || "en";
  return translations[lang]?.[key] || key;
}
