var form = document.querySelector('form');
var username = document.querySelector('#username');
var password = document.querySelector('#password');

form.onsubmit = () => {
    if (username.value.length == 0 || password.value.length == 0){
        alert('Enter valid username and password!')
    }
}