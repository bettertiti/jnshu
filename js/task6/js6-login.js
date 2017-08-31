/**
 * Created by titi on 2017/8/31.
 */
$("#loginbtn").click(function(){
    var user=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    if(user===""||password==="")
    {alert("请输入用户名和密码")}
    else{
        $.post("/carrots-admin-ajax/a/login",{
                "name":user,
                "pwd":password
            },
            function(data){
                var jsons=JSON.parse(data);
                console.log(jsons.message);
                if(jsons.message==="success"){
                    window.location.href=('js6-background.html');
                }
                else{
                    document.getElementById("txt").innerHTML=jsons.message;
                }
            });
    }
});