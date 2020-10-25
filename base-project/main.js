var canvas = document.getElementById("main");
var c = canvas.getContext('2d');
function init() {
    // initalization
    update();
}
function update() {
    c.fillStyle = "#000000";
    c.fillRect(0, 0, canvas.width, canvas.height);
    // game loop
    c.fillStyle = "#eeaa00";
    c.fillRect(220, 100, 200, 75);
    c.fillStyle = "#001122";
    c.textAlign = "center";
    c.font = "25px arial";
    c.fillText("Start Game", 320, 145, 200);
    requestAnimationFrame(update);
}
init();
