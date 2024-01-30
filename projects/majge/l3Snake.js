var snake;
var updateGame3 = function(){
	majge.clear("context");
	majge.win(snake.head, 100, -1);
	if(snake.info.score!==snake.head.score){snake.info.score=snake.head.score;}
	snake.info.update();
	snake.coin.update();
	snake.head.move("bEnd", "wasd#");
	snake.head.x=Math.round(snake.head.x);
	snake.head.y=Math.round(snake.head.y);
	snake.tails.forEach(function(a,b,c){
// 		if(snake.head.x%10===0&&(snake.head.speedX>0||snake.head.speedX<0)){
// 			if(c[0].yC>snake.head.yC||c[0].yC<snake.head.yC){
// 				console.log("ye");
// //				c[0].y=(snake.head.y+5);
// 			}
// 			else if(snake.head.x%10===0&&c[0].xC<=snake.head.xL&&snake.head.speedX>0){
// 				c[0].x=(snake.head.x+5);
// 			}//going right
// 			else if(snake.head.x%10===0&&c[0].xC>=snake.head.xR&&snake.head.speedX<0){
// 				c[0].x=(snake.head.x-5);
// 			}//going left
// 		}
//		if(a.speedX>0){a.speedY=0;}else if(a.speedX<0){a.speedY=0;}
//		if(a.speedY>0){a.speedX=0;}else if(a.speedY<0){a.speedX=0;}
//		console.log(snake.head.xC,snake.head.yC,c[0].xC,c[0].yC,snake.head.xC-c[0].xC,snake.head.yC-c[0].yC);
		if(snake.head.x%10===0||snake.head.y%10===0){

//			if(snake.head.xC-c[0].xC>snake.head.yC-c[0].yC&&!(snake.head.xC-c[0].xC<snake.head.yC-c[0].yC)){c[0].speedX=2;}
//			else if(snake.head.xC-c[0].xC<snake.head.yC-c[0].yC){c[0].speedX=-2;}
//			if(snake.head.xC-c[0].xC<snake.head.yC-c[0].yC){c[0].speedY=2;}
//			else if(snake.head.xC-c[0].xC>snake.head.yC-c[0].yC){c[0].speedY=-2;}
			if(a.speedX>0){a.speedY=0;}
			else if(a.speedX<0){a.speedY=0;}
			else{
				if(snake.head.xC-c[0].xC<snake.head.yC-c[0].yC&&!(c[0].speedY<0)){c[0].speedY=2;console.log("ye");}
//				else if(snake.head.xC-c[0].xC>snake.head.yC-c[0].yC){c[0].speedY=-2;}
			}
//			if(a.speedY>0){a.speedX=0;}
//			else if(a.speedY<0){a.speedX=0;}
//			else{
//				if(snake.head.xC-c[0].xC>snake.head.yC-c[0].yC&&!(snake.head.xC-c[0].xC<snake.head.yC-c[0].yC)){c[0].speedX=2;}
//				else{c[0].speedX=-2;}
//			}
		}

		// else if(snake.head.y%10===0&&(snake.head.speedY>0||snake.head.speedY<0)){
		// 	if(c[0].xC>snake.head.xC||c[0].xC<snake.head.xC){
		// 		c[0].x=(snake.head.x+5); c[0].speedX=0;
		// 	}
		// 	else if(c[0].yC<=snake.head.yB&&snake.head.speedY>0){
		// 		c[0].y=(snake.head.yC-c[0].height); c[0].speedY=2;
		// 	}//going down
		// 	else if(c[0].yC>=snake.head.yT&&snake.head.speedY<0){
		// 		c[0].y=snake.head.yC; c[0].speedY=-2;
		// 	}//going up
		// }
		
		// if(b>0){
		// 	if(snake.head.x%10===0&&(c[b-1].xC>c[b].xC||c[b-1].xC<c[b].xC)){
		// 		if(c[b].yC>c[b-1].yC||c[b].yC<c[b-1].yC){c[b].y=c[b-1].y;}
		// 		else if(c[b-1].x>c[b].xC){console.log("ye1"); c[b].x=(c[b-1].x-c[b].width);}//tail going right
		// 		else if(c[b-1].xC<c[b].x){console.log("ye2"); c[b].x=c[b-1].xC;}//tail going left
		// 	}else if(snake.head.y%10===0&&(c[b-1].yC>c[b].yC||c[b-1].yC<c[b].yC)){
				
		// 	}
		// }
		a.update();
//			console.log(c[0]);
//			c[0].update();

//		if(b>2){
//			snake.head.collide(b);
//		}
	});
	snake.head.update(snake);
//	snake.tails[0].update();



	if(snake.coin.score<=0){
		xRand=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasWidth));
		yRand=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasHeight));
		snake.coin.x=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasWidth-snake.coin.width));
		snake.coin.y=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasHeight-snake.coin.height));
		snake.coin.score=1;
		snake.tails.push(new majge.create("box", "colide", 40, 40, snake.tails[snake.tails.length-1].x, snake.tails[snake.tails.length-1].y, "rgba(0,200,0,1)"));
//		snake.tails[snake.tails.length-1].update();
		snake.coin.health=100;
		snake.coin.update();
	}
};
var l3Snake = function(){
	majge.start("2d", "down", updateGame3, 25);
	sY=300; sX=300;
	xRand=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasWidth-30));
	yRand=Math.floor(Math.random()*Math.floor(menuInit.canvasSettings.canvasHeight-30));
	snake={
		head: new majge.create("sHead", "gravcolide", 50, 50, sX, sY, "rgba(0,50,0,1)"),
		tails:[
			new majge.create("sTail", "nocolide", 40, 40, sX+5, sY+5, "rgba(0,100,0,1)"),
			new majge.create("sTail", "nocolide", 40, 40, sX+5, sY+5, "rgba(0,70,0,1)"),
			new majge.create("sTail", "nocolide", 40, 40, sX+5, sY+5, "rgba(0,80,0,1)")
		],
		coin: new majge.create("coin", "nocolide", 30, 30, xRand, yRand, "rgba(200,200,0,0.9)"),
		info: new majge.create("playerscore", "nocolide", 100, 20, 10, 10, "rgba(0,0,0,1)"),
	};
};