var button = document.querySelector("button");
var questions = [
  "How many continents are there?",
  "He was the 16th U.S. President.",
  "This James Cameron film, released in 2009, is considered the highest grossing movie of all time.",
  "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter."]

button.addEventListener ("click", function(){
  for (var i = 0; i < questions.length; i++){
    var answer = prompt (questions[i]);
    console.log (answer);
  }

});
