deleteCard('roseDismiss')
deleteCard('chocolateDismiss')
deleteCard('dairyDismiss')

plusMinusQuantity("dairyQuantity", "dairyPlusBtn", "dairyMinusBtn")
plusMinusQuantity("roseQuantity", "rosePlusBtn", "roseMinusBtn")
plusMinusQuantity("chocolateQuantity", "chocolatePlusBtn", "chocolateMinusBtn")

setValue("chocolateBuyBtn", "chocolateQuantity", 200)
setValue("roseBuyBtn", "roseQuantity", 100)
setValue("dairyBuyBtn", "dairyQuantity", 100)

document.getElementById('pomoBtn').addEventListener('click', function(event){
    const code = document.getElementById('pomoInput').value;
    if(code == 102){
        const totalCostAmount = parseInt(document.getElementById('totalCost').innerText);
        document.getElementById('totalCost').innerText = totalCostAmount - (totalCostAmount * 0.2);
    }
    else{
        alert("Wrong Pomo Code");
    }
})

