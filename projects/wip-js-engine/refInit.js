var refInit = {
	canvas: document.querySelector("#daCan"),
	start: function(dimention, direction, dW, dH){
		window.addEventListener('keydown', function(e){
			e.preventDefault();
			refInit.keys = (refInit.keys || []);
			refInit.keys[e.key] = (e.type == "keydown");
			optT(e);
		})
		window.addEventListener('keyup', function(e){
			refInit.keys[e.key] = (e.type == "keydown");
			optT(e);
		})
		if(dimention=="2d"){
			if(direction=="down"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d down-facing time!");
				this.interval=setInterval(updateGame, 20);
			}else if(direction=="left"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d left-on time!");
				this.interval=setInterval(updateGame, 20);
			}else if(direction=="forward"){
				this.canvas.width=dW || window.innerWidth;
				this.canvas.height=dH || window.innerHeight;
				this.context=this.canvas.getContext("2d");
				this.frameNo=0;
				console.log("2d first person time!");
				this.interval=setInterval(updateGame, 20);
			}
		}else if(dimention=="3d"){
		console.log("Woahh nelly, that'll take more time!(would be voxel based)");
		}else{console.warn("No Dimention Found");}
	},
	stop: function(){clearInterval(this.interval);},  
	clear: function(){this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);},
	draw: function(x, y, width, height, color, type){
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
			this.gravitySpeed+=this.gravity*0.2;
			this.x+=this.speedX;
			this.y+=this.speedY+this.gravitySpeed;
			this.hitBottom();
		}
		this.pHitBottom = function(whaBot){
			this.speedX=0;
			this.speedY=0;
			this.y=whaBot-player1.height;
			this.gravitySpeed=0;
		}
		this.pHitTop = function(whaBot){
			this.speedY=0;
			this.y=whaBot;
		}
		this.pHitLeft = function(whaBot){
			this.speedX=0;
			this.x=whaBot;
		}
		this.pHitRight = function(whaBot){
			this.speedX=0;
			this.x=whaBot-this.width;
		}
		this.hitBottom = function(){
			var rockbottom=refInit.canvas.height-this.height*2;
			if(this.y>rockbottom+0.04){
				if(this.y==rockbottom){
					this.speedY=this.speedY*0.5;
					this.gravitySpeed=0;
					this.y=rockbottom;
				}else{
					this.speedY=0;
					this.speedX=0;
					this.gravitySpeed=0;
					this.y=rockbottom;
				}
			}
		}
	}
}
//used a lot from: https://www.w3schools.com/graphics/game_intro.asp and https://www.w3schools.com/tags/ref_canvas.asp