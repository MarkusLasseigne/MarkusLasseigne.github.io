var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:550,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:1200,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        for (var key in levelData.gameItems) {
            var gaIts = levelData.gameItems[key];
            console.log(gaIts);
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var gamItem = game.createObstacle(hitZoneSize,damageFromObstacle);
            gamItem.x = gaIts.x;
            gamItem.y = gaIts.y;
            console.log(gaIts.type);
            var objImg;
            if(gaIts.type==='sawblade'){console.log(gaIts.type); objImg = draw.bitmap('img/'+gaIts.type+'.png'); gamItem.addChild(objImg);}
            console.log(gaIts.type);
            objImg.x = -25;
            objImg.y = -25;
            game.addGameItem(gamItem);
        }
        function enemyNew(x, y){
            var enemy =  game.createGameItem('enemy',20);
            enemy.x = x;
            enemy.y = groundY-60;
            var headE = draw.circle(20,'#aa9900','red',2,0,-26);
            var bodE = draw.roundRect(26,45,13,'#aa9900','red',1,-5,-12);
            var legsE = draw.roundRect(15,40,8,'#aa9900','red',1,2,20);
            var armsE = draw.roundRect(26,8,2,'#aa9900','red',1,-20,-5);
            enemy.addChild(headE);
            enemy.addChild(bodE);
            enemy.addChild(legsE);
            enemy.addChild(armsE);
            game.addGameItem(enemy);
            var eVx = enemy.velocityX = -1.8;
            enemy.onPlayerCollision = function(){
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-20);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut();
            };
        }
        enemyNew(450);
        enemyNew(1000);
        enemyNew(1400);
        //roundRect(xstretch,ystretch,borderRadius,color,boarderColor,boardThickness,xOff,yOff);
        function cactusNew(x){
            var hitZoneCSize = 13;
            var damageFromCObstacle = 8;
            var cactus = game.createObstacle(hitZoneCSize,damageFromCObstacle);
            var cactusH2 = game.createObstacle(hitZoneCSize,damageFromCObstacle);
            var cactusH3 = game.createObstacle(hitZoneCSize,damageFromCObstacle);
            cactus.x = x;
            cactusH2.x = x-55;
            cactusH3.x = x+45;
            cactus.y = groundY-95;
            cactusH2.y = groundY-95;
            cactusH3.y = groundY-95;
            //Main Stem
            var cactusImg;
            cactusImg = draw.roundRect(26,240,13,'green','green',1,-13,-135);
            cactus.addChild(cactusImg);
            //Right Branch
            var cactusImg3;
            cactusImg3 = draw.roundRect(26,85,13,'green','green',1,32,-75);
            cactus.addChild(cactusImg3);
            //Left Branch
            var cactusImg4;
            cactusImg4 = draw.roundRect(26,55,13,'green','green',1,-68,-45);
            cactus.addChild(cactusImg4);
            //Main Arm
            var cactusImg2;
            cactusImg2 = draw.roundRect(125,26,13,'#009900','green',1,-68,-13);
            cactus.addChild(cactusImg2);
            game.addGameItem(cactus);
            game.addGameItem(cactusH3);
            game.addGameItem(cactusH2);
            
        }
        cactusNew(400);
        cactusNew(1500);
        //0.99,100,50,'#221100','#ddcc00',1,-68,-45);
        function endPedal(){
            var coinG = game.createGameItem('Coin',25);
            coinG.x = 2000;
            coinG.y = groundY-150;
            var coinGB = draw.roundRect(50,50,25,'#ffdd22','#ddccaa',5,-25,-25);
            coinG.addChild(coinGB);
            console.log("ye");
            coinG.velocityX = -2;
            game.addGameItem(coinG);
            coinG.onPlayerCollision = function(){
                game.increaseScore(10000);
                coinG.shrink();   
            };
           
            
        }
        endPedal();
    }

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}