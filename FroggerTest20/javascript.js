/**
 * Created by siddiqi9214 on 12/1/2017.
 */
//have to draw frog image when in square
    //QUick recap of work over weekend: I added simple levels, and lives, have to consider what to tdo with lives whne game over.
    //Also, got the finish perfect, and have to figure out how to add image to each sectors
    //GREAT JOB!P>S> BOUNDARY CHECK
var a;
var picsSRC = ["resources/REAL3lives.png", "resources/REALREAL2lives.png", "resources/REALREAL1live.png", "resources/nolives.png"];
var placement = 0;
var pictArray = [];
var pictArrayOp = [];
var array2 = [];
var array3 = [];
var starArray = [];
var frog;
var moveCar = false;
var waterCollision = true;
var lives = 3;
var level = 1;
var completion1 = false;
var completion2 = false;
var completion3 = false;
var completion4 = false;
// var frog1 = new Image();//THIS IDEA DIDNT WORK
// frog1.src = "resources/star.png";
var star1;
var drawStar1 = false;
var drawStar2 = false;
var drawStar3 = false;
var drawStar4 = false;


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

function initialize() {
    drawBackground();
    initialGo();
    drawRealCars();
    drawFrog();
    drawCars();
}
function drawRealCars() {
    if (level==1) {
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 200, 350, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 500, 350, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarTOP", -400, 350, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarTOP", -100, 350, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", -250, 350, 30, 30));

        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 100, 400, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 300, 400, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 500, 400, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", -100, 400, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", -250, 400, 30, 30));

        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", 250, 450, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", 450, 450, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarMIDDLE", 600, 450, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarMIDDLE", -100, 450, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", -250, 450, 30, 30));

        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 150, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 350, 500, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 550, 500, 30, 30));
        // pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", -150, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", -300, 500, 30, 30));

        // array2.push(createImage("resources/theLog.png", "LogTOP", -250, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", -100, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 100, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 300, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 500, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 700, 200, 50, 50));


        // array2.push(createImage("resources/theLog.png", "LogMIDDLE", -250, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 100, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 300, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 500, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 700, 150, 50, 50));


        // array2.push(createImage("resources/theLog.png", "LogMIDDLE", -250, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 100, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 300, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 500, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 700, 100, 50, 50));

        // array2.push(createImage("resources/theLog.png", "LogBOTTOM", -250, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", -100, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 100, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 300, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 500, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 700, 50, 50, 50));
    }
    if (level==2){
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 200, 350, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 500, 350, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", -250, 350, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 800, 350, 30, 30));


        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 100, 400, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 300, 400, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", -250, 400, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarMIDDLE2", 700, 400, 30, 30));


        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", 250, 450, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", 450, 450, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", -250, 450, 30, 30));
        pictArrayOp.push(createImage("resources/car3.png", "CarMIDDLE", 525, 450, 30, 30));

        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 150, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 350, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 500, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", -300, 500, 30, 30));
        pictArray.push(createImage("resources/carReal.png", "CarBOTTOM", 600, 500, 30, 30));

        array2.push(createImage("resources/theLog.png", "LogTOP", -200, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 0, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 200, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 400, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 600, 200, 50, 50));


        array3.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 50, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 250, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 450, 150, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogMIDDLE", 600, 150, 50, 50));


        array2.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 50, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 250, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 450, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 600, 100, 50, 50));

        array3.push(createImage("resources/theLog.png", "LogBOTTOM", -100, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 50, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 250, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 450, 50, 50, 50));
        array3.push(createImage("resources/theLog.png", "LogBOTTOM", 600, 50, 50, 50));



    }
    document.getElementById("levelShower").innerHTML = "Current Level:" + " " + level;
    document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives;
    document.getElementById("pics").src = picsSRC[placement];
    frog = createImage("resources/frog.png", "frog", 325, 600, 50, 50);
}

function initialGo() {
    if (level == 1) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#FFFF13";
        ctx.font = "35px Arial";
        ctx.fillText("F R O G G E R", 250, 270);
        drawText();
    }
}
function drawText() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFF13";
    ctx.font = "20px Arial";
    ctx.fillText("Click the play button to begin!", 240,290);

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
    drawCAR();
    drawFrog();
    checkCollision();
    logCollision();
    waterCollision2();
    livesCheck();
    winCheck();
    checkFinish();
    drawTheStars();
    boundaryCheck();
}
function drawTheStars() {
    if (level==1) {
        if (drawStar1 == true) {
            starArray.push(createImage("resources/star.png", "starFirst", 45, 5, 55, 50));
            drawStar1== false;
        }
        if (drawStar2 == true) {
            starArray.push(createImage("resources/star.png", "starSecond", 195, 5, 55, 50));
            drawStar2 == false;
        }
        if (drawStar3 == true) {
            starArray.push(createImage("resources/star.png", "starThird", 345, 5, 55, 50));
            drawStar3 == false;
        }
        if (drawStar4 == true) {
            starArray.push(createImage("resources/star.png", "starFourth", 495, 5, 55, 50));
            drawStar4 == false;
        }
    }
}

function drawBackground() {
    ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#87CEEB";//bottom part takes 2 rows
    ctx.fillRect(0,550,650,270);
    ctx.fillStyle = "#808080";//road takes 4 rows
    ctx.fillRect(0,350,650,200);
    ctx.fillStyle = "#87CEEB";//middle safe zone takes 2 rows
    ctx.fillRect(0,250,650,100);
    ctx.fillStyle = "#0000FF";//water with logs takes 4 rows
    ctx.fillRect(0,50,650,200);
    ctx.fillStyle = "#0000FF";//most top win base
    ctx.fillRect(0,0,650,50);

    ctx.fillStyle = "#00FF00";//most top win base, the line
    ctx.fillRect(0,0,650,5);

    ctx.fillStyle = "#00FF00";//most top win base, the first square all the way to the left
    ctx.fillRect(0,5,45,45);

    ctx.fillStyle = "#00FF00";//most top win base, second sqaure
    ctx.fillRect(100,5,95,45);

    ctx.fillStyle = "#00FF00";//most top win base, third sqaure
    ctx.fillRect(250,5,95,45);

    ctx.fillStyle = "#00FF00";//most top win base, fourth sqaure
    ctx.fillRect(400,5,95,45);

    ctx.fillStyle = "#00FF00";//most top win base, the first square all the way to the left
    ctx.fillRect(550,5,100,45);

    ctx.beginPath();//always needed, starts
    ctx.moveTo(0,500);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(130,500);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(180,500);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(260,500);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(310,500);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(440,500);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(490,500);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(620,500);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(630,500);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(650,500);//actually paints
    ctx.stroke();//displays

    //NEXT ROW BELOW

    ctx.beginPath();//always needed, starts
    ctx.moveTo(0,450);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(130,450);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(180,450);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(260,450);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(310,450);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(440,450);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(490,450);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(620,450);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(630,450);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(650,450);//actually paints
    ctx.stroke();//displays

    //NEXT ROW

    ctx.beginPath();//always needed, starts
    ctx.moveTo(0,400);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(130,400);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(180,400);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(260,400);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(310,400);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(440,400);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(490,400);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(620,400);//actually paints
    ctx.stroke();//displays

    ctx.beginPath();//always needed, starts
    ctx.moveTo(630,400);//starting location
    ctx.lineWidth = 5;//how thiock line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(650,400);//actually paints
    ctx.stroke();//displays


    // ctx.beginPath();//always needed, starts
    // ctx.moveTo(0,50);//starting location
    // ctx.lineWidth = 5;//how thick line is
    // ctx.strokeStyle = "#000000";
    // ctx.lineTo(650,50);//actually paints
    // ctx.stroke();//displays

    drawCars();
}


function checkFinish() {
    if (frog.left>0 && frog.left<45 && frog.top<45 && frog.top<5){
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives
        frog.left = 325;//IN BETWEEN
        frog.top = 600;
    }
    if (frog.left>45 && frog.left<100 && frog.top<45 && frog.top<5 ){
        completion1 = true;
        drawStar1 = true;
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left>100 && frog.left<195 && frog.top<45 && frog.top<5){
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives
        frog.left = 325;//IN BETWEEN
        frog.top = 600;
    }
    if (frog.left>195 && frog.left<250 && frog.top<45 && frog.top<5 ){
        completion2 = true;
        drawStar2 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left>250 && frog.left<345 && frog.top<45 && frog.top<5){
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives
        frog.left = 325;//IN BETWEEN
        frog.top = 600;
    }
    if (frog.left>345 && frog.left<400 && frog.top<45 && frog.top<5 ){
        completion3 = true;
        drawStar3 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left>400 && frog.left<495 && frog.top<45 && frog.top<5){
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives
        frog.left = 325;//IN BETWEEN
        frog.top = 600;
    }
    if (frog.left>495 && frog.left<550 && frog.top<45 && frog.top<5 ){
        completion4 = true;
        drawStar4 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left>550 && frog.left<650 && frog.top<45 && frog.top<5){
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives
        frog.left = 325;//IN BETWEEN
        frog.top = 600;
    }
}

function drawCAR() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    if(moveCar ===true){
        // frog.left = 400
        // frog.top = 750;
    }
    else
    {
        drawCars();
    }

}
function logCollision() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(t=0;t<array2.length;t++){
        if (level==1) {
            if (frog.left + frog.width > array2[t].left && frog.left < array2[t].left + array2[t].width && frog.top + frog.height > array2[t].top && frog.top < array2[t].top + array2[t].height) {
                frog.left += 1;
                waterCollision = false;
            }
            if (frog.left + frog.width > array3[t].left && frog.left < array3[t].left + array3[t].width && frog.top + frog.height > array3[t].top && frog.top < array3[t].top + array3[t].height) {
                frog.left += 1;
                waterCollision = false;
            }
        }
        if (level==2){
            if (frog.left + frog.width > array2[t].left && frog.left < array2[t].left + array2[t].width && frog.top + frog.height > array2[t].top && frog.top < array2[t].top + array2[t].height) {
                frog.left += 2;
                waterCollision = false;
            }
            if (frog.left + frog.width > array3[t].left && frog.left < array3[t].left + array3[t].width && frog.top + frog.height > array3[t].top && frog.top < array3[t].top + array3[t].height) {
                frog.left += 1.5;
                waterCollision = false;
            }
        }
    }
    // if (waterCollision == true && frog.top < 250 && frog.top>50) {
    //     alert("You are in the water");
    // }
}

function waterCollision2() {
    if (waterCollision == true && frog.top < 250 && frog.top>50) {
        frog.left = 325;
        frog.top = 600;
        lives = lives - 1;
        placement = placement + 1;
        document.getElementById("pics").src = picsSRC[placement];
        document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives

    }
}

function checkCollision() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<pictArray.length;i++){
        if (frog.left + frog.width> pictArray[i].left && frog.left< pictArray[i].left + pictArray[i].width && frog.top + frog.height > pictArray[i]. top && frog.top < pictArray[i].top + pictArray[i].height){
            frog.left = 325;
            frog.top = 600;
            lives = lives - 1;
            placement = placement + 1;
            document.getElementById("pics").src = picsSRC[placement];
            document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives

        }

        if (frog.left + frog.width> pictArrayOp[i].left && frog.left< pictArrayOp[i].left + pictArrayOp[i].width && frog.top + frog.height > pictArrayOp[i]. top && frog.top < pictArrayOp[i].top + pictArrayOp[i].height){
            frog.left = 325;
            frog.top = 600;
            lives = lives - 1;
            placement = placement + 1;
            document.getElementById("pics").src = picsSRC[placement];
            document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives


        }
    }

}
function boundaryCheck() {
    if(frog.left<0 || frog.left>650 || frog.top>650 || frog.top<0){
        frog.left = 325;//CURRENTLY NOT WORKING
        frog.top = 600;
    }
}
function livesCheck() {
    if (lives==0){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        document.getElementById("lifeShower").innerHTML = "You have lost!"
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,650,650);
        ctx.fillStyle = "#FFFF13";
        ctx.font = "35px Arial";
        ctx.fillText("YOU HAVE LOST", 200, 325);
        ctx.fillText("CLICK THE RESET BUTTON", 110, 370);

    }
}
function winCheck() {
    if(completion1==true && completion2==true && completion3==true && completion4 ==true){
        completion1 = false;
        completion2 =false;
        completion3 = false;
        completion4 = false;
        level = level +1;
        document.getElementById("levelShower").innerHTML = "Current Level:" + " " + level;

    }
}

$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 87) {
        frog.top-=50;

    }
    if(keycode == 65) {
        frog.left-=50;
    }
    if(keycode == 68) {
        frog.left+=50;
    }
    if(keycode == 83) {
        frog.top+=50;
    }

    //all key numbers can be found on the internet
});


function drawCars() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<pictArray.length;i++){
        if (level==1) {
            pictArray[i].left += .5;
            ctx.drawImage(pictArray[i], pictArray[i].left, pictArray[i].top, 50, 50);
        }
        if (level==2) {
            pictArray[i].left += 1;
            ctx.drawImage(pictArray[i], pictArray[i].left, pictArray[i].top, 50, 50);
        }
        if(pictArray[i].left>650){
            pictArray[i].left = -200;
        }

    }

    for(v = 0;v<pictArrayOp.length;v++){
        if (level==1) {
            pictArrayOp[v].left -= .5;
            ctx.drawImage(pictArrayOp[v], pictArrayOp[v].left, pictArrayOp[v].top, 50, 50);
        }
        if (level==2) {
            pictArrayOp[v].left -= 1;
            ctx.drawImage(pictArrayOp[v], pictArrayOp[v].left, pictArrayOp[v].top, 50, 50);
        }
        if(pictArrayOp[v].left<-50){
            pictArrayOp[v].left = 650;
        }
    }

    for(r = 0;r<array2.length;r++){
        if (level==1) {
            array2[r].left += .5;
            ctx.drawImage(array2[r], array2[r].left, array2[r].top, 55, 55);
        }
        if (level==2) {
            array2[r].left += 1;
            ctx.drawImage(array2[r], array2[r].left, array2[r].top, 55, 55);
        }
        if(array2[r].left>650){
            array2[r].left = -250;
        }
    }
    for(z = 0;z<array3.length;z++){
        if (level==1){
            array3[z].left += .5;
            ctx.drawImage(array3[z], array3[z].left, array3[z].top, 55, 55);
        }
        if (level==2) {
            array3[z].left += .75;
            ctx.drawImage(array3[z], array3[z].left, array3[z].top, 55, 55);
        }
        if(array3[z].left>650){
            array3[z].left = -250;
        }
    }
    for(b=0;b<starArray.length;b++){
            ctx.drawImage(starArray[b], starArray[b].left, starArray[b].top, 55, 50);
    }

}
function drawFrog() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frog, frog.left, frog.top, frog.width, frog.height);
}


//In order for the code to work, you have to load the source file, in the cortez code.
//Properties of an image. One property is top and the left. What he did was by making that function with the src, whenever there is an src, and the three other things, than this image can be used to say left, right. It can be called because he made it up.
//Left+25 os actually the right. Have to pass the right numbers. Takes place of X1, X2 and all those other ones.
//Have two jumps allowed on bottom, then 2 for middle safe zone, 1 for the top.


