var picsSRC = ["resources1/head.png", "resources1/headplusbody.png", "resources1/headarm.png", "resources1/headarm2.png", "resources1/headleg.png", "resources1/headleg2.png", "resources1/headLAST.png"]
var forOne= picsSRC[-1];
var uL = " ";
var wholeGuess = 0;
var checker2 = true;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//the alphabet

//below needs to be outside of function as global variables are set.
var ask = prompt("Would you like to play onePlayer or twoPlayer, please specify 'onePlayer' or 'twoPlayer");
if (ask=="onePlayer"){
    uL = " ";
    var category= ["states", "basketball", "football"]
    categoryRand = Math.floor(Math.random()*3);
    category = category[categoryRand];
    var input = prompt("Please pick a category, specify 'easy', 'medium', 'hard'");
    if (category=="states"){
        var catArray = ["illinois", "wisconsin", "florida", "colarado", "california", "texas", "alabama", "georgia", "minnesota", "arizona", "pennsylvania", "maryland", "oklohoma", "connecticut", "kentucky"]
    }
    if(category=="basketball"){
        var catArray = ["celtics", "warriors", "pelicans", "raptors", "lakers", "rockets", "knicks", "thunder", "heat", "bulls", "clippers", "nets", "hawks", "wizards", "pacers"];
    }
    if(category=="football"){
        var catArray = ["viking", "rams", "falcon", "panthers", "raiders", "cowboys", "seahawks", "bears", "browns", "chiefs", "cardinals", "chargers", "jets", "bills", "saints"];
    }
    if(input=="easy"){
        var randNum = Math.floor(Math.random()*5)
    }
    if(input=="medium"){
        var randNum = Math.floor(Math.random()*(5) + 6)
    }
    if(input=="hard"){
        var randNum = Math.floor(Math.random()*(5) + 11)//last five included
    }
    var realWord = catArray[randNum];
}
if (ask=="twoPlayer"){
    var firstUser = prompt("Okay, player one enter a word, which you word would you want player two to guess");
    alert("Player two, now it's your turn to guess, click the guess button and begin!");
    realWord = firstUser;//setting whatever the user inputed word to the word to be represented..//
}
function ifTwo() {
    document.getElementById("twoPlay").disabled = true;
    document.getElementById("category").disabled = true;
    document.getElementById("hint").disabled = true;
}
function knowcat() {
    document.getElementById("outputone").innerHTML = "The category is" + " " + category;
}

var words = realWord;
var placement = -1;
var numberOfGuesses = 0;
var numberLost = 0;//setting all counts to zero
var numberWon = 0;

function knowWord(){
    var checker = false;
    var checkAgain = false;
    document.getElementById("resetb").disabled = true;
    var userGuess = prompt("Give a letter for your guess?");
    userGuess = userGuess.toLowerCase(userGuess);//this line of code turns the upper case letter to lower case, that if the user inputs upper case//
    if(userGuess.length=!1){
        checker2 = false;
        checkAgain = true;

    }
    for(p=0;p<alphabet.length;p++){
        if (alphabet[p]==userGuess){
            checker=true;
            checkAgain = true;
        }
    }
    if (checker==false || checker2==false ){
        alert("Looks like you have chosen an invalid response, please type again, this time correctly!");
    }
    var display = "";
    var needed = "";
    uL = uL + userGuess;
    document.getElementById("output4").innerHTML = "Used Letters are" + " " + uL;
    for(i=0;i<words.length;i++){
        var compare = false;
        for (a=0;a<uL.length;a++){
            if(uL.substring(a,a+1)==words.substring(i, i+1)){
                compare = true;
                needed = uL.substring(a,a+1);
            }
        }
        if(compare == true){
            display = display + " " + needed;
        }
        if (compare==false){
            display = display + " " + "_";
        }
    }
    var wordPlacement=false;
    for(x=0;x<words.length;x++){
        if(userGuess==words.substring(x,x+1)){
            wordPlacement = true;
        }
    }
    if(wordPlacement==false && checker2==true && checker==true){
        numberOfGuesses=numberOfGuesses+1;
        document.getElementById("output3").innerHTML = "The number of INCORRECT guesses so far is, " + " " + numberOfGuesses;
        placement = placement+1;//going through the array of pics
        document.getElementById("pics").src = picsSRC[placement];
    }
    document.getElementById("output2").innerHTML = display;
    if(numberOfGuesses==7){
        document.getElementById("output3").innerHTML = "The word is" + " " + words;
        document.getElementById("output4").innerHTML = "GAME IS OVER";
        numberLost = numberLost + 1;
        numberLost = parseInt(numberLost);
        document.getElementById("output5").innerHTML = "You have lost" + " " + numberLost + " " + "games" ;
        document.getElementById("resetb").disabled = false;//makes the reset button availble
        document.getElementById("pics").src = "resources1/ulose.png"
    }
    var gamesWon = true;
    for(e=0;e<display.length;e++) {
        if (display.substring(e,e+1)=="_") {
            gamesWon = false;
        }
    }
    if(gamesWon==true){
        numberWon = numberWon + 1;//adding one to every game one
        document.getElementById("output7").innerHTML = "You have won" + " " +  numberWon + " " + "game(s)";
        document.getElementById("resetb").disabled = false;//makes the reset button available
        document.getElementById("pics").src = "resources1/uwin.jpg"
    }
}

function reset(){
    ask = prompt("Would you like to play onePlayer or twoPlayer, please specify 'onePlayer' or 'twoPlayer");//added this option again, in order to allow user to pick if they wanted to play onePlayer or twoPlayer.
    if (ask=="onePlayer"){
        uL = " ";
        category= ["states", "basketball", "football"]
        categoryRand = Math.floor(Math.random()*3);
        category = category[categoryRand];
        input = prompt("Please pick a category, specify 'easy', 'medium', 'hard'");
        if (category=="states"){
            catArray = ["illinois", "wisconsin", "florida", "colarado", "california", "texas", "alabama", "georgia", "minnesota", "arizona", "pennsylvania", "maryland", "oklohoma", "connecticut", "kentucky"]
        }
        if(category=="basketball"){
            catArray = ["celtics", "warriors", "pelicans", "raptors", "lakers", "rockets", "knicks", "thunder", "heat", "bulls", "clippers", "nets", "hawks", "wizards", "pacers"];
        }
        if(category=="football"){
            catArray = ["viking", "rams", "falcon", "panthers", "raiders", "cowboys", "seahawks", "bears", "browns", "chiefs", "cardinals", "chargers", "jets", "bills", "saints"];
        }
        if(input=="easy"){
            randNum = Math.floor(Math.random()*5)
        }
        if(input=="medium"){
            randNum = Math.floor(Math.random()*(5) + 6)
        }
        if(input=="hard"){
            randNum = Math.floor(Math.random()*(5) + 11)//last five included
        }
        realWord = catArray[randNum];
    }
    category= ["states", "basketball", "football"];
    categoryRand = Math.floor(Math.random()*3);
    category = category[categoryRand];
    document.getElementById("outputone").innerHTML = "The category is" + " " + category;
    words = realWord;
    placement = -1;
    document.getElementById("output3").innerHTML = " ";
    uL = " ";
    display = " ";
    numberOfGuesses = 0;
    document.getElementById("output2").innerHTML = display;
    document.getElementById("output4").innerHTML = uL;
}
function guessAll() {
    var rightNow = prompt("what do you think the whole word is?")
    if(rightNow==words){
        alert("YOU GOT THE WHOLE WORD!");
        document.getElementById("pics").src = "resources1/uwin.jpg"
        numberWon = numberWon +1;
        document.getElementById("output7").innerHTML = "You have won" + " " +  numberWon + " " + "game(s)";
        document.getElementById("resetb").disabled = false;//makes the reset button available
        placement = -1;
        category = category[categoryRand];
        document.getElementById("output3").innerHTML = " ";
        uL = " ";
        display = " ";
        numberOfGuesses = 0;
        document.getElementById("output2").innerHTML = display;
        document.getElementById("output4").innerHTML = uL;
    }
    else{
        wholeGuess = wholeGuess + 1;
        wholeGuess = parseInt(wholeGuess);
        document.getElementById("output7.5").innerHTML = "Looks like you messed up, you have now made " + " " + wholeGuess + " " + "incorrect guess(s) at the word" ;
        alert("keep guessing!");
    }
}
function hint() {
    var statesOne = ["illinois", "wisconsin", "texas",  "minnesota", "oklohoma"];
    var statesTwo = ["florida", "colarado", "california",  "arizona",  "kentucky"];
    var statesThree = [ "alabama", "georgia", "pennsylvania", "maryland", "connecticut"];
    var basketBallOne = ["warriors", "pelicans", "lakers", "knicks", "thunder"];//LEFT OFF HERE//
    var basketBalltwo = [ "celtics", "rockets", "nets", "hawks", "wizards"];
    var basketBallThree = ["raptors", "heat", "bulls", "clippers", "pacers"];
    var footBallOne = ["viking", "rams", "falcon", "panthers", "raiders"];
    var footBallTwo = ["cowboys", "seahawks", "chiefs", "cardinals", "chargers"];
    var footBallThree = ["bears", "browns", "jets", "bills", "saints"];


    for(d=0;d<statesOne.length;d++){
        if (statesOne[d]==words){
            document.getElementById("output8").innerHTML = "The state is in the midwest";//below are the hints which I provided
        }
        if (statesTwo[d]==words){
            document.getElementById("output8").innerHTML = "The state is in the east";
        }
        if (statesThree[d]==words){
            document.getElementById("output8").innerHTML = "The state is in the west";
        }
    }
    for(y=0;y<basketBallOne.length;y++){
        if(basketBallOne[y]==words){
            document.getElementById("output9").innerHTML = "This basketball team is in the Western Pacific Division";
        }
        if(basketBalltwo[y]==words){
            document.getElementById("output9").innerHTML = "This basketball team is in the Eastern Atlantic Division";
        }
        if(basketBallThree[y]==words){
            document.getElementById("output9").innerHTML = "This basketball team is in the Eastern Central/South Division";
        }
    }
    for (t=0;t<footBallOne.length;t++){
        if(footBallOne[t]==words){
            document.getElementById("output10").innerHTML = "This football team is in the NFC(National Football Conference) North/South";
        }
        if(footBallTwo[t]==words){
            document.getElementById("output10").innerHTML = "This football team is in the NFC(National Football Conference) East/West";
        }
        if(footBallThree[t]==words){
            document.getElementById("output10").innerHTML = "This football team is in the AFC(American Football Conference) North/East";
        }
    }

}
/**
 * Created by siddiqi9214 on 11/6/2017.
 */

