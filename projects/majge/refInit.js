/** clearArc( context | x-position | y-position | radius | color ) */
clearArc = function(cotx, x, y, radius, color){
	cotx.save();
	cotx.globalCompositeOperation = 'destination-out';
	cotx.beginPath();
	ctx.fillStyle=color;
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	cotx.restore();
	cotx.arc(this.x, this.y, this.width, 0, 2*Math.PI, false);
	cotx.fill();
};

var refInit = {
	canvas: document.querySelector("#daCan"),
	/*** refInit.draw(9);
	 ** (type|width|height|x-position|y-position|color|image-src|text|text-font)
	 */
	draw: function(type, width, height, x, y, color, iSrc, text, font){
	/**Positional*/
		this.width=width||this.width;
		this.height=height||this.height;
		this.x=this.x||x;
		this.y=this.y||y;
		this.xL=x||this.x;
		this.yT=y||this.y;
		this.xR=this.xL+this.width;
		this.yB=this.yT+this.height;
		this.rotation=0;

	/**Statistical*/
		this.type=type||this.type;
		this.iSrc=iSrc;
		this.text=text;
		this.font=font;
		this.speedX=0;
		this.speedY=0;
		this.gravity=0;
		this.gravitySpeed=0;
		this.health=100;
		this.score=0;

		this.move = function(){
			for(let i=0;i<arguments.length;i++){
				switch(arguments[i]){
					case "sL=sR":
						if(this.x>=cWidth){this.x=0-this.width;}
						else if(this.x+this.width<0){this.x=cWidth;}
						break;
					case "sLB":if(this.x<0){this.x=0;} break;
					case "sRB":if(this.x>=cWidth-this.width){this.x=cWidth-this.width;} break;
					case "sBB":if(this.y>=cHeight-this.height){this.y=cHeight-this.height;} break;
					case "sUB":if(this.y<0){this.y=0;} break;
					case "space":if(refInit.keys && refInit.keys[" "]){this.speedY=-8;} break;
					case "arrows":
						if(refInit.keys && refInit.keys["ArrowLeft"]){this.speedX=-2;}
						if(refInit.keys && refInit.keys["ArrowRight"]){this.speedX=2;}
						if(refInit.keys && refInit.keys["ArrowDown"]){this.speedY=0.5; this.speedX/=4;}
						if(refInit.keys && refInit.keys["ArrowUp"]){this.speedY=-4.6;}
						break;
					case "wasd":
						if(refInit.keys && refInit.keys["a"]){this.speedX=-2.2;}
						if(refInit.keys && refInit.keys["d"]){this.speedX=2.2;}
						if(refInit.keys && refInit.keys["s"]){this.speedY=0.5; this.speedX/=4;}
						if(refInit.keys && refInit.keys["w"]){this.speedY=-4.6;}
						break;
				}
			}
		},
		/**Player Ground Collision*/
		this.hitBottom = function(){
			var rockbottom=refInit.canvas.height-this.height*1.83;
			if(this.y>=rockbottom){
				this.gravitySpeed=0;
				this.speedY=0;
				this.speedX/=4;
				this.y=rockbottom;
			}
		};

		this.collide = function(player, obj){
			if(player.xL<=obj.xR&&!(player.xL<obj.xR-10)&&!(player.xL>obj.xR)&&(player.yT<=obj.yB-2)&&(player.yB>=obj.yT+2)){
				console.log("Player Collided Left");
				this.x=obj.xR;
			}
			else if(player.xR>=obj.xL&&!(player.xR>obj.xL+10)&&!(player.xR<obj.xL)&&(player.yT<=obj.yB-2)&&(player.yB>=obj.yT+2)){
				console.log("Player Collided Right");
				player.x=obj.xL-player.width;
			}
			if(player.yT<=obj.yB&&!(player.yT<=obj.yB-1)&&!(player.yT>obj.yB)&&(player.xR>=obj.xL+2)&&(player.xL<=obj.xR-2)){
				console.log("Player Collided Top");
				this.y=obj.yB;
				this.speedY/4;
			}
			else if(player.yB>=obj.yT&&!(player.yB>=obj.yT+1)&&!(player.yB<=obj.yT)&&(player.xR>=obj.xL+2)&&(player.xL<=obj.xR-2)){
				console.log("Player Collided Bottom");
				this.gravitySpeed=0;
				this.speedY=0;
				this.y=(obj.yT-this.height);
			}
		};
		//if(side deep in a side){push side out & if(side at a side){set side at side}}
		//if(side at side){if(side deep in side){push side out} and set side at side}
		/**Collision and Gravity Rules*/
		this.newPos = function(){
			this.gravitySpeed+=this.gravity*0.2;
			this.x+=this.speedX*0.99;
			this.y+=(this.speedY+this.gravitySpeed);
			this.xL=this.x;
			this.yT=this.y;
			this.xR=this.xL+this.width;
			this.yB=this.yT+this.height;
			for(var i=0;i<statObjs.length;i+=1){
				var objC=statObjs[i];
				var myWidthH=player1.width/1.5; var myHeightH=player1.height/1.5;
				if(this.xL<=objC.xR //everything left of myLeft
				&& !(this.xL<objC.xR-(objC.width/2))//nothing left of myLeft
				&& !(this.xL>objC.xR) //nothing right of myLeft
				&& (this.yT<=objC.yB-5)
				&& (this.yB>=objC.yT+5)){
					if(objC.type==="coin"){
						if(objC.score>0){
							var c = document.querySelector("#coinS");
							c.volume=0.4;
							c.play();
						}
						objC.health=-0;
						this.score+=objC.score;
						objC.score=0;
					}else{
						this.x+=(Math.abs(this.speedX)*3.75);
						this.gravitySpeed*=1.004;
						this.speedX=0;
						this.collide(this, objC);
					}
				}//my left collide
				else if(this.xR>=objC.xL//everything right of myRight
				&& !(this.xR>objC.xL+(objC.width/2))//nothing right of myRight
				&& !(this.xR<objC.xL)//nothing left of myRight
				&& (this.yT<=objC.yB-5)
				&& (this.yB>=objC.yT+5)){
					if(objC.type==="coin"){
						if(objC.score>0){
							var c = document.querySelector("#coinS");
							c.volume=0.4;
							c.play();
						}
						objC.health=-0;
						this.score+=objC.score;
						objC.score=0;
					}else{
						this.x-=Math.abs(this.speedX)*3.75;
						this.gravitySpeed*=1.004;
						this.speedX=0;
						this.collide(this, objC);
					}
				}//my right collide
				if(this.yT<objC.yB//everything above myTop
				&& !(this.yT<objC.yB-(objC.height/2))//nothing above myTop
				&& !(this.yT>objC.yB)//nothing below myTop
				&& (this.xR>=objC.xL+5)
				&& (this.xL<=objC.xR-5)){
					if(objC.type==="coin"){
						if(objC.score>0){
							var c = document.querySelector("#coinS");
							c.volume=0.4;
							c.play();
						}
						objC.health=-0;
						this.score+=objC.score;
						objC.score=0;
					}else{
						this.speedX/=2;
						this.y+=(Math.abs(this.speedY)*2)+this.gravitySpeed;

						this.collide(this, objC);
					}
				}//my top collide
				else if(this.yB>objC.yT//everything below myBottom
				&& !(this.yB>objC.yT+(objC.height/2))//nothing below myBottom
				&& !(this.yB<objC.yT)//nothing above myBottom
				&& (this.xR>=objC.xL+5)
				&& (this.xL<=objC.xR-5)){
					if(objC.type==="coin"){
						if(objC.score>0){
							var c = document.querySelector("#coinS");
							c.volume=0.4;
							c.play();
						}
						objC.health=-0;
						this.score+=objC.score;
						objC.score=0;
					}else{
						this.gravitySpeed=0;
						this.y-=Math.abs(this.speedY)+(this.gravity*0.2);
						this.speedX=this.speedX*0.5;
						this.speedY=0;
						this.collide(this, objC);
					}
				}//my bottom collide
			}
			this.hitBottom();
		};
		/*** fillStyle( color | gradient | pattern )
		*  * fillRect( x | y | width | height ) 
		*  * clearArc( context | x | y | radius | color ) */
		this.update = function(){
			if(this.health<=0){return;}
			ctx=refInit.context;
			if(this.type==="static"){
				ctx.fillStyle=color;
				ctx.rotate(this.rotation);
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}else if(this.type==="player"){//standard static player
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
			}else if(this.type==="pict"){//movable picture *doesn't work*
				var imG = new Image(this.width, this.height);
				imG.onload = function animate(){refInit.clear(); if(refInit.frameNo>0){ctx.drawImage(imG, this.x, this.y);}};
				imG.src=this.iSrc;
				imG.id="imgH";
				this.newPos();
				refInit.clear();
				ctx.drawImage(imG, this.x, this.y);
			}else if(this.type==="text"){//text
				ctx.font=(((this.height+this.width)/2))+"px "+font;
				ctx.fillStyle=color;
				this.text=text;
				ctx.fillText(this.text, this.x-(this.width*2), this.y-(this.height*2));
			}else if(this.type==="sText"){//player score text
//				console.log(this.text);
				ctx.font= (this.width/3.4)+"px "+font;
				ctx.fillStyle=color;
				this.text="Score: "+player1.score;
				ctx.fillText(this.text, this.x, this.y+12);
			}else if(this.type==="coin"){//coin
				this.score=1;
				let radi=(width*height)/((width+height)*0.99899);
				ctx.fillStyle=color;
				clearArc(ctx, this.x+radi, this.y+radi*0.8, radi, color);
			}else{
				ctx.fillStyle=color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
		};
	},  
	clear: function(){this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); frI=(refInit.frameNo>=60)? refInit.frameNo=1:refInit.frameNo+=1;},
	stop: function(){clearInterval(this.interval);},
	start: function(dimention, direction, ufunct, int, dW, dH){
		clearInterval(this.interval);
		int=(null)? 16:int;
		window.addEventListener('keydown', function(e){
			e.preventDefault();
			refInit.keys = (refInit.keys || []);
			refInit.keys[e.key] = (e.type == "keydown");
//			console.log(e);
			optT(e);
		});
		window.addEventListener('keyup', function(e){
			refInit.keys[e.key] = (e.type == "keydown");
			optT(e);
		});
		if(dimention=="2d"){
			if(direction=="down"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d down-facing time!");
				this.interval=setInterval(ufunct, int);
			}else if(direction=="left"){
				window.innerWidth=dW||window.innerWidth;
				window.innerHeight=dH||window.innerHeight;
				this.canvas.width=window.innerWidth;
				this.canvas.height=window.innerHeight;
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
};
//used a lot from: https://www.w3schools.com/graphics/game_intro.asp and https://www.w3schools.com/tags/ref_canvas.asp