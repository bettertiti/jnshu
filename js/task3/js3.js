/**
 * Created by titi on 2017/7/30.
 */

function inputplayer(){
    var playnum=document.getElementById("playnum").value;
    document.getElementById("playscroll").value=playnum;
    var playscroll=document.getElementById("playscroll").value;
    document.getElementById("playnum").value = playscroll;
}
function change() {
    var playscroll=document.getElementById("playscroll").value;
    document.getElementById("playnum").value=playscroll;
}
function plus(){
    var playnum=document.getElementById("playnum").value;
    var plus=++playnum;
    if(plus>18){
        document.getElementById("playscroll").value=18;
        document.getElementById("playnum").value=18;
    }else{
        document.getElementById("playscroll").value=plus;
        document.getElementById("playnum").value=plus;
    }
}
function minus(){
    var playnum=document.getElementById("playnum").value;
    var minus=--playnum;
    if(minus<4){
        document.getElementById("playscroll").value=4;
        document.getElementById("playnum").value=4;
    }else{
        document.getElementById("playscroll").value=minus;
        document.getElementById("playnum").value=minus;
    }
}
function killplay() {
    var playnum=document.getElementById("playnum").value;
    if(playnum<4){
        confirm("请输入正确游戏人数")
    }
    else{
        var killer=Math.floor(playnum/4);
        var people=parseInt(playnum)-parseInt(killer);
        var playarr=[];
        for (var i = 0; i<killer;i++) {
            playarr.push(0);
        }
        for (var j = 0; j<people;j++) {
            playarr.push(1);
        }
        var playlen=playarr.length;
        for (var k=0;k<playlen-1;k++){
            var playindex=parseInt(Math.random()*(playlen-k));
            var playinstand=playarr[playindex];
            playarr[playindex]=playarr[playlen-k-1];
            playarr[playlen-k-1]=playinstand;
        }
        document.getElementById('role').innerHTML = "";
        for (var m=0; m< playarr.length; m++){
            if(playarr[m]===0){
                var par=document.createElement("li");
                var nod=document.createTextNode("第"+(m+1)+"号是杀手");
                par.appendChild(nod);
                var elemen=document.getElementById("role");
                elemen.appendChild(par);
            }
            else{
                var para=document.createElement("li");
                var node=document.createTextNode("第"+(m+1)+"号是平民");
                para.appendChild(node);
                var element=document.getElementById("role");
                element.appendChild(para);
            }
        }
    }
    localStorage.setItem("playdata",JSON.stringify(playarr));
}

function start() {
    var playnum=document.getElementById("playnum").value;
    if(playnum<4){
        confirm("请输入正确游戏人数");

    }
    else {
        var killer = Math.floor(playnum / 4);
        var people = parseInt(playnum) - parseInt(killer);
        var playarr = [];
        for (var i = 0; i < killer; i++) {
            playarr.push(0);
        }
        for (var j = 0; j < people; j++) {
            playarr.push(1);
        }
        var playlen = playarr.length;
        for (var k = 0; k < playlen - 1; k++) {
            var playindex = parseInt(Math.random() * (playlen - k));
            var playinstand = playarr[playindex];
            playarr[playindex] = playarr[playlen - k - 1];
            playarr[playlen - k - 1] = playinstand;
        }
        localStorage.setItem("playdata",JSON.stringify(playarr));
        window.location.href=('js3-1.html');
    }



}