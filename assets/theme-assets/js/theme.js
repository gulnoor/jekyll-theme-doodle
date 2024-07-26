(function () {
  const theme = window.localStorage.getItem("theme");
  const pickers = document.querySelectorAll("#picker");
  pickers.forEach((picker) => {
    picker.addEventListener("click", clickHandler(picker.dataset.themeClass));
  });
  const root = document.querySelector("html");
  ("#diplayselectedtheme");
  function clickHandler(color) {
    return () => {
      window.localStorage.setItem("theme", color);
      root.className = color;
    };
  }
})();
