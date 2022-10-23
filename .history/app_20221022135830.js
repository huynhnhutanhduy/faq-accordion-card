const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    const item = this;
    console.log(item);
  })
);
