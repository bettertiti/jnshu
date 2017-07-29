/**
 * Created by titi on 2017/7/29.
 */
function blingbling(){
    function bg1() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ',' + g + ',' + b + ")";
    }
    var color = [];
    var arr = document.getElementsByClassName('box');//array;//并不是
    var all = [];
    for(var j=0;j<arr.length;j++) {
        all.push(arr[j])
    }
    for(var y=0;y<all.length;y++){
        all[y].style.backgroundColor="rgb(223,161,53)";
    }
    for (var i = 0; i < 3; i++) {
        var co=bg1();
        function contains(color, co) {
            var i = color.length;
            while (i--) {
                if (color[i] === co) {
                    return 1;
                }
            }
            return 0;
        }
        var colo=contains(color,co);
        if( (colo===0)&&(co!=="rgb(223,161,53)" )){
            color.push(co);
            var x = Math.floor(Math.random() * all.length);
            all[x].style.backgroundColor =color[i];
            all.splice(x,1);
        }
        else{
            i--;
        }
    }
}

var ip;
function test(){
    ip=setInterval( "blingbling()",1000);
}
function start(){
    clearInterval(ip);
    test();
}

function stopbling(){
    clearInterval(ip);
    var arr = document.getElementsByClassName('box');//array;//并不是
    var all = [];
    for(var j=0;j<arr.length;j++) {
        all.push(arr[j])
    }
    for(var y=0;y<all.length;y++) {
        all[y].style.backgroundColor = "rgb(223,161,53)";
    }
}
