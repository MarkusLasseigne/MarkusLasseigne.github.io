var skyBack, ground;
var colObjs=[];
var statObjs=[];
var wallT, wall1T;
var player1;
var level1 = function(){
	var y, height, width;
	height=window.innerHeight;
	width=window.innerWidth;
	y=height-100;
	skyBack = new refInit.draw(0, 0, width, height, "#aaFFFF");
	ground = new refInit.draw(0, y, 3000, 100, "green");
	wallT = new refInit.draw(400, y-205, 50, 100, "black");
	wall1T = new refInit.draw(100, y-15, 30, 30, "lime");
	player1 = new refInit.draw(20, y+400, 30, 100, "black");
	player1.gravity=1;
	refInit.start("2d", "left");
//    console.log(player1);
};
function updateGame(){
	var x, y, height, gap, minHeight, maxHeight, minGap, maxGap;
	player1.newPos();
	refInit.clear();
	refInit.frameNo+=1;
//	console.log(refInit.frameNo);
	if(refInit.frameNo==1 || everyinterval(100)){
//		statObjs.push(ground);
		statObjs.push(wallT);
		statObjs.push(wall1T);
	}
    for(i=0; i<statObjs.length; i+=1){
		var myTop=player1.y; var myBottom=player1.y+(player1.height);
		var myLeft=player1.x; var myRight=player1.x+(player1.width);
		var myWidthH=player1.width/1.2; var myHeightH=player1.height/1.2;
		var otTop=statObjs[i].y; var otBottom=statObjs[i].y+statObjs[i].height;
		var otLeft=statObjs[i].x; var otRight=statObjs[i].x+statObjs[i].width;
		if(myTop<otBottom && !(myTop<otTop+myHeightH) && !(myBottom<otTop) && myRight>otLeft+2 && myLeft<otRight-2){//my top collide
			player1.pHitTop(otBottom);}
		if(myBottom>=otTop && !(myBottom>otBottom) && (myTop<otBottom) && myRight>otLeft+2 && myLeft<otRight-2){//my bottom collide
			player1.pHitBottom(otTop);}
		if(myLeft<=otRight && (myLeft>otLeft+myWidthH) && !(myRight<otLeft) && myTop<otBottom+2 && myBottom>otTop-2){//my left collide
			player1.pHitLeft(otRight);}
		if(myRight>=otLeft && (myRight<otRight-myWidthH) && (myLeft<otRight) && myTop<otBottom-2 && myBottom>otTop+2){//my right collide
			player1.pHitRight(otLeft);}
	}
	if(refInit.keys && refInit.keys["ArrowLeft"]){player1.speedX=-2;}// <
	if(refInit.keys && refInit.keys["a"]){player1.speedX=-2;}// a
	if(refInit.keys && refInit.keys["ArrowRight"]){player1.speedX=2;}// >
	if(refInit.keys && refInit.keys["d"]){player1.speedX=2;}// d
	if(refInit.keys && refInit.keys["ArrowUp"]){player1.speedY=-5;}// ^
	if(refInit.keys && refInit.keys["w"]){player1.speedY=-5;}// w
	if(refInit.keys && refInit.keys["ArrowDown"]){player1.speedY=0.1; player1.speedX=0;}// v
	if(refInit.keys && refInit.keys["s"]){player1.speedY=0.1; player1.speedX=0;}// s
	for(i=0; i<statObjs.length; i+=1){
//		statObjs[i].x+=-1;
		statObjs[i].update();
	}
	skyBack.update();
	wallT.update();
	wall1T.update();
	player1.update();
	ground.update();
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
