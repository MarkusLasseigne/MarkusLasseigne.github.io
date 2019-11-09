var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
//        var levelData = {
//            name: "Robot Romp",
//            number: 1, 
//            speed: -4,
//            gameItems: [
//            ]
//        };

//        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE

        function sawNew(x){
            var sNew = game.createObstacle(25,25);
            sNew.x = x;
            sNew.y = groundY;
            sNew.velocityX = -4;
            var sawImg = draw.bitmap('img/sawblade.png');
            sawImg.x = -25;
            sawImg.y = -25;
            sNew.addChild(sawImg);
            game.addGameItem(sNew);
        } sawNew(400); sawNew(600); sawNew(800); sawNew(1000);

        function enemyNew(x){
            var enemy =  game.createGameItem('enemy',20);
            enemy.x = x;
            enemy.y = groundY-60;
            var headE = draw.circle(20,'#999900','grey',2,0,-26);
            var bodE = draw.roundRect(26,45,13,'#999900','grey',1,-5,-12);
            var legsE = draw.roundRect(15,40,8,'#999900','grey',1,2,20);
            var armsE = draw.roundRect(26,8,2,'#999900','grey',1,-20,-5);
            enemy.addChild(headE);
            enemy.addChild(bodE);
            enemy.addChild(legsE);
            enemy.addChild(armsE);
            game.addGameItem(enemy);
            enemy.velocityX = -1.99;
            enemy.onPlayerCollision = function(){
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-20);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(50);
                enemy.fadeOut();
            };
        } enemyNew(1400); enemyNew(1500); enemyNew(1600); enemyNew(1700);
        //roundRect(xstretch,ystretch,borderRadius,color,boarderColor,boardThickness,xOff,yOff);
        function cactusNew(x){
            var CaBrM = game.createObstacle(13,8);
            CaBrM.x = x-55;
            CaBrM.y = groundY-95;
            var CaBrL = game.createObstacle(13,8);
            CaBrL.x = x;
            CaBrL.y = groundY-95;
            var CaBrR  = game.createObstacle(13,8);
            CaBrR.x = x+45;
            CaBrR.y = groundY-95;
            var cactusOb;
            cactusOb = {
                cStem: draw.roundRect(26,240,13,'green','green',1,42,-135),
                cArm: draw.roundRect(125,26,13,'#009900','green',1,-12,-13),
                cBranchR: draw.roundRect(26,85,13,'green','green',1,87,-75),
                cBranchL: draw.roundRect(26,55,13,'green','green',1,-13,-45),
            };
            CaBrM.addChild(cactusOb.cBranchR);
            CaBrM.addChild(cactusOb.cBranchL);
            CaBrM.addChild(cactusOb.cStem);
            CaBrM.addChild(cactusOb.cArm);
            
            game.addGameItem(CaBrM);
            game.addGameItem(CaBrL);
            game.addGameItem(CaBrR);
   
        } cactusNew(1300); cactusNew(1800);

        function endCoin(x,y){
            var coinG = game.createGameItem('Coin',25);
            coinG.x = x;
            coinG.y = groundY-y;
            var coinGB = draw.roundRect(50,50,25,'#ffdd22','#ddccaa',5,-25,-25);
            coinG.addChild(coinGB);
            coinG.velocityX = -2;
            game.addGameItem(coinG);
            coinG.onPlayerCollision = function(){
                var CeHe = game.getHealth();
                if(CeHe <= 0){
                    return;
                } else if (CeHe > 0) {
                    game.increaseScore(800);
                    coinG.shrink();   
                }
            };
        } endCoin(2000,150); endCoin(3000,150); endCoin(3100,150); endCoin(3200,150);

        function lavaP(x){
            var lPit = game.createObstacle(25,100);
            lPit.x = x;
            lPit.y = groundY;
            var lavaR = draw.roundRect(50,24,1,'red','gray',2.5,0,0);
            lavaR.x = -25;
            lavaR.y = 0;
            lPit.addChild(lavaR);
            game.addGameItem(lPit);
        } lavaP(1100); lavaP(1950);
        
        function endR(x,y){
            var endRe = game.createObstacle(100, 0);
            endRe.x = x;
            endRe.y = groundY-y;
            game.addGameItem(endRe);
            endRe.onPlayerCollision = function(){
                location.reload();
            };
        } endR(2400,75); endR(2440,75); endR(2480,75);
    }

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}