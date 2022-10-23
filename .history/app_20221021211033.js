const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.classList.toggle("is-active");
  // content.style.height = `${content.scrollHeight}px`;
  if (!content.classList.contains("is-active")) content.style.height = "0px";

  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
