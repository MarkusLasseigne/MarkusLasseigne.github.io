var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        //Declare and initialize variables
        var circle;
        var circles = [];

        //Create a function that draws a circle
        //randomCircleInArea(area, randomizeAlpha, addCross, borderColor, borderThickness, randomRadialProps)
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        }

        //Call the drawCircle function x times 
        for (var ball = 0; ball < 100; ball++){
            drawCircle();
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            //if past RIGHT side of the screen then transport to the LEFT
            if (circle.x > canvas.width + circle.radius * 1.45) {
                circle.x = 0 - circle.radius * 1.2;
            }
            //if past LEFT side of the screen then transport to the RIGHT
            else if (circle.x < 0 - circle.radius * 1.45) {
                circle.x = canvas.width + circle.radius * 1.2;
            }
            //if past TOP of the screen then transport to the BOTTOM
            if (circle.y < 0 - circle.radius * 1.45) {
                circle.y = canvas.height + circle.radius * 1.2;
            }
            //if past BOTTOM of the screen then transport to the TOP
            else if (circle.y > canvas.height + circle.radius * 1.45) {
                circle.y = 0 - circle.radius * 1.2;
            }
        }
    
        function update() {
           for (var i = 0; i < circles.length; i++){
               var cVal = circles[i];
               physikz.updatePosition(circles[i]);
               game.checkCirclePosition(circles[i]);
           }

        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
