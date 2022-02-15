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
        <td>${totalPrice}</td>
    
    `;
    infoBody.appendChild(tr);


})