const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    console.log(this.parentNode);
  })
);
