document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#submit').disabled = true;
    document.querySelector('#new-task').onkeyup = () => {
        if (document.querySelector('#new-task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }
        else {
            document.querySelector('#submit').disabled = true;
        }        
    }
    
    document.querySelector('form').onsubmit = () => {
        
        const li = document.createElement('li');
        const task = document.querySelector('#new-task').value; 
        
        //create button
        const removebutton = document.createElement('button');
        removebutton.innerHTML = '-';
        removebutton.addEventListener("click", () => {
            removebutton.parentElement.remove();
            removebutton.remove();
        })
        
        //set-up and append li
        li.innerHTML = task;
        li.appendChild(removebutton);
        document.querySelector('#todo-list').append(li);
        
        //reset form
        document.querySelector('#new-task').value="";
        document.querySelector('#submit').disabled = true;
        
    return false;
}
});

