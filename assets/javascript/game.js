
//VARIABLES
var words = ["anpanman", "bestofme", "boywithluv", "dionysus", "fakelove", "micdrop", "mikrokosmos", "paradise", "serendipity", "silverspoon"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 14;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var a = document.getElementById("anpanman");
var bom = document.getElementById("bestofme");
var bwl = document.getElementById("boywithluv");
var d = document.getElementById("dionysus");
var fl = document.getElementById("fakelove");
var md = document.getElementById("micdrop");
var m = document.getElementById("mikrokosmos");
var p = document.getElementById("paradise");
var s = document.getElementById("serendipity");
var ss = document.getElementById("silverspoon");


function aud() {
    //Anpanman Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.play();
        document.getElementById("image").src = "./assets/images/anpanman.png";
    }
    //Best of Me Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        bwl.pause();
        d.pause();
        fl.pause();
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.play();
        document.getElementById("image").src = "./assets/images/bestofme.png";
    }
    //Boy with Luv Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        d.pause();
        fl.pause();
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.play();
        document.getElementById("image").src = "./assets/images/boywithluv.png";
    }
    //Dionysus Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        fl.pause();
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.play();
        document.getElementById("image").src = "./assets/images/dionysus.png";
    }
    //Fake Love Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.play();
        document.getElementById("image").src = "./assets/images/fakelove.png";
    }
    //Mic Drop Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        m.pause();
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();;
        md.play();
        document.getElementById("image").src = "./assets/images/micdrop.png";
    }
    //Mikrokosmos Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        p.pause();
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();;
        md.pause();
        m.play();
        document.getElementById("image").src = "./assets/images/mikrokosmos.png";
    }
     //Paradise Audio & Image
    //---------------------------
    else if (randomWord === words[7]) {
        s.pause();
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();;
        md.pause();
        m.pause();
        p.play();
        document.getElementById("image").src = "./assets/images/paradise.png";
    }
     //Serendipity Audio & Image
    //---------------------------
    else if (randomWord === words[8]) {
        ss.pause();
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();;
        md.pause();
        m.pause();
        p.pause();
        s.play();
        document.getElementById("image").src = "./assets/images/serendipity.png";
    }
     //Silver Spoon Audio & Image
    //---------------------------
    else if (randomWord === words[9]) {
        a.pause();
        bom.pause();
        bwl.pause();
        d.pause();
        fl.pause();;
        md.pause();
        m.pause();
        p.pause();
        s.pause();
        ss.play();
        document.getElementById("image").src = "./assets/images/silverspoon.png";
    }
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 14;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

