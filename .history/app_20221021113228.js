const header = document.querySelectorAll(".card-item");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  const content = e.target.lastElementChild;
  console.log(content);
}
