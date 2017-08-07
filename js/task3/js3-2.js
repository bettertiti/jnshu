/**
 * Created by titi on 2017/8/7.
 */
var player = JSON.parse(localStorage.getItem("playdata"));
localStorage.removeItem("playdata");
console.log(player)
document.getElementById('result').innerHTML = "";
for (var m=0; m< player.length; m++) {
    if (player[m] === 0) {
        var par = document.createElement("div");
        var pardiv=document.createElement("div");
        var nod = document.createTextNode( "杀手");
        var nodnum = document.createTextNode(m+1);
        par.appendChild(nod);
        pardiv.appendChild(nodnum);

        var elemen = document.getElementById("result");
        elemen.appendChild(par);
        par.appendChild(pardiv);
    }
    else {
        var para = document.createElement("div");
        var paradiv=document.createElement("div");
        var node = document.createTextNode("平民");
        var nodenum = document.createTextNode(m+1);
        para.appendChild(node);
        paradiv.appendChild(nodenum);
        var element = document.getElementById("result");
        element.appendChild(para);
        para.appendChild(paradiv);
    }
}