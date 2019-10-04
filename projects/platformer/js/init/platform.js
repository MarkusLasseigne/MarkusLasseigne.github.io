(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * Platform code example:
     *      platform.create(x, y, scaleX, scaleY);
     */ 
    platform.init = function (game) {
        //Floor or ground//
        platform.create(0, game.world.height - 32, 3, 2);
        platform.create(0, 585, 0.7, 5);
        //Top platform//
        platform.create(0, 125, 1.95, 0.6);
        //Step Walls and Jump Barriers//
        platform.create(380, 500, 0.10, 10);
        platform.create(410, 500, 0.02, 10);

        platform.create(500, 415, 0.10, 15);
        platform.create(530, 415, 0.02, 15); 

        platform.create(620, 330, 0.10, 15);
        platform.create(650, 330, 0.02, 15);

        platform.create(740, 245, 0.10, 20);
        platform.create(770, 245, 0.02, 20);

        platform.create(860, 160, 0.10, 20);
        platform.create(890, 160, 0.02, 20);

    };
})(window);