const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = content.scrollHeight;
  content.classList.toggle("is-active");

  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
}
