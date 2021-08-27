function quizzler(headerContainer, quizContainer) {
  var quizInfo = [];

  var output = (
    `<h1 class="title">${jsonQuizInfo.title}</h1>
    <h2 class="subtitle">${jsonQuizInfo.description}</h2>`
  );
  headerContainer.innerHTML = output;

  jsonQuizInfo.questions.forEach((question) => {
    var answers = []
    var images = []

    images.push(
      `<img src="${question.img}" alt="${question.caption}">`
    )

    //question type logic
    //multiplechoice-single
    if (question.question_type == "multiplechoice-single") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="${answer.a_id}">
            ${answer.caption}
          </label>`
        )
      })
      //multiplechoice-multiple
    } else if (question.question_type == "multiplechoice-multiple") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label class="questionLabel">
            <input type="checkbox" name="question${question.q_id}" value="${answer.a_id}">
            ${answer.caption}
          </label>`
        )
      })
      //truefalse
    } else if (question.question_type == "truefalse") {
      answers.push(
        `<label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="true">
            True
          </label>
          <label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="false">
            False
          </label>`
      )
    }

    quizInfo.push(
      `<div class="slide">
        <div class="question"> ${question.title} </div>
        <div class="answer-container">
        <div class="images">${images.join("")}</div>
        <div class="answers"> ${answers.join("")}</div>
        </div>
      </div>`
    );

  });

  quizContainer.innerHTML = quizInfo.join('');
}