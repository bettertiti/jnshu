/**
 * Created by titi on 2017/8/7.
 */
var player = JSON.parse(localStorage.getItem("playdata"));
document.getElementById('result').innerHTML = "";
for (var m=0; m< player.length; m++) {
    if (player[m] === 0) {
        var par = document.createElement("div");
        var pardiv=document.createElement("div");
        var nod = document.createTextNode( "杀手");
        var nodnum = document.createTextNode(m+1);
        var elemen = document.getElementById("result");
        var wrap1 = document.createElement("div");
        wrap1.setAttribute("class","wrap");
        par.setAttribute("class","text");
        pardiv.setAttribute("class","num");
        elemen.appendChild(wrap1);
        wrap1.appendChild(par);
        wrap1.appendChild(pardiv);
        par.appendChild(nod);
        pardiv.appendChild(nodnum);
    }
    else {
        var para = document.createElement("div");
        var paradiv=document.createElement("div");
        var node = document.createTextNode("平民");
        var nodenum = document.createTextNode(m+1);
        var element = document.getElementById("result");
        var wrap2 = document.createElement("div");
        wrap2.setAttribute("class","wrap");
        para.setAttribute("class","text");
        paradiv.setAttribute("class","num");
        element.appendChild(wrap2);
        wrap2.appendChild(para);
        wrap2.appendChild(paradiv);
        para.appendChild(node);
        paradiv.appendChild(nodenum);
    }
}