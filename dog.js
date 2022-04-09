img = "";
status2 = "";

function preload(){
    img = loadImage('easer.png')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecing Object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status2 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
    }
    
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#660000")
    text("EASER", 45, 75);
    text("52%", 90, 75);
    noFill();
    stroke("#660000");
    rect(30, 60, 550, 350);

    fill("#c71fe0")
    text("PERSON", 120, 95);
    text("70%", 180, 95);
    noFill();
    stroke("#c71fe0");
    rect(110, 80, 530, 330);
}

function back(){
    
}