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
    // themeOptions.style.marginRight = themeOptions.style.maxWidth !== "0px" ? "20px" : "0px";
    themeOptions.style.paddingTop =
      themeOptions.style.maxWidth !== "0px" ? "50px" : "0px";
    // currentTheme.style.display =
    //   currentTheme.style.display !== "none" ? "none" : "block";
  });

  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", clickHandler(option.dataset.themeClass));
  });
  // document.querySelector(".night-mode-button").addEventListener("click", () => {
  //   let activeMode = root.className;
  //   if (activeMode.startsWith("dark")) {
  //     activeMode = root.className.replace("dark", "light");
  //   } else {
  //     activeMode = root.className.replace("light", "dark");
  //   }
  //   root.className = activeMode;
  //   window.localStorage.setItem("theme", activeMode);
  // });

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
