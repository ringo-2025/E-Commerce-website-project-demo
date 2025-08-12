
//Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

let btnPay = document.querySelector(".btn-buy");

//press Pay button to go to Payment page
function process(){

    let username = document.querySelector("#username").value;
    let prod_id = 0;
    let url = "/add_cart?";
    let count = 0;
    if(username.length == 0){
        alert("Please select your username first before adding cart")
    }
    else{
        
        var Items = localStorage.getItem("cartItems");

        if(Items){
            Items = JSON.parse(Items);
            
            if(Items.length == 0){
                alert("No item can be added to cart. Please select the item first.")
            }
            else{
                
                for(var i = 0; i < Items.length; i++){
                    var item = Items[i];
    
                    var cartBoxes = document.getElementsByClassName("cart-box");
                    var cartBox = cartBoxes[cartBoxes.length - 1];
                    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
                    quantityElement.value = item.quantity;
    
                    let price = parseInt(item.price.substring(1, 5)); 
                    let itemTotalPrice = price * quantityElement.value;
    
                    if(item.title == "Taylor 50th Anniversary Builder's Edition 314ce LTD - Kona Burst"){
                        prod_id = 1;
                        if(count == 0){
                            url += "prod_id1=" + prod_id + "&"
                            url += "qty1=" + quantityElement.value + "&"
                            url += "price1=" + itemTotalPrice + "&"
                            url += "f_username1=" + username
                        }
                        else{
                            url += "&prod_id1=" + prod_id + "&"
                            url += "qty1=" + quantityElement.value + "&"
                            url += "price1=" + itemTotalPrice + "&"
                            url += "f_username1=" + username
                        }
                        count ++;
                    }
                    else if(item.title == "ESP Exhibition 2024 EX24-11 HORIZON CTM FR"){
                        prod_id = 2;
                        if(count == 0){
                            url += "prod_id2=" + prod_id + "&"
                            url += "qty2=" + quantityElement.value + "&"
                            url += "price2=" + itemTotalPrice + "&"
                            url += "f_username2=" + username
                        }
                        else{
                            url += "&prod_id2=" + prod_id + "&"
                            url += "qty2=" + quantityElement.value + "&"
                            url += "price2=" + itemTotalPrice + "&"
                            url += "f_username2=" + username
                        }
                        count ++;
                    }
                    else if(item.title == "Boden Singularity NX 7 True Temperament"){
                        prod_id = 3;
                        if(count == 0){
                            url += "prod_id3=" + prod_id + "&"
                            url += "qty3=" + quantityElement.value + "&"
                            url += "price3=" + itemTotalPrice + "&"
                            url += "f_username3=" + username
                        }
                        else{
                            url += "&prod_id3=" + prod_id + "&"
                            url += "qty3=" + quantityElement.value + "&"
                            url += "price3=" + itemTotalPrice + "&"
                            url += "f_username3=" + username
                        }
                        count ++;
                    }
                    else if(item.title == "Blue LAVA Original"){
                        prod_id = 4;
                        if(count == 0){
                            url += "prod_id4=" + prod_id + "&"
                            url += "qty4=" + quantityElement.value + "&"
                            url += "price4=" + itemTotalPrice + "&"
                            url += "f_username4=" + username
                        }
                        else{
                            url += "&prod_id4=" + prod_id + "&"
                            url += "qty4=" + quantityElement.value + "&"
                            url += "price4=" + itemTotalPrice + "&"
                            url += "f_username4=" + username
                        }
                        count ++;
                    }
    
                
                }

                clearCart();

                alert("loading to the add cart page...");
    
                var pWin = window.open(url, "cWin", width="180", height="150");
            }
            
        }
        else{
            alert("No item can be added to cart. Please select the item first.")
        }    

    }
    

}

function payment_process(){

    let username = document.querySelector("#username").value;

    if(username.length == 0){
        alert("Please select your username first before checking out")
    }
    else{

        let url = "/check_out?f_check_out_username=" + username;

        alert("loading to the payment page...");

        location.replace(url);
    }
    
}

//clear all cart items
function clearCart() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }

    // Clear local storage
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotal");

    // Update total price display
    document.getElementsByClassName("total-price")[0].innerText = "$0";

    // Update cart icon
    updateCartIcon();
}

//get the cart items informations for databases preparation
function getCartItems(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var Items = [];

    for(var i = 0; i < cartBoxes.length; i++){
        cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cart.getElementsByClassName("cart-price")[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg
        };
        Items.push(item);
    }

    localStorage.setItem("Items", JSON.stringify(cartItems));
}

//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
}

//Making Add to cart
//Cart working js
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

//Making Function
function ready(){

    //Remove Item from Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    //Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    //Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

    loadCartItems();
}

//Remove Cart Item
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatetotal();
    saveCartItems();
}
//Quantity Change
function quantityChanged(event){
    var input = event.target;

    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }

    updatetotal();
    saveCartItems();
    updateCartIcon();
}

//Add Cart Function
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;

    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    updatetotal();
    saveCartItems();
    updateCartIcon();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    for(var i = 0; i < cartItemsNames.length; i++){
        
        if(cartItemsNames[i].innerText == title){
            alert("You have already added this item to cart");
            return;
        }
    }

    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img" />

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

						<!--Remove Item-->
						<i class="bx bx-trash-alt cart-remove"></i>`
                        
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);

    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);

    saveCartItems();
    updateCartIcon();
}

//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;

        total += price*quantity;

    }
    //If price contain some cents
    total = Math.round(total*100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
    //Save Total to LocalStorage
    localStorage.setItem("cartTotal", total);
}

//Keep Item in cart even when page refresh with Localstorage
function saveCartItems(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartItems = [];

    for(var i = 0; i < cartBoxes.length; i++){
        cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cart.getElementsByClassName("cart-price")[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg
        };
        cartItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


//Transfer the saved total price from localStorage to the payment page box
function paymentGetTotal(){
    let totalprice = localStorage.getItem("cartTotal");

    let priceBox = document.querySelector("#amt");

    if(totalprice){
        priceBox.value = totalprice;
    }
    else{
        priceBox.value = 0;
    }
}

//Loads in Cart
function loadCartItems(){
    var cartItems = localStorage.getItem("cartItems");
    if(cartItems){
        cartItems = JSON.parse(cartItems);

        for(var i = 0; i < cartItems.length; i++){
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }

    var cartTotal = localStorage.getItem("cartTotal");
    if(cartTotal){
        document.getElementsByClassName("total-price")[0].innerText = "$" + cartTotal;
    }

    updateCartIcon();
}


//Quantity in Cart Icon
function updateCartIcon(){
    var cartBoxes = document.getElementsByClassName("cart-box");
    var quantity = 0;

    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);
    }

    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity);
}