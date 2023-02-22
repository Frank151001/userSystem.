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
    
    function validation(user){
        let valid=true;
        if(user.email==""){
            valid=false;
            $("#inputEmail").addClass("alert-error"); 
        }
        if(user.password==""){
            valid=false;
            $("#inputPassword").addClass("alert-error"); 
        }
        if(user.name==""){
            valid=false;
            $("#inputName").addClass("alert-error"); 
        }
        if(user.lastName==""){
            valid=false;
            $("#inputLastName").addClass("alert-error"); 
        }
        if(user.payment==""){
            valid=false;
            $("#inputPayment").addClass("alert-error"); 
        }
        return valid;
    }
    function validatePass(){
        let password=inputPassword.val();
        if(password.legnth<6){
            inputPasswrod.css("background-color","red");
        }else{
            inputPasswrod.css("background-color","green");
        }
    }
    function registerUser(){
        console.log(inputEmail.val(),inputPassword.val(),inputName.val(),inputLastName.val(),inputNumber.val(),inputAge.val(),inputColor.val(),inputCity.val(),inputState.val(),inputZip.val(),inputPayment.val())
        let newUser = new User(inputEmail.val(),inputPassword.val(),inputName.val(),inputLastName.val(),inputNumber.val(),inputAge.val(),inputColor.val(),inputCity.val(),inputState.val(),inputZip.val(),inputPayment.val());
        console.log(newUser);
        //clear the forum
        $("input").val("");

        if(validation(newUser)){
            saveUser(newUser);
        }
    }
function init(){
    $("#btnAdd").click(registerUser);
    $("#txtPassword").keyup(validatePass);
}
window.onload=init;