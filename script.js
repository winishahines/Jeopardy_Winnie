var button = document.querySelector("button");
var questions = ["How many continents are there?"]

button.addEventListener ("click", function(){
  var answer = prompt (questions[0]);
  console.log (answer);
});
