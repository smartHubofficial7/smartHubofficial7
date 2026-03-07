fetch("products.json")

.then(res => res.json())

.then(data => {

let container = document.getElementById("products");

data.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

`;

container.appendChild(div);

});

});
