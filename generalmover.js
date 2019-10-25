var generalMover = function(startx, starty,moveBias,shape) {
  this.x = startx;
  this.y = starty;
  this.moveBias = moveBias;
  this.shape = shape;
}

generalMover.prototype.update = function() {
  this.x += random(-5,5+this.moveBias)
  this.y += random(-5,5+this.moveBias)
  this.r = random(100, 255);
  this.g = random(0, 50);
  this.b = random(50, 125);
};

generalMover.prototype.show = function() {
  noStroke();
  fill(this.r, this.g, this.b);
  if (this.shape === "rect") {
    rect(this.x, this.y, 15, 15);
  }
  else if (this.shape === "ellipse") {
    ellipse(this.x, this.y, 30, 30);
  }
  else {
    ellipse(this.x, this.y, 5,15);
    rotate(PI/5)
  }
};
