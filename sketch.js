//VAR FOR SNAP IMAGE
var video;
var snapshot = [];

//VAR TO CREATE BUTTONS
var button;
var button2;
var button3;

let song;

// VARIABLES FOR RANDOM IMAGE PICKER
let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numCards = 21;

let stopRunningDraw = 1;

function preload() {
    bg = loadImage("./assets/background.png");
    mySystem = loadImage("./assets/ingombri.png");
    myRetry = loadImage("./assets/retry.svg");
    mySave = loadImage("./assets/save.svg");
    mySnap = loadImage("./assets/snap.svg");
    myPicContainer = loadImage("./assets/pic-container.png");
    myResultContainer = loadImage("./assets/result-container.png");

    song = loadSound("./assets/yay.mp3");

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
    button.position(width/4.3, height/1.42);
    button.size(100, 93);
    button.mousePressed(restartBin);

    button2 = createImg('./assets/save.svg');
    button2.position(width/1.4, height/1.42);
    button2.size(100, 93);
    button2.mousePressed(saveFrame);

    button3 = createImg('./assets/snap.svg');
    button3.position(width/2.2, height/1.48);
    button3.size(160, 143);
    button3.mousePressed(randomPicker);
}


function draw() {

    image(bg, width/2, height/2, windowWidth, windowHeight);
    image(mySystem, width/2, height/2, 1246/1.2, 983/1.2);
    image(myPicContainer, width/2.8, height/2.025, 516/1.2, 431/1.2);
    image(myResultContainer, width/1.55, height/2.025, 516/1.2, 431/1.2);

    image(video, width/2.82, height/2, 1001/2.8, 742/2.8); 


    //draw to the canvas using the random
    //image(image, x position, y position, image width, image height)
    if(stopRunningDraw == 0){
        let randoImg = random(cards);    
        image(randoImg, width/1.55, height/2, 1001/2.8, 742/2.8);
    }
    
}

function takesnap() {
    snapshot = video.get();
    print(snapshot);
}

function keyPressed() {
    if (key === 'p') {
        takesnap();
        song.play();
        stopRunningDraw = 0;
        
        setTimeout(function(){
            noLoop();
        }, 1000);
    } 
}


function randomPicker() {
        takesnap();
        song.play();
        stopRunningDraw = 0;
        
        setTimeout(function(){
            noLoop();
        }, 1000);
        
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

