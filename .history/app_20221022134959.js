const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  if (this.parentNode.classList.contains("active")) {
    this.parentNode.classList.toggle("active");
  } else {
    thiss.forEach((this) => this.parentNode.classList.remove("active"));
    this.parentNode.classList.add("active");
  }
}
