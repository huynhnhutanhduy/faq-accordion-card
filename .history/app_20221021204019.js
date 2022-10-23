const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = content.scrollHeight;
  content.classList.toggle("is-active");
  console.log(content.style.height);

  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
