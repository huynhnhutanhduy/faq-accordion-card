const headers = document.querySelectorAll(".card-item__header");
[...headers].forEach((item) =>
  item.addEventListener("click", function () {
    // if (this.parentNode.classList.contains("active")) {
    //   this.parentNode.classList.toggle("active");
    //   console.log(1);
    // } else {
    //   headers.forEach((value) => value.parentNode.classList.remove("active"));
    //   this.parentNode.classList.add("active");
    //   console.log(0);
    // }
  })
);
