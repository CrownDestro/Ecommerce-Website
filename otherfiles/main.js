let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener("click", () => {
    cart.classList.add("cart-active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("cart-active");
});


if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else { 
    ready();
}

function ready() {

    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}



function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    updateCartIcon();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
    updateCartIcon();
}


function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.querySelector(".product-title").innerText;
    var price = shopProducts.querySelector(".price").innerText;
    var productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartItems = document.querySelector(".cart-content");
    var cartBoxes = cartItems.querySelectorAll(".cart-box");
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBoxTitle = cartBoxes[i].querySelector(".cart-product-title").innerText;
        if (cartBoxTitle === title) {
            alert("You have already added this item to cart"); 
            return;
        }
    }
    
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img" />
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input
            type="number"
            name=""
            id=""
            value="1"
            class="cart-quantity"
        />
    </div>
    <!-- Remove Item -->
    <i class="bx bx-trash-alt cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox);

    cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);

    updatetotal();
    updateCartIcon();
}

function updatetotal() {
    var cartContent = document.querySelector(".cart-content");
    var cartBoxes = cartContent.querySelectorAll(".cart-box");
    var total = 0;
    cartBoxes.forEach(function(cartBox) {
        var priceElement = cartBox.querySelector(".cart-price");
        var quantityElement = cartBox.querySelector(".cart-quantity");
        var price = parseFloat(priceElement.innerText.replace("₹", ""));
        var quantity = parseInt(quantityElement.value);
        total += price * quantity;
    });

    total = Math.round(total * 100) / 100;
    document.querySelector(".total-price").innerText = "₹" + total;
}

function updateCartIcon() {
    var cartIcon = document.querySelector("#cart-icon");
    var cartBoxes = document.querySelectorAll(".cart-box");
    var quantity = 0;
    cartBoxes.forEach(function(cartBox) {
        var quantityElement = cartBox.querySelector(".cart-quantity");
        quantity += parseInt(quantityElement.value);
    });
    cartIcon.setAttribute("data-quantity", quantity);
}

