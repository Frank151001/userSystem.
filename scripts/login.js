function login(){
    let pass=$("#txtPassword").val();
    let uname=$("#txtUserName").val();
    let flag=true;
    let users = readUsers();
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(pass==user.password && uname==user.email){
            window.location="users.html"
        }else{
            flag=false;
        }
    }
    if(!flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        },3000);
    }
}