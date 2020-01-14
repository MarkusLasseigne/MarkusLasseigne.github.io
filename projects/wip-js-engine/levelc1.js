var level1 = function(){
    var cC = init("2d", "down");

    var sW = window.innerWidth;
    var sH = window.innerHeight;

    function ground(){
        var hH = sH/2;
        cC.beginPath();
        cC.rect(0,50,100,100);
        cC.fillStyle = "green";
        cC.fill();
    }
    ground();

    console.log("yee");

};