const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = content.scrollHeight;
  content.classList.add("is-active");
}