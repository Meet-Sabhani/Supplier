let navLink = document.querySelector(".nav-link");
let menu = document.getElementById("menu");
let btnSend = document.querySelector('.btn-send')

menu.addEventListener("click", () => {
  navLink.classList.toggle("show-menu");
  btnSend.classList.toggle('show-btn')
});

// ------------- FAQ -------------------
let questions = document.querySelectorAll(".Question-box");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});
