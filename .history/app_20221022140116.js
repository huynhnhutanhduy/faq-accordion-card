const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    // const item = this;
    if (this.parentNode.classList.contains("active")) {
      this.parentNode.classList.toggle("active");
    } else {
      header.forEach((value) => value.parentNode.classList.remove("active"));
      this.parentNode.classList.add("active");
    }
  })
);
