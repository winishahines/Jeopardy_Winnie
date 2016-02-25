var counter = document.getElementById("counter");
var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = [
  {value: "U.S. States"},
  {value: "Music"},
  {value: "Name the Movie"},
  {value: "Food"},
  {value: "Countries"},

  {question: "Home of the Grand Canyon National Park", answer: "Arizona", value: 100},
  {question: "He won a Grammy for 'Best Pop Vocal Album' in 2015.", answer: "Sam Smith", value: 100},
  {question: " 'To infinity and beyond...' ", answer: "Toy Story", value: 100},
  {question: "To be embarrased is to have this 'on one\'s face'.", answer: "Egg", value: 100},
  {question: "What is the largest country in South America?", answer: "Brazil", value: 100},


  {question: "This state's name begins with two vowels.", answer: "Iowa", value: 200},
  {question: "In 2015, this artist performed during the Superbowl half time show.", answer: "Katy Perry", value: 200},
  {question: "Tom Cruise said 'show me the money' in this 1996 film.", answer: "Jerry Maguire", value: 200},
  {question: "Hot out of the oven is one of these stuffed pizza turnovers of Naples.", answer: "Calzone", value: 200},
  {question: "Ottawa is this country's capital.", answer: "Canada", value: 200},

  {question: "In 1968, gold was officially named this state's mineral.", answer: "Alaska", value: 300},
  {question: "This artist's real name is Stacy Ferguson.", answer: "Fergie", value: 300},
  {question: " 'Mama always said life was like a box of chocolates. You never know what you're gonna get.' ", answer: "Forrest Gump", value: 300},
  {question: "This is believed to be the only food that never spoils.", answer: "Honey", value: 300},
  {question: "What country has more volcanoes than any other?", answer: "Indonesia", value: 300},

  {question: "Around 1,000 official reports of UFOs are made each year in this state.", answer: "New Mexico", value: 400},
  {question: "Rihanna and Kanye West recorded the song 'FourFiveSeconds' with this legendary English songwriter.", answer: "Paul McCartney", value: 400},
  {question: " 'This is Sparta!' ", answer: 300, value: 400},
  {question: "Some recipes for this sweet treat call for beets instead of food coloring.", answer: "Red Velvet Cake", value: 400},
  {question: "What is Europe's most mountainous country?", answer: "Switzerland", value: 400},


  {question: "This state was the first state to ratify the U.S.constitution. It did so on December 7, 1787.", answer: "Delaware", value: 500},
  {question: "Released in 1982, this Michael Jackson album sold more copies than any others he released.", answer: "Thriller", value: 500},
  {question: " 'Why so serious?' ", answer: "The Dark Knight", value: 500},
  {question: "Georgia is the largest U.S. producer of this popular nut; often processed into butter.", answer: "Peanut", value: 500},
  {question: "In what country is the Valley of the Kings located.", answer: "Egypt", value: 500},
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
