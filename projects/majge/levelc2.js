var back, eartBox;
level2 = function(){
    refInit.start("2d", "down", updateGame2);
    eartBox = new refInit.draw("pict", 500, 20, 20, 20, "rgba(0,0,0,0)","/projects/bouncingearth.png");
}
var updateGame2 = function(){

    refInit.frameNo+=1;
    eartBox.x+=1;
    eartBox.update();
}