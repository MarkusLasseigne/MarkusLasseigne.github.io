var player1;
var gObstacles=[];
var skyBack, ground;
var level1 = function(){
	var y, height, width;
	height=window.innerHeight;
	width=window.innerWidth;
	y=height-100;
	skyBack = new drShape(0, 0, width, height, "#aaFFFF");
	ground = new drShape(0, y, 3000, 100, "green");
	player1 = new drShape(20, y, 30, 100, "black");
	player1.gravity=1;
	refInit.start("2d", "left");
//    console.log(player1);
};

function drShape(x, y, width, height, color, type){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.gravity=0;
	this.gravitySpeed=0;
	this.speedX=0;
	this.speedY=0;
	this.score=0;
	this.type=type;
	this.update = function(){
		ctx=refInit.context;
		if(this.type=="text"){
			ctx.font=this.width+" "+this.height;
			ctx.fillStyle=color;
			ctx.fillText(this.text, this.x, this.y);
		}else{//
			ctx.fillStyle=color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	this.newPos = function(){
//        console.log(this.gravitySpeed, this.gravity);
		this.gravitySpeed+=this.gravity*0.2;
		this.x+=this.speedX;
		this.y+=this.speedY+this.gravitySpeed;
		this.hitBottom();
	}
	this.hitBottom = function(){
		var rockbottom=refInit.canvas.height-this.height*2;
//        console.log(this.y, rockbottom);
		if(this.y>rockbottom+0.04){
			if(this.y==rockbottom){
				this.speedY=this.speedY*0.5;
				this.gravitySpeed=0;
				this.y=rockbottom;
//                console.log(this.speedY, " Bounce!");
			}else{
				this.speedY=0;
				this.speedX=0;
				this.gravitySpeed=0;
				this.y=rockbottom;
			}
		}
	}
}

function updateGame(){
	var x, y, height, gap, minHeight, maxHeight, minGap, maxGap;
//    for(i=0; i<gObstacles.length; i+=1){
//        if(player1.crashWith(gObstacles[i])){return;} 
//    }
	refInit.clear();
	refInit.frameNo+=1;
	if(refInit.frameNo==1 || everyinterval(150)){
		gObstacles.push();
	}
	for(i=0; i<gObstacles.length; i+=1){
		gObstacles[i].x+=-1;
		gObstacles[i].update();
	}
	if(refInit.keys && refInit.keys[87]){player1.speedY=-5;}// w
	if(refInit.keys && refInit.keys[65]){player1.speedX=-2;}// a
	if(refInit.keys && refInit.keys[83]){player1.speedY=0.1; player1.speedX=0;}// s
	if(refInit.keys && refInit.keys[68]){player1.speedX=2;}// d

	if(refInit.keys && refInit.keys[38]){player1.speedY=-5;}// ^
	if(refInit.keys && refInit.keys[37]){player1.speedX=-2;}// <
	if(refInit.keys && refInit.keys[40]){player1.speedY=0.1; player1.speedX=0;}// v
	if(refInit.keys && refInit.keys[39]){player1.speedX=2;}// >

	skyBack.update();
	ground.update();
	player1.newPos();
	player1.update();
//    console.log(player1);
}

function everyinterval(n){
	if((refInit.frameNo/n) % 1==0){return true;}
	return false;}

//	if(refInit.keys && refInit.keys[37]){player1.speedX=-1;}// <
//	if(refInit.keys && refInit.keys[65]){player1.speedX=-1;}// a
//	if(refInit.keys && refInit.keys[39]){player1.speedX=1;}// >
//	if(refInit.keys && refInit.keys[68]){player1.speedX=1;}// d
//	if(refInit.keys && refInit.keys[38]){player1.speedY=-1;}// ^
//	if(refInit.keys && refInit.keys[87]){player1.speedY=-1;}// w
//	if(refInit.keys && refInit.keys[40]){player1.speedY=1;}// v
//	if(refInit.keys && refInit.keys[83]){player1.speedY=1;}// s