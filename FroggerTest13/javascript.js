/**
 * Created by siddiqi9214 on 12/1/2017.
 */
//have to draw frog image when in square
var a;
var picsSRC = ["resources/REAL3lives.png", "resources/REALREAL2lives.png", "resources/REALREAL1live.png"];
var placement = 0;
var pictArray = [];
var pictArrayOp = [];
var array2 = [];
var frog;
var moveCar = false;
var waterCollision = true;
var lives = 3;
var level = 0;
var completion1 = false;
var completion2 = false;
var completion3 = false;
var completion4 = false;
// var frog1 = new Image();//THIS IDEA DIDNT WORK
// frog1.src = "resources/star.png";
var star1;

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
    if (level==0) {
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
        array2.push(createImage("resources/theLog.png", "LogTOP", 50, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 250, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 450, 200, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogTOP", 600, 200, 50, 50));


        // array2.push(createImage("resources/theLog.png", "LogMIDDLE", -250, 150, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 150, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 50, 150, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 250, 150, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 450, 150, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 600, 150, 50, 50));


        // array2.push(createImage("resources/theLog.png", "LogMIDDLE", -250, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", -100, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 50, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 250, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 450, 100, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogMIDDLE", 600, 100, 50, 50));

        // array2.push(createImage("resources/theLog.png", "LogBOTTOM", -250, 50, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogBOTTOM", -100, 50, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogBOTTOM", 50, 50, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogBOTTOM", 250, 50, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogBOTTOM", 450, 50, 50, 50));
        array2.push(createImage("resources/theLog.png", "LogBOTTOM", 600, 50, 50, 50));

    }
    document.getElementById("lifeShower").innerHTML = "Current Amount of Lives:" + " " + lives;
    document.getElementById("pics").src = picsSRC[placement];
    frog = createImage("resources/frog.png", "frog", 325, 600, 50, 50);
}

function initialGo() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFF13";
    ctx.font = "35px Arial";
    ctx.fillText("F R O G G E R", 250, 250);
    drawText();
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
    drawStar();
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
    ctx.moveTo(0,50);//starting location
    ctx.lineWidth = 5;//how thick line is
    ctx.strokeStyle = "#000000";
    ctx.lineTo(650,50);//actually paints
    ctx.stroke();//displays

    drawCars();
}


function checkFinish() {
    if (frog.left<45 && frog.left<100 && frog.top<45 && frog.top<5 ){
        completion1 = true;
        star1 = createImage("resources/star.png", "star1", 45, 5, 55, 50);
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left<195 && frog.left<250 && frog.top<45 && frog.top<5 ){
        completion2 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        star1 = createImage("resources/star.png", "star1", 195, 5, 55, 50);//CHANGE COORDINATES BELOW FOR STAR
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left<345 && frog.left<400 && frog.top<45 && frog.top<5 ){
        completion3 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        star1 = createImage("resources/star.png", "star1", 345, 5, 55, 50);//CHANGE
        frog.left = 325;
        frog.top = 600;
    }
    if (frog.left<495 && frog.left<550 && frog.top<45 && frog.top<5 ){
        completion4 = true;
        ctx = document.getElementById("myCanvas").getContext("2d");
        star1 = createImage("resources/star.png", "star1", 495, 5, 55, 50);//CHANGE
        frog.left = 325;
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
        if (frog.left + frog.width> array2[t].left && frog.left< array2[t].left + array2[t].width && frog.top + frog.height > array2[t]. top && frog.top < array2[t].top + array2[t].height){
            frog.left+=2;
            waterCollision = false;
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
function livesCheck() {
    if (lives==0){
        document.getElementById("lifeShower").innerHTML = "You have lost!"
    }
}
function winCheck() {
    if(completion1==true && completion2==true && completion3==true && completion4 ==true){
        // alert("YOU win the game!");
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
        pictArray[i].left+=1;
        ctx.drawImage(pictArray[i],pictArray[i].left, pictArray[i].top,50,50);
        if(pictArray[i].left>650){
            pictArray[i].left = -200;
        }
    }

    for(v = 0;v<pictArrayOp.length;v++){
        pictArrayOp[v].left-=1;
        ctx.drawImage(pictArrayOp[v],pictArrayOp[v].left, pictArrayOp[v].top,50,50);
        if(pictArrayOp[v].left<-50){
            pictArrayOp[v].left = 650;
        }
    }

    for(r = 0;r<array2.length;r++){
        array2[r].left+=1;
        ctx.drawImage(array2[r],array2[r].left, array2[r].top,55,55);//ASK CORTEZ WHY TIP STAYS?
        if(array2[r].left>650){
            array2[r].left = -200;
        }
    }

}
function drawFrog() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frog, frog.left, frog.top, frog.width, frog.height);
}
function drawStar() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(star1, star1.left, star1.top, star1.width, star1.height);
}

//In order for the code to work, you have to load the source file, in the cortez code.
//Properties of an image. One property is top and the left. What he did was by making that function with the src, whenever there is an src, and the three other things, than this image can be used to say left, right. It can be called because he made it up.
//Left+25 os actually the right. Have to pass the right numbers. Takes place of X1, X2 and all those other ones.
//Have two jumps allowed on bottom, then 2 for middle safe zone, 1 for the top.


