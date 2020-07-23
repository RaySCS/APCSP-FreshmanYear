var cash = 0;

var usertook = " ";

function buttonLayout() {
    document.getElementById("roll").disabled = true;
}

function beginGame() {
    document.getElementById("output1").innerHTML = "Make the choice which you believe will help you most";
    document.getElementById("first").disabled = true;
    generateCharacter();
}

function generateCharacter() {
    Richard = [];//In this function the character is generated
    Nicole = [];
    for(a = 0;a<=2;a++){
        randBackgroundArray = ["Has money saved in the bank", "Has little money saved in the bank"];
        randGPAArray = ["4.0 GPA", "3.2 GPA", "2.6 GPA", "2.0 GPA"];
        randCareerInterestArray = ["Computer Science", "Engineer"];//, "Business", "Health/Medicine", "Teaching"
        genNumB = Math.floor(Math.random()*(2));//In order to pick a random background
        randBackground = randBackgroundArray[genNumB];
        genNumG = Math.floor(Math.random()*(3));//In order to pick a random GPA
        randGPA = randGPAArray[genNumG];
        genNumI = Math.floor(Math.random()*(2));//In order to pick a random career interest
        randCareerInterest = randCareerInterestArray[genNumI];
        if (a==1){
            Richard.push(randBackground, randGPA, randCareerInterest)//BECAUSE THEY ARE BEING PASSWED AS VARIABLES!!!!!
        }
        if (a==2){
            Nicole.push(randBackground, randGPA, randCareerInterest)
        }
    }
    document.getElementById("output15").innerHTML = "Richard: " + Richard;//Chaning letters
    document.getElementById("output175").innerHTML = "Nicole: " + Nicole;
    document.getElementById("output1").innerHTML = "Your first choice, please choose a character you wish to play as";//can add custom player
    displayCharacter();//Call a function which allows for the displayment of the stats to occur and user choice of character
}


function displayCharacter(e){
    if (e.keyCode == 13) {
        var userChose = document.getElementById("characterEntry").value;
        document.getElementById("output25").innerHTML = "You have chosen" + " " + userChose;
        document.getElementById("characterEntry").disabled = true;//In order to make sure the user cannot choose a different player
    }
    if (userChose == "Richard") {
        usertook = "Richard";
        for (x=0;x<Richard.length;x++){
            if (Richard[x] == "Has money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(600) + 101);
                cash+=randMoney;
            }
            if (Richard[x] == "Has little money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(100) + 1);
                cash+=randMoney;
            }
        }

    }
    if (userChose == "Nicole") {
        usertook = "Nicole";
        for (n=0;n<Nicole.length;n++){
            if (Nicole[n] == "Has money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(600) + 101);
                cash+=randMoney;
            }
            if (Nicole[n] == "Has little money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(100) + 1);
                cash+=randMoney;
            }
        }
    }
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    document.getElementById("roll").disabled = false;//Rolling is disabled before
}



function Roll() {
    var roll;
    //Family feud works, however close you are, the higher points you get
    //Website I got questions from: https://hobbylark.com/party-games/family-feud-quiz-free-questions-and-answers
    var questionsArray = ["Name a Place You Visit Where You Aren't Allowed to Touch Anything?", "Name a Recreational Activity Traditionally Done in Hot Weather", "Name a Language That You Often See on Restaurant Menus", "Name a state that attracts a lot of tourists", "Name the most watched sport in 2017"];//Will add more later
    var randNum = Math.floor(Math.random()*(5));//In order to pick a random question
    var questionSelected = questionsArray[randNum];
    var indexofQuestion = questionsArray.indexOf(questionSelected);//I will use this in order to determine what the best answer choice is
    document.getElementById("output3").innerHTML = "Question selected: " + questionSelected;
    var askUserResponse = prompt(questionSelected);//Here the question is being asked
    var validResponse = false;
    if (indexofQuestion==0){
        roll = 0;
        if (askUserResponse.toLowerCase()=="museum"){
            roll +=3;
            validResponse = true;//three questions and their top answers
        }
        if (askUserResponse.toLowerCase()=="zoo" ){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="china" ){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll=0
        }
    }
    if (indexofQuestion==1){
        roll = 0;
        if (askUserResponse.toLowerCase()=="swimming"  || askUserResponse.toLowerCase()=="Pool" ){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="basketball"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="volleyball"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==2){
        roll = 0;
        if (askUserResponse.toLowerCase()=="english"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="spanish"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="french"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==3){
        roll = 0;
        if (askUserResponse.toLowerCase()=="new york" || askUserResponse=="newyork" || askUserResponse=="NewYork" ){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="california"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="florida"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==4){
        roll = 0;
        if (askUserResponse.toLowerCase()=="soccer"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="cricket"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="tennis"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    displayRoll(roll, askUserResponse)
}

function displayRoll(roll, askUserResponse) {
    document.getElementById("output5").innerHTML = "Roll Value: "+ roll;
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    if (roll == 3) {
        var randMoneyValue = Math.floor(Math.random()*(250));
        cash += randMoneyValue;//different scenarios which can occur. Some randomness can be involved. Statistics, you can incorporate.
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    if (roll == 2) {
        var randMoneyValue = Math.floor(Math.random()*(150));
        cash += randMoneyValue;//different scenarios which can occur. Some randomness can be involved. Statistics, you can incorporate.
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    if (roll == 1) {
        var randMoneyValue = Math.floor(Math.random()*(90));
        cash += randMoneyValue;//different scenarios which can occur. Some randomness can be involved. Statistics, you can incorporate.
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    askChoices()
}


function askChoices(e) {
    //The better the roll, then the more money you can make and get further ahead.
    if (usertook == "Richard") {
        for (n = 0; n < Nicole.length; n++) {
            if (Richard[n] == "Computer Science") {
                if(Richard[1]=="4.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a software developer for Google. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;//Entering is disabled
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Richard[1]=="3.2 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become Systems Administrator. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1000));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Richard[1]=="2.6 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a private website developer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(750));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Richard[2]=="2.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, unfortunately, no job was available other than to work as a busboy at a restraunt. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
            }
            if (Richard[n] == "Engineer") {
                if(Richard[1]=="4.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a Civil Engineer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Richard[1]=="3.2 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become an Mechanical Enginner. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1000));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Richard[1]=="2.6 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become an Intern Engineer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(750));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }

                }
                if(Richard[1]=="2.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a manager at a local restraunt. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes up
                    }
                }
            }
        }
    }
    if (usertook == "Nicole") {
        for (n = 0; n < Nicole.length; n++) {
            if (Nicole[n] == "Computer Science") {
                if(Nicole[1]=="4.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a software developer for Google. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;//Entering is disabled
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Nicole[1]=="3.2 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become Systems Administrator. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1000));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Nicole[1]=="2.6 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a private website developer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(750));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Nicole[2]=="2.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, unfortunately, no job was available other than to work as a busboy at a restraunt. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
            }
            if (Nicole[n] == "Engineer") {
                if(Nicole[1]=="4.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a Civil Engineer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Nicole[1]=="3.2 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become an Mechanical Enginner. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(1000));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }
                }
                if(Nicole[1]=="2.6 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become an Intern Engineer. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(750));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }

                }
                if(Nicole[1]=="2.0 GPA"){
                    document.getElementById("outputCareer").innerHTML = "Based off your college GPA, you can become a manager at a local restraunt. Type Yes for this oppurtunity. Or else there may be no jobs available. "//can add user choice
                    if (e.keyCode == 13) {
                        var userCareer = document.getElementById("chooseCareer").value;
                        document.getElementById("chooseCareer").disabled = true;
                    }
                    if (userCareer.toLowerCase()== "yes"){
                        var randCareerMoneyValue = Math.floor(Math.random()*(500));
                        cash+=randCareerMoneyValue;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes up
                    }
                }
            }
        }
    }
}



function buyAssets() {
    var askBuy = prompt("Would you like to buy car?");
    askBuy.toLowerCase();
    if (askBuy=="yes"){
        var askPrice = prompt("Would you like to buy the Ford($500) car or Lexus($1000) car? Enter ford or lexus. If you don't have enough money enter 'no'");
        askPrice.toLowerCase();
        if (askPrice=="ford"){
            cash-=500;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes down
            document.getElementById("outputCar").innerHTML = "Car: Ford"
        }
        if (askPrice=="lexus"){
            cash-=1000;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes down
            document.getElementById("outputCar").innerHTML = "Car: Lexus"
        }
        if (cash<0){
            document.getElementById("outputCash").innerHTML = "You have gone bankrupt as you have: " + cash + " " + "dollars in your account";//bankrupt
        }
    }
    var askBuyHouse = prompt("Would you like to buy a House?");
    askBuy.toLowerCase();
    if (askBuyHouse=="yes"){
        var askPrice = prompt("Would you like to buy an apartment($10,000) or Condominium($20,000)? Enter apartment or condominium. If you don't have enough money enter 'no'");
        if (askPrice=="apartment"){
            cash-=10000;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes down
            document.getElementById("outputhouse").innerHTML = "House: Apartment"
        }
        if (askPrice=="condominium"){
            cash-=20000;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes down
            document.getElementById("outputhouse").innerHTML = "House: Condominium"
        }
        if (cash<0){
            document.getElementById("outputCash").innerHTML = "You have gone bankrupt as you have: " + cash + " " +  "dollars in your account";//bankrupt
        }
    }
}



