var style = document.createElement("style");

document.head.appendChild(style);

style.sheet.insertRule("body { opacity: 0; transition: opacity 0.3s; }");

window.addEventListener("click", e => {
  if (e.target.href) {
    style.sheet.rules[0].style.opacity = 0;
  }
});

window.addEventListener("DOMContentLoaded", e => {
  requestAnimationFrame(() => {
    style.sheet.rules[0].style.opacity = 1;
  });
});
