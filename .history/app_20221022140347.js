const headers = document.querySelectorAll(".card-item__header");
[...headers].forEach((item) =>
  item.addEventListener("click", function () {
    // if (this.parentNode.classList.contains("active")) {
    //   this.parentNode.classList.toggle("active");
    // } else {
    //   headers.forEach((value) => value.parentNode.classList.remove("active"));
    //   this.parentNode.classList.add("active");
    // }
    console.log(this.parentNode.classList.contains("is-active"));
  })
);
