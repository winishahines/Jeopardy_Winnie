var button = document.querySelector("button");
var questions = [
  {question: "How many continents are there?", answer: 7},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln"},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar"},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia"}
]

button.addEventListener ("click", function(){
  for (var i = 0; i < questions.length; i++){
    var answer = prompt (questions.question);
    console.log (answer);
  }

});
