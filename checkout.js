function sendOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let message = "New Order SmartHub\n\n";

message += "Name: "+name+"\n";
message += "Phone: "+phone+"\n";
message += "Address: "+address+"\n\n";

let total=0;

cart.forEach(p=>{
message+=p.name+" ₹"+p.price+"\n";
total+=p.price;
});

message+="\nTotal ₹"+total;

let url="https://wa.me/918481944109?text="+encodeURIComponent(message);

window.open(url,"_blank");

localStorage.removeItem("cart");

window.location.href="success.html";

}
