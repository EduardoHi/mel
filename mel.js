rand = (n) => Math.random() * n;
sin = (n) => Math.sin(n);
cos = (n) => Math.cos(n);

var a = 0;
var r1 = 50;
var r2 = 30;
var rp2 = 110;

function Mel() {
    var cnvs = document.createElement("canvas");

    var width = Math.floor(window.innerWidth), height = Math.floor(window.innerHeight);

    cnvs.setAttribute("width", width);
    cnvs.setAttribute("height", height);
    document.body.appendChild(cnvs);

    var ctx = cnvs.getContext("2d");
    ctx.webkitImageSmoothingEnabled = true;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 7;
    ctx.translate(width / 2, height / 2);


    this.update = () => {
        ctx.clearRect(-width / 2, -height / 2, width, height);
        circle(0, 0, r1);
        circle(rp2 * sin(a), rp2 * cos(a), r2);
        line(r1 * sin(a), r1 * cos(a), (rp2 - r2) * sin(a), (rp2 - r2) * cos(a));
        a += 0.01;
    }

    this._intervalId = setInterval(this.update, 1000 / 60);


    function line(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

