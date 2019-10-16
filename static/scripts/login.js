
function hideEditUser() {
    $("#edit-user").hide();
}
hideEditUser();

function autoLogin(auto){

    if(getCookie().username && getCookie().password){
        $.post("api/login",{"username":getCookie().username,"password":getCookie().password},function (result) {
            console.log(result);
            if(result.code == 0){
                $(location).attr('href', '/');
            }else {
                fillUserInfo(getCookie().username,getCookie().password);
                if(!auto){
                    alert("Login failed, please check user name and password");
                }
            }
        })

    }else{
        fillUserInfo(getCookie().username,getCookie().password);
    }
}
autoLogin(true);
