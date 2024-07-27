(function () {
  const themeSelector = document.getElementById("themeSelector");
  const currentTheme = document.getElementById("currentTheme");
  const themeOptions = document.getElementById("themeOptions");
  const root = document.querySelector("html");

  function clickHandler(color) {
    return (event) => {
      window.localStorage.setItem("theme", color);
      root.className = color;
      const selectedColor = event.target.getAttribute("data-color");
      currentTheme.style.backgroundColor = selectedColor;
    };
  }

  themeSelector.addEventListener("click", () => {
    themeOptions.style.maxWidth = !themeOptions.style.maxWidth
      ? "800px"
      : themeOptions.style.maxWidth === "0px"
      ? "800px"
      : "0px";
  });

  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", clickHandler(option.dataset.themeClass));
  });
})();
