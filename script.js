var counter = document.getElementById("counter");
var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [
  {question: "How many continents are there?", answer: 7, value: 100},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 100},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 100},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 100},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 100},

  {question: "How many continents are there?", answer: 7, value: 200},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 200},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 200},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 200},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 200},

  {question: "How many continents are there?", answer: 7, value: 300},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 300},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 300},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 300},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 300},

  {question: "How many continents are there?", answer: 7, value: 400},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 400},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 400},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 400},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 400},

  {question: "How many continents are there?", answer: 7, value: 500},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 500},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 500},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 500},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 500},

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
  div.addEventListener("mouseover", changeBackgroundToBlue);
  div.addEventListener("mouseout", changeBackgroundToTeal);
    function changeBackgroundToBlue (){
      document.div.style.backgroundColor = "#091a5e";
  }
    function changeBackgroundToTeal (){
      document.div.style.backgroundColor = "white";
  }
  document.body.appendChild(div);
}
