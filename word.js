var Letter = require("./letter");

function Word (guessWord) {
    this.word = [];
  
    
    for (var i=0; i<guessWord.length; i++) {
       this.word.push(new Letter(guessWord[i]));
    }

    this.returnWord = function () {
        var printWord=[];
        for(var i=0; i<this.word.length; i++) {
           printWord.push(this.word[i].returnLetter());
        }
        return printWord;
    }
    

    this.printString = function () {
        var printWord=[];
        for(var i=0; i<this.word.length; i++) {
           printWord.push(this.word[i].returnLetter());
        }
        
        console.log("print word is "+printWord.join(" "));
    }

    this.checkLetter = function (char) {
        var check=false;
        for(var i=0; i<this.word.length; i++) {
            if(this.word[i].checkLetter(char)) {
                check=true;
            }
         }
        return check;
    }
}

module.exports = Word;