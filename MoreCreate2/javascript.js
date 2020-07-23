
cash = 0;

function beginGame() {
    document.getElementById("output1").innerHTML = "Make the choice which you believe will help you most";
    chooseCharacter()
}


function chooseCharacter(e) {
    document.getElementById("output1").innerHTML = "Your first choice, please choose a character you wish to play as";//can add custom player
    charactersArray = ["Richard", "Nicole"];
    document.getElementById("output2").innerHTML = charactersArray;
    if (e.keyCode==13){
        var userChose = document.getElementById("characterEntry").value;
        document.getElementById("output2.5").innerHTML = "You have chosen" + " " + userChose;
        document.getElementById("characterEntry").disabled = true;//In order to make sure the user cannot choose a different player
    }
    // familyFeudRoll()
}


function familyFeudRoll() {
    var roll;
    //Family feud works, however close you are, the higher points you get
    //Website I got questions from: https://hobbylark.com/party-games/family-feud-quiz-free-questions-and-answers
    var questionsArray = ["Name a Place You Visit Where You Aren't Allowed to Touch Anything?", "Name a Recreational Activity Traditionally Done in Hot Weather", "Name a Language That You Often See on Restaurant Menus"];//Will add more later
    var randNum = Math.floor(Math.random()*(3));//In order to pick a random question
    var questionSelected = questionsArray[randNum];
    var indexofQuestion = questionsArray.indexOf(questionSelected);//I will use this in order to determine what the best answer choice is
    document.getElementById("output3").innerHTML = "Question selected: " + questionSelected;
    document.getElementById("output4").innerHTML = "Index of Question: " + indexofQuestion;
    var askUserResponse = prompt(questionSelected);//Here the question is being asked
    var validResponse = false;
    if (indexofQuestion==0){
        roll = 0;
        if (askUserResponse=="Museum" || askUserResponse=="museum"){
            roll +=3;
            validResponse = true;//three questions and their top answers
        }
        if (askUserResponse=="Zoo" || askUserResponse=="zoo"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse=="China" || askUserResponse=="china"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll=0
        }
    }
    if (indexofQuestion==1){
        roll = 0;
        if (askUserResponse=="Swimming" || askUserResponse=="swimming" || askUserResponse=="Pool" || askUserResponse=="pool"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse=="Basketball" || askUserResponse=="basketball"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse=="Volleyball" || askUserResponse=="volleyball"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll=0
        }
    }
    if (indexofQuestion==2){
        roll = 0;
        if (askUserResponse=="English" || askUserResponse=="english"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse=="Spanish" || askUserResponse=="spanish"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse=="French" || askUserResponse=="french"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll=0
        }
    }
    displayRoll(roll)
}

function displayRoll(roll) {
    document.getElementById("output5").innerHTML = "Roll Value: "+ roll;
    askChoices(roll)
}

// function askChoices(roll) {
//     //The better the roll, then the more money you can make and get further ahead.
//     if (roll==3){
//         cash  = cash + 150//different scenarios which can occur. Some randomness can be involved. Statistics, you can incorporate.
//
//     }
// }