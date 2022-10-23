const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  [...header].forEach((item) => console.log(item.nextElementSibling));
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
