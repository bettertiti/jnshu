/**
 * Created by titi on 2017/8/19.
 */
var player = JSON.parse(localStorage.getItem("playdata"));
var killnight = JSON.parse(localStorage.getItem("killnightjson"));
var killday = JSON.parse(localStorage.getItem("killdayjson"));
var killtotal = JSON.parse(localStorage.getItem("killtotaljson"));
var killwin = JSON.parse(localStorage.getItem("killwinjson"));
var pepwin = JSON.parse(localStorage.getItem("pepwinjson"));
if(pepwin===0){
    $(".text2").text("水民胜利");
    $(".text3").text("太棒了！终于把可恶的杀手都干掉了，为死去的水民复仇了，水民万岁！");
}
else if(pepwin>=killwin){
    $(".text2").text("杀手胜利");
    $(".text3").text("太棒了！终于把可怜的水民都干掉了！");
}
else{}
for(var i=0; i<killnight.length-1;i++){
    $(".m2").append($(".wrap").eq(i).clone());
    if(killnight.length!==killday.length){
        $(".m2-3").eq(killnight.length-1).remove();
    }
    else{}
}

for(var j=0; j<killnight.length;j++){
    var dd=killday[j];
    $(".m-text1").eq(j).text("第"+(j+1)+"天");
    $(".m2-2").eq(j).text("晚上："+(killnight[j]+1)+"号被杀手杀死，"+(killnight[j]+1)+"号是水民");
    if(player[dd]===0){
        $(".m2-3").eq(j).text("白天："+(dd+1)+"号全民投票投死，"+(dd+1)+"号是杀手");
    }
    else{
        $(".m2-3").eq(j).text("白天："+(dd+1)+"号被杀手杀死，"+(dd+1)+"号是水民");
    }
}