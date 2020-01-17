var refInit = {
    canvas: document.querySelector("#daCan"),
    start: function(dimention, direction, dW, dH){
        if(dimention=="2d"){
            if(direction=="down"){
                this.canvas.width=dW || window.innerWidth;
                this.canvas.height=dH || window.innerHeight;
                this.context=this.canvas.getContext("2d");
                this.frameNo=0;
                console.log("2d down-facing time!");
                this.interval=setInterval(updateGame, 20);
                window.addEventListener('keydown', function(e){
                    e.preventDefault();
                    refInit.keys=(refInit.keys || []);
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
                window.addEventListener('keyup', function(e){
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
            }else if(direction=="left"){
                this.canvas.width=dW || window.innerWidth;
                this.canvas.height=dH || window.innerHeight;
                this.context=this.canvas.getContext("2d");
                this.frameNo=0;
                console.log("2d left-on time!");
                this.interval=setInterval(updateGame, 20);
                window.addEventListener('keydown', function(e){
                    e.preventDefault();
                    refInit.keys=(refInit.keys || []);
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
                window.addEventListener('keyup', function(e){
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
            }else if(direction=="forward"){
                this.canvas.width=dW || window.innerWidth;
                this.canvas.height=dH || window.innerHeight;
                this.context=this.canvas.getContext("2d");
                this.frameNo=0;
                console.log("2d first person time!");
                this.interval=setInterval(updateGame, 20);
                window.addEventListener('keydown', function(e){
                    e.preventDefault();
                    refInit.keys=(refInit.keys || []);
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
                window.addEventListener('keyup', function(e){
                    refInit.keys[e.keyCode]=(e.type=="keydown");
                })
            }
        }else if(dimention=="3d"){
        console.log("Woahh nelly, that'll take more time!(would be voxel based)");
        }else{console.warn("No Dimention Found");}
    },
    stop: function(){clearInterval(this.interval);},  
    clear: function(){this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);}
}
//used a lot from: https://www.w3schools.com/graphics/game_intro.asp and https://www.w3schools.com/tags/ref_canvas.asp
//	if(myGameArea.keys && myGameArea.keys[37]){myGamePiece.speedX=-1;}// <
//	if(myGameArea.keys && myGameArea.keys[65]){myGamePiece.speedX=-1;}// a
//	if(myGameArea.keys && myGameArea.keys[39]){myGamePiece.speedX=1;}// >
//	if(myGameArea.keys && myGameArea.keys[68]){myGamePiece.speedX=1;}// d
//	if(myGameArea.keys && myGameArea.keys[38]){myGamePiece.speedY=-1;}// ^
//	if(myGameArea.keys && myGameArea.keys[87]){myGamePiece.speedY=-1;}// w
//	if(myGameArea.keys && myGameArea.keys[40]){myGamePiece.speedY=1;}// v
//	if(myGameArea.keys && myGameArea.keys[83]){myGamePiece.speedY=1;}// s