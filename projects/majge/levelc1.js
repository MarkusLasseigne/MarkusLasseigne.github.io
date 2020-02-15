var statObjs=[];
var cHeight=window.innerHeight;
var cWidth=window.innerWidth;
var skyBack, ground, frameTxt, wallT0, wallT1, wallT2, wallT3, wallT4;
var player1;

function everyinterval(n){if((refInit.frameNo/n) % 1==0){return true;}return false;}

function updateGame1(){
	refInit.clear();
	frI = (refInit.frameNo>=60) ? refInit.frameNo=0 : refInit.frameNo+=1;
	movement();
	skyBack.update();
	for(var i=0;i<statObjs.length;i++){statObjs[i].update();}
	coin1.update(); coin2.update();
//	console.log(player1.x, player1.y);
	player1.update();

}

let level1 = function(){
	sL1 = (refInit.frameNo!==undefined) ? refInit.clear() : refInit.start("2d", "left", updateGame1, 16);
	y=cHeight-100; x=cWidth-100; // V (type|width|height|x|y|color)
	skyBack = new refInit.draw("backO", cWidth, cHeight, 0, 0, "rgba(100,240,240,0.88)");
	statObjs.push(ground = new refInit.draw("static", cWidth*1.2, 100, 0, y, "rgba(0,180,0,1)"));
	statObjs.push(wallT0 = new refInit.draw("static", 100, 50, 100, y-50, "rgba(0,0,0,1)"));
	statObjs.push(wallT1 = new refInit.draw("static", 50, 10, 150, y-100, "rgba(0,0,0,1)"));
	statObjs.push(wallT2 = new refInit.draw("static", 10, 120, 200, y-120, "rgba(0,0,250,1)"));
	statObjs.push(wallT3 = new refInit.draw("static", 100, 10, 260, y-130, "rgba(0,0,0,1)"));
	statObjs.push(wallT4 = new refInit.draw("static", 10, 40, 300, y-180, "rgba(0,0,0,1)"));
	coin1 = new refInit.draw("coin", 10, 10, x-100, y-100, "rgba(200,200,0,1)");
	coin2 = new refInit.draw("coin", 10, 10, x-150, y-100, "rgba(200,200,0,1)");
	player1 = new refInit.draw("player", 40, 120, 20, y+100, "rgba(50,20,0,1)");
	player1.gravity=1;
	statObjs.push(scoreTxt = new refInit.draw("sText", 60, 20, 10, y+10, "rgba(0,0,0,1)", null, "Score: "+player1.score, " Ariel"));
};