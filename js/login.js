const validEmail = 'love@email.com';
const validPass = 'yourMind';

const email = document.getElementById('emailField');
const password = document.getElementById('passwordField');
const btn = document.getElementById('loginBtn');

btn.addEventListener('click', function(){
    if(email.value == validEmail && password.value == validPass){
        window.location.href = 'store.html'
    }
    else{
        email.value = ''
        password.value = ''
        alert('email: love@email.com \npassword: yourMind');
    }
})
