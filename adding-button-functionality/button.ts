class Button {
  text: string;
  fillColor: string;
  textColor: string;

  x = 0;
  y = 0;
  width = 0;
  height = 0;

  onClick: () => void;

  constructor(text: string, fillColor: string = '#ffffff', textColor: string = '#000000') {
    this.text = text;
    this.fillColor = fillColor;
    this.textColor = textColor;
  }

  draw(c: CanvasRenderingContext2D): void {
    c.fillStyle = this.fillColor;
    c.fillRect(this.x, this.y, this.width, this.height);

    c.fillStyle = this.textColor;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = '25px arial';
    c.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  inBounds(mouseX: number, mouseY: number): boolean {
    return !(mouseX < this.x || mouseX > this.x + this.width || mouseY < this.y || mouseY > this.y + this.height);
  }
  
}