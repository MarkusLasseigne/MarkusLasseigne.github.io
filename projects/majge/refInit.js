/** clearArc( context | x-position | y-position | radius | color ) */
var clearArc = function(cotx, x, y, radius, color){
	cotx.save();
	cotx.globalCompositeOperation = 'destination-out';
	cotx.beginPath();
	ctx.fillStyle=color;
	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
	cotx.restore();
	cotx.arc(this.x, this.y, this.width, 0, 2*Math.PI, false);
	cotx.fill();
};

var majge={
	canvas: document.querySelector("#daCan"),
	/**create( type | name | width | height | x | y | color | src | text | font ); */
	create: function(){
		var args=[]; for(let i=0;i<arguments.length;i++){args.push(arguments[i]);}
		this.speedX=this.speedX||0;
		this.speedY=this.speedY||0;
		this.width=this.width||args[2];
		this.height=this.height||args[3];
		this.x=this.x||args[4];
		this.y=this.y||args[5];
		this.xL=this.x||args[4];
		this.yT=this.y||args[5];
		this.xR=this.xL+this.width;
		this.yB=this.yT+this.height;
		this.xC=this.x+(this.width/2);
		this.yC=this.y+(this.height/2);
		this.rotation=this.rotation||0;
		this.color=this.color||args[6];
		this.mass=this.mass||50;
		this.wGravity=0;
		this.gravitySpeed=0;
		this.name=this.name||args[0];
		this.cType=this.cType||args[1];
		this.iSrc=this.iSrc||args[7];
		this.text=this.text||args[8];
		this.font=this.font||args[9];
		this.health=100;
		this.score=0;

		this.draW=function(){
			if(this.health<=0){return;}
			ctx=majge.context;
			if(this.name==="static"){
				ctx.fillStyle=this.color;
				ctx.rotate(this.rotation);
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}else if(this.name==="playe"){
				ctx.fillStyle=this.color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
//				majge.context = new majge.draw(null, this.width, this.height, this.x+this.width, this.y, "rgba(50,50,200,1)");
			}else if(this.name==="player"){//standard static player
				ctx.fillStyle="rgba(0,0,0,0.08)";
				shad = ctx.fillRect(this.x, this.y+20, this.width, this.height*0.888);
				ctx.fillStyle=this.color;
				head = clearArc(ctx, this.x+20, this.y+20, this.width*0.5, "black");
				body = ctx.fillRect(this.x+5, this.y+26, this.width*0.75, this.height*0.40);
				sholds = ctx.fillRect(this.x, this.y+34, this.width, this.height*0.04);
				lArm = ctx.fillRect(this.x, this.y+38, this.width*0.115, this.height*0.28);
				rArm = ctx.fillRect(this.x+35.5, this.y+38, this.width*0.115, this.height*0.28);
				lLeg = ctx.fillRect(this.x, this.y+72, this.width*0.485, this.height*0.4);
				rLeg = ctx.fillRect(this.x+20.5, this.y+72, this.width*0.485, this.height*0.4);

			}else if(this.name==="pict"){//movable picture
				var imG = new Image(this.width, this.height);
				clearArc(ctx, this.x+(this.width/2), this.y+(this.height/2), this.width*0.5, "black");
				imG.src=this.iSrc;
				imG.id="imgH";
				ctx.drawImage(imG, this.x, this.y, this.width, this.height);
				ctx.font=(this.width/1.5)+"px Ariel";
				this.text=this.score;
				bean=3;
				if(this.text>9){bean=6;}				
				ctx.fillText(this.text, this.x+(this.width/bean), this.y+(this.height/1.5));
			}else if(this.name==="text"){//text
				ctx.font=(((this.height+this.width)/2))+"px "+(this.font||" Ariel");
				ctx.fillStyle=this.color;
//				this.text=this.text;
				ctx.fillText(this.text, this.x-(this.width*2), this.y-(this.height*2));
			}else if(this.name==="fps"){//fps text
				ctx.font=((this.width/3.7))+"px "+(this.font||" Ariel");
				ctx.fillStyle=this.color;
				if((Date.now()-majge.stTime)>=1000){
					majge.stTime=Date.now();
					this.text="FPS: "+majge.frameNo;
					majge.frameNo=0;
				}else if(!majge.frameNo||!majge.stTime||!this.text){this.text="FPS: ?";}
				ctx.fillText(this.text, this.x, this.y+(this.height));
			}else if(this.name==="playerscore"){//player score text
				ctx.fillStyle=this.color;
				this.text="Score: "+this.score;
				ctx.font=(this.width/3.4)+"px "+this.font;
				ctx.fillText(this.text, this.x, this.y+(this.height));
			}else if(this.name==="coin"){//coin
				this.score=1;
				let radi=(this.width*this.height)/((this.width+this.height)*0.99899);
				ctx.fillStyle=this.color;
				clearArc(ctx, this.x+radi, this.y+radi*0.8, radi, this.color);
			}else{
				ctx.fillStyle=this.color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
			if(this.name&&false){
				ctx.font=(this.width/2)+"px "+" Ariel";
				ctx.fillStyle="rgba(0,0,0,1)";
				ctx.fillText(this.name, this.x, this.y);
			}
		};
		this.move = function(){
			for(let i=0;i<arguments.length;i++){
				switch(arguments[i]){
					case "bEnd":
						if(this.x<=0||this.y<=0){snake.head.score=-1;}
						if(this.xR>=cWidth||this.yB>=cHeight){snake.head.score=-1;}
						break;
					case "bAll":
						if(this.x<0){this.speedX=Math.abs(this.speedX);}
						if(this.xR>cWidth){this.speedX=(0-Math.abs(this.speedX));}
						if(this.y<0){this.speedY=Math.abs(this.speedY);}
						if(this.yB>cHeight){this.speedY=(0-Math.abs(this.speedY));}
						break;
					case "sL=sR":
						if(this.x>=cWidth){this.x=0-this.width;}
						else if(this.x+this.width<0){this.x=cWidth;}
						break;
					case "sLB":if(this.x<0){this.speedX=(0-this.speedX); this.x=0;} break;
					case "sRB":if(this.x>=cWidth-this.width){ this.speedX=(0-this.speedX); this.x=cWidth-this.width;} break;
					case "sBB":if(this.y>=cHeight-this.height){this.speedY=(0+this.speedY); this.y=cHeight-this.height;} break;
					case "sUB":if(this.y<0){this.speedY=(0-this.speedY); this.y=0;} break;
					case "space":if(window.keys && window.keys[" "]){this.speedY=-8;} break;
					case "arrows":
						if(window.keys && window.keys["ArrowLeft"]){this.speedX=-2;}
						if(window.keys && window.keys["ArrowRight"]){this.speedX=2;}
						if(window.keys && window.keys["ArrowDown"]){this.speedY=0.5; this.speedX/=4;}
						if(window.keys && window.keys["ArrowUp"]){this.speedY=-4.6;}
						break;
					case "wasd":
						if(window.keys && window.keys["a"]){this.speedX=-2.2;}
						if(window.keys && window.keys["d"]){this.speedX=2.2;}
						if(window.keys && window.keys["s"]){this.speedY=0.5; this.speedX/=4;}
						if(window.keys && window.keys["w"]){this.speedY=-4.6;}
						break;
					case "wasd#":
						if(window.keys && window.keys["a"]){if(this.speedX<=0){this.speedX=-2; this.speedY=0;}}
						if(window.keys && window.keys["d"]){if(this.speedX>=0){this.speedX=2; this.speedY=0;}}
						if(window.keys && window.keys["s"]){if(this.speedY>=0){this.speedY=2; this.speedX=0;}}
						if(window.keys && window.keys["w"]){if(this.speedY<=0){this.speedY=-2; this.speedX=0;}}
						break;
				}
			}
		};
		/**Player Ground Collision*/
		this.hitBottom = function(){
			var rockbottom=(majge.canvas.height-(this.height*1.83));
			if(this.y>=rockbottom){
				this.gravitySpeed=0;
				this.speedY=0;
				this.speedX*=0.02;
				this.y=rockbottom;
			}
		};
		/**_.collide(other object); */
		this.collide=function(obj){
//			console.log(this.name,obj);
			if(obj.name==="coin"){
				if(this.xL<=obj.xR&&this.xR>=obj.xL&&this.yT<=obj.yB&&this.yB>=obj.yT){
					if(obj.score>0){let coin = menuInit.canvasSettings.coinSound; coin.play();}
					obj.health=-0;
					this.score+=obj.score;
					obj.score=0;
				}
			}
			if(obj.cType==="colide"){
				if((this.yT<=obj.yB-(4.5+Math.abs(this.speedY)))
				&&(this.yB>=obj.yT+(4.5+Math.abs(this.speedY)))
				&&!(this.xL<obj.xR-(obj.width/2))
				&&!(this.xL>obj.xR)
				&&this.xL<=obj.xR){
					this.speedY/=1.2;
					this.speedX=0;
					this.x+=2.18;
					if((this.yT<=obj.yB-2.5)&&(this.yB>=obj.yT+2.5)&&!(this.xL<=obj.xR-4)&&!(this.xL>obj.xR)
					&&this.xL<=obj.xR){this.x=obj.xR;}
				}//This Left Collide
				if((this.yB>=obj.yT+(4.5+Math.abs(this.speedY)))
				&&(this.yT<=obj.yB-(4.5+Math.abs(this.speedY)))
				&&!(this.xR>obj.xL+(obj.width/2))
				&&!(this.xR<obj.xL)
				&&this.xR>=obj.xL){
					this.speedY/=1.2;
					this.speedX=0;
					this.x-=2.18;
					console.log(this.speedY);
					if((this.yT<=obj.yB-2.5)&&(this.yB>=obj.yT+2.5)&&!(this.xR>=obj.xL+4)&&!(this.xR<obj.xL)
					&&this.xR>=obj.xL){this.x=(obj.xL-this.width);}
				}//This Right Collide
				if((this.xR>=obj.xL+(3+Math.abs(this.speedX)))
				&&(this.xL<=obj.xR-(3+Math.abs(this.speedX)))
				&&!(this.yT>=obj.yB)
				&&!(this.yT<=obj.yB-(obj.height/2))
				&&this.yT<=obj.yB){
					this.speedY=0;
					this.gravitySpeed*=1.5;
					this.y+=((this.speedY+this.gravitySpeed));
					this.y=obj.yB;
					this.speedX=0;
				}//This Top Collide
				if((this.xR>=obj.xL+(3+Math.abs(this.speedX)))
				&&(this.xL<=obj.xR-(3+Math.abs(this.speedX)))
				&&!(this.yB<=obj.yT)
				&&!(this.yB>=obj.yT+(obj.height/2))
				&&this.yB>=obj.yT){
					this.y=(obj.yT-this.height);
					this.speedX/=1.9;
					this.speedY=4;
					this.gravitySpeed=0;
				}//This Bottom Collide
			}else if(obj.cType==="colidestatic"){
				if((this.yT<=obj.yB-(4.5+Math.abs(this.speedY)))
				&&(this.yB>=obj.yT+(4.5+Math.abs(this.speedY)))
				&&!(this.xL<obj.xR-(obj.width/2))
				&&!(this.xL>obj.xR)
				&&this.xL<=obj.xR){
					this.speedY/=1.2;
					this.speedX=0;
					this.x+=2.18;
					if((this.yT<=obj.yB-2.5)&&(this.yB>=obj.yT+2.5)&&!(this.xL<=obj.xR-4)&&!(this.xL>obj.xR)
					&&this.xL<=obj.xR){this.x=obj.xR;}
				}//This Left Collide
				if((this.yB>=obj.yT+(4.5+Math.abs(this.speedY)))
				&&(this.yT<=obj.yB-(4.5+Math.abs(this.speedY)))
				&&!(this.xR>obj.xL+(obj.width/2))
				&&!(this.xR<obj.xL)
				&&this.xR>=obj.xL){
					this.speedY/=1.2;
					this.speedX=0;
					this.x-=2.18;
					if((this.yT<=obj.yB-2.5)&&(this.yB>=obj.yT+2.5)&&!(this.xR>=obj.xL+4)&&!(this.xR<obj.xL)
					&&this.xR>=obj.xL){this.x=(obj.xL-this.width);}
				}//This Right Collide
				if((this.xR>=obj.xL+(3+Math.abs(this.speedX)))
				&&(this.xL<=obj.xR-(3+Math.abs(this.speedX)))
				&&!(this.yT>=obj.yB)
				&&!(this.yT<=obj.yB-(obj.height/2))
				&&this.yT<=obj.yB){
					this.speedY=0;
					this.gravitySpeed*=1.5;
					this.y+=((this.speedY+this.gravitySpeed));
					this.y=obj.yB;
					this.speedX=0;
				}//This Top Collide
				if((this.xR>=obj.xL+(3+Math.abs(this.speedX)))
				&&(this.xL<=obj.xR-(3+Math.abs(this.speedX)))
				&&!(this.yB<=obj.yT)
				&&!(this.yB>=obj.yT+(obj.height/2))
				&&this.yB>=obj.yT){
					this.y=(obj.yT-this.height);
					this.speedX/=1.9;
					this.speedY=4;
					this.gravitySpeed=0;
				}//This Bottom Collide
			}else if(obj.cType==="gravcolide"){
				if(this.xC-obj.xC<0&&!(this.xR<=obj.xL)){
					console.log(this);
					this.x-=((this.xC-obj.xC)/4);
					obj.x+=((this.xC-obj.xC)/4);
//					console.log("Center Left");
				}//This Center Left
				if(this.xC-obj.xC>0){
					console.log("Center Right");
				}//This Center Right
				if(this.yC-obj.yC>0){
					console.log("Center Below");
				}//This Center Below
				if(this.yC-obj.yC<0){
					console.log("Center Above");
				}//This Center Above
			}
		};
		//this.x=obj.xR; this.x=(obj.xL-this.width); this.y=obj.yB; this.y=(obj.yT-this.height);
		this.update=function(colls){
			this.gravitySpeed+=this.wGravity*0.2;
			this.x+=this.speedX*0.99;
			this.y+=(this.speedY+this.gravitySpeed);
			this.xL=this.x;
			this.yT=this.y;
			this.xR=this.xL+this.width;
			this.yB=this.yT+this.height;
			this.xC=this.x+(this.width/2);
			this.yC=this.y+(this.height/2);
//			if(this.wGravity>0){this.hitBottom();}
			if(colls!==undefined){
				for(let key in colls){
					var oObj=colls[key];
	//				console.log(oObj);
					if(Array.isArray(colls[key])){
						for(let i=0;i<oObj.length;i++){this.collide(oObj[i]);}
					}else if(this.name!==key){this.collide(oObj);}
	//				console.log(this.type, key);
				}
				this.draW();
			}else{
				this.draW();
			}
		};
	},
	/**clear(clear context||clear interval||clear all)*/
	clear: function(wha){
		switch(wha){
			case "context":
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				break;
			case "interval":
				majge.stTime=null;
				clearInterval(this.interval);
				break;
			case "all":
				majge.stTime=null;
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				clearInterval(this.interval);
				break;
		}
//		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);// frI=(majge.frameNo>=60)? majge.frameNo=1:majge.frameNo+=1;
	},
	/** win(object|score needed|lose at); */
	win: function(player, nScore, lScore){
		if(player.score<=lScore){
			lose = new majge.create("text", "nocolide", 100, 100, cWidth/2, cHeight/2, "rgba(0,0,0,1)", null, "You Lose!", " Ariel");
			lose.update();
			majge.clear("interval");
		}else if(player.score>=nScore){
			win = new majge.create("text", "nocolide", 100, 100, cWidth/2, cHeight/2, "rgba(0,0,0,1)", null, "You Win!", " Ariel");
			win.update();
			majge.clear("interval");
		}
	},
	/**start(game dimention|direction|update function|update interval|game width|game height);*/
	start: function(dimention, direction, ufunct, int, dW, dH){
		if(majge.stTime||Date.now()>=majge.stTime){majge.clear("all");}
		else{majge.stTime=Date.now();}
		int=(int===null)? 16:int;
		this.canvas.width=window.innerWidth;
		this.canvas.height=window.innerHeight;
		majge.frameNo=0;
		if(dimention=="2d"){
			this.context=this.canvas.getContext("2d");
			if(direction=="down"){
				this.interval=setInterval(ufunct, int);
			}else if(direction=="left"){
				window.innerWidth=dW||window.innerWidth;
				window.innerHeight=dH||window.innerHeight;
				this.interval=setInterval(ufunct, int);
			}else if(direction=="forward"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;			
				this.interval=setInterval(ufunct, int);
			}
		}else if(dimention=="3d"){
			console.warn("Woahh nelly, that'll take more time!(would be voxel based)");
		}else{console.warn("No Dimention Found");}
	},
};
//used a lot from: https://www.w3schools.com/graphics/game_intro.asp and https://www.w3schools.com/tags/ref_canvas.asp