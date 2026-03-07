// CART SYSTEM

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll(".product button");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        const product = btn.parentElement;

        const name = product.querySelector("h3").innerText;
        const price = product.querySelector("p").innerText;
        const image = product.querySelector("img").src;

        const item = {
            name,
            price,
            image
        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart 🛒");
    });
});


// SEARCH SYSTEM

const searchBtn = document.querySelector(".header-icons button");
const searchInput = document.querySelector(".header-icons input");

searchBtn.addEventListener("click", () => {

    const value = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const title = product.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});


// NEWSLETTER

const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", () => {

    const email = document.querySelector(".newsletter input").value;

    if(email === ""){
        alert("Please enter email");
        return;
    }

    alert("Subscribed successfully 🎉");

});


// CART ICON CLICK

const cartIcon = document.querySelector(".header-icons span:last-child");

cartIcon.addEventListener("click", () => {

    if(cart.length === 0){
        alert("Cart is empty");
        return;
    }

    let message = "Cart Items:\n\n";

    cart.forEach(item => {
        message += item.name + " - " + item.price + "\n";
    });

    alert(message);

});
