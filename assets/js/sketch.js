var player;

function setup() {
	createCanvas(700, 450);
	player = new Player();
	computer = new Ai();
	ball = new Ball();
}

function draw() {
	background(0);
	textSize(32);
	text(player.score, (width / 2) - 50, 30);
	text(computer.score, (width / 2) + 50, 30);
	fill(255);
	player.show();
	computer.show();
	computer.move();
	ball.show();
	ball.collision(player);
	ball.collision(computer);
	if (ball.x <= 0) {
		computer.score += 1;
		ball.reset();
	}
	if (ball.x >= width) {
		player.score += 1;
		ball.reset();
	}
}