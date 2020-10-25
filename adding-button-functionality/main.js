var canvas = document.getElementById("main");
var c = canvas.getContext('2d');
var buttons = [];
function init() {
    // initalization
    var startGame = new Button('Start Game', '#eeaa00', '#001122');
    startGame.setPosition(canvas.width / 2 - 100, 150);
    startGame.setSize(200, 75);
    startGame.onClick = function () { return console.log('Start Game!'); };
    buttons.push(startGame);
    update();
}
function update() {
    c.fillStyle = "#000000";
    c.fillRect(0, 0, canvas.width, canvas.height);
    // game loop
    buttons.forEach(function (b) { return b.draw(c); });
    requestAnimationFrame(update);
}
canvas.addEventListener('click', function (event) {
    var x = event.pageX - (canvas.clientLeft + canvas.offsetLeft);
    var y = event.pageY - (canvas.clientTop + canvas.offsetTop);
    buttons.forEach(function (b) {
        if (b.inBounds(x, y) && !!b.onClick)
            b.onClick();
    });
});
canvas.addEventListener('mousemove', function (event) {
    //...
});
init();
