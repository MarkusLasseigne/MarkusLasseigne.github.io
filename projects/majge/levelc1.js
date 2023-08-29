/**gObjs{sky:{sky}, coin:[{coin}, {coin}, {coin}], obstacles:[{wall},{wall},{wall},{wall},{wall}], ground:{ground}, player:{player}, info:[{fps},{scoreTxt}],}; */
var gObjs;
function updateGame1(){
	majge.clear("context");
	majge.frameNo+=1;
	gObjs.player.move("sUB", "sLB", "sRB", "wasd", "arrows","space");
	if(gObjs.info[1].score!==gObjs.player.score){gObjs.info[1].score=gObjs.player.score;}
	for(let key in gObjs){
		let inO = gObjs[key];
		if(Array.isArray(inO)){
			inO.forEach(function(a,b,c){
				a.update();
			});
		}else if(key!=="player"){
			inO.update();
		}
	}
	majge.win(gObjs.player,3);
	gObjs.player.update(gObjs);
}

var level1 = function(){
	majge.start("2d", "left", updateGame1, 10);
	y=cHeight-100; x=cWidth-100;

	gObjs={// V (type|width|height|x-position|y-position|color|image-src|text|text-font)
		sky: new majge.create("sky", "nocolide", cWidth, cHeight, 0, 0, "rgba(100,240,245,0.88)"),
		coins: [
			coin1 = new majge.create("coin", "nocolide", 30, 30, 150, 500, "rgba(200,200,0,0.9)"),
			coin2 = new majge.create("coin", "nocolide", 30, 30, 375, y-304, "rgba(200,200,0,0.9)"),
			coin3 = new majge.create("coin", "nocolide", 30, 30, 1320, y-314, "rgba(200,200,0,0.9)")],
		obstacles: [
//			wall1 = new majge.create("wall", "colidestatic", 200, 50, 300, y-148, "rgba(46,24,0,1)"),
			wall2 = new majge.create("pipe", "colidestatic", 54, 154, 720, y-154, "rgba(0,60,0,1)"),
			wall3 = new majge.create("wall", "colidestatic", 200, 20, 1420, y-10, "rgba(0,160,0,1)"),
			wall4 = new majge.create("wall", "colidestatic", 100, 30, 700, y-314, "rgba(46,24,0,1)"),
			wall5 = new majge.create("wall", "colidestatic", 200, 30, 900, y-180, "rgba(0,0,0,1)")
		],
//		enemies: [],
		ground: new majge.create("ground", "colidestatic", cWidth*1.2, 100, 0, y, "rgba(0,160,0,1)"),
		player: new majge.create("player", "colide", 40, 120, 20, y-140, "rgba(46,24,0,1)"),
		info: [
			fps = new majge.create("fps", "nocolide", 100, 20, 120, y+10, "rgba(0,0,0,1)"),
			scoreTxt = new majge.create("playerscore", "nocolide", 100, 20, 10, y+10, "rgba(0,0,0,1)"),
		],
	};
	gObjs.player.wGravity=1;
};
