init = function(dimention, direction){
    var canIs = document.querySelector("#daCan");
    if(dimention=="2d"){
        if(direction=="down"){
            return canIs.getContext("2d");
        }else if(direction=="left"){

        }else if(direction=="forward"){

        }else{console.warn("No Direction Found");}
    }else if(dimention=="3d"){
        console.log("Woahh nelly, that'll take more time!");
    }else{console.warn("No Dimention Found");}
};
//https://www.w3schools.com/graphics/game_intro.asp
//https://www.w3schools.com/tags/ref_canvas.asp
//	if(myGameArea.keys && myGameArea.keys[37]){myGamePiece.speedX=-1;}// <
//	if(myGameArea.keys && myGameArea.keys[65]){myGamePiece.speedX=-1;}// a
//	if(myGameArea.keys && myGameArea.keys[39]){myGamePiece.speedX=1;}// >
//	if(myGameArea.keys && myGameArea.keys[68]){myGamePiece.speedX=1;}// d
//	if(myGameArea.keys && myGameArea.keys[38]){myGamePiece.speedY=-1;}// ^
//	if(myGameArea.keys && myGameArea.keys[87]){myGamePiece.speedY=-1;}// w
//	if(myGameArea.keys && myGameArea.keys[40]){myGamePiece.speedY=1;}// v
//	if(myGameArea.keys && myGameArea.keys[83]){myGamePiece.speedY=1;}// s
