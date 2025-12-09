const toglleTheme = document.getElementById("toglleTheme");
const rootHtml = document.documentElement;
function ChangeTheme() {
  const TemaAtual = rootHtml.getAttribute("data-theme");

  if (TemaAtual === "Dark") {
    rootHtml.setAttribute("data-theme", "Light");
  } else {
    rootHtml.setAttribute("data-theme", "Dark");
  }

  toglleTheme.classList.toggle("bi-sun");
  toglleTheme.classList.toggle("bi-moon-stars");
}

toglleTheme.addEventListener("click", ChangeTheme);
