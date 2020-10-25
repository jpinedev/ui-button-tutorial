let canvas = <HTMLCanvasElement>document.getElementById("main");
let c = canvas.getContext('2d');

let buttons: Button[] = [];

function init(): void {
  // initalization
  let startGame = new Button('Start Game', '#eeaa00', '#001122');
  startGame.setPosition(canvas.width / 2 - 100, 150);
  startGame.setSize(200, 75);
  startGame.onClick = () => console.log('Start Game!');

  buttons.push(startGame);

  update();
}

function update(): void {
  c.fillStyle = "#000000";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // game loop
  buttons.forEach(b => b.draw(c));

  requestAnimationFrame(update);
}

canvas.addEventListener('click', (event: MouseEvent) => {
  let x = event.pageX - (canvas.clientLeft + canvas.offsetLeft);
  let y = event.pageY - (canvas.clientTop + canvas.offsetTop);
  
  buttons.forEach(b => {
    if (b.inBounds(x, y) && !!b.onClick) b.onClick();
  });
});

canvas.addEventListener('mousemove', (event: MouseEvent) => {
  //...
});

init();