const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', onsubmit);

function onsubmit(evt){
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;

    if (email === '' || password === '') { 
        alert('All fields must be filled in.');
      } else {
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data)
   formElement.reset()
}  
};


