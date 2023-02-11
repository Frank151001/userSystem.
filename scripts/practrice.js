let inputEmail=document.getElementById("inputEmail");
inputEmail.style.display=none;
$("#inputEmail").hide();

// TagName
for(let i=0;i<4;i++){
    document.getElementById("label")[i].style.display="none";
}
$("label").hide();

//classname
document.getElementsByClassName("menu")[0].style.display="none";
$(".menu a:first").hide();
