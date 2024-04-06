var Rocks=[];
var Papers=[];
var Scissors=[];
var each=40;
var updateGame6 = function(){
	majge.clear("context");
	Rocks.forEach(function(a){
		majge.win(a, each*3, "","Rock Wins");
		Scissors.forEach(function(sA,sB,sC){if(a.collide(sA)){Rocks.push(Scissors.splice(Scissors.indexOf(sA),1)[0]); sA.text="🪨"; sA.color="rgba(0,0,0,1)"; sA.update();}});
		a.score=Rocks.length; a.move("bAll"); a.update();}
	);
	Papers.forEach(function(a){
		majge.win(a, each*3, "","Paper Wins");
		Rocks.forEach(function(sA,sB,sC){if(a.collide(sA)){Papers.push(Rocks.splice(Rocks.indexOf(sA),1)[0]); sA.text="🗎"; sA.color= "rgba(0,0,100,1)"; sA.update();}});
		a.score=Papers.length; a.move("bAll"); a.update();}
	);
	Scissors.forEach(function(a){
		majge.win(a, each*3, "","Scissors Wins");
		Papers.forEach(function(sA,sB,sC){if(a.collide(sA)){Scissors.push(Papers.splice(Papers.indexOf(sA),1)[0]); sA.text="✂"; sA.color="rgba(100,0,0,1)"; sA.update();}});
		a.score=Scissors.length; a.move("bAll"); a.update();}
	);
	majge.frameNo+=1; if(majge.frameNo>=60){majge.frameNo=1}
};
var l6RPS = function(){
	majge.start("2d", "down", updateGame6, 14);
	for(;Rocks.length<each;){
		rock = new majge.create("text","check", 40, 40, Math.floor((Math.random()*(majge.canvas.width-1)+1)), Math.floor((Math.random()*(majge.canvas.height-1)+1)), "rgba(0,0,0,1)", "","🪨")
		rock.wGravity=0;
		rock.speedX=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		rock.speedY=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		Rocks.push(rock);
	}
	for(;Papers.length<each;){
		paper = new majge.create("text","check", 40, 40, Math.floor((Math.random()*(majge.canvas.width-1)+1)), Math.floor((Math.random()*(majge.canvas.height-1)+1)), "rgba(0,0,100,1)", "","🗎")
		paper.wGravity=0;
		paper.speedX=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		paper.speedY=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		Papers.push(paper);
	}
	for(;Scissors.length<each;){
		scissor = new majge.create("text","check", 40, 40, Math.floor((Math.random()*(majge.canvas.width-1)+1)), Math.floor((Math.random()*(majge.canvas.height-1)+1)), "rgba(100,0,0,1)", "","✂")
		scissor.wGravity=0;
		scissor.speedX=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		scissor.speedY=Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
		Scissors.push(scissor);
	}
};