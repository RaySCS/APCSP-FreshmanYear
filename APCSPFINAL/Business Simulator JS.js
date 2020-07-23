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
var TCareerSRC = ["careers/principal.png", "careers/assistantprincipal.png", "careers/administrator.jpg", "careers/hsteach.jpg", "careers/msTeach.jpg", "careers/preTeach.jpg", "careers/healthedu.jpg", "careers/teachassis.jpg"];

var stocksSRC = ["stocksImages/bestwell.png","stocksImages/bestwell2.png"];
var stocksSRC2 = ["stocksImages/doingbad2.png", "stocksImages/doingbad.png"];

var housesNecssarySRC = ["housesN/apartment2.jpg","housesN/singlefamilyhouse2.jpg"];
var carsNecessarySRC = ["cars/car1.jpg", "cars/car2.jpg"];

var randEventsSRC = ["eventspictures/lottery.png","eventspictures/betterluck.jpg", "eventspictures/heli.jpg", "eventspictures/limo.jpg", "eventspictures/uber.jpg", "eventspictures/ref.jpg", "eventspictures/waiter.jpg", "eventspictures/dangit.jpg", "eventspictures/letsgo.jpg"];

//Above are all SRC's which are used. They are used in order to display images in the img boxes.

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

//Above, these variables are used in order to determine college and career options the user can go to.

var startMakingMoney = false;

var day = 1;

var highScore = 0;

var carNecc;
var moneyCareer;

setInterval(function(){ day+=1;document.getElementById("outputdays").innerHTML = "Day: " + day; }, 60000);
//Above is the timer for days. Every 60 seconds is one day in the gam.

var collegePriceFour = Math.floor(Math.random()*20000) + 5000;
var collegePriceFourOther = Math.floor(Math.random()*18000) + 5000;

var collegePriceThreesix = Math.floor(Math.random()*15000) +5000;
var collegePriceThreesixother = Math.floor(Math.random()*13000)+5000;

var collegePriceThree = Math.floor(Math.random()*10000)+ 4000;
var collegePriceThreeother = Math.floor(Math.random()*8000) + 4000;

var collegePriceTwo = Math.floor(Math.random()*8000) + 3000;
var collegePriceTwoother = Math.floor(Math.random()*6000) + 2000;

var careerFourSalary = Math.floor(Math.random()*(5000)+2500);
var careerFourSalaryOther = Math.floor(Math.random()*(5000)+2500);

var careerThreesixSalary = Math.floor(Math.random()*(3000)+1000);
var careerThreesixSalaryOther = Math.floor(Math.random()*(3000)+1000);

var careerThreeSalary = Math.floor(Math.random()*(2000)+500);
var careerThreeSalaryOther = Math.floor(Math.random()*(2000)+500);

var careerTwoSalary = Math.floor(Math.random()*(1000)+100);
var careerTwoSalaryOther = Math.floor(Math.random()*(1000)+100);

var ChoseCollege = false;
var choseCar = false;
var choseHouse = false;
var investedInHouse = false;
var InvestedInStocks = false;
var ChoseCareer = false;
var wonLottery = 0;
var goodEvents = 0;
var badEvents = 0;

//Above are all the prices which are for the colleges, and also for the amount a career can make.

var revenueOffProperty = 0;
var revenueOffStocks = 0;//These two variables are used in order to keep track of how much money the user has made.
var carArray = [];//Array used in order to animate the car sequence of going to work and back.
var carArray2 = [];//Array used in order to animate the car sequence of going to work and back.

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
    //This variable holds the information necessary to animate.
};

$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode==27){
        cash+=10000;//WORKING
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
    //I am using this function as the "cheat code" in order to get cash quick and move the presentation on faster.
});

function goToInstructions() {
    //In this function, the purpose is for the user to be able to go to a different webpage in order to view the instructions.
    document.getElementById("goTO").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "visible";
    window.open("http://localhost:63342/instructions/index.html?_ijt=l7hnle2ok2kco4juf2imsd4fq0");

}
//DO MORE RANDOM EVENTS
function buttonLayout() {
    //This function is an onLoad function, meaning it is the preset before anything is pressed.
    document.getElementById("roll").disabled = true;// Before character selection, the roll button is disabled. There is an order to how you need to do things.
    document.getElementById("ask2").disabled = true;
    document.getElementById("payOff").disabled = true;
    document.getElementById("invest").disabled = true;
    document.getElementById("ask").disabled = true;
    document.getElementById("invest").disabled = true;
    document.getElementById("check").disabled = true;
    document.getElementById("buy").disabled = true;
    document.getElementById("eventButton").disabled = true;
    document.getElementById("end").style.visibility = "hidden";
    document.getElementById("goTO").style.visibility = "hidden";
    document.getElementById("events").style.visibility = "hidden";
    document.getElementById("roll").style.visibility = "hidden";
    document.getElementById("buy").style.visibility = "hidden";
    document.getElementById("ask").style.visibility = "hidden";
    document.getElementById("ask2").style.visibility = "hidden";
    document.getElementById("invest").style.visibility = "hidden";
    document.getElementById("payOff").style.visibility = "hidden";
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("eventButton").style.visibility = "hidden";
    document.getElementById("myCanvas").style.visibility = "hidden";
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("c1").style.visibility = "hidden";
    document.getElementById("c2").style.visibility = "hidden";
    document.getElementById("h1").style.visibility = "hidden";
    document.getElementById("h2").style.visibility = "hidden";
    document.getElementById("s1").style.visibility = "hidden";
    document.getElementById("events").style.visibility = "hidden";
    document.getElementById("purchase1").style.visibility = "hidden";
    document.getElementById("purchase2").style.visibility = "hidden";
    document.getElementById("purchase3").style.visibility = "hidden";
    document.getElementById("purchase4").style.visibility = "hidden";
    document.getElementById("outputShowPrice1").style.visibility = "hidden";
    document.getElementById("outputShowPrice2").style.visibility = "hidden";
    document.getElementById("outputShowPrice3").style.visibility = "hidden";
    document.getElementById("outputShowPrice4").style.visibility = "hidden";
    document.getElementById("outputrevenue").style.visibility = "hidden";
    document.getElementById("outputrevenuestocks").style.visibility = "hidden";
    document.getElementById("outputdays").style.visibility = "hidden";
    document.getElementById("outputTrough").style.visibility = "hidden";
    document.getElementById("outputExpansion").style.visibility = "hidden";
    document.getElementById("outputPeak").style.visibility = "hidden";
    document.getElementById("outputContraction").style.visibility = "hidden";
    document.getElementById("output1").style.visibility = "hidden";
    document.getElementById("output15").style.visibility = "hidden";
    document.getElementById("output175").style.visibility = "hidden";
    document.getElementById("output2").style.visibility = "hidden";
    document.getElementById("outputCollegeDisplay1").style.visibility = "hidden";
    document.getElementById("outputCollegeDisplay2").style.visibility = "hidden";
    document.getElementById("outputCollege1Price").style.visibility = "hidden";
    document.getElementById("outputCollege2Price").style.visibility = "hidden";
    document.getElementById("outputCollege").style.visibility = "hidden";
    document.getElementById("outputHouse1Display").style.visibility = "hidden";
    document.getElementById("outputHouse2Display").style.visibility = "hidden";
    document.getElementById("outputHouse1Cost").style.visibility = "hidden";
    document.getElementById("outputHouse2Cost").style.visibility = "hidden";
    document.getElementById("CollegeBalance").style.visibility = "hidden";
    document.getElementById("outputAlert").style.visibility = "hidden";
    document.getElementById("HouseBalance").style.visibility = "hidden";
    document.getElementById("carBalance").style.visibility = "hidden";
    document.getElementById("stock1").style.visibility = "hidden";
    document.getElementById("stock2").style.visibility = "hidden";
    document.getElementById("stock3").style.visibility = "hidden";
    document.getElementById("stock4").style.visibility = "hidden";
    document.getElementById("gas").style.visibility = "hidden";
    document.getElementById("fChoice").style.visibility = "hidden";
    document.getElementById("sChoice").style.visibility = "hidden";
    document.getElementById("typeofStock").style.visibility = "hidden";
    document.getElementById("quantity").style.visibility = "hidden";
    document.getElementById("characterEntry").style.visibility = "hidden";
    document.getElementById("chooseCollege").style.visibility = "hidden";
    document.getElementById("chooseHouse").style.visibility = "hidden";
    document.getElementById("chooseCareer").style.visibility = "hidden";
    document.getElementById("chooseStocks").style.visibility = "hidden";
    document.getElementById("chooseStocks2").style.visibility = "hidden";
    document.getElementById("purchaseOne").style.visibility = "hidden";
    document.getElementById("purchaseTwo").style.visibility = "hidden";

    //Above all these things are hidden as there is just supposed to be the big start game button in the middle

    carArray.push(createImage("drawing/carmove2.png", "car", 50, 0, 50, 50));
    carArray2.push(createImage("drawing/carmove.png", "car", 50, 600, 50, 50));
    //Above these two appendments occuring are what are going to be used in order to animate the cars.
}



function beginGame() {
    //This function is what allows for the certain things to become visible.
    var askName = prompt("Top of the day to you, what is your name?");
    alert("Hello, " + askName + " ," + "welcome to EARN IT TO MAKE IT");
    alert("Click the instructions button in order to learn what you need to do in order to become the millionaire you always dreamed about.");
    document.getElementById("first").disabled = true;
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("roll").style.visibility = "visible";
    document.getElementById("goTO").style.visibility = "visible";
    document.getElementById("buy").style.visibility = "visible";
    document.getElementById("ask").style.visibility = "visible";
    document.getElementById("ask2").style.visibility = "visible";
    document.getElementById("invest").style.visibility = "visible";
    document.getElementById("payOff").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("eventButton").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("eventButton").style.visibility = "visible";
    document.getElementById("myCanvas").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("c1").style.visibility = "visible";
    document.getElementById("c2").style.visibility = "visible";
    document.getElementById("h1").style.visibility = "visible";
    document.getElementById("h2").style.visibility = "visible";
    document.getElementById("s1").style.visibility = "visible";
    document.getElementById("purchase1").style.visibility = "visible";
    document.getElementById("purchase2").style.visibility = "visible";
    document.getElementById("purchase3").style.visibility = "visible";
    document.getElementById("purchase4").style.visibility = "visible";
    document.getElementById("outputShowPrice1").style.visibility = "visible";
    document.getElementById("outputShowPrice2").style.visibility = "visible";
    document.getElementById("outputShowPrice3").style.visibility = "visible";
    document.getElementById("outputShowPrice4").style.visibility = "visible";
    document.getElementById("outputrevenue").style.visibility = "visible";
    document.getElementById("outputrevenuestocks").style.visibility = "visible";
    document.getElementById("outputdays").style.visibility = "visible";
    document.getElementById("outputTrough").style.visibility = "visible";
    document.getElementById("outputExpansion").style.visibility = "visible";
    document.getElementById("outputPeak").style.visibility = "visible";
    document.getElementById("outputContraction").style.visibility = "visible";
    document.getElementById("output1").style.visibility = "visible";
    document.getElementById("output15").style.visibility = "visible";
    document.getElementById("output175").style.visibility = "visible";
    document.getElementById("output2").style.visibility = "visible";
    document.getElementById("outputCollegeDisplay1").style.visibility = "visible";
    document.getElementById("outputCollegeDisplay2").style.visibility = "visible";
    document.getElementById("outputCollege1Price").style.visibility = "visible";
    document.getElementById("outputCollege2Price").style.visibility = "visible";
    document.getElementById("outputCollege").style.visibility = "visible";
    document.getElementById("outputHouse1Display").style.visibility = "visible";
    document.getElementById("outputHouse2Display").style.visibility = "visible";
    document.getElementById("outputHouse1Cost").style.visibility = "visible";
    document.getElementById("outputHouse2Cost").style.visibility = "visible";
    document.getElementById("CollegeBalance").style.visibility = "visible";
    document.getElementById("outputAlert").style.visibility = "visible";
    document.getElementById("HouseBalance").style.visibility = "visible";
    document.getElementById("carBalance").style.visibility = "visible";
    document.getElementById("stock1").style.visibility = "visible";
    document.getElementById("stock2").style.visibility = "visible";
    document.getElementById("stock3").style.visibility = "visible";
    document.getElementById("stock4").style.visibility = "visible";
    document.getElementById("gas").style.visibility = "visible";
    document.getElementById("fChoice").style.visibility = "visible";
    document.getElementById("sChoice").style.visibility = "visible";
    document.getElementById("typeofStock").style.visibility = "visible";
    document.getElementById("quantity").style.visibility = "visible";
    document.getElementById("characterEntry").style.visibility = "visible";
    document.getElementById("chooseCollege").style.visibility = "visible";
    document.getElementById("chooseHouse").style.visibility = "visible";
    document.getElementById("chooseCareer").style.visibility = "visible";
    document.getElementById("chooseStocks").style.visibility = "visible";
    document.getElementById("chooseStocks2").style.visibility = "visible";
    document.getElementById("purchaseOne").style.visibility = "visible";
    document.getElementById("purchaseTwo").style.visibility = "visible";
    document.getElementById("output1").innerHTML = "Make the choice which you believe will help you most";
    document.getElementById("outputdays").innerHTML = "Day: " + day;
    generateCharacter();//Calling the function which allows me to abstract and generate characters.
}

function generateCharacter() {
    //In this function the characters are generated. The characters attributes are displayed as well.
    Richard = [];
    Nicole = [];
    for(a = 0;a<=2;a++){
        randBackgroundArray = ["Has money saved in the bank", "Has little money saved in the bank", "Has moderate amount of money saved"];
        randGPAArray = ["4.0 GPA", "3.6 GPA", "3.0 GPA", "2.2 GPA"];
        randCareerInterestArray = ["Computer Science", "Engineer", "Business", "Health/Medicine", "Teaching"];
        genNumB = Math.floor(Math.random()*(3));//In order to pick a random background
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
    displayCharacter();//Call a function which allows for the user choice of character
}


function displayCharacter(e){
    //In this function the user selects a character
    if (e.keyCode == 13) {
        var userChose = document.getElementById("characterEntry").value;//Taking the value of the textbox in order to determine what character the user wants to play as
        document.getElementById("characterEntry").disabled = true;//In order to make sure the user cannot choose a different player once they have chosen one character
        document.getElementById("output1").innerHTML = " ";
    }
    if (userChose == "Richard") {
        usertook = "Richard";
        for (x=0;x<Richard.length;x++){
            if (Richard[x] == "Has money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(1000) + 101);//In order to add an amount of money to the users cash account. If the character has money saved up, then they are given more money.
                cash+=randMoney;
            }
            if (Richard[x] == "Has little money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(100) + 1);//If character has little money saved they can only get a little amount of money in their account
                cash+=randMoney;
            }
            if (Richard[x] == "Has moderate amount of money saved") {
                var randMoney = Math.floor(Math.random()*(500) + 50);//If character has little money saved they can only get a little amount of money in their account
                cash+=randMoney;
            }
        }

    }
    if (userChose == "Nicole") {
        usertook = "Nicole";
        for (n=0;n<Nicole.length;n++){
            if (Nicole[n] == "Has money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(1000) + 101);
                cash+=randMoney;
            }
            if (Nicole[n] == "Has little money saved in the bank") {
                var randMoney = Math.floor(Math.random()*(100) + 1);
                cash+=randMoney;
            }
        }
        if (Nicole[n] == "Has moderate amount of money saved") {
            var randMoney = Math.floor(Math.random()*(500) + 50);
            cash+=randMoney;
        }
    }
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    document.getElementById("roll").disabled = false;// After the selection of character, the roll button it is enabled.
    document.getElementById("eventButton").disabled = false;//More buttons being opened, THERE IS A SEQUENCE TO THINGS
    document.getElementById("buy").disabled = false;
}



function Roll() {
    //In this function the user is asked questions and asked to answer in order to eventually gain money.
    var roll;
    //Family feud works, however close you are, the higher points you get
    //Website I got questions from: https://hobbylark.com/party-games/family-feud-quiz-free-questions-and-answers
    var questionsArray = ["Name a Place You Visit Where You Aren't Allowed to Touch Anything?", "Name a Recreational Activity Traditionally Done in Hot Weather", "Name a Language That You Often See on Restaurant Menus", "Name a state that attracts a lot of tourists", "Name the most watched sport in 2017", "Name Something People Are Often Chased by in Movies", "Name another word for 'smart'", "Name a US state that has big mountains", "Name a holiday when most people in the U.S. get the day off", "Name something the City of Chicago is popular for"];
    var randNum = Math.floor(Math.random()*(10));//In order to pick a random question
    var questionSelected = questionsArray[randNum];
    var indexofQuestion = questionsArray.indexOf(questionSelected);//This is used in order to determine what the best answer choice is below
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
            validResponse = true;//If the user has the best answer then they get the highest roll value.
        }
        if (askUserResponse.toLowerCase()=="basketball"){
            roll +=2;
            validResponse = true;//If the user has the secondbest answer then they get the second highest roll value.
        }
        if (askUserResponse.toLowerCase()=="volleyball"){
            roll +=1;
            validResponse = true;//If the user has the third best answer then they get the third highest roll value.
        }
        if (validResponse==false){
            roll+=0//If the user gets nowhere close to the response then they are not able to make any money.
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

    if (indexofQuestion==5){
        roll = 0;
        if (askUserResponse.toLowerCase()=="monsters"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="cars"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="bad guys"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==6){
        roll = 0;
        if (askUserResponse.toLowerCase()=="intelligent"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="genius"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="intellect"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==7){
        roll = 0;
        if (askUserResponse.toLowerCase()=="colorado"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="washington"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="montana"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==8){
        roll = 0;
        if (askUserResponse.toLowerCase()=="christmas" || askUserResponse.toLowerCase()=="new year" || askUserResponse.toLowerCase()=="new years"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="labor day"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="memorial day"){
            roll +=1;
            validResponse = true;
        }
        if (validResponse==false){
            roll+=0
        }
    }
    if (indexofQuestion==9){
        roll = 0;
        if (askUserResponse.toLowerCase()=="hotdog" || askUserResponse.toLowerCase()=="hotdogs"){
            roll +=3;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="the bean" || askUserResponse.toLowerCase()=="bean"){
            roll +=2;
            validResponse = true;
        }
        if (askUserResponse.toLowerCase()=="food" || askUserResponse.toLowerCase()=="restraunts" || askUserResponse.toLowerCase()=="restraunt"){
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
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;//Higher the roll value, the higher amount of money user makes.
    }
    if (roll == 1) {
        var randMoneyValue = Math.floor(Math.random()*(90));
        cash += randMoneyValue;
        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
    }
}


function askChoices() {
    //In this function, the user is able to select a college they want to go to
    //The options which they have are based off of the GPA Of the character they chose
    if (usertook.toLowerCase() == "richard") {
        for (n = 0; n < Nicole.length; n++) {
            if (Richard[n] == "Computer Science") {
                if (Richard[1] == "4.0 GPA") {
                    CS4 = true;
                    document.getElementById("outputCollege").innerHTML = "Since you had a 4.0 GPA and are interested in Computer Science, above are the colleges you may go to.";
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: MIT";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Stanford";
                    document.getElementById("c1").src = picsSRC[6];//Displaying the picture of the college for all the scenarios below
                    document.getElementById("c2").src = picsSRC[7];
                    document.getElementById("outputCollege1Price").innerHTML = "Tuition Cost: " + collegePriceFour;//Best 4.0 GPA universities are the highest costing colleges.
                    document.getElementById("outputCollege2Price").innerHTML = "Tuition Cost: " + collegePriceFourOther;//Displaying the cost of each college(applicable for all scenarios below)
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
                    document.getElementById("c1").src = picsSRC[27];
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
    }//Depending on who the user chose is what selection is ran.
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
                    document.getElementById("outputCollegeDisplay1").innerHTML = "College: Notre Dame";
                    document.getElementById("outputCollegeDisplay2").innerHTML = "College: Central Michigan University";
                    document.getElementById("c1").src = picsSRC[27];
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
var display = false;

function getResponse(e){
    //In this function the users input is evaluated
    //The user is given the option to pay the whole fee off right away or pay in installment loans
    if (e.keyCode == 13) {
        var userCollege = document.getElementById("chooseCollege").value;
        display = true;
        ChoseCollege = true;
    }
    if(display==true){
        alert("Congratulations on selecting the college of" + " " + userCollege);

    }
    if (CS4==true) {
        if (userCollege.toLowerCase() == "mit") {
            collegetook = "mit";
            var paymentType = prompt("Would you like to pay all of the cost at once(one), or pay in installments(two)?");//Giving the user a choice of what payment option
            if (paymentType == "one") {
                cash -= collegePriceFour;
                document.getElementById("ask2").disabled = false;//In order to allow the user to go on to the next button
            }
            if (paymentType == "two") {
                alert("Okay be sure to pay off money by clicking the pay off bills button every time you have money saved up. Remember you will not be able to choose a career until you have paid off your debt!");//Giving a friendly reminder to what happens when you do installment loans
                document.getElementById("CollegeBalance").innerHTML = "College Loan Left: " + collegePriceFour;
                document.getElementById("payOff").disabled = false;//The payoff loan button is enabled now and user can pay off loans.
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
    document.getElementById("outputCash").innerHTML = "Cash: " + cash;//Show the cash value
    checkBelowZero()
}



var display2 = false;
function askChoices2() {
    //IN this function the user is able to make money and over time use time to generate more money
    //This function just displays the possible career options for the user
    if(CS4==true){
        document.getElementById("outputCollege").innerHTML = "Since you went to " + collegetook + ", these are your options to what career path you want to pursue.";//Options are presented
        document.getElementById("outputCollegeDisplay1").innerHTML = "Career: Software Development Engineer(S)";
        document.getElementById("outputCollegeDisplay2").innerHTML = "Career: Android Software Developer(A)";
        document.getElementById("c1").src = CSCareerSRC[0];
        document.getElementById("c2").src = CSCareerSRC[1];
        document.getElementById("outputCollege1Price").innerHTML = "Salary(per minute): " + careerFourSalary;//The better the job, the more salary(cash) the user can make every 60 seconds which is one day
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
var careerTook = " ";
function getResponse2(e) {
    //In this function the users input for what career choice they want is evaluated.
    if (e.keyCode == 13) {
        var userCareer = document.getElementById("chooseCareer").value;
        document.getElementById("chooseCareer").disabled = true;//In order to ensure the user cannot switch their entry
        display2=true;
        ChoseCareer = true;
    }
    if(CS4==true){
        if(userCareer.toLowerCase()=="s"){
            careerTook = "Software Development Engineer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);//USED IN ORDER TO GENERATE MONEY
        }
        if(userCareer.toLowerCase()=="a"){
            careerTook = "Android Software Developer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);//EVERY 60 second time interval the user makes their salary.
        }
    }
    if(CS36==true){
        if(userCareer.toLowerCase()=="n"){
            careerTook = "Network Security Engineer";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="m"){
            careerTook = "Mobile Apps Developer";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(CS30==true){
        if(userCareer.toLowerCase()=="w"){
            careerTook = "Web Programmer";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="d"){
            careerTook = "Desktop Engineer";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(CS2==true){
        if(userCareer.toLowerCase()=="h"){
            careerTook = "Help Desk Technician";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="n"){
            careerTook = "Network Technician";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T4==true){
        if(userCareer.toLowerCase()=="t"){
            careerTook = "Principal";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="a"){
            careerTook = "Assistant Principal";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T36==true){
        if(userCareer.toLowerCase()=="s"){
            careerTook = "School Administrator";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="h"){
            careerTook = "High School Teacher";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T30==true){
        if(userCareer.toLowerCase()=="m"){
            careerTook = "Middle School Teacher";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            careerTook = "Preschool Teacher";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(T2==true){
        if(userCareer.toLowerCase()=="h"){
            careerTook = "Health Educator";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="t"){
            careerTook = "Teacher Assistant";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E4==true){
        if(userCareer.toLowerCase()=="p"){
            careerTook = "Petroleum Engineer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="pp"){
            careerTook = "Principal Process Engineer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E36==true){
        if(userCareer.toLowerCase()=="n"){
            careerTook = "Nuclear Engineer";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="c"){
            careerTook = "Chemical Engineer";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E30==true){
        if(userCareer.toLowerCase()=="e"){
            careerTook = "Electronics Design Engineer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            careerTook = "Product development Engineer";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(E2==true){
        if(userCareer.toLowerCase()=="m"){
            careerTook = "Mechanical Design Engineer";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="t"){
            careerTook = "Transportation Engineer";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B4==true){
        if(userCareer.toLowerCase()=="a"){
            careerTook = "Actuary";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="b"){
            careerTook = "Business Operations Manager";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B36==true){
        if(userCareer.toLowerCase()=="a"){
            careerTook = "Accountant";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="f"){
            careerTook = "Financial Advisor";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B30==true){
        if(userCareer.toLowerCase()=="h"){
            careerTook = "HR Specialist";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="l"){
            careerTook = "Loan Officer";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(B2==true){
        if(userCareer.toLowerCase()=="c"){
            careerTook = "Customer Service Representative";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="r"){
            careerTook = "Repceptionist";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H4==true){
        if(userCareer.toLowerCase()=="o"){
            careerTook = "Orthopedic Surgeon";
            var moneyCareer = setInterval(function(){ cash += careerFourSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="c"){
            careerTook = "Cardiologist";
            var moneyCareer = setInterval(function(){ cash += careerFourSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H36==true){
        if(userCareer.toLowerCase()=="r"){
            careerTook = "Radiology";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="p"){
            careerTook = "Pulmonology";
            var moneyCareer = setInterval(function(){ cash += careerThreesixSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H30==true){
        if(userCareer.toLowerCase()=="d"){
            careerTook = "Dentist";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="o"){
            careerTook = "Optometrist";
            var moneyCareer = setInterval(function(){ cash += careerThreeSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(H2==true){
        if(userCareer.toLowerCase()=="p"){
            careerTook = "Podiatrist";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalary;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
        if(userCareer.toLowerCase()=="pe"){
            careerTook = "Pediatrician";
            var moneyCareer = setInterval(function(){ cash += careerTwoSalaryOther;document.getElementById("outputCash").innerHTML = "Cash: " + cash; }, 60000);
        }
    }
    if(display2==true){
        alert("Nice! Expect an amount to be deposited into your cash account every day!")
    }
}



var house1 = Math.floor(Math.random()*(2));//In order to determine the picture which is selected, just to add some randmoness.
var house2 = Math.floor(Math.random()*(2));
var housePrice1 = Math.floor(Math.random()*(10000)+50000);//In order to generate the house value for investments
var housePrice2 = Math.floor(Math.random()*(50000)+20000);


function investInRealEstate() {
    //In this function the displayment of the picture of the house and the costs associated with the house are displayed.
    alert("Hello, this is your real estate agent, if you want to invest in one of these two fine houses, just enter the letter of which one, and select which payment option you are doing.");
    document.getElementById("h1").src = singlehouseSRC[house1];
    document.getElementById("h2").src = townhouseSRC[house2];
    document.getElementById("outputHouse1Display").innerHTML = "Type: Single Family House(S)";
    document.getElementById("outputHouse2Display").innerHTML = "Type: Town House(T)";
    document.getElementById("outputHouse1Cost").innerHTML = "Cost: " + housePrice1;//LEFT off with price and overtime randomness to see how much money is made, after every couple rolls.
    document.getElementById("outputHouse2Cost").innerHTML = "Cost: " + housePrice2
}
var house = " ";//Global because is used in multiple functions to what house the user chose
var go = false;//In order to make sure input isn't evaluated until the return key is pressed.
function generateRandomHouseValue(e) {
    //In this function, the user is given the option to whether they want to buy their desired house right away or pay in loans.
    if (e.keyCode==13){
        var typeofHouse = document.getElementById("chooseHouse").value;
        go = true;
        investedInHouse = true;
    }
    if(go==true){
        var typeOfPayment = prompt("Would you like to buy the house right away(r) or make installment payments(i)?");
        if(typeofHouse.toLowerCase()=="s") {
            if (typeOfPayment.toLowerCase() == "r") {
                cash -= housePrice1;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                checkBelowZero();//Always checking if cash is below zero.
                if(isPositive == true){
                    document.getElementById("outputAlert").innerHTML = "Congratulations, you are now eligible to make money off of your property you have invested in.";
                    startMakingMoney = true;
                    document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
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
                    document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
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



var troughCounter = 0;//In order to display the different events which can occur and to show how often they have occured.
var expansionCounter = 0;
var peakCounter = 0;
var contractionCounter = 0;

var houseCheck;
function makeMoneyOffProperty() {
    if (startMakingMoney == true) {
        houseCheck = setInterval(function(){
            var randMaking = Math.floor(Math.random() * (5));//One represents a trough, two represents a expansion. Three represents a peak. Four is contraction
            if (randMaking == 1) {
                troughCounter+=1;
                alert("Looks like we are currently experiencing a trough and you are about to take a minor hit in how much money you are making off this property!");
                var randDeduction = Math.floor(Math.random() * (200) + 50);//This is used to determine how much money the user loses in a trough
                revenueOffProperty -= randDeduction;
                cash -=randDeduction;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputTrough").innerHTML = "Amount of Times trough occured: " + " " + troughCounter;
            }
            if (randMaking == 2) {
                expansionCounter+=1;
                alert("Looks like we are currently experiencing an expansion and you are about to make some money!") ;
                var randIncrease = Math.floor(Math.random() * (500) + 50);//This is used to determine how much money the user makes when an expansion occurs.
                revenueOffProperty += randIncrease;
                cash += randIncrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputExpansion").innerHTML = "Amount of Times expansion occured: " + " " + expansionCounter;
            }
            if (randMaking == 3) {
                peakCounter+=1;
                alert("Looks like we are currently experiencing a peak and you are about to make the most amount of money you have made so far off this property!") ;
                var maxIncrease = Math.floor(Math.random() * (1000) + 200);//This is used to determine the most possible money the user can make when a peak happens.
                revenueOffProperty += maxIncrease;
                cash +=maxIncrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputPeak").innerHTML = "Amount of Times peak occured: " + " " + peakCounter;
            }
            if (randMaking == 4) {
                contractionCounter+=1;
                alert("Looks like we are currently experiencing a contraction and you are about to take a huge hit on how much money you have made from this property!");
                var maxDecrease = Math.floor(Math.random() * (1000) + 200);//This is used to determine the most amount of money the user is able to lose because of a contraction
                revenueOffProperty -= maxDecrease;
                cash-=maxDecrease;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                document.getElementById("outputContraction").innerHTML = "Amount of Times contraction occured: " + " " + contractionCounter;
            }
        } , 20000);
    }
}

var stockPrice1 = Math.floor(Math.random() * (250));//This is used to determine the price of stocks
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
        InvestedInStocks = true;
    }
    if(typeofStock.toLowerCase()=="facebook"){
        stockofChoice = "facebook"//This information is used in order to determine what stock the user is buying
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
        document.getElementById("chooseStocks2").disabled = true;//In order to ensure only one entry occurs
    }
    if(ready==true){
        if(stockofChoice=="facebook"){
            total = quantity*stockPrice1;//In order to determine the total price of the purchase of stocks
            cash-=total;
            alert("Receipt");//For displaying purposes, the reciept is printed out
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
        checkStocksProfit(total);//In order to have random events occur. This function is called for abstracting purposes.
    }
}
var stockCheck;
function checkStocksProfit(total) {
    //In this function the different scenarios occur when you buy stock
    var newTotal = total;
    stockCheck = setInterval(function () {
        var randMarket = Math.floor(Math.random() * (2));//One represents a bull market, two represents a bear market
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
    }, 15000);//Every 15 seconds a scenario occurs.
}
//buy home to live in and car

var carPrice1 = Math.floor(Math.random() * 12000) + 4000;//Prices for car
var carPrice2 = Math.floor(Math.random() * 16000) + 4000;
var housePriceN1 = Math.floor(Math.random() * 8000) + 4000;//Prices for home
var housePriceN2 = Math.floor(Math.random() * 100000) + 60000;


function buyAssets() {
    //In this function the user is able to purchase things like a car and a house. These things are neccesitites.
    //The user must purchase a house and car before going any further in the game as they need a place to stay and a method of transportation.
    alert("Hello, you are now have to buy a car and house before you can go any further, save up money and buy quick!");
    document.getElementById("purchase1").src = housesNecssarySRC[0];//Display the corresponding picture
    document.getElementById("purchase2").src = housesNecssarySRC[1];
    document.getElementById("purchase3").src = carsNecessarySRC[0];
    document.getElementById("purchase4").src = carsNecessarySRC[1];
    document.getElementById("outputShowPrice1").innerHTML = "Price(A): " + ' ' + housePriceN1;
    document.getElementById("outputShowPrice2").innerHTML = "Price(H): " + ' ' + housePriceN2;
    document.getElementById("outputShowPrice3").innerHTML = "Price(M): " + ' ' + carPrice2;
    document.getElementById("outputShowPrice4").innerHTML = "Price(L): " + ' ' + carPrice1;
}
var set = false;//In order to make sure the user input is evaluated at the correct time
var houseN = " ";//Global because used in two functions
var car = " ";//Global because used in two functions
var allHouse = " ";
var housePaidOff = false;//Both of these booleans must be true in order for user to move on
var carPaidOff = false;

function purchaseHouse(e) {
    if (e.keyCode == 13) {
        var houseselection = document.getElementById("purchaseOne").value;
        set = true;
        document.getElementById("purchaseOne").disabled = true;
        choseHouse = true;
    }
    if(set==true){
        if(houseselection.toLowerCase()=="a"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");//Again giving the user the option to pay right away or in loans
            if(askPayment=="r"){
                allHouse = "Apartment";
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
                allHouse = "Apartment";
                houseN = "apartment";
                document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(houseselection.toLowerCase()=="h"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                allHouse = "Single Family House";
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
                allHouse = "Single Family House";
                houseN = "house";
                document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN2 ;
                document.getElementById("payOff").disabled = false;
            }
            if(carPaidOff==true && housePaidOff==true){
                if(isPositive==true) {
                    //Once the user has paid off both the house and car, they are able to move on in the game
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
                    var gasPrice = Math.floor(Math.random() * 30) + 10;
                    document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice;
                    carNecc = setInterval(function () {
                        cash -= gasPrice;
                        document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    }, 60000);
                }
            }
        }
    }
}
var set2 = false;
var allCar = "";
function purchaseCar(e) {
    //In this function the user purchases the necessary car which is nesecarry to move on
    if (e.keyCode == 13) {
        var carselection = document.getElementById("purchaseTwo").value;
        set2 = true;
        document.getElementById("purchaseTwo").disabled = true;
        choseCar = true;
    }
    if(set2==true){
        if(carselection.toLowerCase()=="l"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                allCar = "Lexus";
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
                allCar = "Lexus";
                car = "lexus";
                document.getElementById("carBalance").innerHTML = "Car Loan Left: " + carPrice1 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(carselection.toLowerCase()=="m"){
            var askPayment = prompt("Would you like to pay right away(r) or in installement payments(i)?");
            if(askPayment=="r"){
                allCar = "Mustang";
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
                allCar = "Mustang";
                car = "mustang";
                document.getElementById("carBalance").innerHTML = "Car Loan Left: " + carPrice2 ;
                document.getElementById("payOff").disabled = false;
            }
        }
        if(carPaidOff==true && housePaidOff==true){
            if(isPositive==true) {
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
                var gasPrice = Math.floor(Math.random() * 30) + 10;
                document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice;
                carNecc = setInterval(function () {
                    cash -= gasPrice;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                }, 60000);
            }
        }
    }
}


function payOffLoans() {
    //In this function, the user is able to pay off the loans which they owe. These loans could be the house, mortgage, auto, or college loan they took out.
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
            alert("Congrats! You now own a car and are able to travel to work. Nice job saving!");
        }
        if(carPaidOff==true && housePaidOff==true) {
            if (isPositive == true) {
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
                var gasPrice = Math.floor(Math.random() * 30) + 10;
                document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice;
                carNecc = setInterval(function () {
                    cash -= gasPrice;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                }, 60000);
            }
        }
    }
    if(typeOfLoan.toLowerCase()=="h"){
        var askHowMuch = prompt("Hey, this is you financial agent, how much are you paying today towards your loan for the house?(i.e.1000)");
        if(houseN=="apartment"){
            cash-=askHowMuch;
            housePriceN1-= askHowMuch;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN1 ;
        }
        if(houseN=="house"){
            cash-=askHowMuch;
            housePriceN2-= askHowMuch;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            document.getElementById("HouseBalance").innerHTML = "House Loan Left: " + housePriceN2 ;

        }
        if(housePriceN1<=0 || housePriceN2<=0){
            alert("Congrats! You now own a home and are able to live in a place. Nice job saving!");
            document.getElementById("HouseBalance").innerHTML = " ";
            housePaidOff=true;
        }
        if(carPaidOff==true && housePaidOff==true){
            if(isPositive==true) {
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
                var gasPrice = Math.floor(Math.random() * 30) + 10;
                document.getElementById("gas").innerHTML = "Daily Price of Gas Subtracted(everyday): " + gasPrice;
                carNecc = setInterval(function () {
                    cash -= gasPrice;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                }, 60000);
            }
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
        alert("Good Job! You are now able to choose a career or can invest in whatever you desire!")
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
            if (isPositive == true) {
                document.getElementById("outputAlert").innerHTML = "Congratulations, you are now eligible to make money off of your property you have invested in.";
                startMakingMoney = true;
                document.getElementById("outputrevenue").innerHTML = "Revenue Made($): " + revenueOffProperty;
                document.getElementById("HouseBalance").innerHTML = " ";
                makeMoneyOffProperty();
            }
        }
    }
}

function randomEventsOccur() {
    var win = false;//This is used to determine if they win the lottery
    document.getElementById("eventDisplayer").innerHTML = "-Event Displayer";
    document.getElementById("events").style.visibility = "visible";
    document.getElementById("characterEntry").style.visibility = "hidden";
    document.getElementById("output15").style.visibility = "hidden";
    document.getElementById("output175").style.visibility = "hidden";
    document.getElementById("output1").style.visibility = "hidden";
    //PL = PlayLottery,
    var randEvents = ["PL", "GM", "TK", "OC1", "OC2"];//PL means play lottey, GM means like be a GM, or ref, and TK means have a side job. OC1/2 mean an occurance of random thing one and 2. OC1 means good thing. Oc2 means bad thing
    var randEventNumber = Math.floor(Math.random()*(5));//In  order to pick a random event.
    var eventSelected = randEvents[randEventNumber];
    var indexofEvent = randEvents.indexOf(eventSelected);
    if(indexofEvent==0){
        var ask_to_Play = prompt("Would you like to play the lottery? Enter yes or no");
        if(ask_to_Play.toLowerCase()=="yes"){
            var askTypeofLottery = prompt("Which ticket are you willing to buy?. (250,500,1000)");
            if(askTypeofLottery==250){
                cash-=250;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                var coinFlip = Math.floor(Math.random()*(4));//In  order to pick a random number
                if(coinFlip==1){
                    wonLottery+=1;
                    document.getElementById("events").src = randEventsSRC[0];//Depending on if they win, that picture is displayed.
                    var randMoneyWon = Math.floor(Math.random()*1000);
                    alert("Congrats, you have won the lottery, and have won" + " " + randMoneyWon + " " + "dollars");
                    cash+=randMoneyWon;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    win = true;
                }
            }
            if(askTypeofLottery=500){
                cash-=500;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                var coinFlip = Math.floor(Math.random()*(8));//In  order to pick a random number
                if(coinFlip==3){
                    wonLottery+=1;
                    document.getElementById("events").src = randEventsSRC[0];
                    var randMoneyWon = Math.floor(Math.random()*2000);
                    alert("Congrats, you have won the lottery, and have won" + " " + randMoneyWon + " " + "dollars");
                    cash+=randMoneyWon;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    win = true;
                }
            }
            if(askTypeofLottery=1000){
                cash-=1000;
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                var coinFlip = Math.floor(Math.random()*(15));//In  order to pick a random event.
                if(coinFlip==4){
                    wonLottery+=1;
                    document.getElementById("events").src = randEventsSRC[0];
                    var randMoneyWon = Math.floor(Math.random()*6000);
                    alert("Congrats, you have won the lottery, and have won" + " " + randMoneyWon + " " + "dollars");
                    cash+=randMoneyWon;
                    document.getElementById("outputCash").innerHTML = "Cash: " + cash;
                    win = true;
                }
            }
            if(win==false){
                document.getElementById("events").src = randEventsSRC[1];//If they dont win, then they get the better luck next time
            }
        }
    }
    if(indexofEvent==1){
        var asktoSwitch = prompt("Would you like to cut your daily expense of gas? Enter yes or no");//These are more scenarios which can occur. Such as not having to pay the expense of gas every day and ride a helicopter or limo.
        if (asktoSwitch.toLowerCase()=="yes"){
            var askTypeOfTransportation = prompt("Would you like to take a helicopter or limo to and from work now?(ALL EXPENSES PAID) Enter helicopter or limo");
            if(askTypeOfTransportation.toLowerCase()=="helicopter"){
                document.getElementById("events").src = randEventsSRC[2];
                clearTimeout(carNecc);

            }
            if(askTypeOfTransportation.toLowerCase()=="limo"){
                document.getElementById("events").src = randEventsSRC[3];
                clearTimeout(carNecc);
            }
        }
    }
    if(indexofEvent==2){
        var askExtraJob = prompt("Would you like to do a side job in order to make more money? Enter yes or no");
        if(askExtraJob=="yes"){
            var askTypeofJob = prompt("Would you like to do a job as an uber driver, a referee at a local basketball league, or a waiter? Enter uber, referee, or waiter");//Another side job of becoming a referee.
            if(askTypeofJob=="uber"){
                document.getElementById("events").src = randEventsSRC[4];
                cash+= Math.floor(Math.random()*250);
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }
            if(askTypeofJob=="referee"){
                document.getElementById("events").src = randEventsSRC[5];
                cash+= Math.floor(Math.random()*250);
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }
            if(askTypeofJob=="waiter"){
                document.getElementById("events").src = randEventsSRC[6];
                cash+= Math.floor(Math.random()*250);
                document.getElementById("outputCash").innerHTML = "Cash: " + cash;
            }
        }
    }
    if(indexofEvent==3){
        goodEvents+=1;
        document.getElementById("events").src = randEventsSRC[8];//In order to show a lets go sign because something good happened.
        var randGoodEvent = Math.floor(Math.random()*(3));//In  order to pick a random event.
        var goodThingArray = ["Payday", "Helped", "Program"];
        var eventOccur = goodThingArray[randGoodEvent];
        var indexofGoodEvent = goodThingArray.indexOf(eventOccur);
        if(indexofGoodEvent==0){
            var randExtraMoney = Math.floor(Math.random()*(500));
            alert("You just recieved a bonus for working super hard. Here's an extra " + " " + randExtraMoney +  " " + "dollars for you!");
            cash+=randExtraMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(indexofGoodEvent==1){
            var randExtraMoney = Math.floor(Math.random()*(500));
            alert("You just helped a lady cross the street and she gave you" + " " + randExtraMoney + " " + "dollars for helping her cross the street!" );
            cash+=randExtraMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(indexofGoodEvent==2){
            var randExtraMoney = Math.floor(Math.random()*(1000));
            alert("You wrote a program for Google and they loved it. The just gave you " + " " + randExtraMoney + " " + "dollars for writing them an awesome program for their new Google Duplex." );
            cash+=randExtraMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
    }
    if(indexofEvent==4){
        badEvents+=1;
        document.getElementById("events").src = randEventsSRC[7];//In order to display a dang it sign.
        var randBadEvent = Math.floor(Math.random()*(3));//In  order to pick a random event.
        var badThingArray = ["Car", "Mugged", "Meds"];
        var eventOccur = badThingArray[randBadEvent];
        var indexofBadEvent = badThingArray.indexOf(eventOccur);
        if(indexofBadEvent==0){
            var randLostMoney = Math.floor(Math.random()*(1000));
            alert("You got into a car accident and had to pay a " + " " + randLostMoney + " " + "dollar deductible to file an insurance claim!");
            cash-=randLostMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(indexofBadEvent==1){
            var randLostMoney = Math.floor(Math.random()*(200));
            alert("Unfortunately, you just got mugged by some bad people and they robbed the " + randLostMoney + " " + "dollars you had on you!");
            cash-=randLostMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
        if(indexofBadEvent==2){
            var randLostMoney = Math.floor(Math.random()*(1000));
            alert("You were playing a game of soccer with your friends and broke your backbone. The medical expenses are going to cost" + " " + randLostMoney + " " + "dollars!"  );
            cash-=randLostMoney;
            document.getElementById("outputCash").innerHTML = "Cash: " + cash;
        }
    }

}

function drawBackground() {
    //In this function the road is made and displayed in the canvas in order to show daily commute.
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
    animate();//Animates the drawbackground function which is called a lot and the car is drawn upon it.
}
function stopAnimation() {
    cancelAnimationFrame(a);
}
function animate(){
    a=requestAnimationFrame(animate);
    drawBackground();
}

function drawCar() {
    //This function allows for the car to be in the right place and go in the right direction.
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<carArray.length;i++){
        carArray[i].top += 1;
        ctx.drawImage(carArray[i], carArray[i].left, carArray[i].top, 50, 50);
        if(carArray[i].top>600){
            ctx = document.getElementById("myCanvas").getContext("2d");
            carArray2[i].top-=1;
            ctx.drawImage(carArray2[i], carArray2[i].left, carArray2[i].top, 50, 50);
            if(carArray2[i].top>0){
                carArray[i].top += 1;//In order to demonstrate a return trip, the car goes to and from work.
                ctx.drawImage(carArray[i], carArray[i].left, carArray[i].top, 50, 50);
            }
        }
    }
}

function endGame() {
    var asktoConfirm = prompt("Do you think you have became the master millionaire and want to call it a day, enter yes, or no to keep playing");
    if(asktoConfirm=="yes"){
        clearTimeout(moneyCareer);
        clearTimeout(stockCheck);
        clearTimeout(houseCheck);
        document.getElementById("outputAlert").innerHTML = " ";
        alert("Okay let's see what you have done/accomplished in the game!");
        document.getElementById("outputEndCash").innerHTML = "Money Made: " + " " + cash;
        document.getElementById("outputEndCollege").innerHTML = "You attented the College: " + " " + collegetook;
        document.getElementById("outputEndCareer").innerHTML ="You had a career as a " + " " + careerTook;
        document.getElementById("outputEndHouse").innerHTML = "You bought/lived in a " + " " + allHouse;
        document.getElementById("outputEndCar").innerHTML = "You bought/traveled by a " + " " + allCar;
        document.getElementById("outputEndInvest").innerHTML = "You made " + " " + revenueOffProperty + " " + "dollars off your real estate investments" ;
        document.getElementById("outputEndStocks").innerHTML = "You made " + " " + revenueOffStocks +" " + "dollars off of your investments in stocks";
        document.getElementById("outputEndLottery").innerHTML = "You won the lottery"+ " " + wonLottery + " " + "times";
        document.getElementById("outputEndGood").innerHTML = goodEvents + " " + "good events occured";
        document.getElementById("outputEndBad").innerHTML = badEvents + " " + "bad events occured";

    }
}

function checkBelowZero() {
    //This function is used in order to check if the user can afford something and also to check if they go bankrupt
    var postitve = true;
    if (cash<0){
        alert("You have gone bankrupt as you have: " + cash + " " +  "dollars in your account");
        highScore=cash;
        document.getElementById("outputCash2").innerHTML = "High Score: " + " " + highScore;
        postitve = false;
    }
    return postitve;//Using a return to check if user is or is not bankrupt.
}
var isPositive = checkBelowZero();

