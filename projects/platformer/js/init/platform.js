(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * Platform code example:
     *      platform.create(x, y, scaleX, scaleY);
     *      platform.create(horizontalpos, verticalpos, width, height)
     */ 
    platform.init = function (game) {
        //Floor or ground//
        platform.create(0, game.world.height - 10, 3, 0.5);
        platform.create(0, 575, 0.589, 5);
        //Top platform//
        platform.create(0, 115, 2.25, 1);
        //Step Walls and Jump Barriers//
        //1st Wall//
        platform.create(380, 480, 0.10, 10);
        platform.create(410, 480, 0.02, 10);
        //2nd Wall
        platform.create(500, 416, 0.10, 10);
        platform.create(530, 416, 0.02, 10);
        //3rd Wall
        platform.create(620, 352, 0.10, 15);
        platform.create(650, 352, 0.02, 15); 
        //4th Wall
        platform.create(740, 288, 0.10, 15);
        platform.create(770, 288, 0.02, 15);
        //5th Wall
        platform.create(860, 224, 0.10, 20);
        platform.create(890, 224, 0.02, 20);
        //6th Wall
        platform.create(980, 160, 0.10, 20);
        platform.create(980, 160, 0.02, 20);
    };
})(window);
