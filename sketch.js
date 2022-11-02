// VARIABLES FOR THE CAMERA/SNAP OF THE CAMERA
var video;
var snapshot = [];

//VAR TO CREATE BUTTONS
var button;
var button2;
var button3;

//AUDIO EFFECT VAR
let song;

// VARIABLES FOR THE RANDOM IMAGE PICKER
let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numCards = 21;

let stopRunningDraw = 1; //A GENERAL VARIABLE THAT I'M GOING TO USE LATER TO STOP THE RANDOMNESS OF THE ARRAY

//PRELOAD FUNCTION: LOADING ALL MY ASSETS
function preload() {
    bg = loadImage("./assets/background.png");
    mySystem = loadImage("./assets/ingombri.png");
    myRetry = loadImage("./assets/retry.svg");
    mySave = loadImage("./assets/save.svg");
    mySnap = loadImage("./assets/snap.svg");
    myPicContainer = loadImage("./assets/pic-container.png");
    myResultContainer = loadImage("./assets/result-container.png");

    song = loadSound("./assets/yay.mp3");

    //store images  by using a for loop and concatenation
    //i rename all my images using the same scheme: pers + 0,1,2... + .png
    for (let i = 0; i < numCards; i++) {
        cards[i] = loadImage("./assets/images/pers" + i + '.png');
    }
  }
  
//setup function to set basic instructions
function setup() {

    createCanvas(windowWidth, windowHeight); //my sketch occupies the whole page

    imageMode(CENTER);//the pivot of the images is in the center

    video = createCapture(VIDEO); //access live webcam 

    //the buttons are going to be linked to some actions

    //button 1 restarts the page after mouse click
    button = createImg('./assets/retry.svg'); //the button is linked to an image
    button.position(width/4.3, height/1.42); //set the position
    button.size(100, 93); //set the size
    button.mousePressed(restartBin); //set the function after the action

    //button 2 saves the canvas
    button2 = createImg('./assets/save.svg'); 
    button2.position(width/1.4, height/1.42);
    button2.size(100, 93);
    button2.mousePressed(saveFrame);

    //button 3 takes the photo
    button3 = createImg('./assets/snap.svg');
    button3.position(width/2.2, height/1.48);
    button3.size(160, 143);
    button3.mousePressed(randomPicker);
}

//function DRAW to place the elements
function draw() {

    image(bg, width/2, height/2, windowWidth, windowHeight); //background
    image(mySystem, width/2, height/2, 1246/1.2, 983/1.2); //assets
    image(myPicContainer, width/2.8, height/2.025, 516/1.2, 431/1.2);
    image(myResultContainer, width/1.55, height/2.025, 516/1.2, 431/1.2);

    image(video, width/2.82, height/2, 1001/2.8, 742/2.8); //place the video


    //draw the random images
    //condition: if my general variable "stopRunningDraw" is 0, draw a random image (randoImg) picked from the array "cards"
    if(stopRunningDraw == 0){
        let randoImg = random(cards); //setting the variable "randoImg" that corresponds to the array "cards"
        image(randoImg, width/1.55, height/2, 1001/2.8, 742/2.8); //draw "randoImg"
    }
    
}

//function takesnap: where the video stops and returns a still frame
function takesnap() {
    snapshot = video.get(); //call the video
    print(snapshot); //returns the snapshot
}

//when "P" is pressed:
function keyPressed() {
    if (key === 'p') { 
        takesnap(); //run the function takesnap
        song.play(); //play the audio file

        stopRunningDraw = 0; //change the value of "stopRunningDraw" into 0, so that my array starts running
        
        setTimeout(function(){ //give a delay to the action "No loop"
            noLoop(); //the array stops to a random image
        }, 1000);
    } 
}

//same as when "P" is pressed:
function randomPicker() {
        takesnap();
        song.play();
        stopRunningDraw = 0;
        
        setTimeout(function(){
            noLoop();
        }, 1000);
        
}

//resize canvas when the window changes dimensions
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

//saves the canvas under the name "iFoundTheLove.png"
function saveFrame() {
    save("iFoundTheLove.png");
}

//reloads the whole page
function restartBin() {
    window.location.reload(); 
}

