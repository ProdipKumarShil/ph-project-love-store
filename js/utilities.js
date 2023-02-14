document.getElementById("dairyQuantity").value = 0;
document.getElementById("roseQuantity").value = 0;
document.getElementById("chocolateQuantity").value = 0;

function deleteCard(btnId){
    document.getElementById(btnId).addEventListener('click', function(event){
        event.target.parentNode.parentNode.parentNode.style.display = 'none';
    })
}
function plusMinusQuantity(field, btn, btn2){
    let count = 0;
    document.getElementById(btn).addEventListener('click', function(){
        document.getElementById(field).value = count += 1;
    })
    document.getElementById(btn2).addEventListener('click', function(){
        document.getElementById(field).value = count -= 1;
    })
}

const totalCost = document.getElementById('totalCost');
const totalBalanceField = document.getElementById('totalBalance');

function setValue(buyBtn, inputField, price) {
    document.getElementById(buyBtn).addEventListener('click', function () {
        const quantityNum = parseInt(document.getElementById(inputField).value)
        totalCost.innerText = parseInt(totalCost.innerText) + (quantityNum * price);
        totalBalanceField.innerText = parseInt(totalBalanceField.innerText) - (quantityNum * price);
        document.getElementById(inputField).value = ''
    })
}



