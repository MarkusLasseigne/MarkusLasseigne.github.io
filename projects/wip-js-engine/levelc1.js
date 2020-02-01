var statObjs=[];
var cHeight=window.innerHeight;
var cWidth=window.innerWidth;
var skyBack, ground;
var wallT, wallT1, wallT2, wallT3, wallT4;
var player1;
var level1 = function(){
	refInit.start("2d", "left");
	var y; y=cHeight-100; // V (type|width|height|x|y|color)
	skyBack = new refInit.draw("", cWidth, cHeight, 0, 0, "rgba(100,240,240,0.88)");
	ground = new refInit.draw("static", cWidth*1.2, 100, 0, y, "rgba(0,180,0,1)");
	wallT = new refInit.draw("static", 100, 50, 100, y-50, "rgba(0,0,0,1)");
	wallT1 = new refInit.draw("static", 50, 10, 150, y-100, "rgba(0,0,0,1)");
	wallT2 = new refInit.draw("static", 10, 120, 200, y-120, "rgba(0,0,0,1)");
	wallT3 = new refInit.draw("static", 100, 10, 260, y-130, "rgba(0,0,0,1)");
	wallT4 = new refInit.draw("static", 10, 40, 300, y-180, "rgba(0,0,0,1)");
	
	player1 = new refInit.draw("player", 40, 120, 20, y+100, "rgba(0,0,0,1)");
	player1.gravity=1;
};
function updateGame(){
	var x, y, height, gap, minHeight, maxHeight, minGap, maxGap;
	refInit.clear(); refInit.frameNo+=1; //console.log(refInit.frameNo);
	if(refInit.frameNo==1){
		statObjs.push(ground); statObjs.push(wallT);
		statObjs.push(wallT1); statObjs.push(wallT2);
		statObjs.push(wallT3); statObjs.push(wallT4);
	}
	if(refInit.keys && refInit.keys["ArrowLeft"]){player1.speedX=-2;}// <
	if(refInit.keys && refInit.keys["a"]){player1.speedX=-2;}// a
	if(refInit.keys && refInit.keys["ArrowRight"]){player1.speedX=2;}// >
	if(refInit.keys && refInit.keys["d"]){player1.speedX=2;}// d
	if(refInit.keys && refInit.keys["ArrowUp"]){player1.speedY=-4.6;}// ^
	if(refInit.keys && refInit.keys["w"]){player1.speedY=-4.6;}// w
	if(refInit.keys && refInit.keys["ArrowDown"]){player1.speedY=0.1; player1.speedX=0;}// v
	if(refInit.keys && refInit.keys["s"]){player1.speedY=0.1; player1.speedX=0;}// s
	if(player1.x>cWidth){player1.x=0-player1.width;}else if(player1.x<0-player1.width){player1.x=cWidth}
	for(var i=0; i<statObjs.length; i+=1){
//		statObjs[i].x+=-0.8;
		statObjs[i].update();
	}
	skyBack.update();
	wallT.update();
	wallT1.update();
	wallT2.update();
	wallT3.update();
	wallT4.update();
	ground.update();
	player1.update();
//	console.clear();
}
function everyinterval(n){
	if((refInit.frameNo/n) % 1==0){return true;}
	return false;}

//	if(refInit.keys && refInit.keys[37]){player1.speedX=-2;}// <
//	if(refInit.keys && refInit.keys[65]){player1.speedX=-2;}// a
//	if(refInit.keys && refInit.keys[39]){player1.speedX=2;}// >
//	if(refInit.keys && refInit.keys[68]){player1.speedX=2;}// d
//	if(refInit.keys && refInit.keys[38]){player1.speedY=-5;}// ^
//	if(refInit.keys && refInit.keys[87]){player1.speedY=-5;}// w
//	if(refInit.keys && refInit.keys[40]){player1.speedY=0.1; player1.speedX=0;}// v
//	if(refInit.keys && refInit.keys[83]){player1.speedY=0.1; player1.speedX=0;}// s

//if(refInit.key && refInit.key=="w"||refInit.key=="ArrowUp"){player1.speedY=-5;}// w
//if(refInit.key && refInit.key=="a"||refInit.key=="ArrowLeft"){player1.speedX=-2;}// a
//if(refInit.key && refInit.key=="s"||refInit.key=="ArrowDown"){player1.speedY=0.1; player1.speedX=0;}// s
//if(refInit.key && refInit.key=="d"||refInit.key=="ArrowRight"){player1.speedX=2;}// d