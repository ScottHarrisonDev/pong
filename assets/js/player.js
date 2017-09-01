function Player() {

	this.w = 15;
	this.h = 75;
	this.x = 15;
	this.y = (this.h / 2) + 5;
	this.speed = 5;
	this.score = 0;

	this.show = function() {
		fill(255);
		noStroke();
    	rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
		this.move();
	}

	this.move = function() {
		if (keyIsDown(UP_ARROW) && this.y >= ((this.h / 2) + 10)){
			this.y -= this.speed;
		}
		if (keyIsDown(DOWN_ARROW) && this.y <= height - ((this.h / 2) + 10)){
			this.y += this.speed;
		}
	}

}