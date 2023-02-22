function display(usersArray){
    const TABLE=$("#users");
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        tr=`
        <tr>
            <td>${user.email}</td>;
            <td>${user.firstname}</td>;
            <td style="background-color:${user.color}"></td>;
        </tr>
        `;
        TABLE.append(tr);
    }
}

function init(){
    console.log("Listing users...");
    let users=readUsers();
    display(users);
}
window.onload=init;