var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        var sun;
//        var buildings = [];
        var mounds = [];
        // ANIMATION VARIABLES HERE:
        
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY, '#1199ff' );
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
            sun = draw.polyStar(45, 25, 0.18, 0.15, 'yellow','orange',2);
            sun.x = canvasWidth * 0.05;
            sun.y = canvasHeight * 0.05;
            background.addChild(sun);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var mound;
            for(var i=0;i<8;i++){
                var mHeight = Math.floor(Math.random() * (700 - 550 + 1) ) + 600;
                var mWidth = Math.floor(Math.random() * (900 - 750 + 1) ) + 750;
                var moundWidth = mWidth;
                var moundHeight = mHeight;
                mound = draw.drawEllipse(moundWidth, moundHeight, '#decd68','#eedd88',5);
                mound.x = moundWidth*0.40*i+1;
                if(i===0){
                    mound.x = 0-moundHeight*0.25;
                } else if(i===7){
                    mound.x = moundWidth*0.33*i+1;
                }
                mound.y = groundY-moundHeight*0.4;
                background.addChild(mound);
                mounds.push(mound);
                
            }
            
            // TODO 4: Part 1 - Add a tree
            var pageB = draw.rect(canvas.width, 800, 'white','white',1);
            pageB.y = groundY+20;
            background.addChild(pageB);
            var grObj = draw.rect(canvas.width, 25, '#ffee99','#ffee99',1);
            grObj.y = groundY;
            background.addChild(grObj);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            

            // TODO 5: Part 2 - Parallax
            sun.x = sun.x + 0.01;
            if(sun.x < -200){
                sun.x = canvasWidth;
            }
            for(var mI = 0; mI<8;mI++){
                mounds[mI].x = mounds[mI].x - 1;
                if(mounds[mI].x < -mounds[mI].width){
                    mounds[mI].x = canvasWidth;
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}