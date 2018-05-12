$(document).ready(function() {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    if (CanvasRenderingContext2D.prototype.ellipse == undefined) {
        CanvasRenderingContext2D.prototype.ellipse = function (x, y, radiusX, radiusY,
                                                               rotation, startAngle, endAngle, antiClockwise) {
            this.save();
            this.translate(x, y);
            this.rotate(rotation);
            this.scale(radiusX, radiusY);
            this.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
            this.restore();
        }
    }

    w = 800;
    h = 450;
    ctx.canvas.width  = w;
    ctx.canvas.height = h;
    ctx.lineWidth=0.5;
    ctx.strokeStyle = '#D3D3D3';

    for (x=0;x<=w;x+=50) {
        for (y=0;y<=h;y+=50) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }
    ctx.lineWidth=1;
    ctx.strokeStyle = 'black';

    ctx.beginPath();
   // ctx.moveTo(75,50);
    ctx.ellipse(250, 349, 80, 25, Math.PI/4,  Math.PI/4 ,Math.PI - Math.PI/4);
    ctx.ellipse(155, 332, 10, 80, Math.PI/2 + Math.PI/64,  Math.PI-Math.PI/4 ,  -Math.PI/2 - Math.PI/4 - Math.PI/32);
    ctx.ellipse(250, 349, 80, 25, 0,  0 ,Math.PI );


    ctx.stroke();



    //
    // var drawGrid = function(w, h) {
    //
    //     ctx.canvas.width  = w;
    //     ctx.canvas.height = h;
    //
    //
    //     for (x=0;x<=w;x+=20) {
    //         for (y=0;y<=h;y+=20) {
    //             ctx.moveTo(x, 0);
    //             ctx.lineTo(x, h);
    //             ctx.stroke();
    //             ctx.moveTo(0, y);
    //             ctx.lineTo(w, y);
    //             ctx.stroke();
    //         }
    //     }
    //
    // };
    //
    //
    // drawGrid(800, 400);


});