
	
function addItemToCart(item) {
    if ((dict[item])) {
        dict[item] += parseInt(document.getElementById(item + "Qty").value);
    }
    else {
        dict[item] = parseInt(document.getElementById(item + "Qty").value);
    }

}


function Buy(item) {
    if ((dict[item])) {
        dict[item]++;
    }
    else {
        dict[item] = 1;
    }

    //transferring the cart item to session storage
    sessionStorage.setItem("theCart", JSON.stringify(dict));

    // Proceeding to the Checkout Pagee
    window.location.href = "checkout.html";
}


function promptMessage() {
    var message = "Your Cart\n\n";
    for (var key in dict) {
        message += `${itemNames[key]} x ${dict[key]} = USD ${dict[key] * eval(key)}\n`;
    }

    message += "\nClick OK to checkout now!\nCANCEL to check out later!";
    var messageBox = confirm(message);

    if (messageBox == true) {
        // passing the item in the cart to the Session storage
        sessionStorage.setItem("theCart", JSON.stringify(dict));

        // redirecting to the checkout page
        window.location.href = "checkout.html";
    }
}



function viewCart() {

    if (Object.keys(dict).length > 0) {
        promptMessage()
    }
    else {
        alert("Your cart is empty!\nPlease select the appropriate Package before proceeding to the Checkout.")
    }

}


// declaring constant variables
	const item1 = 4599.99;
	const item2 = 1399.99;
	const item3 = 1599.99;

const itemNames = {
    "item1": "4 Night Per Person in Srilanka with Sigiriya Excursion",
    "item2": "2 Night Per Person in Srilanka with Kandy Excursion",
    "item3": "4 Night Per Person in Srilanka with Ella Excursion",
};

// selecting add-to-cart buttons
	var item1_CartBtn = document.getElementById("item1");
	var item2_CartBtn = document.getElementById("item2");
	var item3_CartBtn = document.getElementById("item3");
	
	var viewCartBtn = document.getElementById("viewCart");

// selecting buy-now buttons
	var item1_BuyBtn = document.getElementById("item1Buy");
	var item2_BuyBtn = document.getElementById("item2Buy");
	var item3_BuyBtn = document.getElementById("item3Buy");


// diplaying prices in the DOM
	item1_BuyBtn.firstChild.textContent = "USD " + item1;
	item2_BuyBtn.firstChild.textContent = "USD " + item2;
	item3_BuyBtn.firstChild.textContent = "USD " + item3;
	
var dict = {};

// Adding Package to cart and Displaying
	item1_CartBtn.onclick = function () { addItemToCart("item1"), promptMessage() };
	item2_CartBtn.onclick = function () { addItemToCart("item2"), promptMessage() };
	item3_CartBtn.onclick = function () { addItemToCart("item3"), promptMessage() };


viewCartBtn.onclick = function () { viewCart() };

// To buy the Package Now
		item1_BuyBtn.onclick = function () { Buy('item1') };
		item2_BuyBtn.onclick = function () { Buy('item2') };
		item3_BuyBtn.onclick = function () { Buy('item3') };
