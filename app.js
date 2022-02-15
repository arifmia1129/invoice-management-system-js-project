function emptyInput(id) {
    document.getElementById(id).value = "";
}

document.getElementById("detail-submit-btn").addEventListener("click", function () {
    const buyerDetails = document.getElementById("buyer-details-input");
    const buyerInfo = document.getElementById("buyer-info");
    buyerInfo.innerText = buyerDetails.value;
    buyerDetails.value = "";
});

document.getElementById("add-details-btn").addEventListener("click", function () {
    const infoBody = document.getElementById("info-table");
    const itemName = document.getElementById("item-name-input").value;
    const itemPrice = document.getElementById("item-price-input").value;
    const itemQuantity = document.getElementById("item-quantity-input").value;
    const totalPrice = Number(itemPrice) * Number(itemQuantity);

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${itemName}</td>
        <td>${itemPrice}</td>
        <td>${itemQuantity}</td>
        <td class="subtotal-prices">${totalPrice}</td>
    
    `;

    infoBody.appendChild(tr);
    emptyInput("item-name-input");
    emptyInput("item-price-input");
    emptyInput("item-quantity-input");
    const totalPrices = document.getElementsByClassName("total-prices");
    for (const totalPrice of totalPrices) {
        console.log(totalPrice);
        alert("hello")
    }

    const subtotalPrices = document.getElementsByClassName("subtotal-prices");
    let sum = 0;
    for (const subtotalPrice of subtotalPrices) {
        sum = sum + parseFloat(subtotalPrice.innerText);
        const subTotal = document.getElementById("sub-total");

        subTotal.innerText = sum;

        const tax = sum * (20 / 100);

        document.getElementById("tax").innerText = tax.toFixed(2);

        document.getElementById("grand-total").innerText = parseFloat(tax.toFixed(2)) + parseFloat(sum);
        document.getElementById("grand-total-2").innerText = parseFloat(tax.toFixed(2)) + parseFloat(sum);

    }

});