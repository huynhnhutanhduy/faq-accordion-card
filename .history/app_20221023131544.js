const headers = document.querySelectorAll(".card-item__header");
[...headers].forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.parentNode.classList.contains("active")) {
      e.target.parentNode.classList.toggle("active");
    } else {
      headers.forEach((value) => value.parentNode.classList.remove("active"));
      e.target.parentNode.classList.add("active");
    }
  })
);
