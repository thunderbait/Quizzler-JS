function calcScore(resultsContainer) {
  var maxScore = 0;
  var scorePct;
  var resultsInfo = [];

  jsonQuizInfo.questions.forEach((question) => {
    maxScore += question.points
  });

  scorePct = (score / maxScore) * 100;

  jsonResultsInfo.results.forEach((result) => {
    if (scorePct >= result.minpoints && scorePct <= result.maxpoints) {
      resultsInfo.push(
        `<h1 class="title">${result.title} - You Scored: ${scorePct}%</h1>
        <h2 class="subtitle">${result.message}</h2>
        <img src="${result.img}" alt="${result.title}">`
      );
    }
  });

  resultsContainer.innerHTML = resultsInfo.join('');
  $('.hover_bkgr_fricc').show();
}