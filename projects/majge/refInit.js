/** clearArc( context | x-position | y-position | radius | color ) */
clearArc = function(cotx, x, y, radius, color){
	cotx.save();
	cotx.globalCompositeOperation = 'destination-out';
	cotx.beginPath();
	ctx.fillStyle=color;
	cotx.arc(x, y, radius, 0, 2 * Math.PI, false);
	cotx.restore();
	cotx.arc(this.x+10, this.y+200, this.width*0.5, 0, 2*Math.PI, false);
	cotx.fill();
};
function movement(typeIn1){
	if(player1.x>=cWidth){player1.x=0-player1.width;}else if(player1.x+player1.width<0){player1.x=cWidth;}
	if(refInit.keys && refInit.keys["ArrowLeft"]){player1.speedX=-2;}// <
	if(refInit.keys && refInit.keys["a"]){player1.speedX=-2;}// a
	if(refInit.keys && refInit.keys["ArrowRight"]){player1.speedX=2;}// >
	if(refInit.keys && refInit.keys["d"]){player1.speedX=2;}// d
	if(refInit.keys && refInit.keys["ArrowDown"]){player1.speedY=0.5; player1.speedX/=4;}// v
	if(refInit.keys && refInit.keys["s"]){player1.speedY=0.5; player1.speedX/=4;}// s
	if(refInit.keys && refInit.keys["ArrowUp"]){player1.speedY=-4.6;}// ^
	if(refInit.keys && refInit.keys["w"]){player1.speedY=-4.6;}// w
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
	/** * refInit.draw( type | width | height | x-position | y-position | color | image-src | text | text-font ) */
	draw: function(type, width, height, x, y, color, iSrc, text, font){
		this.type=type;
		this.width=width;
		this.height=height;
		this.x=x;
		this.leftPos=x;
		this.rightPos=this.leftPos+this.width;
		this.y=y;
		this.topPos=y;
		this.bottomPos=this.topPos+this.height;
		this.iSrc=iSrc;
		this.text=text;
		this.font=font;
		this.speedX=0;
		this.speedY=0;
		this.gravity=0;
		this.gravitySpeed=0;
		this.rotation=0;
		this.health=100;
		this.score=0;

		/*** fillStyle( color | gradient | pattern )
		*  * fillRect( x | y | width | height ) 
		*  * clearArc( context | x | y | radius | color ) */
		this.update = function(){
			if(this.health<=0){return;}
			ctx=refInit.context;
			if(this.type=="static"){ 
				ctx.fillStyle=color;
				ctx.rotate(this.rotation);
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}else if(this.type=="player"){
				ctx.fillStyle="rgba(0,0,0,0.08)";
				shad = ctx.fillRect(this.x, this.y+20, this.width, this.height*0.888);
				ctx.fillStyle=color;
				head = clearArc(ctx, this.x+20, this.y+20, this.width*0.5, "black");
				body = ctx.fillRect(this.x+5, this.y+26, this.width*0.75, this.height*0.40);
				sholds = ctx.fillRect(this.x, this.y+34, this.width, this.height*0.04);
				lArm = ctx.fillRect(this.x, this.y+38, this.width*0.115, this.height*0.28);
				rArm = ctx.fillRect(this.x+35.5, this.y+38, this.width*0.115, this.height*0.28);
				lLeg = ctx.fillRect(this.x, this.y+72, this.width*0.485, this.height*0.4);
				rLeg = ctx.fillRect(this.x+20.5, this.y+72, this.width*0.485, this.height*0.4);
				this.newPos();
			}else if(this.type=="pict"){
				var imG = new Image();
				imG.src=this.iSrc;
				imG.id="imgH";
				imG.onload = function animate(){refInit.clear(); ctx.drawImage(imG, x, y);};
				ctx.fillStyle=color;
				ctx.width=this.width/2;
				ctx.height=this.height/2;
				this.newPos();
			}else if(this.type=="sText"){
//				console.log(this.text);
				ctx.font= (this.width/3.4)+"px "+font;
				ctx.fillStyle=color;
				this.text="Score: "+player1.score;
				ctx.fillText(this.text, this.x, this.y+12);
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
		
				if(myLeft-2<otRight //everything left of myLeft
				&& !(myLeft<otRight-2)//nothing left of myLeft
				&& !(myLeft>otRight+2) //nothing right of myLeft
				&& (myTop<otBottom-1)
				&& (myBottom>otTop+1))
					{player1.pHitLeft(statObjs[i]);}//my left collide
				else if(myRight+2>otLeft//everything right of myRight
				&& !(myRight>otLeft+2)//nothing right of myRight
				&& !(myRight<otLeft-2)//nothing left of myRight
				&& (myTop<otBottom-1)
				&& (myBottom>otTop+1))
					{player1.pHitRight(statObjs[i]);}//my right collide
//				console.log(this.topPos, otBottom);
				if(myTop-2<otBottom//everything above myTop
				&& !(myTop<otBottom-6)//nothing above myTop
				&& !(myTop>otBottom+2)//nothing below myTop
				&& (myRight>=otLeft+1)
				&& (myLeft<=otRight-1))
					{player1.pHitTop(statObjs[i]);}//my top collide
				else if(this.bottomPos+2>otTop//everything below myBottom
				&& !(myBottom>otTop+6)//nothing below myBottom
				&& !(myBottom<otTop-2)//nothing above myBottom
				&& (myRight>=otLeft+1)
				&& (myLeft<=otRight-1))
					{player1.pHitBottom(statObjs[i]);}//my bottom collide
			}
		}
		this.pHitBottom = function(whaBot){
//			console.log("Player Bottom Coll");
			if(whaBot.type=="coin"){
				whaBot.health=-0;
				if(whaBot!==null){
					player1.score+=1
					whaBot=null;
				}else{return;}
			}else{
				this.gravitySpeed=0;
				this.speedY=0;
				this.speedX=0;
				this.y=whaBot.topPos-this.height;
			}
		}
		this.pHitTop = function(whaBot){
//			console.log("Player Top Coll");
			if(whaBot.type=="coin"){
				whaBot.health=-0;
				if(whaBot!==null){
					player1.score+=1
					whaBot=null;
				}else{return;}
			}else{
				this.gravitySpeed+=0.2;
				this.speedY=0.2;
				this.y=whaBot.bottomPos;
			}
		}
		this.pHitLeft = function(whaBot){
//			console.log("Player Left Coll");
			if(whaBot.type=="coin"){
				console.log(refInit.canvas.context);
				whaBot.health=-0;
				if(whaBot!==null){
					player1.score+=1
					whaBot=null;
				}else{return;}
			}else{
				this.x=whaBot.rightPos;
				this.speedX=0;
			}
		}
		this.pHitRight = function(whaBot){
//			console.log("Player Right Coll");
			if(whaBot.type=="coin"){
				whaBot.health=-0;
				if(whaBot!==null){
					player1.score+=1
					whaBot=null;
				}else{return;}
			}else{
				this.x=whaBot.leftPos-this.width;
				this.speedX=0;
			}
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