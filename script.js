var button = document.querySelector("button");
var counter = document.getElementById("counter");
var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [
  {question: "How many continents are there?", answer: 7},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln"},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar"},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia"}
]


button.addEventListener ("click", function() {
    for (var i = 0; i < questions.length; i++) {
      var answer = prompt (questions[i].question);
        if (answer == questions[i].answer) {
        correctAnswers++
        counter.innerHTML = ("Great job! You've answered " + correctAnswers + " questions correctly.")
        }
        else {
          incorrectAnswers++
          counter.innerHTML = ("Sorry that's the wrong answer. You've answered " + incorrectAnswers + " questions incorrectly")
        }
    }
});
