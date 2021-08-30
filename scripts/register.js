var form = document.querySelector('form');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var email = document.querySelector('#email')

form.onsubmit = () => {
    if (username.value.length == 0 || username.value.length > 20){
        alert('Username must be between 1 and 20 characters!')
    }

    if (password.value.length == 0){
        alert('Enter a valid password!')
    }

    if (!email.value.includes('@')){
        alert('you forgot the @!')
    }
}