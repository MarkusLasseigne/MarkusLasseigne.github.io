function clearArc(context, x, y, radius, color){
	context.save();
	context.globalCompositeOperation = 'destination-out';
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fill();
	context.restore();
	ctx.arc(this.x+10, this.y+200, this.width*0.5, 0, 2*Math.PI, false);
	ctx.fill();
}

function movement(typeIn1){
	if(refInit.keys && refInit.keys["ArrowLeft"]){player1.speedX=-2;}// <
	if(refInit.keys && refInit.keys["a"]){player1.speedX=-2;}// a
	if(refInit.keys && refInit.keys["ArrowRight"]){player1.speedX=2;}// >
	if(refInit.keys && refInit.keys["d"]){player1.speedX=2;}// d
	if(refInit.keys && refInit.keys["ArrowDown"]){player1.speedY=0.5; player1.speedX/=4;}// v
	if(refInit.keys && refInit.keys["s"]){player1.speedY=0.5; player1.speedX/=4;}// s
	if(refInit.keys && refInit.keys["ArrowUp"]){player1.speedY=-4.6;}// ^
	if(refInit.keys && refInit.keys["w"]){player1.speedY=-4.6;}// w
	if(player1.x>cWidth){player1.x=0-player1.width;}else if(player1.x<0-player1.width){player1.x=cWidth}
}

var refInit = {
	canvas: document.querySelector("#daCan"),
	start: function(dimention, direction, ufunct, int, dW, dH){
		clearInterval(this.interval);
		int = (null) ? 16 : int;
		window.addEventListener('keydown', function(e){
			e.preventDefault();
			refInit.keys = (refInit.keys || []);
			refInit.keys[e.key] = (e.type == "keydown");
//			console.log(e);
			optT(e);
		})
		window.addEventListener('keyup', function(e){
			refInit.keys[e.key] = (e.type == "keydown");
			optT(e);
		})
		if(dimention=="2d"){
			if(direction=="down"){
				var cWidth = this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d down-facing time!");
				this.interval=setInterval(ufunct, int);
			}else if(direction=="left"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d left-on time!");
				this.interval=setInterval(ufunct, int);
			}else if(direction=="forward"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d first person time!");
				this.interval=setInterval(ufunct, int);
			}
		}else if(dimention=="3d"){
		console.log("Woahh nelly, that'll take more time!(would be voxel based)");
		}else{console.warn("No Dimention Found");}
	},
	stop: function(){clearInterval(this.interval); return location.reload();},  
	clear: function(){this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);},
	/** draw (type|width|height|x|y|color) */
	draw: function(type, width, height, x, y, color, iSrc, text){
		this.type=type;
		this.x=x;
		this.width=width;
		this.y=y;
		this.height=height;
		this.speedX=0;
		this.speedY=0;
		this.rotation=0;
		this.gravity=0;
		this.gravitySpeed=0;
		this.health=100;
		this.score=0;
		this.text=text;
		this.iSrc=iSrc;

		this.leftPos=x;
		this.rightPos=this.leftPos-this.width/1.2;
		this.topPos=y;
		this.bottomPos=this.topPos-this.height/1.2;

		/**fillStyle(color|gradient|pattern) fillRect(x|y|width|height) 
		* arc(x|y|radius|startAngle|eAngle) **/
		this.update = function(){
			ctx=refInit.context;
			if(this.type=="static"){
				ctx.fillStyle=color;
				ctx.rotate(this.rotation);
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}else if(this.type=="player"){
				ctx.fillStyle=color;
				ctx.fillRect(this.x, this.y+24, this.width, this.height*0.8);//*0.75
				ctx.fillStyle=color;
				clearArc(ctx, this.x+20, this.y+20, this.width*0.5, "black");
				this.newPos();
			}else if(this.type=="pict"){
				var imG = new Image();
				imG.src=this.iSrc;
				imG.id="imgH";
				imG.fillStyle=color;
				imG.width=width;
				imG.onload = function animate(){ctx.drawImage(imG, x, y);}


			}else if(this.type=="text"){
//				console.log(this.text);
				ctx.font=this.width+" "+this.height;
				ctx.fillStyle=color;
				ctx.fillText(this.text, this.x, this.y);
			}else{
				ctx.fillStyle=color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
		}
		this.newPos = function(){
			this.gravitySpeed+=this.gravity*0.2;
			this.x+=this.speedX;
			this.y+=this.speedY+this.gravitySpeed;
			this.hitBottom();
			for(var i=0; i<statObjs.length; i+=1){
				var myWidthH=player1.width/1.5; var myHeightH=player1.height/1.5;
				var myTop=player1.y; var myBottom=player1.y+(player1.height);
				var myLeft=player1.x; var myRight=player1.x+(player1.width);
				
				var otTop=statObjs[i].y; var otBottom=statObjs[i].y+statObjs[i].height;
				var otLeft=statObjs[i].x; var otRight=statObjs[i].x+statObjs[i].width;
//				console.log(this.x+this.width, this.rightPos, myRight);
				
				//=(=0)||>(=-1)||<(=+1)||>=(=-0)||<=(=+0)
				// if(myBottom>otTop
				// 	&& !(myBottom-myHeightH*0.8>otBottom)
				// 	&& (myTop+myHeightH<=otBottom)
				// 	&& (myRight>=otLeft+5)
				// 	&& (myLeft<=otRight-5))
				// 		{player1.pHitBottom(otTop);}//my bottom collide
		
				if(myLeft-2<otRight //everything left of myLeft
				&& !(myLeft<otRight-2)//nothing left of myLeft
				&& !(myLeft>otRight+2) //nothing right of myLeft
				&& (myTop<=otBottom-0.5)
				&& (myBottom>=otTop+0.5))
					{player1.pHitLeft(statObjs[i]);}//my left collide
				else if(myRight+2>otLeft//everything right of myRight
				&& !(myRight>otLeft+2)//nothing right of myRight
				&& !(myRight<otLeft-2)//nothing left of myRight
				&& (myTop<=otBottom-0.5)
				&& (myBottom>=otTop+0.5))
					{player1.pHitRight(statObjs[i]);}//my right collide

				if(myTop-2<otBottom//everything above myTop
				&& !(myTop<otBottom-6)//nothing above myTop
				&& !(myTop>otBottom+2)//nothing below myTop
				&& (myRight>=otLeft+0.5)
				&& (myLeft<=otRight-0.5))
					{player1.pHitTop(statObjs[i]);}//my top collide
				else if(this.bottomPos+2>otTop//everything below myBottom
				&& !(myBottom>otTop+6)//nothing below myBottom
				&& !(myBottom<otTop-2)//nothing above myBottom
				&& (myRight>=otLeft+0.5)
				&& (myLeft<=otRight-0.5))
					{player1.pHitBottom(statObjs[i]);}//my bottom collide
			}
		}
		this.pHitBottom = function(whaBot){
			this.gravitySpeed=0;
			this.speedY=0;
			this.speedX=0;
			this.y=whaBot.topPos-this.height;
//			console.log("Player Bottom Coll");
		}
		this.pHitTop = function(whaBot){
			this.gravitySpeed+=0.2;
			this.speedY=0.2;
			this.y=whaBot.bottomPos+this.height*0.152;
//			console.log("Player Top Coll");
		}
		this.pHitLeft = function(whaBot){
			this.speedX=0;
			this.x=whaBot.rightPos+this.width*0.46;
//			console.log("Player Left Coll");
		}
		this.pHitRight = function(whaBot){
			this.x=whaBot.leftPos-this.width;
			this.speedX=0;
//			console.log("Player Right Coll");
		}
		this.hitBottom = function(){
			var rockbottom=refInit.canvas.height-this.height*1.83;
			if(this.y>=rockbottom){
				this.gravitySpeed=0;
				this.speedY=0;
				this.speedX=0;
				this.y=rockbottom;
			}
		}
	}
}

//used a lot from: https://www.w3schools.com/graphics/game_intro.asp and https://www.w3schools.com/tags/ref_canvas.asp