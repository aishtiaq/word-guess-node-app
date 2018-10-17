var Word = require("./word");
var inquirer = require("inquirer");
var wordList = ['avengers','madagascar','star wars','top gun',"titanic",
    'jumanji', 'black panther', 'the godfather', 'the shawshank redemption',
'the silence of the lambs', 'back to the future' ]
var option = wordList[Math.floor(Math.random() * wordList.length)];

var guesses =9;
var guessed = [];



var guessWord = new Word(option.toLowerCase());
//var checkWord =  guessWord.printString().split(" ");

var main = function() {
    console.log("Guesses Left "+guesses);
    if(guesses > 0 && guessWord.returnWord().indexOf("_")>-1) {
        guessWord.printString();
    
        inquirer.prompt([
            {
              message: "Enter guess",
              name: "guess"
            }
          ]).then(function(answers) {
            

            var char = answers.guess.toLowerCase();

            if(guessed.indexOf(char)=== -1) {
                if(guessWord.checkLetter(char)) {
                    //console.log("guessed");
                } else
                    guesses--;
            
            } else {
                console.log("already guessed");
            }
            guessed.push(char);
            main();
        });
        
    
    } else {
        console.log("game over");
    }
    
}

main();