const switchElement = document.querySelector("#switch");

const switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  newTheme = dataTheme === "light" ? "dark" : "light";

  rootElem.setAttribute("data-theme", newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  switchElement.addEventListener("click", () => {
    switchElement.classList.toggle("active");
  });
});

switchElement.addEventListener("click", switchTheme);