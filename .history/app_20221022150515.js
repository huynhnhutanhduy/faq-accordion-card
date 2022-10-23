const headers = document.querySelectorAll(".card-item__header");
[...headers].forEach((item) =>
  item.addEventListener("click", function (e) {
    // if (this.parentNode.classList.contains("active")) {
    //   this.parentNode.classList.toggle("active");
    //   console.log(1);
    // } else {
    //   headers.forEach((value) => value.parentNode.classList.remove("active"));
    //   this.parentNode.classList.add("active");
    //   console.log(0);
    // }
    // console.log(this);
    // console.log(this.parentNode.classList.contains("active"));
    console.log(e.target);
    // console.log(this);
  })
);
