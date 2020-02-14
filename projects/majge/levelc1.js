var statObjs=[];
var cHeight=window.innerHeight;
var cWidth=window.innerWidth;
var skyBack, ground, frameTxt;
var wallT0, wallT1, wallT2, wallT3, wallT4;
//var player1;

function everyinterval(n){if((refInit.frameNo/n) % 1==0){return true;}return false;}

function updateGame1(){
	var x, y, height, gap, minHeight, maxHeight, minGap, maxGap;
	refInit.clear();
	if(refInit.frameNo>=60){
		refInit.frameNo=0;
	}else if(refInit.frameNo==0){
		statObjs.push(ground); statObjs.push(wallT0);
		statObjs.push(wallT1); statObjs.push(wallT2);
		statObjs.push(wallT3); statObjs.push(wallT4);
	}
	refInit.frameNo+=1;
	movement();
	for(var i=0; i<statObjs.length; i+=1){
//		statObjs[i].x+=-0.8;
		statObjs[i].update();
	}
	skyBack.update();
	wallT0.update();
	wallT1.update();
	wallT2.update();
	wallT3.update();
	wallT4.update();
	ground.update();
//	frameTxt.update();
	player1.update();
}

var level1 = function(){
	if(refInit.frameNo!==undefined){refInit.clear();}
	refInit.start("2d", "left", updateGame1, 16);
	var y; y=cHeight-100; // V (type|width|height|x|y|color)
	skyBack = new refInit.draw("", cWidth, cHeight, 0, 0, "rgba(100,240,240,0.88)");
//	frameTxt = new refInit.draw("text", 500, 500, 100, y-200, "rgba(0,0,0,1)", "test");
	ground = new refInit.draw("static", cWidth*1.2, 100, 0, y, "rgba(0,180,0,1)");
	wallT0 = new refInit.draw("static", 100, 50, 100, y-50, "rgba(0,0,0,1)");
	wallT1 = new refInit.draw("static", 50, 10, 150, y-100, "rgba(0,0,0,1)");
	wallT2 = new refInit.draw("static", 10, 120, 200, y-120, "rgba(0,0,250,1)");
	wallT3 = new refInit.draw("static", 100, 10, 260, y-130, "rgba(0,0,0,1)");
	wallT4 = new refInit.draw("static", 10, 40, 300, y-180, "rgba(0,0,0,1)");

	player1 = new refInit.draw("player", 40, 120, 20, y+100, "rgba(0,0,0,1)");
	player1.gravity=1;
};