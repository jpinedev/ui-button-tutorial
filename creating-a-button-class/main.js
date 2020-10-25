var canvas = document.getElementById("main");
var c = canvas.getContext('2d');
var startGame;
function init() {
    // initalization
    startGame = new Button('Start Game', '#eeaa00', '#001122');
    startGame.setPosition(canvas.width / 2 - 100, 150);
    startGame.setSize(200, 75);
    update();
}
function update() {
    c.fillStyle = "#000000";
    c.fillRect(0, 0, canvas.width, canvas.height);
    // game loop
    startGame.draw(c);
    requestAnimationFrame(update);
}
init();
