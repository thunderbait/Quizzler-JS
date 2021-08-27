//declaration of variables and main quis controls

const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById('submit');
const headerContainer = document.getElementById('header');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
var score = 0;
var currentSlide = 0
var jsonQuizInfo = getQuizInfo();
var jsonResultsInfo = getResultsInfo();

//start quiz containers
var quizInfo = quizzler(headerContainer, quizContainer);

nextBtn.addEventListener("click", function () {
  checkAnswer(currentSlide);
  // when wrong - correct answer displayed for 3 seconds before moving on to the next question
  setTimeout(function () {
    slideController(currentSlide + 1)
  }, 3000);
});

// question controller
slideController(currentSlide);
// get quiz results - only on last question
submitBtn.addEventListener("click", function () {
  checkAnswer(currentSlide);
  setTimeout(function () {
    calcScore(resultsContainer);
  }, 3000);
});