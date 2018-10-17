var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;

    if (letter === " ") {
        this.guessed=true;
        this.letter = " ";
    }

  
    this.returnLetter = function () {
        if (this.guessed) 
            return this.letter;
        else    
            return "_";
    }

    this.checkLetter = function(char) {
        if (char === this.letter) {
            this.guessed=true;
            return true;
        }
        return false; 
    }
}

module.exports = Letter;