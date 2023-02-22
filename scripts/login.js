function login(){
    let inputPassword=$("#txtPassword").val();
    let inputUserName=$("#txtUserName").val();
    let flag=true;
    let users = readUsers();
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(inputPassword==user.password && inputUserName==user.email){
            window.location="users.html"
        }else{
            flag=false;
        }
    }
    if(!flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        },1000);
    }
}