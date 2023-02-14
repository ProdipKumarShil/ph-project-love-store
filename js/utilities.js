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


