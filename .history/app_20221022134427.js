const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;

  content.classList.toggle("is-active");
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
    e.target.style.color = "hsl(240, 6%, 50%)";
    e.target.style.fontWeight = "normal";
  }

  // e.target.lastElementChild.classList.toggle("fa-angle-down");
  // e.target.lastElementChild.classList.toggle("fa-angle-up");
  e.target.lastElementChild.classList.toggle("rotate");
}
