var statObjs=[];
var cHeight=window.innerHeight; var cWidth=window.innerWidth;
var skyBack, ground, frameTxt, wallT0, wallT1, wallT2, wallT3, wallT4;
var player1;
var win;

function everyinterval(n){if((refInit.frameNo/n) % 1==0){return true;}return false;}

function updateGame1(){
	skyBack.update();
	if(player1.score>=3){//end catch
		win = new refInit.draw("text", 100, 100, cWidth/2, cHeight/2, "rgba(0,0,0,1)", null, "You Win!", " Ariel");
		win.update();
		refInit.stop();
	}
	for(var i=0;i<statObjs.length;i++){statObjs[i].update();}

//	console.log(player1.x, player1.y);
	player1.move("sUB", "sLB", "sRB", "wasd", "arrows","space");
	player1.update();
}

var level1 = function(){
	sL1=(refInit.frameNo!==undefined)? refInit.clear():refInit.start("2d", "left", updateGame1, 16);
	y=cHeight-100; x=cWidth-100; // V (type|width|height|x-position|y-position|color|image-src|text|text-font)
	skyBack = new refInit.draw("backO", cWidth, cHeight, 0, 0, "rgba(100,240,245,0.88)");
	statObjs.push(ground = new refInit.draw("static", cWidth*1.2, 100, 0, y, "rgba(0,160,0,1)"));
	statObjs.push(wallT0 = new refInit.draw("static", 200, 50, 300, y-148, "rgba(46,24,0,1)"));
	statObjs.push(wallT1 = new refInit.draw("static", 54, 154, 700, y-154, "rgba(0,60,0,1)"));
	statObjs.push(wallT2 = new refInit.draw("static", 200, 10, 1420, y-10, "rgba(0,160,0,1)"));
	statObjs.push(wallT3 = new refInit.draw("static", 100, 30, 700, y-314, "rgba(46,24,0,1)"));
//	statObjs.push(wallT4 = new refInit.draw("static", 10, 40, 300, y-180, "rgba(0,0,0,1)"));
	statObjs.push(coin1 = new refInit.draw("coin", 30, 30, 150, y-152, "rgba(200,200,0,0.9)"));
	statObjs.push(coin2 = new refInit.draw("coin", 30, 30, 375, y-304, "rgba(200,200,0,0.9)"));
	statObjs.push(coin3 = new refInit.draw("coin", 30, 30, 1320, y-314, "rgba(200,200,0,0.9)"));
	player1 = new refInit.draw("player", 40, 120, 20, y+100, "rgba(50,20,0,1)");
	player1.gravity=1;
	statObjs.push(scoreTxt = new refInit.draw("sText", 60, 20, 10, y+10, "rgba(0,0,0,1)", null, "Score: "+player1.score, " Ariel"));
};