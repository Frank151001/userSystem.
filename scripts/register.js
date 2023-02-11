console.log("register");
//Constructor
function User(email,password,name,lastName,number,age,color,address,city,state,zip,payment){
    this.email=email;
    this.password=password;
    this.name=name;
    this.lastName=lastName;
    this.number=number;
    this.age=age;
    this.color=color;
    this.adress=address;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.payment=payment;
}
//Global Variables
    let inputEmail=$("#inputEmail");
    let inputPassword=$("#inputPassword");
    let inputName=$("#inputName");
    let inputLastName=$("#inputLastName");
    let inputNumber=$("#inputNumber");
    let inputAge=$("#inputAge");
    let inputColor=$("#inputColor");
    let inputCity=$("#inputCity");
    let inputState=$("#inputState");
    let inputZip=$("#inputZip");
    let inputPayment=$("#inputPayment");
    
    function registerUser(){
        console.log(inputEmail.val(),inputPassword.val(),inputName.val(),inputLastName.val(),inputNumber.val(),inputAge.val(),inputColor.val(),inputCity.val(),inputState.val(),inputZip.val(),inputPayment.val())
        let newUser = new User(inputEmail.val(),inputPassword.val(),inputName.val(),inputLastName.val(),inputNumber.val(),inputAge.val(),inputColor.val(),inputCity.val(),inputState.val(),inputZip.val(),inputPayment.val());
        console.log(newUser);
    }

    function clearUser(){
        $("input").val("");
    }


function init(){
    $("#btnAdd").click(registerUser);
    $("#btnAdd").click(clearUser);
}
window.onload=init;