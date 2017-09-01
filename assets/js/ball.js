function Ball() {

	this.x = width / 2;
	this.y = height / 2;
	this.d = 25;
	this.r = this.d / 2;
	this.speed = 3.1;
	this.xvelocity = -this.speed;
	this.yvelocity = (floor(random(2)) === 0) ? -this.speed : this.speed;

	this.show = function() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, this.d);
		this.move();
	}

	this.move = function() {
		if (this.y <= this.r) {
			this.yvelocity = this.speed;
		}
		if (this.y >= height - (this.d / 2)) {
			this.yvelocity = -this.speed;
		}
		this.x += this.xvelocity;
		this.y += this.yvelocity;
	}

	this.reset = function() {
		this.x = width / 2;
		this.y = height / 2;
		this.xvelocity = -this.speed;
		this.yvelocity = (floor(random(2)) === 0) ? - this.speed : this.speed;
	}

	this.collision = function(target) {
		if ((this.x + this.r) > (target.x - (target.w / 2)) &&
            (this.y + this.r) > (target.y - (target.h / 2)) &&
            (this.x - this.r) < (target.x + (target.w / 2)) &&
            (this.y - this.r) < (target.y + (target.h / 2))) {
			if (this.x > target.x) {
				this.xvelocity = this.speed;
			}
			if (this.x < target.x) {
				this.xvelocity = -this.speed;
			}
		}
	}

}