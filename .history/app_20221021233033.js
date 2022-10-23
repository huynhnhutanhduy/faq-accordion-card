const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", closeTab, handleClick));
function closeTab(e) {
  [...header].forEach((item) => item.nextElementSibling.classList.remove("is-active"));
}
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  e.target.style.color = "hsl(238, 29%, 16%)";
  e.target.style.fontWeight = "bold";
  content.classList.toggle("is-active");
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
    e.target.style.color = "hsl(240, 6%, 50%)";
    e.target.style.fontWeight = "normal";
  }

  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
