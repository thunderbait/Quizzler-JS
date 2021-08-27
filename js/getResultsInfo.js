// ajax call to get result info
function getResultsInfo() {
  var jsonResultsInfo
  $.ajax({
    type: "Get",
    url: "https://proto.io/en/jobs/candidate-exercise/result.json",
    async: false,
    dataType: "json",
    success: function (data) {
      jsonResultsInfo = data;
    }
  });

  return jsonResultsInfo
}