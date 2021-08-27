// ajax call to get quiz info
function getQuizInfo() {
  var jsonQuizInfo
  $.ajax({
    type: "Get",
    url: "https://proto.io/en/jobs/candidate-exercise/quiz.json",
    async: false,
    dataType: "json",
    success: function (data) {
      jsonQuizInfo = data;
    }
  });

  return jsonQuizInfo
}