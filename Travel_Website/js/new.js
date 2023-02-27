// Accessing session storage
	var sessionString = sessionStorage.getItem("billingDetails");
	const billingDetails = JSON.parse(sessionString);

	var sessionString = sessionStorage.getItem("theCart");
	const theCart = JSON.parse(sessionString);


// Package prices
    const item1 = 4599.99;
	const item2 = 1399.99;
	const item3 = 1599.99;




var itemNames = {
    "item1": "4 Night Per Person in Srilanka with Sigiriya Excursion",
    "item2": "2 Night Per Person in Srilanka with Kandy Excursion",
    "item3": "4 Night Per Person in Srilanka with Ella Excursion",
};


// Accessing html DOM elements
	var fullname = document.querySelector(".name");
	var email = document.querySelector(".email");
	var address = document.querySelector(".address");


// Assigning personal details to variables 
	const NAME = `${billingDetails["fname"]} ,${billingDetails["lname"]}`;
	const EMAIL = billingDetails["email"];
	const ADDRESS = `${billingDetails["address1"]},${billingDetails["CheckDate"]}, ${billingDetails["country"]}.`;


// displaying personal details on html document
	fullname.textContent = `NAME : ${NAME}`;
	email.textContent = `EMAIL : ${EMAIL}`;
	address.textContent = `ADDRESS : ${ADDRESS}`;

	additemToTheBill();

function additemToTheBill() {
    let totalPrice = 0;
    let bill = document.getElementById("bill");
    for (key in theCart) {
        // creating HTML nodes
        let divElement = document.createElement("DIV");
        let horizontalLine = document.createElement("HR");
        let para_itemName = document.createElement("P");
        let para_itemQty = document.createElement("P");
        let para_itemPrice = document.createElement("P");

        // creating text nodes
        itemNameText = document.createTextNode(`Choosen Package: ${itemNames[key]}`);
        itemQtyText = document.createTextNode(`QTY : ${theCart[key]}`);
        itemPriceText = document.createTextNode(`PRICE : USD ${eval(key)} X ${theCart[key]}`);

        // calculating total bill
        totalPrice += theCart[key] * eval(key);

        // appending nodes to the parent nodes
        para_itemName.appendChild(itemNameText);
        para_itemQty.appendChild(itemQtyText);
        para_itemPrice.appendChild(itemPriceText);


        divElement.appendChild(para_itemName);
        divElement.appendChild(para_itemQty);
        divElement.appendChild(para_itemPrice);
        divElement.appendChild(horizontalLine);

        bill.appendChild(divElement);
    }

    // Displaying total bill
    let para_total = document.createElement("P");
    totalText = document.createTextNode(`TOTAL : USD ${totalPrice.toFixed(2)}`);

    para_total.appendChild(totalText);
    bill.appendChild(para_total);
}