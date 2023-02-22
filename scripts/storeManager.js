function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    let val= JSON.stringify(oldUsers);
    console.log(val);
    localStorage.setItem("users",val);
}
function readUsers(){
    let users = localStorage.getItem("users");
    console.log(users);
    if(!users){
        return[];
    }else{
        let listUser=JSON.parse(users)
        console.log(listUser);
        return listUser;
    }
}