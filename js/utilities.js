function deleteCard(btnId){
    document.getElementById(btnId).addEventListener('click', function(event){
        event.target.parentNode.parentNode.parentNode.style.display = 'none';
    })
}
