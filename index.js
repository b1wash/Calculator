$(document).ready(function () {
  var currentValue = "0";

  $(".button").on("click", function () {
    var buttonValue = $(this).text();

    if (buttonValue === "AC") {
      handleClearButton();
    } else if (buttonValue === "=") {
      handleTotalButton();
    } else {
      handleNumberButton(buttonValue);
    }
  });

  function handleNumberButton(number) {
    if (currentValue === "0") {
      currentValue = number;
    } else {
      currentValue += number;
    }
    $("#result-box").text(currentValue);
  }

  function handleClearButton() {
    currentValue = "0";
    $("#result-box").text(currentValue);
  }

  function handleTotalButton() {
    currentValue = eval(currentValue);
    $("#result-box").text(currentValue);
  }
});
