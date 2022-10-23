const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) =>
  item.addEventListener("click", function () {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) => question.parentNode.classList.remove("active"));
      question.parentNode.classList.add("active");
    }
  })
);
