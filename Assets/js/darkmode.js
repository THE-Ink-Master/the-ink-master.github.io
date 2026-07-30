function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  var theme = localStorage.getItem("theme");
  if (theme) {
    document.body.className += theme;
  }
});

function darkmodecheck() {
  var theme = window.localStorage.getItem("theme");
  if (theme) document.documentElement.setAttribute("theme", theme);
}
