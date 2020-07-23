var a;
var pictArray = [];
var pictArrayOp = [];
var array2 = [];
var frog;
var moveCar = false;
var waterCollision;
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
    pictArrayOp.push(createImage("resources/car3.png", "CarTOP", 200,350, 30,30));
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

    array2.push(createImage("resources/theLog.png", "LogTOP", 220, 200, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogTOP", 50, 200, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogTOP", -60, 200, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogTOP", -200, 200, 50, 50));


    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 300, 150, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 190, 150, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 70, 150, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", -70, 150, 50, 50));


    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 450, 100, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 250, 100, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", 180, 100, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogMIDDLE", -180, 100, 50, 50));


    array2.push(createImage("resources/theLog.png", "LogBOTTOM", 600, 50, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogBOTTOM", 400, 50, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogBOTTOM", 100, 50, 50, 50));
    array2.push(createImage("resources/theLog.png", "LogBOTTOM", -100, 50, 50, 50));


    frog = createImage("resources/frog.png", "frog", 325, 600, 50, 50);
}
// function checkWin() {
//     if(frog.top=620){
//         alert("YOU WIN");
//     }
// }
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
    ctx.fillStyle = "#0FFF00";//most top win base
    ctx.fillRect(0,0,650,50);
    drawCars();
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
            waterCollision = true;
        }
        else{
            waterCollision = false;
        }
    }
}

// function waterCollision2() {
//     if (waterCollision == true) {
//         frog.left+=2;//ASK HERE FOR HELP, AS THE WATER COLLISION IS NOT WORKING?
//     }
//     if (waterCollision == false && frog.top < 201) {
//         alert("You are in the water");
//     }
// }

function checkCollision() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<pictArray.length;i++){
        if (frog.left + frog.width> pictArray[i].left && frog.left< pictArray[i].left + pictArray[i].width && frog.top + frog.height > pictArray[i]. top && frog.top < pictArray[i].top + pictArray[i].height){
            frog.left = 325;
            frog.top = 600;
        }

        if (frog.left + frog.width> pictArrayOp[i].left && frog.left< pictArrayOp[i].left + pictArrayOp[i].width && frog.top + frog.height > pictArrayOp[i]. top && frog.top < pictArrayOp[i].top + pictArrayOp[i].height){
            frog.left = 325;
            frog.top = 600;
        }
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
        ctx.drawImage(array2[r],array2[r].left, array2[r].top,60,60);//ASK CORTEZ WHY TIP STAYS?
        if(array2[r].left>650){
            array2[r].left = -200;
        }
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

