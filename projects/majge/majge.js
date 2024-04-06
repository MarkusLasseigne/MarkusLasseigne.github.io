var majgeInit=function(){
    var dimentions={
        psyonic:{
            morality:function(){},
        },
        matter:{
            fadentral:function(){},
            altitude:function(){},
            flank:function(){},
        },
		radiation:{//default black, light sources emit sphere at tailing intensity, intersecting objects emit 4 screen rays every x distance for reflection maping on to nearest object combining object color with reflection colors, emiting whatever light to camera
			light:function(){},
		},

        temporal:{
            entropy:function(rate){},
        },
		properties:function(){
			var properties={
				volume:dimentions.matter.fadentral*dimentions.matter.altitude*dimentions.matter.flank,
				area:dimentions.matter.fadentral*dimentions.matter.flank,
			};
		}
    };
//    dimentionProperties:
};