function signup(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

localStorage.setItem("user",JSON.stringify({email,password}));

alert("Account created");

}

function login(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

let user=JSON.parse(localStorage.getItem("user"));

if(user.email===email && user.password===password){

alert("Login success");

window.location.href="index.html";

}else{

alert("Invalid login");

}

}
