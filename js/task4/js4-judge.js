/**
 * Created by titi on 2017/8/8.
 */
var player = JSON.parse(localStorage.getItem("playdata"));
var killnum = JSON.parse(localStorage.getItem("killnumjson"));
var killnight = JSON.parse(localStorage.getItem("killnightjson"));
var killday = JSON.parse(localStorage.getItem("killdayjson"));
var killtotal = JSON.parse(localStorage.getItem("killtotaljson"));
console.log(killnum);
var steparr=[];

if(killnum!==null){
    killtotal.push(killnum);
    if((killtotal.length)%2===0){
        killday.push(killnum);
    }
    else{
        killnight.push(killnum);
    }
}
// 判断杀手和平民数量
var playk=[];
var plays=[];
for (var p=0;p<player.length;p++){
    if(player[p]===0){
        playk.push(p);
    }
    else{
        plays.push(p);
    }
}
var killer=[];
var silly=[];
for (var q=0;q<killtotal.length;q++){
    var total=killtotal[q];
    if(player[total]===0){
        killer.push(q);
    }
    else{
        silly.push(q);
    }
}
console.log(playk.length);
console.log(killer.length);
console.log(silly.length);
var pepwin=(playk.length-killer.length);
var killwin=(plays.length-silly.length);
if(pepwin===0){
    alert("杀手被干掉了，游戏结束");
    window.location.href= ('js4-result.html');
}
else if(pepwin>=killwin){
    alert("杀手胜利，游戏结束");
    window.location.href= ('js4-result.html');
}
localStorage.setItem("killwinjson",JSON.stringify(killwin));
localStorage.setItem("pepwinjson",JSON.stringify(pepwin));
localStorage.setItem("killnightjson",JSON.stringify(killnight));
localStorage.setItem("killtotaljson",JSON.stringify(killtotal));
localStorage.setItem("killdayjson",JSON.stringify(killday));
console.log(steparr);
console.log(".step1");
var daytext="<div class='daytext'>"+"</div>";
var nighttext="<div class='nighttext'>"+"</div>";
if(killday.length!==0) {
    for( var m=0; m<killday.length;m++){
        var kk=killnight[m];
        var dd=killday[m]
        $(".wrap").append($(".single").eq(m).clone());
        $(".daytext").eq(killday.length).remove();
        $(".step1").eq(killday.length).css("background-color","#29bde0");
        $(".day").eq(m+1).text("第"+(m+2)+"天");
        $(".step1").eq(m).css("background-color","#83b09a");
        $(".step2").eq(m).css("background-color","#83b09a");
        $(".step3").eq(m).css("background-color","#83b09a");
        $(".step4").eq(m).css("background-color","#83b09a");

        $(".step1").eq(m).after(daytext);
        $(".daytext").eq(m).text(kk+1+"号玩家被杀死,他的真实身份是平民。");
        $(".sun").eq(m).css("top","8.5rem");
        $(".listicon").eq(m).css("height","17.5rem");
        $(".step4").eq(m).after(nighttext);
        if(player[dd]===0){
            $(".nighttext").eq(m).text(dd+1+"号玩家被杀死,他的真实身份是杀手。");
        }
        else{
            $(".nighttext").eq(m).text(dd+1+"号玩家被杀死,他的真实身份是平民。");
        }
    }
    $(".container").hide();
    $(".container").eq(killday.length).show();
}
else{}
if((killtotal.length)%2===1){
    $(".step1").eq(killday.length).css("background-color","#83b09a");
    $(".step1").eq(killday.length).after(daytext);
    $(".daytext").eq(killday.length).text(killnum+1+"号玩家被杀死,他的真实身份是平民。");
    $(".sun").eq(killday.length).css("top","8.5rem");
    $(".listicon").eq(killday.length).css("height","17.5rem");

    steparr.push("step1");
}
else{}

console.log(steparr)
$(".step1").eq(killday.length).click(function(){
    switch (steparr.length){
        case 0:
            localStorage.setItem("steparrjson",JSON.stringify(steparr));
            window.location.href= ('js4-kill.html');
            break;
        case 1:
            alert("一天只能杀一次,该倒霉的人发言了");
            break;
        case 2:
            alert("一天只能杀一次，该群众说话了");
            break;
        case 3:
            alert("一天只能杀一次，该投票了");
            break;
    }
        });
$(".step2").eq(killday.length).click(function(){
    switch (steparr.length){
        case 0:
            alert("先杀人")
            break;
        case 1:
            steparr.push("step2");
            $(".step2").eq(killday.length).css("background-color","#83b09a");
            console.log(steparr);
            break;
        case 2:
            alert("刚刚说过了，该群众说话了");
            break;
        case 3:
            alert("没的说，该投票了");
            break;
    }
        });
$(".step3").eq(killday.length).click(function(){
    switch (steparr.length){
        case 0:
            alert("先杀人")
            break;
        case 1:
            alert("先让倒霉蛋说话");
            break;
        case 2:
            steparr.push("step3");
            $(".step3").eq(killday.length).css("background-color","#83b09a");
            break;
        case 3:
            alert("群众说完了，该投票了");
            break;
    }
        });
$(".step4").eq(killday.length).click(function(){
    switch (steparr.length){
        case 0:
            alert("先杀人")
            break;
        case 1:
            alert("先让倒霉蛋说话");
            break;
        case 2:
            alert("群众还没发言，投什么票")
            break;
        case 3:
            steparr.push("step4");
            $(".step4").eq(killday.length).css("background-color","#83b09a");
            window.location.href= ('js4-kill.html');
            break;
    }
        });
$(".day").click(function () {
    var dayup=$(".day").index(this);
    $(".container").eq(dayup).slideToggle("slow");
});


