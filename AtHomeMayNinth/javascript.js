var cash = 0;
var picsSRC = ["colleges/auburn.png", "colleges/clemson.png", "colleges/devry.png", "colleges/maryland.png", "colleges/miami.png", "colleges/missouri.png", "colleges/mit.png", "colleges/stanford.png", "colleges/berkley.png", "colleges/boston.png", "colleges/calidavis.png", "colleges/centralmichigan.png", "colleges/columbia.png", "colleges/duke.png", "colleges/floridastate.png", "colleges/georgia.png", "colleges/hopkins.png", "colleges/howard.png", "colleges/maryland.png", "colleges/miami.png", "colleges/michiganstate.png", "colleges/minnesota.png", "colleges/newjersey.png", "colleges/northdakota.png", "colleges/notredame.png", "colleges/ohio.png", "colleges/oklohoma.png", "colleges/pennstate.png", "colleges/rochester.png", "colleges/texas.png", "colleges/urbanaR.jpg", "colleges/vanderbilt.png", "colleges/virginia.png", "colleges/washington.png", "colleges/whartonpennsylvania.png", "colleges/wyoming.png", "colleges/harvard.png", "colleges/otherbusiness.jpeg", "colleges/brown.png"];
var usertook = " ";
var collegetook = " ";
var singlehouseSRC = ["houses/singleFamily.jpg", "houses/otherS.jpg"];
var townhouseSRC = ["houses/townhome.jpg", "houses/otherT.jpg"];

var CSCareerSRC = ["careers/software.jpg", "careers/android.png", "careers/network.jpg", "careers/mobileapps.jpg", "careers/helpdesk.jpg", "careers/net.jpg", "careers/web.jpg", "careers/desk.jpg"];
var ECareerSRC = ["careers/petro.jpg", "careers/prin.jpg", "careers/nucleareng.jpg", "careers/chemistry.jpg","careers/electrician.jpg", "careers/prod.jpg", "careers/mech.jpg", "careers/transport.jpg"];
var BCareerSRC = ["careers/actuary.jpg", "careers/opsmang.jpg", "careers/account.jpg", "careers/financialadvisor.jpg", "careers/HR.jpg", "careers/loan.jpg", "careers/customerservice.jpg", "careers/recep.jpg"];
var HCareerSRC = ["careers/ortho.jpg", "careers/cardio.png", "careers/radiologist.jpg", "careers/pulmo.jpg", "careers/dentist.jpg", "careers/optem.jpg", "careers/podia.jpg", "careers/peditri.jpg"];
var TCareerSRC = ["careers/principal.png", "careers/assistantprincipal.png", "careers/administrator.jpg", "careers/hsteach.jpg", "careers/msTeach.jpg", "careers/preTeach.jpg", "careers/healthedu.jpg", "careers/teachassis.jpg"]

var stocksSRC = ["stocksImages/bestwell.png","stocksImages/bestwell2.png"];
var stocksSRC2 = ["stocksImages/doingbad2.png", "stocksImages/doingbad.png"];

var housesNecssarySRC = ["housesN/apartment2.jpg","housesN/singlefamilyhouse2.jpg"];
var carsNecessarySRC = ["cars/car1.jpg", "cars/car2.jpg"];
var CS4 = false;
var CS36 = false;
var CS30 = false;
var CS2 = false;

var E4 = false;
var E36 = false;
var E30 = false;
var E2 = false;

var B4 = false;
var B36 = false;
var B30 = false;
var B2 = false;

var H4 = false;
var H36 = false;
var H30 = false;
var H2 = false;

var T4 = false;
var T36 = false;
var T30 = false;
var T2 = false;

var careerCS4 = true;
var careerCS36 = true;
var careerCS30 = true;
var careerCS2 = true;

var startMakingMoney = false;

var day = 1;


setInterval(function(){ day+=1;document.getElementById("outputdays").innerHTML = "Day: " + day; }, 60000);

var collegePriceFour = Math.floor(Math.random()*(4000)+2000);
var collegePriceFourOther = Math.floor(Math.random()*(3800)+1600);

var collegePriceThreesix = Math.floor(Math.random()*(3000)+1200);
var collegePriceThreesixother = Math.floor(Math.random()*(2800)+800);

var collegePriceThree = Math.floor(Math.random()*(2000)+600);
var collegePriceThreeother = Math.floor(Math.random()*(1800)+400);

var collegePriceTwo = Math.floor(Math.random()*(1000)+300);
var collegePriceTwoother = Math.floor(Math.random()*(800)+100);

var careerFourSalary = Math.floor(Math.random()*(5000)+2500);
var careerFourSalaryOther = Math.floor(Math.random()*(5000)+2500);

var careerThreesixSalary = Math.floor(Math.random()*(3000)+1000);
var careerThreesixSalaryOther = Math.floor(Math.random()*(3000)+1000);

var careerThreeSalary = Math.floor(Math.random()*(2000)+500);
var careerThreeSalaryOther = Math.floor(Math.random()*(2000)+500);

var careerTwoSalary = Math.floor(Math.random()*(1000)+100);
var careerTwoSalaryOther = Math.floor(Math.random()*(1000)+100);

var revenueOffProperty = 0;
var revenueOffStocks = 0;
var carArray = [];
var carArray2 = [];
var createImage = function(src, title,xcoord,ycoord, winum, hinum) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    img.width = winum;
    img.height = hinum;

    return img;
};

$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode==27){
        cash+=10000;//WORKING
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
});


function buttonLayout() {
    document.getElementById("roll").disabled = true;// Before character selection, the roll button is disabled. There is an order to how you need to do things.
    document.getElementById("ask2").disabled = true;
    document.getElementById("payOff").disabled = true;
    document.getElementById("invest").disabled = true;
    document.getElementById("ask").disabled = true;
    document.getElementById("invest").disabled = true;
    document.getElementById("check").disabled = true;
    document.getElementById("buy").disabled = true;
    carArray.push(createImage("drawing/carmove2.png", "car", 50, 0, 50, 50));
    carArray2.push(createImage("drawing/carmove.png", "car", 50, 600, 50, 50));
}



function beginGame() {
    document.getElementById("output1").innerHTML = "Make the choice which you believe will help you most";
    document.getElementById("outputdays").innerHTML = "Day: " + day;
    document.getElementById("first").disabled = true;
    document.getElementById("buy").disabled = false;
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
        genNumG = Math.floor(Math.random()*(4));//In order to pick a random GPA
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
    if (usertook.toLowerCase() == "richard") {
        for (n = 0; n < Nicole.length; n++) {
            if (Richard[n] == "Computer Science") {
                if (Richard[1] == "4.0 GPA") {
                    CS4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Stanford";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[7];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Richard[1] == "3.6 GPA") {
                    CS36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.2 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Auburn";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Maryland";
                    document.getElementById("c1").src = picsSRC[0];
                    document.getElementById("c2").src = picsSRC[3];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Richard[1] == "3.0 GPA") {
                    CS30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Devry";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Missouri";
                    document.getElementById("c1").src = picsSRC[2];
                    document.getElementById("c2").src = picsSRC[5];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Richard[1] == "2.2 GPA") {
                    CS2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Miami";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Clemson";
                    document.getElementById("c1").src = picsSRC[4];
                    document.getElementById("c2").src = picsSRC[1];//order does matter
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Richard[n] == "Teaching") {
                if (Richard[1] == "4.0 GPA") {
                    T4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Brown University";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[38];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Richard[1] == "3.6 GPA") {
                    T36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Georgia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Rochester";
                    document.getElementById("c1").src = picsSRC[15];
                    document.getElementById("c2").src = picsSRC[28];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Richard[1] == "3.0 GPA") {
                    T30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Florida State University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: College of New Jersey";
                    document.getElementById("c1").src = picsSRC[14];
                    document.getElementById("c2").src = picsSRC[22];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Richard[1] == "2.2 GPA") {
                    T2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Penn state";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Central Michigan University";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[11];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Richard[n] == "Health/Medicine") {
                if (Richard[1] == "4.0 GPA") {
                    H4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Harvard";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: John Hopkins University";
                    document.getElementById("c1").src = picsSRC[36];
                    document.getElementById("c2").src = picsSRC[16];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Richard[1] == "3.6 GPA") {
                    H36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Washington University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Duke University";
                    document.getElementById("c1").src = picsSRC[33];
                    document.getElementById("c2").src = picsSRC[13];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Richard[1] == "3.0 GPA") {
                    H30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Virginia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Boston University";
                    document.getElementById("c1").src = picsSRC[32];
                    document.getElementById("c2").src = picsSRC[9];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Richard[1] == "2.2 GPA") {
                    H2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Minnesota";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of North Dakota";
                    document.getElementById("c1").src = picsSRC[21];
                    document.getElementById("c2").src = picsSRC[23];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Richard[n] == "Business") {
                if (Richard[1] == "4.0 GPA") {
                    B4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Pennsylvania";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Harvard";
                    document.getElementById("c1").src = picsSRC[34];
                    document.getElementById("c2").src = picsSRC[36];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Richard[1] == "3.6 GPA") {
                    B36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Columbia University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: New York";
                    document.getElementById("c1").src = picsSRC[12];
                    document.getElementById("c2").src = picsSRC[37];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Richard[1] == "3.0 GPA") {
                    B30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of California-Davis";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[10];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Richard[1] == "2.2 GPA") {
                    B2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Oklahoma";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Howard University";
                    document.getElementById("c1").src = picsSRC[26];
                    document.getElementById("c2").src = picsSRC[17];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Richard[n] == "Engineer") {
                if (Richard[1] == "4.0 GPA") {
                    E4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Berkley";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[8];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Richard[1] == "3.6 GPA") {
                    E36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: John Hopkins University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Illinois—​Urbana-​Champaign";
                    document.getElementById("c1").src = picsSRC[16];
                    document.getElementById("c2").src = picsSRC[30];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Richard[1] == "3.0 GPA") {
                    E30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Notre Dame";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Michigan State";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[20];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;


                }
                if (Richard[1] == "2.2 GPA") {
                    E2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Wyoming";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Texas";
                    document.getElementById("c1").src = picsSRC[35];
                    document.getElementById("c2").src = picsSRC[29];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
        }
    }
    if (usertook.toLowerCase() == "nicole") {
        for (n = 0; n < Nicole.length; n++) {
            if (Nicole[n] == "Computer Science") {
                if (Nicole[1] == "4.0 GPA") {
                    CS4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Stanford";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[7];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Nicole[1] == "3.6 GPA") {
                    CS36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.2 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Auburn";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Maryland";
                    document.getElementById("c1").src = picsSRC[0];
                    document.getElementById("c2").src = picsSRC[3];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Nicole[1] == "3.0 GPA") {
                    CS30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Devry";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Missouri";
                    document.getElementById("c1").src = picsSRC[2];
                    document.getElementById("c2").src = picsSRC[5];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Nicole[1] == "2.2 GPA") {
                    CS2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Miami";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Clemson";
                    document.getElementById("c1").src = picsSRC[4];
                    document.getElementById("c2").src = picsSRC[1];//order does matter
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Nicole[n] == "Teaching") {
                if (Nicole[1] == "4.0 GPA") {
                    T4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Brown University";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[38];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Nicole[1] == "3.6 GPA") {
                    T36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Georgia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Rochester";
                    document.getElementById("c1").src = picsSRC[15];
                    document.getElementById("c2").src = picsSRC[28];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Nicole[1] == "3.0 GPA") {
                    T30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Florida State University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: College of New Jersey";
                    document.getElementById("c1").src = picsSRC[14];
                    document.getElementById("c2").src = picsSRC[22];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Nicole[1] == "2.2 GPA") {
                    T2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Teaching, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Penn state";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Central Michigan University";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[11];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Nicole[n] == "Health/Medicine") {
                if (Nicole[1] == "4.0 GPA") {
                    H4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Harvard";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: John Hopkins University";
                    document.getElementById("c1").src = picsSRC[36];
                    document.getElementById("c2").src = picsSRC[16];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Nicole[1] == "3.6 GPA") {
                    H36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Washington University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Duke University";
                    document.getElementById("c1").src = picsSRC[33];
                    document.getElementById("c2").src = picsSRC[13];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Nicole[1] == "3.0 GPA") {
                    H30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Virginia";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Boston University";
                    document.getElementById("c1").src = picsSRC[32];
                    document.getElementById("c2").src = picsSRC[9];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Nicole[1] == "2.2 GPA") {
                    H2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Health/Medicine, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Minnesota";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of North Dakota";
                    document.getElementById("c1").src = picsSRC[21];
                    document.getElementById("c2").src = picsSRC[23];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Nicole[n] == "Business") {
                if (Nicole[1] == "4.0 GPA") {
                    B4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Pennsylvania";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Harvard";
                    document.getElementById("c1").src = picsSRC[34];
                    document.getElementById("c2").src = picsSRC[36];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Nicole[1] == "3.6 GPA") {
                    B36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Columbia University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: New York";
                    document.getElementById("c1").src = picsSRC[12];
                    document.getElementById("c2").src = picsSRC[37];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Nicole[1] == "3.0 GPA") {
                    B30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Vanderbilt";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of California-Davis";
                    document.getElementById("c1").src = picsSRC[31];
                    document.getElementById("c2").src = picsSRC[10];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;
                }
                if (Nicole[1] == "2.2 GPA") {
                    B2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Business, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Oklahoma";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Howard University";
                    document.getElementById("c1").src = picsSRC[26];
                    document.getElementById("c2").src = picsSRC[17];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
            if (Nicole[n] == "Engineer") {
                if (Nicole[1] == "4.0 GPA") {
                    E4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Berkley";
                    document.getElementById("c1").src = picsSRC[6];
                    document.getElementById("c2").src = picsSRC[8];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;
                }
                if (Nicole[1] == "3.6 GPA") {
                    E36 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.6 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: John Hopkins University";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Illinois—​Urbana-​Champaign";
                    document.getElementById("c1").src = picsSRC[16];
                    document.getElementById("c2").src = picsSRC[30];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThreesix;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreesixother;
                }
                if (Nicole[1] == "3.0 GPA") {
                    E30 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 3.0 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Notre Dame";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Michigan State";
                    document.getElementById("c1").src = picsSRC[24];
                    document.getElementById("c2").src = picsSRC[20];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceThree;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceThreeother;


                }
                if (Nicole[1] == "2.2 GPA") {
                    E2 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 2.2 GPA and are interested in Engineer, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: University of Wyoming";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: University of Texas";
                    document.getElementById("c1").src = picsSRC[35];
                    document.getElementById("c2").src = picsSRC[29];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceTwo;
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceTwoother;
                }
            }
        }
    }
}

function getResponse(e){
    if (e.keyCode == 13) {
        var userCollege = document.getElementById("chooseCollege").value;
    }
    if (CS4==true) {
        if (userCollege.toLowerCase() == "mit") {
            collegetook = "mit";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash -= collegePriceFour;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "stanford") {
            collegetook = "stanford";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash -= collegePriceFourOther;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if (CS36==true){
        if (userCollege.toLowerCase() == "auburn") {
            collegetook = "auburn";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesix;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "maryland") {
            collegetook = "maryland";
            if (paymentType == "one") {
                cash-=collegePriceThreesixother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if (CS30==true){
        if (userCollege.toLowerCase() == "devry") {
            collegetook = "devry";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThree;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "missouri") {
            collegetook = "missouri";
            if (paymentType == "one") {
                cash-=collegePriceThreeother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if (CS2==true){
        if (userCollege.toLowerCase() == "miami") {
            collegetook = "miami";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwo;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "clemson") {
            collegetook = "clemson";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwoother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(T4==true){
        if (userCollege.toLowerCase() == "vanderbilt") {
            collegetook = "vanderbilt";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFour;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "brown") {
            collegetook = "brown";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFourOther;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(T36==true){
        if (userCollege.toLowerCase() == "rochester") {
            collegetook = "rochester";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesix;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "georgia") {
            collegetook = "georgia";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesixother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(T30==true){
        if (userCollege.toLowerCase() == "floridastate" || userCollege.toLowerCase() == "florida state") {
            collegetook = "floridastate";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThree;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "georgia") {
            collegetook = "georgia";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreeother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(T2==true){
        if (userCollege.toLowerCase() == "pennstate" || userCollege.toLowerCase() == "penn state") {
            collegetook = "pennstate";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwo;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "central michigan" ) {
            collegetook = "cmichigan";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwoother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(H4==true){
        if (userCollege.toLowerCase() == "harvard") {
            collegetook = "harvard";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFour;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
            collegetook = "hopkins";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFourOther;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(H36==true){
        if (userCollege.toLowerCase() == "washington") {
            collegetook = "washington";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesix;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "duke") {
            collegetook = "duke";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesixother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(H30==true){
        if (userCollege.toLowerCase() == "virginia") {
            collegetook = "virginia";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThree;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "boston") {
            collegetook = "boston";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreeother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(H2==true){
        if (userCollege.toLowerCase() == "minnesota") {
            collegetook = "minnesota";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwo;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "northdakota" || userCollege.toLowerCase() == "north dakota") {
            collegetook = "northdakota";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwoother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(B4==true){
        if (userCollege.toLowerCase() == "pennsylvania") {
            collegetook = "pennsylvania";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFour;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "harvard") {
            collegetook = "harvard";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFourOther;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(B36==true){
        if (userCollege.toLowerCase() == "columbia") {
            collegetook = "columbia";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesix;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "newyork" || userCollege.toLowerCase() == "new york") {
            collegetook = "newyork";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesixother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(B30==true){
        if (userCollege.toLowerCase() == "vanderbilt") {
            collegetook = "vanderbilt";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThree;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "davis" || userCollege.toLowerCase() == "california" || userCollege.toLowerCase() == "californiadavis" || userCollege.toLowerCase() == "california davis") {
            collegetook = "davis";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreeother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(B2==true){
        if (userCollege.toLowerCase() == "oklahoma") {
            collegetook = "oklahoma";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwo;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "howard") {
            collegetook = "howard";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwoother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(E4==true){
        if (userCollege.toLowerCase() == "mit") {
            collegetook = "mit";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFour;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "berkley") {
            collegetook = "berkley";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceFourOther;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(E36==true){
        if (userCollege.toLowerCase() == "hopkins" || userCollege.toLowerCase() == "johnhopkins" || userCollege.toLowerCase() == "john hopkins" ) {
            collegetook = "hopkins";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesix;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "urbana") {
            collegetook = "urbana";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreesixother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(E30==true){
        if (userCollege.toLowerCase() == "notredame" || userCollege.toLowerCase() == "notre dame") {
            collegetook = "notredame";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThree;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "michigan" || userCollege.toLowerCase() == "michiganstate" || userCollege.toLowerCase() == "michigan state") {
            collegetook = "michigan";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceThreeother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    if(E2==true){
        if (userCollege.toLowerCase() == "wyoming" ) {
            collegetook = "wyoming";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwo;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("payOff").disabled = false;
            }
        }
        if (userCollege.toLowerCase() == "texas") {
            collegetook = "texas";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");
            if (paymentType == "one") {
                cash-=collegePriceTwoother;
                document.getElementById("ask2").disabled = false;
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
    document.getElementById("chooseCollege").disabled = true;//In order to make sure the user cannot choose a different player once they have chosen one character
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;//bankrupt for all and start choice two
    checkBelowZero()
}




function askChoices2() {
    //IN this function the user is able to make money and over time use time to generate more money
    if(CS4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Software Development Engineer(S)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Android Software Developer(A)";
        document.getElementById("c1").src = CSCareerSRC[0];
        document.getElementById("c2").src = CSCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerFourSalaryOther;
    }
    if(CS36==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Network Security Engineer(N)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Mobile Apps Developer(M)";
        document.getElementById("c1").src = CSCareerSRC[2];
        document.getElementById("c2").src = CSCareerSRC[3];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreesixSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreesixSalaryOther;
    }
    if(CS30==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Web Programmer(W)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Desktop Engineer(D)";
        document.getElementById("c1").src = CSCareerSRC[6];
        document.getElementById("c2").src = CSCareerSRC[7];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreeSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreeSalaryOther;
    }
    if(CS2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Help Desk Technician(H)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Network Technician(N)";
        document.getElementById("c1").src = CSCareerSRC[5];
        document.getElementById("c2").src = CSCareerSRC[4];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }
    if(T4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Principal(T)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Assistant Principal(A)";
        document.getElementById("c1").src = TCareerSRC[0];
        document.getElementById("c2").src = TCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerFourSalaryOther;
    }
    if(T36==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: School Administrator(S)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: High School Teacher(H)";
        document.getElementById("c1").src = TCareerSRC[0];
        document.getElementById("c2").src = TCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreesixSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreesixSalaryOther;
    }
    if(T30==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Middle School Teacher(M)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Preschool Teacher(P)";
        document.getElementById("c1").src = TCareerSRC[0];
        document.getElementById("c2").src = TCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreeSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreeSalaryOther;
    }
    if(T2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Health Educator(H)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Teacher Assistant(T)";
        document.getElementById("c1").src = TCareerSRC[0];
        document.getElementById("c2").src = TCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }
    if(T2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Health Educator(H)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Teacher Assistant(T)";
        document.getElementById("c1").src = TCareerSRC[0];
        document.getElementById("c2").src = TCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }
    if(E4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Petroleum Engineer(P)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Principal Process Engineer(PP)";
        document.getElementById("c1").src = ECareerSRC[0];
        document.getElementById("c2").src = ECareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerFourSalaryOther;
    }
    if(E36==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Nuclear Engineer(N)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Chemical Engineer(C)";
        document.getElementById("c1").src = ECareerSRC[2];
        document.getElementById("c2").src = ECareerSRC[3];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreesixSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreesixSalaryOther;
    }
    if(E30==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Electronics Design Engineer(E)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Product development Engineer(P)";
        document.getElementById("c1").src = ECareerSRC[4];
        document.getElementById("c2").src = ECareerSRC[5];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreeSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreeSalaryOther;
    }
    if(E2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Mechanical Design Engineer(M)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Transportation Engineer(T)";
        document.getElementById("c1").src = ECareerSRC[6];
        document.getElementById("c2").src = ECareerSRC[7];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }
    if(B4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Actuary(A)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Business Operations Manager(B)";
        document.getElementById("c1").src = BCareerSRC[0];
        document.getElementById("c2").src = BCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerFourSalaryOther;
    }
    if(B36==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Accountant(A)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Financial Advisor(F)";
        document.getElementById("c1").src = BCareerSRC[2];
        document.getElementById("c2").src = BCareerSRC[3];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreesixSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreesixSalaryOther;
    }
    if(B30==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: HR Specialist(H)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Loan Officer(L)";
        document.getElementById("c1").src = BCareerSRC[4];
        document.getElementById("c2").src = BCareerSRC[5];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreeSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreeSalaryOther;
    }
    if(B2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Customer Service Rep.(C)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Repceptionist(R)";
        document.getElementById("c1").src = BCareerSRC[6];
        document.getElementById("c2").src = BCareerSRC[7];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }
    if(H4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Orthopedic Surgeon(O)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Cardiologist(C)";
        document.getElementById("c1").src = HCareerSRC[0];
        document.getElementById("c2").src = HCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerFourSalaryOther;
    }
    if(H36==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Radiology(R)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Pulmonology(P)";
        document.getElementById("c1").src = HCareerSRC[2];
        document.getElementById("c2").src = HCareerSRC[3];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreesixSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreesixSalaryOther;
    }
    if(H30==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Dentist(D)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Optometrist(O)";
        document.getElementById("c1").src = HCareerSRC[4];
        document.getElementById("c2").src = HCareerSRC[5];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerThreeSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerThreeSalaryOther;
    }
    if(H2==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Podiatrists(P)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Pediatrician(PE)";
        document.getElementById("c1").src = HCareerSRC[6];
        document.getElementById("c2").src = HCareerSRC[7];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerTwoSalary;
        document.getElementById("outputCollege2Price").innerHTML = "Salary(per minute): " + careerTwoSalaryOther;
    }

}
function getResponse2(e) {
    if (e.keyCode == 13) {
        var userCareer = document.getElementById("chooseCareer").value;
        document.getElementById("chooseCareer").disabled = true;
    }
    if(CS4==true){
        if(userCareer.toLowerCase()=="s"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);//USE IN ORDER TO GENERATE MONEY
        }
        if(userCareer.toLowerCase()=="a"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(CS36==true){
        if(userCareer.toLowerCase()=="n"){
            setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="m"){
            setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(CS30==true){
        if(userCareer.toLowerCase()=="w"){
            setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="d"){
            setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(CS2==true){
        if(userCareer.toLowerCase()=="h"){
            setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="n"){
            setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T4==true){
        if(userCareer.toLowerCase()=="t"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="a"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T36==true){
        if(userCareer.toLowerCase()=="s"){
            setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="h"){
            setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T30==true){
        if(userCareer.toLowerCase()=="m"){
            setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E4==true){
        if(userCareer.toLowerCase()=="p"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="pp"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E36==true){
        if(userCareer.toLowerCase()=="n"){
            setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="c"){
            setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E30==true){
        if(userCareer.toLowerCase()=="e"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E2==true){
        if(userCareer.toLowerCase()=="m"){
            setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="t"){
            setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B4==true){
        if(userCareer.toLowerCase()=="a"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="b"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B36==true){
        if(userCareer.toLowerCase()=="a"){
            setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="f"){
            setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B30==true){
        if(userCareer.toLowerCase()=="h"){
            setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="l"){
            setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B2==true){
        if(userCareer.toLowerCase()=="c"){
            setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="r"){
            setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H4==true){
        if(userCareer.toLowerCase()=="o"){
            setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="c"){
            setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H36==true){
        if(userCareer.toLowerCase()=="r"){
            setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H30==true){
        if(userCareer.toLowerCase()=="d"){
            setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="o"){
            setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H2==true){
        if(userCareer.toLowerCase()=="p"){
            setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="pe"){
            setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
}



//NEED TO MAKE FUNCTION WHICH CHECKS IF BELOW ZERO
var house1 = Math.floor(Math.random()*(2));
var house2 = Math.floor(Math.random()*(2));
var housePrice1 = Math.floor(Math.random()*(10000)+50000);
var housePrice2 = Math.floor(Math.random()*(50000)+20000);


function investInRealEstate() {
    document.getElementById("h1").src = singlehouseSRC[house1];
    document.getElementById("h2").src = townhouseSRC[house2];
    document.getElementById("outputHouse1Display").innerHTML = "Type: Single Family House(S)";
    document.getElementById("outputHouse2Display").innerHTML = "Type: Town House(T)";
    document.getElementById("outputHouse1Cost").innerHTML = "Cost: " + housePrice1;//LEFT off with price and overtime randomness to see how much money is made, after every couple rolls.
    document.getElementById("outputHouse2Cost").innerHTML = "Cost: " + housePrice2
}
var house = " ";
var go = false;
function generateRandomHouseValue(e) {
    if (e.keyCode==13){
        var typeofHouse = document.getElementById("chooseHouse").value;
        go = true;
    }
    if(go==true){
        var typeOfPayment = prompt("Would you like to buy the house right away(r) or make installment payments(i)?");
        if(typeofHouse.toLowerCase()=="s") {
            if (typeOfPayment.toLowerCase() == "r") {
                cash -= housePrice1;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
                if(isPositive == true){
                    document.getElementById("outputAlert").innerHTML = "Congratulations, you are now eligible to make money off of your property you have invested in.";
                    startMakingMoney = true;
                    document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                    makeMoneyOffProperty();
                }
            }
            if(typeOfPayment.toLowerCase()=="i"){
                alert("Be sure to pay off your loan(mortgage) quickly so that you can earn money from this piece of real estate!");
                house = "single";
                document.getElementById("HouseBalance").innerHTML = "Mortgage Left: " + housePrice1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(typeofHouse.toLowerCase()=="t") {
            if (typeOfPayment.toLowerCase() == "r") {
                cash -= housePrice2;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                startMakingMoney = true;
                checkBelowZero();
                if(isPositive == true){
                    document.getElementById("outputAlert").innerHTML = "Congratulations, you are now eligible to make money off of your property you have invested in.";
                    startMakingMoney = true;
                    document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                    makeMoneyOffProperty();
                }
            }
            if(typeOfPayment.toLowerCase()=="i"){
                alert("Be sure to pay off your loan(mortgage) quickly so that you can earn money from this piece of real estate!");
                house = "town";
                document.getElementById("HouseBalance").innerHTML = "Mortgage Left: " + housePrice1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
    }
}



var troughCounter = 0;
var expansionCounter = 0;
var peakCounter = 0;
var contractionCounter = 0;

function makeMoneyOffProperty() {
    if (startMakingMoney == true) {
        setInterval(function(){
            var randMaking = Math.floor(Math.random() * (5));//One represents a trough, two represents a expansion. Three represents a peak. Four is contraction
            if (randMaking == 1) {
                troughCounter+=1;
                alert("Looks like we are currently experiencing a trough and you are about to take a minor hit in how much money you are making off this property!");
                var randDeduction = Math.floor(Math.random() * (200) + 50);
                revenueOffProperty -= randDeduction;
                cash -=randDeduction;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputTrough").innerHTML = "Amount of Times trough occured: " + " " + troughCounter;
            }
            if (randMaking == 2) {
                expansionCounter+=1;
                alert("Looks like we are currently experiencing an expansion and you are about to make some money!") ;
                var randIncrease = Math.floor(Math.random() * (500) + 50);
                revenueOffProperty += randIncrease;
                cash += randIncrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputExpansion").innerHTML = "Amount of Times expansion occured: " + " " + expansionCounter;
            }
            if (randMaking == 3) {
                peakCounter+=1;
                alert("Looks like we are currently experiencing a peak and you are about to make the most amount of money you have made so far off this property!") ;
                var maxIncrease = Math.floor(Math.random() * (1000) + 200);
                revenueOffProperty += maxIncrease;
                cash +=maxIncrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputPeak").innerHTML = "Amount of Times peak occured: " + " " + peakCounter;
            }
            if (randMaking == 4) {
                contractionCounter+=1;
                alert("Looks like we are currently experiencing a contraction and you are about to take a huge hit on how much money you have made from this property!");
                var maxDecrease = Math.floor(Math.random() * (1000) + 200);
                revenueOffProperty -= maxDecrease;
                cash-=maxDecrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputContraction").innerHTML = "Amount of Times contraction occured: " + " " + contractionCounter;
            }
        } , 20000);
    }
}

var stockPrice1 = Math.floor(Math.random() * (250));
var stockPrice2 = Math.floor(Math.random() * (400));
var stockPrice3 = Math.floor(Math.random() * (600));
var stockPrice4 = Math.floor(Math.random() * (10000));
function investInStocks() {
    alert("Hello, I am your financial agent, and I was wondering how many stocks you would like to buy.");
    document.getElementById("stock1").innerHTML = "Facebook Stock: " + " " + stockPrice1;
    document.getElementById("stock2").innerHTML = "Apple Stock: " + " " + stockPrice2;
    document.getElementById("stock3").innerHTML = "Tesla Stock: " + " " + stockPrice3;
    document.getElementById("stock4").innerHTML = "Bitcoin Stock: " + " " + stockPrice4;
    document.getElementById("chooseStocks").disabled = false;
    document.getElementById("chooseStocks2").disabled = false;
}
var stockofChoice = " ";
function stocks(e){
    if (e.keyCode == 13) {
        var typeofStock = document.getElementById("chooseStocks").value;
    }
    if(typeofStock.toLowerCase()=="facebook"){
        stockofChoice = "facebook"
    }
    if(typeofStock.toLowerCase()=="apple"){
        stockofChoice = "apple"
    }
    if(typeofStock.toLowerCase()=="tesla"){
        stockofChoice = "tesla"
    }
    if(typeofStock.toLowerCase()=="bitcoin"){
        stockofChoice = "bitcoin"
    }
    document.getElementById("chooseStocks").disabled = true;
}
function stocks2(e) {
    var total;
    var ready = false;
    if (e.keyCode == 13) {
        var quantity = document.getElementById("chooseStocks2").value;
        ready = true;
        document.getElementById("chooseStocks2").disabled = true;
    }
    if(ready==true){
        if(stockofChoice=="facebook"){
            total = quantity*stockPrice1;
            cash-=total;
            alert("Receipt");
            alert("Total Cost of " + quantity + " " + "stocks was: " + total);
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(stockofChoice=="apple"){
            total=quantity*stockPrice2;
            cash-=total;
            alert("Receipt");
            alert("Total Cost of " + quantity + " " + "stocks was: " + total);
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(stockofChoice=="tesla"){
            total=quantity*stockPrice3;
            cash-=total;
            alert("Receipt");
            alert("Total Cost of " + quantity + " " + "stocks was: " + total);
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(stockofChoice=="bitcoin"){
            total=quantity*stockPrice4;
            cash-=total;
            alert("Receipt");
            alert("Total Cost of " + quantity + " " + "stocks was: " + total);
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        checkStocksProfit(total);
    }
}

function checkStocksProfit(total) {
    var newTotal = total;
    setInterval(function () {
        var randMarket = Math.floor(Math.random() * (3));//One represents a bull market, two represents a bear market, and three represents a regular market.
        if (randMarket==1){
            alert("Currently, we are experiencing a bull market and your profits made of off stocks are about go up!");
            var bullMarket = Math.floor(newTotal / 100) * 16 + Math.floor(Math.random() * (100));//Typically you see a 16% Increase
            var randPic = Math.floor(Math.random() * (2));
            document.getElementById("s1").src = stocksSRC[randPic];
            revenueOffStocks += bullMarket;
            cash+=bullMarket;
            document.getElementById("outputrevenuestocks").innerHTML = "Revenue Made(Stocks): " + revenueOffStocks;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if (randMarket==2){
            alert("Currently, we are experiencing a bear market and your profits made of off stocks are about to take a dip!");
            var bearMarket = Math.floor(newTotal / 100) * 20 + Math.floor(Math.random() * (100));//Typically you see a 20% Increase
            var randPic = Math.floor(Math.random() * (2));
            document.getElementById("s1").src = stocksSRC2[randPic];
            revenueOffStocks -= bearMarket;
            cash-=bearMarket;
            document.getElementById("outputrevenuestocks").innerHTML = "Revenue Made(Stocks): " + revenueOffStocks;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
    }, 15000);//CHANGE THE SECONDS FOR EACH!
}
//buy home to live in and car

var carPrice1 = Math.floor(Math.random() * 12000) + 4000;
var carPrice2 = Math.floor(Math.random() * 16000) + 4000;
var housePriceN1 = Math.floor(Math.random() * 8000) + 4000;//Monthly rent
var housePriceN2 = Math.floor(Math.random() * 100000) + 60000;


function buyAssets() {
    //In this function the user is able to purchase things like a car and a house. These things are neccesitites.
    alert("Hello, you are now have to buy a car and house before you can go any further, save up money and buy quick!");
    document.getElementById("purchase1").src = housesNecssarySRC[0];
    document.getElementById("purchase2").src = housesNecssarySRC[1];
    document.getElementById("purchase3").src = carsNecessarySRC[0];
    document.getElementById("purchase4").src = carsNecessarySRC[1];
    document.getElementById("outputShowPrice1").innerHTML = "Price(A): " + ' ' + housePriceN1;
    document.getElementById("outputShowPrice2").innerHTML = "Price(H): " + ' ' + housePriceN2;
    document.getElementById("outputShowPrice3").innerHTML = "Price(M): " + ' ' + carPrice2;
    document.getElementById("outputShowPrice4").innerHTML = "Price(L): " + ' ' + carPrice1;
}
var set = false;
var houseN = " ";
var car = " ";

var housePaidOff = false;
var carPaidOff = false;

function purchaseHouse(e) {
    if (e.keyCode == 13) {
        var houseselection = document.getElementById("purchaseOne").value;
        set = true;
        document.getElementById("purchaseOne").disabled = true;
    }
    if(set==true){
        if(houseselection.toLowerCase()=="a"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                cash -= housePriceN1;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
                if(isPositive==true){
                    housePaidOff=true;
                    alert("Congrats! You now own a home and are able to live in a place. Nice job saving!");
                }
            }
            if(askPayment=="i"){
                alert("Be sure to pay off your loan(mortgage) quickly so you can advance in the game!");
                houseN = "apartment";
                document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(houseselection.toLowerCase()=="h"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                cash -= housePriceN2;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
                if(isPositive==true){
                    housePaidOff=true;
                    alert("Congrats! You now own a home and are able to live in a place. Nice job saving!");
                }
            }
            if(askPayment=="i"){
                alert("Be sure to pay off your loan(mortgage) quickly so you can advance in the game!");
                houseN = "house";
                document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN2 ;
                document.getElementById("payOff").disabled = false;
            }
            if(carPaidOff==true && housePaidOff==true){
                alert("Congrats, Now you are able to move on in the game.");
                document.getElementById("invest").disabled = false;
                document.getElementById("ask").disabled = false;
                document.getElementById("invest").disabled = false;
                document.getElementById("check").disabled = false;
                document.getElementById("ask2").disabled = false;
                document.getElementById("purchaseTwo").style.visibility = "hidden";
                drawBackground();
                startAnimation();
                var gasPrice = Math.floor(Math.random()*30) + 10;
                document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice ;
                setInterval(function(){
                    cash-=gasPrice;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                }, 60000);
            }
        }
    }
}
var set2 = false;
function purchaseCar(e) {
    if (e.keyCode == 13) {
        var carselection = document.getElementById("purchaseTwo").value;
        set2 = true;
        document.getElementById("purchaseTwo").disabled = true;
    }
    if(set2==true){
        if(carselection.toLowerCase()=="l"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                cash -= carPrice1;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
                if(isPositive==true){
                    carPaidOff=true;
                    alert("Congrats! You now own a car and are able to travel to work. Nice job saving!");
                }
            }
            if(askPayment=="i"){
                alert("Be sure to pay off your auto loan quickly so you can advance in the game!");
                car = "lexus";
                document.getElementById("carBalance").innerHTML = "Car Loan Left: " + carPrice1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(carselection.toLowerCase()=="m"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                cash -= carPrice2;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
                if(isPositive==true){
                    carPaidOff=true;
                    alert("Congrats! You now own a car and are able to travel to work. Nice job saving!");
                }
            }
            if(askPayment=="i"){
                alert("Be sure to pay off your auto loan quickly so you can advance in the game!");
                car = "mustang";
                document.getElementById("HouseBalance").innerHTML = "Car Loan Left: " + carPrice2 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(carPaidOff==true && housePaidOff==true){
            alert("Congrats, Now you are able to move on in the game.");
            document.getElementById("invest").disabled = false;
            document.getElementById("ask").disabled = false;
            document.getElementById("invest").disabled = false;
            document.getElementById("check").disabled = false;
            document.getElementById("purchase1").style.visibility = "hidden";
            document.getElementById("purchase2").style.visibility = "hidden";
            document.getElementById("purchase3").style.visibility = "hidden";
            document.getElementById("purchase4").style.visibility = "hidden";
            document.getElementById("purchaseOne").style.visibility = "hidden";
            document.getElementById("purchaseTwo").style.visibility = "hidden";
            document.getElementById("outputShowPrice1").style.visibility = "hidden";
            document.getElementById("outputShowPrice2").style.visibility = "hidden";
            document.getElementById("outputShowPrice3").style.visibility = "hidden";
            document.getElementById("outputShowPrice4").style.visibility = "hidden";
            drawBackground();
            startAnimation();
            var gasPrice = Math.floor(Math.random()*30) + 10;
            document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice ;
            setInterval(function(){
                cash-=gasPrice;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }, 60000);
        }
    }
}


function payOffLoans() {
    var typeOfLoan = prompt("What loan are you paying off today? College(C) or Mortgage(M) or House Loan(H) or Auto Loan(A)");
    if(typeOfLoan.toLowerCase()=="a"){
        var askAmount = prompt("Hello, This is your financial agent, and I was wondering how large of a payment you are making towards your loan?(i.e.600)")
        if(car=="lexus"){
            cash-=askAmount;
            carPrice1-= askAmount;
            document.getElementById("carBalance").innerHTML = "Auto Loan Left: " + carPrice1 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(car=="mustang"){
            cash-=askAmount;
            carPrice2-= askAmount;
            document.getElementById("carBalance").innerHTML = "Auto Loan Left:  " + carPrice2 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(carPrice1<=0 || carPrice2<=0){
            carPaidOff=true;
            document.getElementById("carBalance").innerHTML = " ";
        }
        if(carPaidOff==true && housePaidOff==true){
            alert("Congrats, Now you are able to move on in the game.");
            document.getElementById("invest").disabled = false;
            document.getElementById("ask").disabled = false;
            document.getElementById("invest").disabled = false;
            document.getElementById("check").disabled = false;
            document.getElementById("ask2").disabled = false;
            document.getElementById("purchase1").style.visibility = "hidden";
            document.getElementById("purchase2").style.visibility = "hidden";
            document.getElementById("purchase3").style.visibility = "hidden";
            document.getElementById("purchase4").style.visibility = "hidden";
            document.getElementById("purchaseOne").style.visibility = "hidden";
            document.getElementById("purchaseTwo").style.visibility = "hidden";
            document.getElementById("outputShowPrice1").style.visibility = "hidden";
            document.getElementById("outputShowPrice2").style.visibility = "hidden";
            document.getElementById("outputShowPrice3").style.visibility = "hidden";
            document.getElementById("outputShowPrice4").style.visibility = "hidden";
            drawBackground();
            startAnimation();
            var gasPrice = Math.floor(Math.random()*30) + 10;
            document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice ;
            setInterval(function(){
                cash-=gasPrice;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }, 60000);
        }
    }
    if(typeOfLoan.toLowerCase()=="h"){
        var askHowMuch = prompt("Hey, this is you financial agent, how much are you paying today towards your loan for the house?(i.e.1000)");
        if(houseN=="apartment"){
            cash-=askHowMuch;
            housePriceN1-= askHowMuch;
            document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN1 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(houseN=="house"){
            cash-=askHowMuch;
            housePriceN1-= askHowMuch;
            document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN2 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;

        }
        if(housePriceN1<=0 || housePriceN2<=0){
            alert("Congrats! You now own a home and are able to live in a place. Nice job saving!");
            document.getElementById("HouseBalance").innerHTML = " ";
            housePaidOff=true;
        }
        if(carPaidOff==true && housePaidOff==true){
            alert("Congrats, Now you are able to move on in the game.");
            document.getElementById("invest").disabled = false;
            document.getElementById("ask").disabled = false;
            document.getElementById("invest").disabled = false;
            document.getElementById("check").disabled = false;
            document.getElementById("ask2").disabled = false;
            document.getElementById("purchase1").style.visibility = "hidden";
            document.getElementById("purchase2").style.visibility = "hidden";
            document.getElementById("purchase3").style.visibility = "hidden";
            document.getElementById("purchase4").style.visibility = "hidden";
            document.getElementById("purchaseOne").style.visibility = "hidden";
            document.getElementById("purchaseTwo").style.visibility = "hidden";
            document.getElementById("outputShowPrice1").style.visibility = "hidden";
            document.getElementById("outputShowPrice2").style.visibility = "hidden";
            document.getElementById("outputShowPrice3").style.visibility = "hidden";
            document.getElementById("outputShowPrice4").style.visibility = "hidden";
            drawBackground();
            startAnimation();
            var gasPrice = Math.floor(Math.random()*30) + 10;
            document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice ;
            setInterval(function(){
                cash-=gasPrice;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }, 60000);
        }
    }
    if (typeOfLoan.toLowerCase()=="c") {
        var howMuch = prompt("This is the bank teller, I was wondering how much you would like to pay off of your loan today. Enter amount.(i.e 500)");
        if (CS4 == true) {
            if (collegetook.toLowerCase() == "mit") {
                cash -= howMuch;
                collegePriceFour -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "stanford") {
                cash -= howMuch;
                collegePriceFourOther -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (CS36 == true) {
            if (collegetook.toLowerCase() == "auburn") {
                cash -= howMuch;
                collegePriceThreesix -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "maryland") {
                cash -= howMuch;
                collegePriceThreesixother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (CS30 == true) {
            if (collegetook.toLowerCase() == "devry") {
                cash -= howMuch;
                collegePriceThree -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "missouri") {
                cash -= howMuch;
                collegePriceThreeother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (CS2 == true) {
            if (collegetook.toLowerCase() == "miami") {
                cash -= howMuch;
                collegePriceTwo -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "clemson") {
                cash -= howMuch;
                collegePriceTwoother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (T4 == true) {
            if (collegetook.toLowerCase() == "vanderbilt") {
                cash -= howMuch;
                collegePriceFour -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "brown") {
                cash -= howMuch;
                collegePriceFourOther -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();

            }
        }
        if (T36 == true) {
            if (collegetook.toLowerCase() == "rochester") {
                cash -= howMuch;
                collegePriceThreesix -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "georgia") {
                cash -= howMuch;
                collegePriceThreesixother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (T30 == true) {
            if (collegetook.toLowerCase() == "floridastate" || collegetook.toLowerCase() == "florida state") {
                cash -= howMuch;
                collegePriceThree -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "georgia") {
                cash -= howMuch;
                collegePriceThreeother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (T2 == true) {
            if (collegetook.toLowerCase() == "pennstate" || collegetook.toLowerCase() == "penn state") {
                cash -= howMuch;
                collegePriceTwo -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "cmichigan") {
                cash -= howMuch;
                collegePriceTwoother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (H4 == true) {
            if (collegetook.toLowerCase() == "harvard") {
                cash -= howMuch;
                collegePriceFour -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "hopkins" || collegetook.toLowerCase() == "johnhopkins" || collegetook.toLowerCase() == "john hopkins") {
                cash -= howMuch;
                collegePriceFourOther -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();

            }
        }
        if (H36 == true) {
            if (collegetook.toLowerCase() == "washington") {
                cash -= howMuch;
                collegePriceThreesix -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "duke") {
                cash -= howMuch;
                collegePriceThreesixother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (H30 == true) {
            if (collegetook.toLowerCase() == "virginia") {
                cash -= howMuch;
                collegePriceThree -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "boston") {
                cash -= howMuch;
                collegePriceThreeother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (H2 == true) {
            if (collegetook.toLowerCase() == "minnesota") {
                cash -= howMuch;
                collegePriceTwo -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "northdakota" || collegetook.toLowerCase() == "north dakota") {
                cash -= howMuch;
                collegePriceTwoother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (B4 == true) {
            if (collegetook.toLowerCase() == "pennsylvania") {
                cash -= howMuch;
                collegePriceFour -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();

            }
            if (collegetook.toLowerCase() == "harvard") {
                cash -= howMuch;
                collegePriceFourOther -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (B36 == true) {
            if (collegetook.toLowerCase() == "columbia") {
                cash -= howMuch;
                collegePriceThreesix -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "newyork" || collegetook.toLowerCase() == "new york") {
                cash -= howMuch;
                collegePriceThreesixother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (B30 == true) {
            if (collegetook.toLowerCase() == "vanderbilt") {
                cash -= howMuch;
                collegePriceThree -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "davis" || collegetook.toLowerCase() == "california" || collegetook.toLowerCase() == "californiadavis" || collegetook.toLowerCase() == "california davis") {
                cash -= howMuch;
                collegePriceThreeother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (B2 == true) {
            if (collegetook.toLowerCase() == "oklahoma") {
                cash -= howMuch;
                collegePriceTwo -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "howard") {
                cash -= howMuch;
                collegePriceTwoother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (E4 == true) {
            if (collegetook.toLowerCase() == "mit") {
                cash -= howMuch;
                collegePriceFour -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();

            }
            if (collegetook.toLowerCase() == "berkley") {
                cash -= howMuch;
                collegePriceFourOther -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFourOther;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (E36 == true) {
            if (collegetook.toLowerCase() == "hopkins" || collegetook.toLowerCase() == "johnhopkins" || collegetook.toLowerCase() == "john hopkins") {
                cash -= howMuch;
                collegePriceThreesix -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesix;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "urbana") {
                cash -= howMuch;
                collegePriceThreesixother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreesixother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (E30 == true) {
            if (collegetook.toLowerCase() == "notredame" || collegetook.toLowerCase() == "notre dame") {
                cash -= howMuch;
                collegePriceThree -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThree;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "michigan" || collegetook.toLowerCase() == "michiganstate" || collegetook.toLowerCase() == "michigan state") {
                cash -= howMuch;
                collegePriceThreeother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceThreeother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
        if (E2 == true) {
            if (collegetook.toLowerCase() == "wyoming") {
                cash -= howMuch;
                collegePriceTwo -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwo;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
            if (collegetook.toLowerCase() == "texas") {
                cash -= howMuch;
                collegePriceTwoother -= howMuch;
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceTwoother;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();
            }
        }
    }
    if (collegePriceFour <= 0 || collegePriceFourOther <= 0 || collegePriceThreesix <= 0 || collegePriceThreesixother <= 0 || collegePriceTwo <= 0 || collegePriceTwoother <= 0) {
        document.getElementById("ask2").disabled = false;
    }
    if(typeOfLoan.toLowerCase()=="m" ){
        var howMuch = prompt("This is the bank teller, I was wondering how much you would like to pay off of your loan today. Enter amount.(i.e 500)");
        if (house=="single"){
            cash-=howMuch;
            housePrice1-= howMuch;
            document.getElementById("HouseBalance").innerHTML = "Mortgage Left: " + housePrice1 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(house=="town"){
            cash-=howMuch;
            housePrice2-= howMuch;
            document.getElementById("HouseBalance").innerHTML = "Mortgage Left: " + housePrice2 ;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if (housePrice1 <= 0 || housePrice2<=0 ) {
            document.getElementById("outputAlert").innerHTML = "Congratulations, you are now eligible to make money off of your property you have invested in.";
            startMakingMoney = true;
            document.getElementById("outputrevenue").innerHTML = "Revenue Made: " + revenueOffProperty;
            document.getElementById("HouseBalance").innerHTML = " ";
            makeMoneyOffProperty();
        }
    }
}

function randomEventsOccur() {
    //PL = PlayLottery, GM = Get Married, TK = Try to have Kids
    var randEvents = ["PL", "GM", "TK"];
    var randEventNumber = Math.floor(Math.random()*(3));//In  order to pick a random event.
    var eventSelected = randEvents[randEventNumber];
    var indexofEvent = randEvents.indexOf(eventSelected);
    if(indexofEvent==0){
        var ask_to_Play = prompt("Would you like to play the lottery ")
    }
    if(indexofEvent==1){
    }
    if(indexofEvent==2){
    }

}

function drawBackground() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#686868";
    ctx.fillRect(0, 0, 25,600);//First edge
    ctx.fillRect(125, 0, 25,600);//Other edge
    ctx.fillStyle = "#000000";
    ctx.fillRect(25, 0, 100,600);//middle area
    ctx.beginPath();//always needed, starts
    ctx.moveTo(25,0);//starting location
    ctx.lineWidth = 7;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(25,600);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(125,0);//starting location
    ctx.lineWidth = 7;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(125,600);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,10);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,50);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,70);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,110);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,130);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,170);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,190);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,230);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,250);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,270);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,290);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,330);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,350);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,390);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();//always needed, starts
    ctx.moveTo(75,410);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,450);//actually paints
    ctx.stroke();//displays
    ctx.beginPath();
    ctx.moveTo(75,470);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,510);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(75,530);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ADFF2F";
    ctx.lineTo(75,570);
    ctx.stroke();


    drawCar();
}
function startAnimation() {
    animate();
}
function stopAnimation() {
    cancelAnimationFrame(a);
}
function animate(){
    a=requestAnimationFrame(animate);
    drawBackground();
}

function drawCar() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<carArray.length;i++){
        carArray[i].top += 1;
        ctx.drawImage(carArray[i], carArray[i].left, carArray[i].top, 50, 50);
        if(carArray[i].top>600){
            ctx = document.getElementById("myCanvas").getContext("2d");
            carArray2[i].top-=1;
            ctx.drawImage(carArray2[i], carArray2[i].left, carArray2[i].top, 50, 50);
            if(carArray2[i].top>0){
                carArray[i].top += 1;
                ctx.drawImage(carArray[i], carArray[i].left, carArray[i].top, 50, 50);
            }
        }
    }
}

var postitve = true;
function checkBelowZero() {
    if (cash<0){
        document.getElementById("outputCash2").innerHTML = "You have gone bankrupt as you have: " + cash + " " +  "dollars in your account";
        postitve = false;
    }
    return postitve;
}
var isPositive = checkBelowZero();