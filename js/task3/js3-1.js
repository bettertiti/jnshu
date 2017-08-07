/**
 * Created by titi on 2017/8/5.
 */
document.getElementById("pic2").style.display="none";
var player = JSON.parse(localStorage.getItem("playdata"));
console.log(player)
var m = player.length-1;
var btn=document.getElementById("btn")
btn.value="查看"+(player.length-m)+"号身份";
document.getElementById("circle").innerHTML="1";
var playerlen=player.length;
function getid() {
         console.log(m)
            if(btn.value === "查看" + (player.length - m) + "号身份")
        {
            document.getElementById("idtext").style.display="block"
            document.getElementById("pic2").style.display="inline-block";
            document.getElementById("pic1").style.display="none";
            if(player[player.length - m-1]===0){
                document.getElementById("idtext").innerHTML="杀手"
            }
            else{
                document.getElementById("idtext").innerHTML="平民"
            }
            btn.value = "隐藏身份";
        }

            else if (m !== 0) {
                    if (btn.value === "隐藏身份") {
                        document.getElementById("idtext").style.display = "none";
                        btn.value = "传递给" + (player.length - m + 1) + "号";
                    }
                    else {
                        document.getElementById("pic1").style.display = "inline-block";
                        document.getElementById("pic2").style.display = "none";
                        btn.value = "查看" + (player.length - m + 1) + "号身份";

                        var playerid = (player.length - m + 1);
                        var circle = document.getElementById("circle");
                        circle.innerHTML = "" + playerid;
                        m--;
                    }
                }
            else if((btn.value === "隐藏身份")){
                btn.value = "法官查看";
            }
            else{
                window.location.href= ('js3-2.html');
            }

}