//Codice che funziona fino a quando non ho provato a mettere l’array

//VAR FOR SNAP IMAGE
var video;
var snapshot = [];

//VAR TO CREATE BUTTONS
var button;
var button2;

// let gif;

// VARIABLES FOR RANDOM IMAGE PICKER
let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numCards = 21;

let stopRunningDraw = 1;

function preload() {
    bg = loadImage("./assets/background.png");
    // myTitle = loadImage("./assets/title.png");
    // myBody = loadImage("./assets/body-back.png");
    // myFooter = loadImage("./assets/para-back.png");
    mySystem = loadImage("./assets/ingombri.png");
    myRetry = loadImage("./assets/retry.svg");
    mySave = loadImage("./assets/save.svg");
    mySnap = loadImage("./assets/snap.svg");
    myPicContainer = loadImage("./assets/pic-container.png");
    myResultContainer = loadImage("./assets/result-container.png");

    // gif = loadImage("./assets/gif-anim.gif");
    // the most efficient way to store images is by using a for loop and concatenation
    for (let i = 0; i < numCards; i++) {
        cards[i] = loadImage("./assets/images/pers" + i + '.png');
    }
  }
  

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

    video = createCapture(VIDEO); //access live webcam 

    button = createImg('./assets/retry.svg');
    button.position(width/4.8, height/1.4);
    button.size(92, 85);
    button.mousePressed(restartBin);

    button2 = createImg('./assets/save.svg');
    button2.position(width/1.4, height/1.4);
    button2.size(92, 85);
    button2.mousePressed(saveFrame);

    button3 = createImg('./assets/snap.svg');
    button3.position(width/2.2, height/1.48);
    button3.size(160, 143);
    button3.mousePressed(randomPicker);

    // gif.setFrame(0);
    // gif.pause();
}


function draw() {

    image(bg, width/2, height/2, windowWidth, windowHeight);
    image(mySystem, width/2, height/2, 1246/1.4, 983/1.4);
    //image(myBin, width/4.2, height/1.32, 94/1.4, 104/1.4);
    //image(myFolder, width/1.32, height/1.32, 107/1.4, 94/1.4);
    image(myPicContainer, width/2.8, height/2.1, 516/1.3, 431/1.3);
    image(myResultContainer, width/1.55, height/2.1, 516/1.3, 431/1.3);

    image(video, width/2.82, height/2.07, width/4, width * video.height / video.width / 4); 

    //image(gif, width/1.55, height/2.1, 1001/2.8, 742/2.8);

    //draw to the canvas using the random
    //image(image, x position, y position, image width, image height)
    if(stopRunningDraw == 0){
        let randoImg = random(cards);    
        image(randoImg, width/1.55, height/2.07, 1001/2.8, 742/2.8);
    }
    
}

function takesnap() {
    snapshot = video.get();
    print(snapshot);
}



function randomPicker() {
        takesnap();

        stopRunningDraw = 0;
        
        setTimeout(function(){
            noLoop();
        }, 1000);
        
        // gif.setFrame(0);
        // gif.play();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function saveFrame() {
    save("iFoundTheLove.png");
}

function restartBin() {
    window.location.reload(); 
}

