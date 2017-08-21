/**
 * Created by titi on 2017/8/17.
 */
/**
 * Created by titi on 2017/8/8.
 */

var player = JSON.parse(localStorage.getItem("playdata"));
var killnum = JSON.parse(localStorage.getItem("killnumjson"));
var killnight = JSON.parse(localStorage.getItem("killnightjson"));
var killday = JSON.parse(localStorage.getItem("killdayjson"));
var killtotal = JSON.parse(localStorage.getItem("killtotaljson"));
console.log(killnum);

if(killnum!==null){
    killtotal.push(killnum);
    if((killtotal.length)%2===0){
        killday.push(killnum);
    }
    else{
        killnight.push(killnum);
    }
}
console.log(killtotal);
console.log(killnight);
console.log(killday);
localStorage.setItem("killnightjson",JSON.stringify(killnight));
localStorage.setItem("killtotaljson",JSON.stringify(killtotal));
localStorage.setItem("killdayjson",JSON.stringify(killday));

$(".day").click(function(){
    $(".container").slideToggle("slow");
});

// 判断杀手是否已杀人
var i=0;
if(killnight.length===i){
    $(".step1").click(function(){
        window.location.href= ('js4-kill.html');
    });
    $(".step2").click(function(){
        alert("还木有杀人就要扯")
    })
}
else{
    console.log(i);
    $(".step1").click(function(){
        alert("杀手每天只能杀一次");
    });
    $(".step1").css("background-color","#83b09a");
    var daytext="<div class='daytext'>"+"</div>"
    $(".step1").after(daytext);
    $(".daytext").text(killnum+1+"号玩家被杀死,他的真实身份是平民。");
    $(".sun").css("top","8.5rem");
    $(".listicon").css("height","17.5rem");
    // 判断后续步骤执行顺序
    var steparr =[];
    var step;
    $(".step2").click(function(){
            step = $('.step2').index(this);
            console.log(step);

            if (step === 0) {
                if(steparr.length===0){
                    $(".step2").eq(0).css("background-color","#83b09a");
                    steparr.push(step)
                    console.log(steparr)
                }
                else{
                    alert("说一次就够了")
                }
            }
            else if(step===1){
                if(steparr.length===0){
                    alert("让刚走的人说句话");
                }
                else if(steparr.length===1){
                    $(".step2").eq(1).css("background-color","#83b09a");
                    steparr.push(step);
                    console.log(steparr)
                }
                else{
                    alert("该投票了")
                }
            }
            else{
                if(steparr.length===0){
                    alert("让刚走的人说句话");
                }
                else if(steparr.length===1){
                    alert("该玩家发言")
                }
                else{
                    window.location.href= ('js4-kill.html');
                    $(".wrap").eq(0).clone(true).appendTo(".wrap");
                }
            }
            console.log(steparr)
        }
    );
}



