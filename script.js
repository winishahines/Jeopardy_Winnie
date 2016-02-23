var counter = document.getElementById("counter");
var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [
  {question: "How many continents are there?", answer: 7, value: 100},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 200},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 300},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 400}
]


    for (var i = 0; i < questions.length; i++) {
      var div = document.createElement("div");
      div.textContent = questions[i].value;
      div.setAttribute("question", questions[i].question)
      div.setAttribute("answer", questions[i].answer)
      div.addEventListener("click", function(){
        var input = prompt(this.getAttribute("question"));
        var answer = this.getAttribute("answer");
        if (input == answer){
          alert("correct!");
        }
        else {
          alert("incorrect.");
        }
      })
      document.body.appendChild(div);
      // var answer = prompt (questions[i].question);
      //   if (answer == questions[i].answer) {
      //   correctAnswers++
      //   counter.innerHTML = ("Great job! You've answered " + correctAnswers + " questions correctly.")
      //   }
      //   else {
      //     incorrectAnswers++
      //     counter.innerHTML = ("Sorry that's the wrong answer. You've answered " + incorrectAnswers + " questions incorrectly")
      //   }
    }
