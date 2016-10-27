function require(a,b=true){var c;c=b===!0?".js":"";var d=document.createElement("script");d.src=a+c,d.type="text/javascript",document.head.appendChild(d)}
//https://code.jquery.com/jquery-3.1.0.min
require("https://code.jquery.com/jquery-3.1.0.min");

var load = function(){
    
    var colors = ["#55bbaa", "#99aacc", "#00ccff", "#1fcc3e", "#24809e", "#3f9e51", "#49c6e5", "#2Ceaa3", "#7cfef0", "#a9ddd6"];
    var rc = colors[Math.round(Math.random()*(colors.length-1))];

    var WIDTH = 268;
    var HEIGHT = 698;
    var canvas;
    var ctx;

    var r = 18.3684211;
    var pi = Math.PI;

    var main = function(){
        function createCanvas(id){
          var con = document.createElement('aside');
          con.style.backgroundPosition = "top right";
          con.style.width = "20%";
          con.style.height = "91.015625%";
          con.style.position = "absolute";
          con.style.top = "0%";
          con.style.right = "0%";
          con.style.margin = "0%";
          
          document.body.appendChild(con);
          
          var proto_canvas = document.createElement('canvas');
          proto_canvas.id = id;
          proto_canvas.style.width = "100%";
          proto_canvas.style.marginLeft = "0%";
          proto_canvas.style.border = "none":
          
          proto_canvas.width = "268";
          proto_canvas.height = "698";
          
          con.appendChild(proto_canvas);
        }
        createCanvas('section');
        canvas = document.getElementById('section');
        ctx = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        draw();
    }

    var draw = function(){

        //Row 1 => 7
        for(var i = 0; i < 7; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), r, r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 2 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*3), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 3 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*5), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 4 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*7), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 5 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*9), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 6 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*11), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 7 => 2
        for(var i = 0; i < 2; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*13), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 8 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*15), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 9 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*17), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }


        //Row 10 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*19), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 11 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*21), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 12 => 7
        for(var i = 0; i < 7; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*23), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 13 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*25), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 14 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*27), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 15 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*29), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 16 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*31), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 17 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*33), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 18 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*35), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 19 => 2
        for(var i = 0; i < 2; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*37), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }
    }

    main();
}

$(document).ready(load);
