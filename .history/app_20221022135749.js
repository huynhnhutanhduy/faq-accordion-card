const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    const item = this;
    if (item.parentNode.classList.contains("active")) {
      item.parentNode.classList.toggle("active");
    } else {
      item.forEach((this) => this.parentNode.classList.remove("active"));
      this.parentNode.classList.add("active");
    }
  })
);
