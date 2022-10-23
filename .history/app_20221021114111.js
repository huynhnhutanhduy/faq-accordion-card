// const header = document.querySelectorAll(".card-item__header");
// [...header].forEach((item) => item.addEventListener("click", handleClick));
// function handleClick(e) {
//   const content = e.target.nextElementSibling;
//   console.log(content);
// }

const span = document.querySelector("span");
const nextSpan = span.nextElementSibling;
console.log(nextSpan); // <p class="name">Anh Duy</p>
console.log(nextSpan.nextElementSibling); // <p class="name">Duy</p>
