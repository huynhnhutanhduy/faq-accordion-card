const header = document.querySelectorAll(".card-item__header");
const icon = document.querySelector(".card-item__header-icon");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeigh);
  console.log(content.style.height);
}
