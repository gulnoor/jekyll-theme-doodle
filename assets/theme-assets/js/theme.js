(function () {
  const themeSelector = document.getElementById("themeSelector");
  const themeOptions = document.getElementById("themeOptions");
  const root = document.querySelector("html");

  function clickHandler(color) {
    return (event) => {
      const mode = root.className.split("-")[0];
      const newTheme = `${mode}-${color.split("-")[1]}`;
      window.localStorage.setItem("theme", newTheme);
      root.className = newTheme;
      const selectedColor = event.target.getAttribute("data-color");
    };
  }

  themeSelector.addEventListener("click", () => {
    themeOptions.style.maxWidth = !themeOptions.style.maxWidth
      ? "800px"
      : themeOptions.style.maxWidth === "0px"
      ? "800px"
      : "0px";
    themeOptions.style.paddingTop =
      themeOptions.style.maxWidth !== "0px" ? "50px" : "0px";
  });

  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", clickHandler(option.dataset.themeClass));
  });

  const darkModeToggle = document.getElementById("darkModeToggle");

  darkModeToggle.checked = theme.startsWith("dark") ? true : false;
  darkModeToggle.addEventListener("change", () => {
    let activeMode = root.className;
    if (activeMode.startsWith("dark")) {
      activeMode = root.className.replace("dark", "light");
    } else {
      activeMode = root.className.replace("light", "dark");
    }
    root.className = activeMode;
    window.localStorage.setItem("theme", activeMode);
  });
})();
