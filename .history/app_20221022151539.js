const headers = document.querySelectorAll(".card-item__header");
[...headers].forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.parentNode.classList.contains("active")) {
      e.target.parentNode.classList.toggle("active");
      console.log(1);
      e.target.nextElement.style.height = `${e.target.nextElement.scrollHeight}px`;
    } else {
      headers.forEach((value) => value.parentNode.classList.remove("active"));
      e.target.parentNode.classList.add("active");
      console.log(0);
    }
  })
);
