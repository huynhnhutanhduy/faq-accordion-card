const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function (e) {
    const content = e.target.nextElementSibling;
    console.log(content);
  })
);
