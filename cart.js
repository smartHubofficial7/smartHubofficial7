let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartItems");

let total = 0;

cart.forEach((item,index)=>{

let div = document.createElement("div");

div.className="product";

div.innerHTML=`

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

`;

container.appendChild(div);

total += item.price;

});

document.getElementById("total").innerText="Total Price: ₹"+total;

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
