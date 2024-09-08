(function () {
  const themeSelector = document.getElementById("themeSelector");
  const themeOptions = document.getElementById("themeOptions");
  const root = document.querySelector("html");
  const theme = root.className;

  function clickHandler(color) {
    return (event) => {
      const mode = root.className.split("-")[0];
      const newTheme = `${mode}-${color.split("-")[1]}`;
      window.localStorage.setItem("theme", newTheme);
      root.className = newTheme;
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

  document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    if (toc) {
      const content = document.querySelector(".post");
      const headings = content.querySelectorAll("h1, h2, h3");

      const ul = document.createElement("ul");
      ul.className = "toc";

      if (headings.length > 0) {
        const title = document.createElement("h3");
        title.innerText = "Table of contents";
        toc.appendChild(title);

        headings.forEach((heading) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#" + heading.id;
          a.textContent = heading.textContent;
          li.appendChild(a);
          li.className = `toc-${heading.tagName}`;
          ul.appendChild(li);
        });

        toc.appendChild(ul);
      }
    }
  });
})();
