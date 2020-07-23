var cash = 0;
var picsSRC = ["colleges/auburn.png", "colleges/clemson.png", "colleges/devry.png", "colleges/maryland.png", "colleges/miami.png", "colleges/missouri.png", "colleges/mit.png", "colleges/stanford.png", "colleges/berkley.png", "colleges/boston.png", "colleges/calidavis.png", "colleges/centralmichigan.png", "colleges/columbia.png", "colleges/duke.png", "colleges/floridastate.png", "colleges/georgia.png", "colleges/hopkins.png", "colleges/howard.png", "colleges/maryland.png", "colleges/miami.png", "colleges/michiganstate.png", "colleges/minnesota.png", "colleges/newjersey.png", "colleges/northdakota.png", "colleges/notredame.png", "colleges/ohio.png", "colleges/oklohoma.png", "colleges/pennstate.png", "colleges/rochester.png", "colleges/texas.png", "colleges/urbanaR.jpg", "colleges/vanderbilt.png", "colleges/virginia.png", "colleges/washington.png", "colleges/whartonpennsylvania.png", "colleges/wyoming.png", "colleges/harvard.png", "colleges/otherbusiness.jpeg", "colleges/brown.png"];
var usertook = " ";
var singlehouseSRC = ["houses/singleFamily.jpg", "houses/otherS.jpg"];
var townhouseSRC = ["houses/townhome.jpg", "houses/otherT.jpg"];

//OKAY, need to make two seperate functions and just make seperate button. Textbox is with its own function. Use return in order to use value again.

function buttonLayout() {
    document.getElementById("roll").disabled = true;// Before character selection, the roll button is disabled. There is an order to how you need to do things.

}

function beginGame() {
    document.getElementById("output1").innerHTML = "Make the choice which you believe will help you most";
    document.getElementById("first").disabled = true;
    generateCharacter();//Calling the function which allows me to abstract and generate characters.
}

function generateCharacter() {
    //In this function the characters are generated
    Richard = [];
    Nicole = [];
    for(a = 0;a<=2;a++){
        randBackgroundArray = ["Has money saved in the bank", "Has little money saved in the bank"];
        randGPAArray = ["4.0 GPA", "3.6 GPA", "3.0 GPA", "2.2 GPA"];
        randCareerInterestArray = ["Computer Science", "Engineer", "Business", "Health/Medicine", "Teaching"];
        genNumB = Math.floor(Math.random()*(2));//In order to pick a random background
        randBackground = randBackgroundArray[genNumB];
        genNumG = Math.floor(Math.random()*(3));//In order to pick a random GPA
        randGPA = randGPAArray[genNumG];
        genNumI = Math.floor(Math.random()*(5));//In order to pick a random career interest
        randCareerInterest = randCareerInterestArray[genNumI];
        if (a==1){
            Richard.push(randBackground, randGPA, randCareerInterest)//This adds the characterisitcs to the characters array
        }
        if (a==2){
            Nicole.push(randBackground, randGPA, randCareerInterest)
        }
    }
    document.getElementById("output15").innerHTML = "Richard: " + Richard;//In order to display the charateristics of the characters
    document.getElementById("output175").innerHTML = "Nicole: " + Nicole;
    document.getElementById("output1").innerHTML = "Your first choice, please choose a character you wish to play as";//Telling them they need to make a choice
    displayCharacter();//Call a function which allows for the displayment of the stats to occur and user choice of character
}


function displayCharacter(e){
    //In this function the user selects a character
    if (e.keyCode == 13) {
        var userChose = document.getElementById("characterEntry").value;//Taking the value of the textbox in order to determine what character the user wants to play as
        document.getElementById("output2.5").innerHTML = "You have chosen" + " " + userChose;
        document.getElementById("characterEntry").disabled = true;//In order to make sure the user cannot choose a different player once they have chosen one character
    }
    if (userChose == "Richard") {
        usertook = "Richard";
        for (x=0;x<Richard.length;x++){
            if (Richard[x] == "Has money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(600) + 101);//In order to add an amount of money to the users cash account. If the character has money saved up, then they are given more money.
                cash+=randMoney;
            }
            if (Richard[x] == "Has little money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(100) + 1);//If character has little money saved they can only get a little amount of money in their account
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
    document.getElementById("roll").disabled = false;// After the selection of character, the roll button it is enabled.
}



function Roll() {
    //In this function the user is asked questions and asked to answer in order to eventually gain money.
    var roll;
    //Family feud works, however close you are, the higher points you get
    //Website I got questions from: https://hobbylark.com/party-games/family-feud-quiz-free-questions-and-answers
    var questionsArray = ["Name a Place You Visit Where You Aren't Allowed to Touch Anything?", "Name a Recreational Activity Traditionally Done in Hot Weather", "Name a Language That You Often See on Restaurant Menus", "Name a state that attracts a lot of tourists", "Name the most watched sport in 2017"];//Will add more later
    var randNum = Math.floor(Math.random()*(5));//In order to pick a random question
    var questionSelected = questionsArray[randNum];
    var indexofQuestion = questionsArray.indexOf(questionSelected);//This is used in order to determine what the best answer choice is below
    document.getElementById("output3").innerHTML = "Question selected: " + questionSelected;//Question is displayed
    var askUserResponse = prompt(questionSelected);//Here the question is being asked
    var validResponse = false;
    if (indexofQuestion==0){
        roll = 0;
        if (askUserResponse.toLowerCase()=="museum"){
            roll +=3;
            validResponse = true;//three questions and their top three answers
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
    //In this function the roll value influences the cash the user makes.
    document.getElementById("output5").innerHTML = "Roll Value: "+ roll;
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    //The better the roll, then the more money you can make and get further ahead.
    if (roll == 3) {
        var randMoneyValue = Math.floor(Math.random()*(250));
        cash += randMoneyValue;//different scenarios which can occur. The user can gain a random amount of money.
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    if (roll == 2) {
        var randMoneyValue = Math.floor(Math.random()*(150));
        cash += randMoneyValue;
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    if (roll == 1) {
        var randMoneyValue = Math.floor(Math.random()*(90));
        cash += randMoneyValue;
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
}


function askChoices() {
    //In this function, the user is able to claim jobs and make money.
    if (usertook == "Richard") {
        for (n = 0; n < Nicole.length; n++) {
            if (Richard[n] == "Computer Science") {
                if (Richard[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Computer Science, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Stanford";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[7];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "mit") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "stanford") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.2 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Auburn";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Maryland";
                    document.getElementById("c1").src = picsSRC[0];
                    document.getElementById("c2").src = picsSRC[3];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "auburn") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "maryland") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Devry";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Missouri";
                    document.getElementById("c1").src = picsSRC[2];
                    document.getElementById("c2").src = picsSRC[5];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "devry") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "missouri") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Miami";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Clemson";
                    document.getElementById("c1").src = picsSRC[4];
                    document.getElementById("c2").src = picsSRC[1];//order does matter
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "miami") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "clemson") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Richard[n] == "Teaching") {
                if (Richard[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Brown University";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[38];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "vanderbilt") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "brown") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Rochester";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Georgia";
                    document.getElementById("c1").src = picsSRC[15];
                    document.getElementById("c2").src = picsSRC[28];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "rochester") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "georgia") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Florida State University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: College of New Jersey";
                    document.getElementById("c1").src = picsSRC[14];
                    document.getElementById("c2").src = picsSRC[22];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "floridastate" || userCollege.toLowerCase() == "florida state") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "georgia") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Penn state";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Central Michigan University";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[11];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "pennstate" || userCollege.toLowerCase() == "penn state") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "central michigan" ) {
                        cash-=collegePrice2
                    }
                }
            }
            if (Richard[n] == "Health/Medicine") {
                if (Richard[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Harvard";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: John Hopkins University";
                    document.getElementById("c1").src = picsSRC[36];
                    document.getElementById("c2").src = picsSRC[16];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "harvard") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Washington University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Duke University";
                    document.getElementById("c1").src = picsSRC[33];
                    document.getElementById("c2").src = picsSRC[13];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "washington") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "duke") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Virginia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Boston University";
                    document.getElementById("c1").src = picsSRC[32];
                    document.getElementById("c2").src = picsSRC[9];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "virginia") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "boston") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Minnesota";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of North Dakota";
                    document.getElementById("c1").src = picsSRC[21];
                    document.getElementById("c2").src = picsSRC[23];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "minnesota") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "northdakota" || userCollege.toLowerCase() == "north dakota") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Richard[n] == "Business") {
                if (Richard[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Pennsylvania";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Harvard";
                    document.getElementById("c1").src = picsSRC[34];
                    document.getElementById("c2").src = picsSRC[36];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "pennsylvania") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "harvard") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Columbia University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: New York";
                    document.getElementById("c1").src = picsSRC[12];
                    document.getElementById("c2").src = picsSRC[37];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "columbia") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "newyork" || userCollege.toLowerCase() == "new york") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of California-Davis";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[10];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "vanderbilt") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "davis" || userCollege.toLowerCase() == "california" || userCollege.toLowerCase() == "californiadavis" || userCollege.toLowerCase() == "california davis") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Oklahoma";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Howard University";
                    document.getElementById("c1").src = picsSRC[26];
                    document.getElementById("c2").src = picsSRC[17];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "oklahoma") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "howard") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Richard[n] == "Engineer") {
                if (Richard[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Berkley";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[8];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "mit") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "berkley") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: John Hopkins University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Illinois—​Urbana-​Champaign";
                    document.getElementById("c1").src = picsSRC[16];
                    document.getElementById("c2").src = picsSRC[30];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "urbana") {
                        cash-=collegePrice2
                    }
                }
                if (Richard[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Notre Dame";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Michigan State";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[20];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "notredame" || userCollege.toLowerCase() == "notre dame") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "michigan" || userCollege.toLowerCase() == "michiganstate" || userCollege.toLowerCase() == "michigan state") {
                        cash-=collegePrice2
                    }

                }
                if (Richard[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Wyoming";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Texas";
                    document.getElementById("c1").src = picsSRC[35];
                    document.getElementById("c2").src = picsSRC[29];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "wyoming" ) {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "texas") {
                        cash-=collegePrice2
                    }
                }
            }
        }
    }
    if (usertook == "Nicole") {
        for (n = 0; n < Nicole.length; n++) {
            if (Nicole[n] == "Computer Science") {
                if (Nicole[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Computer Science, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Stanford";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[7];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "mit") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "stanford") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.2 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Auburn";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Maryland";
                    document.getElementById("c1").src = picsSRC[0];
                    document.getElementById("c2").src = picsSRC[3];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "auburn") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "maryland") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Devry";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Missouri";
                    document.getElementById("c1").src = picsSRC[2];
                    document.getElementById("c2").src = picsSRC[5];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "devry") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "missouri") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Computer Science, above are your options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Miami";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Clemson";
                    document.getElementById("c1").src = picsSRC[4];
                    document.getElementById("c2").src = picsSRC[1];//order does matter
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "miami") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "clemson") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Nicole[n] == "Teaching") {
                if (Nicole[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Brown University";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[38];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "vanderbilt") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "brown") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Rochester";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Georgia";
                    document.getElementById("c1").src = picsSRC[15];
                    document.getElementById("c2").src = picsSRC[28];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "rochester") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "georgia") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Florida State University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: College of New Jersey";
                    document.getElementById("c1").src = picsSRC[14];
                    document.getElementById("c2").src = picsSRC[22];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "floridastate" || userCollege.toLowerCase() == "florida state") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "georgia") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Teaching, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Penn state";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Central Michigan University";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[11];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "pennstate" || userCollege.toLowerCase() == "penn state") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "central michigan" ) {
                        cash-=collegePrice2
                    }
                }
            }
            if (Nicole[n] == "Health/Medicine") {
                if (Nicole[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Harvard";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: John Hopkins University";
                    document.getElementById("c1").src = picsSRC[36];
                    document.getElementById("c2").src = picsSRC[16];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "harvard") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Washington University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Duke University";
                    document.getElementById("c1").src = picsSRC[33];
                    document.getElementById("c2").src = picsSRC[13];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "washington") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "duke") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Virginia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Boston University";
                    document.getElementById("c1").src = picsSRC[32];
                    document.getElementById("c2").src = picsSRC[9];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "virginia") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "boston") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Health/Medicine, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Minnesota";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of North Dakota";
                    document.getElementById("c1").src = picsSRC[21];
                    document.getElementById("c2").src = picsSRC[23];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "minnesota") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "northdakota" || userCollege.toLowerCase() == "north dakota") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Nicole[n] == "Business") {
                if (Nicole[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Pennsylvania";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Harvard";
                    document.getElementById("c1").src = picsSRC[34];
                    document.getElementById("c2").src = picsSRC[36];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "pennsylvania") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "harvard") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Columbia University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: New York";
                    document.getElementById("c1").src = picsSRC[12];
                    document.getElementById("c2").src = picsSRC[37];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "columbia") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "newyork" || userCollege.toLowerCase() == "new york") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of California-Davis";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[10];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "vanderbilt") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "davis" || userCollege.toLowerCase() == "california" || userCollege.toLowerCase() == "californiadavis" || userCollege.toLowerCase() == "california davis") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Business, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Oklahoma";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Howard University";
                    document.getElementById("c1").src = picsSRC[26];
                    document.getElementById("c2").src = picsSRC[17];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "oklahoma") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "howard") {
                        cash-=collegePrice2
                    }
                }
            }
            if (Nicole[n] == "Engineer") {
                if (Nicole[1] == "4.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Berkley";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[8];
                    var collegePrice1 = Math.floor(Math.random()*(4000)+2000);
                    var collegePrice2 = Math.floor(Math.random()*(3800)+1600);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "mit") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "berkley") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.6 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: John Hopkins University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Illinois—​Urbana-​Champaign";
                    document.getElementById("c1").src = picsSRC[16];
                    document.getElementById("c2").src = picsSRC[30];
                    var collegePrice1 = Math.floor(Math.random()*(3000)+1200);
                    var collegePrice2 = Math.floor(Math.random()*(2800)+800);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "urbana") {
                        cash-=collegePrice2
                    }
                }
                if (Nicole[1] == "3.0 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Notre Dame";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Michigan State";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[20];
                    var collegePrice1 = Math.floor(Math.random()*(2000)+600);
                    var collegePrice2 = Math.floor(Math.random()*(1800)+400);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                    if (userCollege.toLowerCase() == "notredame" || userCollege.toLowerCase() == "notre dame") {
                        cash-=collegePrice1
                    }
                    if (userCollege.toLowerCase() == "michigan" || userCollege.toLowerCase() == "michiganstate" || userCollege.toLowerCase() == "michigan state") {
                        cash-=collegePrice2
                    }

                }
                if (Nicole[1] == "2.2 GPA") {
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Engineer, you have options to what college you want to go to. Please choose one of the colleges above based off your interest and how much money you have.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Wyoming";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Texas";
                    document.getElementById("c1").src = picsSRC[35];
                    document.getElementById("c2").src = picsSRC[29];
                    var collegePrice1 = Math.floor(Math.random()*(1000)+300);
                    var collegePrice2 = Math.floor(Math.random()*(800)+100);
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePrice1;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePrice2;
                }
            }
        }
    }
}

var house1 = Math.floor(Math.random()*(2));
var house2 = Math.floor(Math.random()*(2));
function investInRealEstate(e) {
    if (e.keyCode==13){
        var typeofHouse = document.getElementById("chooseHouse").value;
    }
    document.getElementById("h1").src = singlehouseSRC[house1];
    document.getElementById("h2").src = townhouseSRC[house2];
    document.getElementById("outputHouse1Display").innerHTML = "Type: Single Family House";
    document.getElementById("outputHouse2Display").innerHTML = "Type: Town House";
    document.getElementById("outputHouse1Cost").innerHTML = "Cost: $100,000";//LEFT off with price and overtime randomness to see how much money is made, after every couple rolls.

}


// function getResponse(e){
//     if (e.keyCode == 13) {
//         var userCareer = document.getElementById("chooseCollege").value;
//     }
//     return userCareer
// }

function buyAssets() {
    //In this function the user is able to purchase things like a car and a house.
    var askBuy = prompt("Would you like to buy car?");
    askBuy.toLowerCase();
    if (askBuy=="yes"){
        var askPrice = prompt("Would you like to buy the Ford($500) car or Lexus($1000) car? Enter ford or lexus. If you don't have enough money enter 'no'");
        askPrice.toLowerCase();
        if (askPrice=="ford"){
            cash-=500;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;//money goes down because something was bought.
            document.getElementById("outputCar").innerHTML = "Car: Ford"
        }
        if (askPrice=="lexus"){
            cash-=1000;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            document.getElementById("outputCar").innerHTML = "Car: Lexus"
        }
        if (cash<0){
            document.getElementById("outputCash").innerHTML = "You have gone bankrupt as you have: " + cash + " " + "dollars in your account";//bankrupt if below the zero dollar mark.
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
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            document.getElementById("outputhouse").innerHTML = "House: Condominium"
        }
        if (cash<0){
            document.getElementById("outputCash").innerHTML = "You have gone bankrupt as you have: " + cash + " " +  "dollars in your account";
        }
    }
}



