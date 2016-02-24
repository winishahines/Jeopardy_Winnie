var counter = document.getElementById("counter");
var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [
  {value: "U.S. States"},
  {value: "Music"},
  {value: "In the Movies"},
  {value: "Food"},
  {value: "Popular Phrases"},

  {question: "Home of the Grand Canyon National Park", answer: "Arizona", value: 100},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 100},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 100},
  {question: "To be embarrased is to have this 'on one\'s face'.", answer: "egg", value: 100},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 100},


  {question: "This states name begins with two vowels.", answer: "Iowa", value: 200},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 200},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 200},
  {question: "Hot out of the oven is one of these stuffed pizza turnovers of Naples.", answer: "calzone", value: 200},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 200},

  {question: "In 1968, gold was officially named this state's mineral.", answer: "Alaska", value: 300},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 300},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 300},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 300},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 300},

  {question: "Around 1,000 official reports of UFOs are made each year in this state.", answer: "New Mexico", value: 400},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 400},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 400},
  {question: "Some recipes for this sweet treat call for beets instead of food coloring.", answer: "red velvet cake", value: 400},
  {question: "This state is the number one peanut producer in the U.S. and half of its crop gets processed into peanut butter.", answer: "Georgia", value: 400},


  {question: "This state was the first state to ratify the U.S.constitution. It did so on December 7, 1787.", answer: "Delaware", value: 500},
  {question: "He was the 16th U.S. President.", answer: "Abraham Lincoln", value: 500},
  {question: "This James Cameron film, released in 2009 is considered the highest grossing movie of all time.", answer: "Avatar", value: 500},
  {question: "This brand offers a big bean dispenser with up to 20 assorted flavors", answer: "jelly belly", value: 500},
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
    function changeBackgroundToBlue (){
      this.style.backgroundColor = "#091a5e";
  }
  div.addEventListener("mouseout", changeBackgroundToTeal);
    function changeBackgroundToTeal (){
      this.style.backgroundColor = "#108f8b";
  }
  document.body.appendChild(div);
}
