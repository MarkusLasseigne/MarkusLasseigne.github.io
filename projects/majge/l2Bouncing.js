var eartBox;
var updateGame2 = function(){
	majge.clear("context");
	eartBox.move("bAll");
	eartBox.update();
	majge.win(eartBox, 10, -5);
	if(window.clicks[0]&&window.clicks[1]&&window.clicks[1].tStamp-window.clicks[0].tStamp>=100){
		if(window.clicks[1].cX>=eartBox.x&&!(window.clicks[1].cX>=eartBox.xR)&&window.clicks[1].cY>=eartBox.y&&!(window.clicks[1].cY>=eartBox.yB)){
			eartBox.score+=1;
			eartBox.speedX+=Math.floor((Math.random()*2)+1);
			eartBox.speedY+=Math.floor((Math.random()*2)+1);
		}else{eartBox.score-=1;}
		window.clicks.shift();
	}
	majge.frameNo+=1;
	if(majge.frameNo>=60){majge.frameNo=1}
};
var l2Bouncing = function(){
	if(window.clicks&&window.clicks.length>=1){window.clicks.shift();
		if(window.clicks.length>=0){window.clicks[0]=undefined;}
	}
	majge.start("2d", "down", updateGame2, 14);
	eartBox = new majge.create("pict","gravcolide", 200, 200, 20, 20, "rgba(0,0,0,0)","/projects/bouncingearth.png");
	eartBox.wGravity=0;
	eartBox.speedX=Math.floor((Math.random()*10)+2); eartBox.speedY=Math.floor((Math.random()*10)+2);
};