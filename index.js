const hamburger =  document.querySelector('#hamburger');
const list = document.querySelector('#nav-ul');

hamburger.addEventListener('click', (e) => {
    list.classList.toggle('show');
});

// form
const form = document.querySelector('form');
const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const inputPassword = document.querySelector('#InputPassword');
const confirmPassword = document.querySelector('#ConfirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

onst validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const inputPasswordValue = inputPassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    .forEach( (form) => {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('success')
        }, false)
      })

    // if (usernameValue === '') {
    //     setErrorEvent(username, 'usename is required');
    // } else {
    //     setSuccess(username);
    // }
};