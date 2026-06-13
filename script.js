let cart = [];

function addToCart(productName) {

    cart.push(productName);

    updateCart();

}

function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    if(cart.length === 0){
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item,index)=>{

        const div = document.createElement("div");

        div.style.padding = "10px";
        div.style.marginBottom = "10px";
        div.style.background = "#222";
        div.style.borderRadius = "8px";

        div.innerHTML = `
            ${item}
            <button onclick="removeItem(${index})"
            style="
            float:right;
            background:red;
            color:white;
            border:none;
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;">
            Remove
            </button>
        `;

        cartItems.appendChild(div);

    });

}

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

document.getElementById("checkout-btn").addEventListener("click", ()=>{

    if(cart.length === 0){

        alert("Your cart is empty.");

        return;

    }

    let message =
    "Hello Sidhu Store,%0A%0AI want to order:%0A";

    cart.forEach(item=>{

        message += "• " + item + "%0A";

    });

    message += "%0AName:%0AAddress:%0APhone:%0A";

    const whatsappURL =
    "https://wa.me/919988563942?text=" + message;

    window.open(whatsappURL,"_blank");

});

document.getElementById("searchInput").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product=>{

        let text =
        product.innerText.toLowerCase();

        if(text.includes(value)){

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});

updateCart();
