function Ai() {

	this.w = 15;
	this.h = 75;
	this.x = width - this.w;
	this.y = (this.h / 2) + 5;
	this.direction = 'down';
	this.speed = 2.5;
	this.score = 0;

	this.show = function() {
		fill(255);
		noStroke();
    	rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
	}

	this.move = function() {
		this.checkDirection();
		if (this.direction === 'down') {
			this.y += this.speed;
		}
		if (this.direction === 'up') {
			this.y += -this.speed;
		}
	}

	this.checkDirection = function() {
		if (this.y >= height - ((this.h / 2) + 10)) {
			this.direction = 'up';
		}
		if (this.y <= ((this.h / 2) + 10)) {
			this.direction = 'down';
		}
	}

}