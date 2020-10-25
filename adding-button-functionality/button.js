var Button = /** @class */ (function () {
    function Button(text, fillColor, textColor) {
        if (fillColor === void 0) { fillColor = '#ffffff'; }
        if (textColor === void 0) { textColor = '#000000'; }
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.text = text;
        this.fillColor = fillColor;
        this.textColor = textColor;
    }
    Button.prototype.draw = function (c) {
        c.fillStyle = this.fillColor;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.textColor;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.font = '25px arial';
        c.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    };
    Button.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Button.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    Button.prototype.inBounds = function (mouseX, mouseY) {
        return !(mouseX < this.x || mouseX > this.x + this.width || mouseY < this.y || mouseY > this.y + this.height);
    };
    return Button;
}());
