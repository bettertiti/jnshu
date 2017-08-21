/**
 * Created by titi on 2017/8/9.
 */
var player = JSON.parse(localStorage.getItem("playdata"));
console.log(player);
var killnight = JSON.parse(localStorage.getItem("killnightjson"));
var killtotal = JSON.parse(localStorage.getItem("killtotaljson"));
var killday = JSON.parse(localStorage.getItem("killdayjson"));
// console.log(killnight);
for (var m=0; m< player.length; m++) {
    var playbox = "<div class='box'>"+"<div class='box1'>"+"</div>"+"<div class='box2'>"+"</div>"+"</div>";
    $(playbox).appendTo(".wrap");
    $(".box2").eq(m).text(m+1+"号");
    if(player[m]===0){
        $(".box1").eq(m).text("杀手");
    }
    else{
        $(".box1").eq(m).text("平民");
    }
}

var boxlist = document.getElementsByClassName('box1');
console.log(boxlist);
var killnum;
var killarr=[];
for(var i=0; i<killtotal.length; i++){
    $(boxlist).eq(killtotal[i]).css("background-color","red");
}
if((killtotal.length)%2===0)
{   $(".head-cr").text("杀手杀人");
    $(boxlist).click(function () {
            killnum=$(boxlist).index(this);
            console.log(killnum);
            if(player[killnum]===0){
                console.log(killarr);
                $(boxlist).eq(killarr[killarr.length-1]).css("background-color","#f5c97b");
                confirm("想什么呢，速速换人");
                $("#sure").attr('disabled',true);
            }
            else{
                if(killtotal.length===0){
                    killarr.push(killnum);
                    $(boxlist).css("background-color","#f5c97b");
                    $(this).css("background-color","red");
                    $("#sure").attr('disabled',false);
                }
                else{
                    if($.inArray(killnum,killtotal)===-1){
                        killarr.push(killnum);
                        $(boxlist).css("background-color","#f5c97b");
                        for(var m=0; m<killtotal.length; m++){
                            $(boxlist).eq(killtotal[m]).css("background-color","red");
                        }
                        $(this).css("background-color","red");
                        $("#sure").attr('disabled',false);
                    }
                    else{
                        alert("人都死了也不放过")
                    }
                }
            }
        }
    );
}
else{
    $(".head-cr").text("投票");
    $(boxlist).click(function (){
        killnum=$(boxlist).index(this);
        if($.inArray(killnum,killtotal)===-1){
                killarr.push(killnum);
                $(boxlist).css("background-color","#f5c97b");
                for(var m=0; m<killtotal.length; m++){
                    $(boxlist).eq(killtotal[m]).css("background-color","red");
                }
                $(this).css("background-color","red");
            }
        else{
            alert("人都死了也不放过")
        }
    });

}

function killconfirm() {
    console.log(killarr);
    if(killarr.length===0){
        $("#sure").attr('disabled',true);
    }
    else{
        console.log(killnum);
        localStorage.setItem("killnumjson",JSON.stringify(killnum));
        window.location.href="js4-judge.html";
    }
}