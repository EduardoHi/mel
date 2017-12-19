var svgNS = "http://www.w3.org/2000/svg";
var w_width = window.innerWidth
var w_height = window.innerHeight
var center = [w_width / 2, w_height / 2];

rand = (n) => Math.random() * n;
sin = (n) => Math.sin(n);
cos = (n) => Math.cos(n);

var a = 0;
var r1 = 50;
var r2 = r1 + 30;

function Mel() {
    createCircle(center[0], center[1], r1);
    var secondCircle = createCircle(center[0], 110 + center[1], 30);
    var lineElement = createLine(center[0] + r1, center[1] + r1, center[0] + r2, center[1] + r2);

    this.update = () => {
        a += 0.01;
        updateLine(lineElement);
        updateCircle(secondCircle);
    }

    this._intervalId = setInterval(this.update, 1000 / 60);
}

updateLine = (line) => {
    line.setAttributeNS(null, "x1", center[0] + sin(a) * r1);
    line.setAttributeNS(null, "y1", center[1] + cos(a) * r1);
    line.setAttributeNS(null, "x2", center[0] + sin(a) * r2);
    line.setAttributeNS(null, "y2", center[1] + cos(a) * r2);
}

updateCircle = (circle) => {
    circle.setAttributeNS(null, "cx", center[0] + sin(a) * (r2 + 30));
    circle.setAttributeNS(null, "cy", center[1] + cos(a) * (r2 + 30));
}

function createCircle(x, y, r) {
    var circ = document.createElementNS(svgNS, "circle");
    circ.setAttributeNS(null, "cx", x);
    circ.setAttributeNS(null, "cy", y);
    circ.setAttributeNS(null, "r", r);
    circ.setAttributeNS(null, "stroke", "white");
    circ.setAttributeNS(null, "stroke-width", "5");
    circ.setAttributeNS(null, "fill-opacity", "0.0");

    document.getElementById("mySVG").appendChild(circ);
    return circ;
}
function createLine(x1, y1, x2, y2) {
    var line = document.createElementNS(svgNS, "line");
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y2", y2);
    line.setAttributeNS(null, "stroke", "white");
    line.setAttributeNS(null, "stroke-width", "5");

    document.getElementById("mySVG").appendChild(line);
    return line;
}