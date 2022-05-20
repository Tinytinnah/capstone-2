const hamburger =  document.querySelector('#hamburger');
const list = document.querySelector('#nav-ul');

hamburger.addEventListener('click', (e) => {
    list.classList.toggle('show');
});

const z = document.querySelector('#InputPassword1');
const x = document.querySelector('#hide1');
const y = document.querySelector('#hide2');

x.addEventListener('click', (e) => {
    if (z.type === 'password') {
        z.type = 'text';
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        z.type = 'password';
        x.style.display = 'none';
        y.style.display = 'block';
    }
});

y.addEventListener('click', (e) => {
    if (z.type === 'password') {
        z.type = 'text';
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        z.type = 'password';
        x.style.display = 'none';
        y.style.display = 'block';
    }
});

const a = document.querySelector('#ConfirmPassword2');
const b = document.querySelector('#hide3');
const c = document.querySelector('#hide4');

b.addEventListener('click', (e) => {
    if (a.type === 'password') {
        a.type = 'text';
        b.style.display = 'block';
        c.style.display = 'none';
    } else {
        a.type = 'password';
        b.style.display = 'none';
        c.style.display = 'block';
    }
});

c.addEventListener('click', (e) => {
    if (a.type === 'password') {
        a.type = 'text';
        b.style.display = 'block';
        c.style.display = 'none';
    } else {
        a.type = 'password';
        b.style.display = 'none';
        c.style.display = 'block';
    }
});

const etError = (Element, message) => {
    const inControl = Element.parentElement;
    const errDisplay =inControl.querySelector('.error');
}

const form = document.querySelector('#form');
const err1 = document.querySelector('#error1');
const err2 = document.querySelector('error2');
const email = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = (e) => {
    const emailValue = email.value.trim();
    const passwordValue = x.value.trim();
    const password2Value = y.value.trim();
};

// if (emailValue ==== '' ) {
//     email    
// }


