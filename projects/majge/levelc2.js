var back, eartBox;
var updateGame2 = function(){
    refInit.clear();
    eartBox.speedX+=10;
    eartBox.update();
};
var level2 = function(){
    refInit.start("2d", "down", updateGame2, 10);
    eartBox = new refInit.draw("pict", 400, 20, 20, 20, "rgba(0,0,0,0)","/projects/bouncingearth.png");
};