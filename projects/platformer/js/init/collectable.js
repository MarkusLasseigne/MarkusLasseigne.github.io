(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };

    /**
     * Collectable example:
     *      collectable.create(type, x, y, gravity, bounce);
     */ 
    collectable.init = function (game) {
        collectable.create(type.db, 333, 666, 0);

        collectable.create(type.grace, 790, 650, 0);
        
        collectable.create(type.steve, 666, 675, 0);
        
        collectable.create(type.max, 1025, 645, 0); 

        collectable.create(type.kennedi, 200, 60, 0);
        collectable.create(type.kennedi, 600, 60, 0);

    };
})(window);