function checkAnswer(currentQuestionId) {

  nextBtn.disabled = true;
  const answerContainers = quizContainer.querySelectorAll('.answers');

  //select question
  var question = jsonQuizInfo.questions.filter(obj => {
    return obj.q_id === currentQuestionId + 1
  })
  const answerContainer = answerContainers[currentQuestionId];
  const selector = `input[name=question${question[0].q_id}]:checked`;

  // If the answer was wrong, the correct answer should be highlighted.
  if (question[0].question_type == "multiplechoice-single" || question[0].question_type == "truefalse") {
    const userAns = (answerContainer.querySelector(selector) || {}).value;

    if (userAns.toString() == question[0].correct_answer.toString()) {
      score += jsonQuizInfo.questions[currentQuestionId].points;
      answerContainer.querySelector(selector).parentElement.style.color = 'green';

    } else {
      if (userAns != undefined) {
        answerContainer.querySelector(selector).parentElement.style.color = 'red';
      }

      answerContainer.querySelector(`input[value="${question[0].correct_answer}"]`).parentElement.style.color = 'green';
    }

  } else if (question[0].question_type == "multiplechoice-multiple") {
    var userAns = [];
    var selectedAns = document.querySelectorAll(selector);

    for (var i = 0; i < selectedAns.length; i++) {
      userAns.push(parseInt(selectedAns[i].value))
    }

    if (userAns.toString() == question[0].correct_answer.toString()) {
      score += jsonQuizInfo.questions[currentQuestionId].points;
      for (var i = 0; i < selectedAns.length; i++) {
        selectedAns[i].parentElement.style.color = "green"
      }

    } else {
      if (userAns != []) {
        for (var i = 0; i < selectedAns.length; i++) {
          selectedAns[i].parentElement.style.color = "red"
        }
      }
      for (var i = 0; i < question[0].correct_answer.length; i++) {
        answerContainer.querySelector(`input[value="${question[0].correct_answer[i]}"]`).parentElement.style.color = 'green';
      }
    }
  }
}