var back, eartBox;
var updateGame2 = function(){//refInit.clear();

	eartBox.move("sLB","sTB","sRB","sBB");
//	eartBox.x+=1;
	eartBox.update();
};
var level2 = function(){
	sL1=(refInit.frameNo!==undefined)? refInit.clear():refInit.start("2d", "down", updateGame2, 10);
	eartBox = new refInit.draw("pict", 250, 250, 20, 20, "rgba(0,0,0,0)","/projects/bouncingearth.png");
	eartBox.gravity=0;
	eartBox.speedX=1;
};