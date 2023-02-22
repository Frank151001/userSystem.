function display(usersArray){
    const TABLE=$("#users");
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        tr=`
        <tr>
            <td>${user.email}</td>;
            <td>${user.password}</td>;
            <td>${user.name}</td>;
            <td>${user.lastname}</td>;
            <td>${user.number}</td>;
            <td>${user.age}</td>;
            <td>${user.adress}</td>;
            <td>${user.city}</td>;
            <td>${user.zip}</td>;
            <td>${user.payment}</td>;
            <td style="background-color:${user.color}"></td>;
        </tr>
        `;
        TABLE.append(tr);
    }
}

function init(){
    let users=readUsers();
    display(users);
}
window.onload=init;