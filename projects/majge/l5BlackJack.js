var l5Blackjack=function(){
	var game={
		room:{
			body:{body:document.querySelector("BODY")},
			style:{
				style:document.createElement("STYLE"),
				innerText:[
					"body {background-color:green;}",
					"#gameTable {width:80vw; height:80vh; position:absolute; margin:0 10vw; border:0.2em solid black; border-radius:0 0 50% 50%; background-color:white; z-index:-1;}",
					"#chatForm {width:20vw; height:100vh;}",
				
				
				]},
			gameTable:{gameTable:document.createElement("DIV"),parentElement:"body"},
			chatForm:{chatForm:document.createElement("FORM"),action:"/majge.json",parentElement:"body"},
			chatBox:{type:"TEXTAREA"}
		},
		cards:{0:"🂠",
			1:["🂡","🂱","🃁","🃑"],
			2:["🂢","🂲","🃂","🃒"], 3:["🂣","🂳","🃃","🃓"], 4:["🂤","🂴","🃄","🃔"], 5:["🂥","🂵","🃅","🃕"], 6:["🂦","🂶","🃆","🃖"], 7:["🂧","🂷","🃇","🃗"], 8:["🂨","🂸","🃈","🃘"], 9:["🂩","🂹","🃉","🃙"],
			10:["🂪","🂺","🃊","🃚"], 11:["🂫","🂻","🃋","🃛"], 12:["🂬","🂼","🃌","🃜"], 13:["🂭","🂽","🃍","🃝"], 14:["🂮","🂾","🃎","🃞"]
		},
		players:{
			dealer:{score:0,hand:["🂡","🂠"],state:"Ready",},
			player1:{name:"Markus",score:0,hand:["🂡","🂱"],state:"Ready",},
			player2:{name:"Kay",score:0,hand:["🂡","🂱"],state:"Ready",},
			player3:{name:"Phil",score:0,hand:["🂡","🂱"],state:"Ready",},
			player4:{name:"John",score:0,hand:["🂡","🂱"],state:"Ready",},
			player5:{name:"Mark",score:0,hand:["🂡","🂱"],state:"Ready",},
			player6:{name:"Bob",score:0,hand:["🂡","🂱"],state:"Ready",},
			player7:{name:"Jeb",score:0,hand:["🂡","🂱"],state:"Ready",},
			player8:{name:"Bill",score:0,hand:["🂡","🂱"],state:"Ready",},
			player9:{name:"Val",score:0,hand:["🂡","🂱"],state:"Ready",},
		},
		controls:{
			enterName:function(name){

			},
			drawRandom:function(count){if(!count){count=1;}
				var cardArray=[];
				for(let i=1;i<=count;i++){
					var inCard=game.cards[Math.floor(Math.random()*(14-1+1))+1];
					cardArray.push(inCard[Math.floor(Math.random()*(inCard.length-1+1))]);
				}
				return cardArray;
			},
			split:function(){

			},
			ace:function(){

			},
			hold:function(){

			},
		},
		start:function(){
			var body=document.querySelector("BODY");
//			var gameTable = document.createElement("DIV"); gameTable.id="gameTable"; body.appendChild(gameTable);
			for(let iN in game.room){
				for(let inIN in game.room[iN]){
					let inGameRoom = game.room[iN];
					console.log(game.room,",", iN,",", game.room[iN],",", inIN,",", inGameRoom[inIN]);
				}
			}
			for(let iN in game.players){
//				console.log(iN);
				if(iN=="dealer"){}
			}


//			for(let iN in game.controls){
//				console.log(iN);
//				if(iN=="enterName"){
//					let newControl = document.createElement("INPUT"); newControl.id=iN; body.appendChild(newControl);
//				}else{
//					let newControl = document.createElement("BUTTON"); newControl.id=iN; newControl.className="controls"; body.appendChild(newControl);
//				}
//				let newControl = document.createElement("");
//			}
			var style=document.createElement("STYLE"); 
			style.innerText="body{background-color:green;} #gameTable{width:80vw; height:80vh; position:absolute; margin:0 10vw; border:0.2em solid black; border-radius:0 0 50% 50%; background-color:white; z-index:-1;}";
			body.appendChild(style);
		},





	};
	game.start();
};