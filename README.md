# Jeopardy_Winnie

# Technologies used:
* Atom
* HTML
* CSS
* Javascript

# Approach Taken:
Bronze
* Header: "Welcome to Jeopardy"
* 1 player
* User clicks a button that prompts questions (only 4 questions tied to a for loop)
* Once user answers question, they are told if the answer if correct or incorrect
* The number of correct and incorrect responses get printed to the browser

Silver
* Header: "Let's Play Jeopardy"
* 1 player
* 25 questions, 5 categories.
* Questions are objects within an array that include 'question', 'answer', and 'value' properties.
* Question loop updated to create div elements in table like format, user clicks div to prompt question
* Once user answers question, they are told if the answer if correct or incorrect; point values added or subtracted
* Styling added to divs and header
* Event listeners created for mouseover and mouseout functionality when scrolling over each div

Gold (Future Additions)
* Multi-player functionality
* Hide category values that have already been selected
* Timed response (10 seconds to answer)
* Add current user points to the browser
* Create prompt for winner once all questions answered


# Unsolved Problems:
* Missing the ability to hide a category value that has already been selected.
* User shouldn't be able to click on the category headers.
* Once all questions are answered, user should receive a prompt that the game is over.

# User Stories:
* As a user, I should be able to see a game board with existing categories and values.
* As a user, I should be able to click on a category value to reveal a question.
* As a user, I should have the ability to enter my answer to the question.
* As a user, I should be told if my answer if correct or incorrect.
* As a user, I should know what my current score is.
