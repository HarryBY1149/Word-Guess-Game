//Setting variables and arrays//
//Going with a dog theme//





function newGame() {
    var breeds = ["AKITA", "MALAMUTE", "BASSETHOUND", "BEAGLE", "CHIHUAHUA", "TERRIER", "DALMATION", "DOBERMANPINSCHER", "GERMANSHEPHERD", "POINTER", "JINDO", "SAINTBERNARD", "MASTIFF", "IRISHWOLFHOUND", "GREYHOUND", "AUSTRALIANSHEPHERD", "GOLDENRETRIEVER"];
    var currentWord = "";
    var guesses = 10;
    var answerArray = [];
    var currentWordArray = [];
    var lettersGuessedArray = [];
    var wins = 0;
    var displayWins = document.getElementById("display-wins");
    var guessField = document.getElementById("guess-field");
    var guessesRemaining = document.getElementById("guesses-remaining");
    var lettersGuessed = document.getElementById("letters-guessed");
    var happyDog = document.getElementById("happy-dog");
    function reset() {
        answerArray = [];
        currentWord = "";
        currentWordArray = []
        lettersGuessedArray = [];
        guesses = 10;
        displayWins.textContent = wins;
        lettersGuessed.textContent = lettersGuessedArray;
        guessesRemaining.textContent = guesses;
        happyDog.setAttribute("Style", "opacity:0;");
        function generateVariables() {
            currentWord = breeds[Math.floor(Math.random() * breeds.length)];
            for (i = 0; i < currentWord.length; i++) {
                var space = "_";
                answerArray.push(space);
                guessField.textContent = answerArray.join("");
            };

            for (j = 0; j < currentWord.length; j++) {
                var letter = currentWord.charAt(j);
                currentWordArray.push(letter);
            };
        }
        generateVariables();

    }

    reset()
    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        var matches = 0;
        if (lettersGuessedArray.indexOf(userGuess) === -1) {
            lettersGuessedArray.push(userGuess);
            lettersGuessed.textContent = lettersGuessedArray.join("");
            currentWordArray.forEach(function (letter, index) {
                if (letter === userGuess) {
                    answerArray[index] = currentWordArray[index];
                    guessField.textContent = answerArray.join("");
                    matches++;
                    if (answerArray.indexOf('_') === -1) {
                        happyDog.setAttribute("Style", "Opacity:1;");
                        guessField.textContent = answerArray.join("");
                        wins++;
                        setTimeout(function(){
                           { var playAgain = confirm("You win! Play again?");
                                if (playAgain){
                             reset()}}}, 600);

                        };

                    };
                });
            
            if (matches === 0) {
                guesses--;
                guessesRemaining.textContent = guesses;
                if (guesses === 0) {
                    alert("You Lose");
                    reset();
                };

            };
        }
    };
}

newGame()




