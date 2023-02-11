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
    
    
    function registerUser(){
        let inputEmail=$("#inputEmail").val();
        let inputPassword=$("#inputPassword").val();
        let inputName=$("#inputName").val();
        let inputLastName=$("#inputLastName").val();
        let inputNumber=$("#inputNumber").val();
        let inputAge=$("#inputAge").val();
        let inputColor=$("#inputColor").val();
        let inputCity=$("#inputCity").val();
        let inputState=$("#inputState").val();
        let inputZip=$("#inputZip").val();
        let inputPayment=$("#inputPayment").val();
        console.log(inputEmail,inputPassword,inputName,inputLastName,inputNumber,inputAge,inputColor,inputCity,inputState,inputZip,inputPayment)
        let newUser = new User(inputEmail,inputPassword,inputName,inputLastName,inputNumber,inputAge,inputColor,inputCity,inputState,inputZip,inputPayment);
        console.log(newUser);
    }



function init(){
    $("#btnAdd").click(registerUser);
}
window.onload=init;