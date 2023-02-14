deleteCard('roseDismiss')
deleteCard('chocolateDismiss')
deleteCard('dairyDismiss')

plusMinusQuantity("dairyQuantity", "dairyPlusBtn", "dairyMinusBtn")
plusMinusQuantity("roseQuantity", "rosePlusBtn", "roseMinusBtn")
plusMinusQuantity("chocolateQuantity", "chocolatePlusBtn", "chocolateMinusBtn")

setValue("chocolateBuyBtn", "chocolateQuantity", 200)
setValue("roseBuyBtn", "roseQuantity", 100)
setValue("dairyBuyBtn", "dairyQuantity", 100)
