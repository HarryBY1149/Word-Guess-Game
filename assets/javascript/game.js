//Setting variables and arrays//
//Going with a dog theme//



var wins = 0;

function newGame() {
    var breeds = ["AKITA", "MALAMUTE", "BASSETHOUND", "BEAGLE", "CHIHUAHUA", "TERRIER", "DALMATION", "DOBERMANPINSCHER", "GERMANSHEPHERD", "POINTER"];
    
    var guesses = 20;
    var currentWord = breeds[Math.floor(Math.random() * breeds.length)];
    var answerArray = [];
    var currentWordArray = [];
    var lettersGuessedArray = [];
   

    var displayWins = document.getElementById("display-wins");
    var guessField = document.getElementById("guess-field");
    var guessesRemaining = document.getElementById("guesses-remaining");
    var lettersGuessed = document.getElementById("letters-guessed");
    displayWins.textContent=wins;
    for (i = 0; i < currentWord.length; i++) {
        var space = "_";
        answerArray.push(space);
        guessField.textContent = answerArray.join("");
    };

    for (j = 0; j < currentWord.length; j++) {
        var letter = currentWord.charAt(j);
        currentWordArray.push(letter);
    };
    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        var matches = 0;
        
        currentWordArray.forEach(function (letter, index) {
            if (letter === userGuess) {
                answerArray[index] = currentWordArray[index];
                matches++;
            };
        })
        if (matches === 0) {
            guesses--;
        };
        lettersGuessedArray.push(userGuess);

        guessField.textContent = answerArray.join("");
        guessesRemaining.textContent = guesses;
        lettersGuessed.textContent = lettersGuessedArray.join("");
        

        if (answerArray.indexOf('_') === -1) {
            alert("You Win!");
            wins++;
            lettersGuessed.textContent = "";
            guessesRemaining.textContent = 20;
            
            newGame();
        };
        if (guesses === 0) {
            alert("You Lose");
            lettersGuessed.textContent = "";
            guessesRemaining.textContent = 20;
            newGame();
        };

    };
}

newGame()




