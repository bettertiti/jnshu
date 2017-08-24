/**
 * Created by titi on 2017/8/21.
 */


// function loadXMLDoc()
// {
//     var user=document.getElementById("user").value;
//     var password=document.getElementById("password").value;
//     var xmlhttp;
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState===4 && xmlhttp.status===200)
//         {
//           var jsons=JSON.parse(xmlhttp.responseText);
//           if (jsons.code === 0){
//               window.location.href="http://dev.admin.carrots.ptteng.com/#/login"
//           }
//           else{
//               alert(jsons.message)
//           }
//         }
//     };
//     xmlhttp.open("POST","/carrots-admin-ajax/a/login",true);
//     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xmlhttp.send("name="+user+"&pwd="+password);
// }
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
                    window.location.href=('http://dev.admin.carrots.ptteng.com/#/login ');
                }
               else{
                    document.getElementById("txt").innerHTML=jsons.message;
                }
            });
    }

});
// $("#loginbtn").click(function() {
//     $.ajax({
//         type: "post",
//         dataType: "html",
//         url: '/carrots-admin-ajax/a/login',

//             //     }
//             alert("ddslk")
//         }
//     });
// })