var scenes = 0
var blobSize = 100 //variable for the value in the condition statement of the loops, so that I don't have to change every single one when I decide I want more or less shapes on the screen
var snakes = [];
var ladders = []; //arrays named after the game since these are the animation basics for something like that (upward and downward moving shapes


function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < blobSize; i++) {
    snakes[i] = new generalMover(400/5, 400/5, 4, "rect"); //3rd parameter tells program: this.x and this.y = random(-5,9)
    ladders[i] = new generalMover(350, 350, -1, "ellipse");
    //3rd parameter tells program: this.x and this.y = random(-5,4)
    
    // if you want to see some bugs, comment line 41 and uncomment the below line instead
    // squaresUpward[i] = new generalMover(350, 350, -1, "elipse");
  }
}

function draw() {
  mouseClicked = function() {
    scenes++;
  }

  if (scenes === 0) {
    background(90, 200, 200);
    textSize(30);
    fill(200, 50, 100);
    text("Welcome to my art show", 40, 100);

    if (mouseX > 115 && mouseX < 315 && mouseY > 160 && mouseY < 220) {
      fill(255, 255, 255);
      rect(115, 160, 200, 60);
    }
    fill(70, 90, 10);
    text("Click to start", 125, 200);
  } else if (scenes === 1) {
    background(210, 50, 80);

    for (var i = 0; i < blobSize; i++) { 
      snakes[i].update();
      snakes[i].show();
    }

    fill(255, 200, 10);
    rect(mouseX, mouseY, 15, 15);
  } else if (scenes === 2) {
    background(190, 200, 4);

    for (var j = 0; j < blobSize; j++) { 
      ladders[j].update();
      ladders[j].show();  //to call everything in the ladders array I had to change i to j since i had already been used for the snakes array
    }
  } else if (scenes === 3) {
    background(90, 30, 255);
    textSize(30);
    fill(255, 255, 255);
    text("Hope you liked it!", 90, 200);
  }


}
