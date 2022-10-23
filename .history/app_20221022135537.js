const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    if (this.parentNode.classList.contains("active")) {
      this.parentNode.classList.toggle("active");
    } else {
      this.forEach((this) => this.parentNode.classList.remove("active"));
      this.parentNode.classList.add("active");
    }
  })
);
