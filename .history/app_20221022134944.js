const header = document.querySelectorAll(".card-item__header");
[...header].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  if (question.parentNode.classList.contains("active")) {
    question.parentNode.classList.toggle("active");
  } else {
    questions.forEach((question) => question.parentNode.classList.remove("active"));
    question.parentNode.classList.add("active");
  }
}
