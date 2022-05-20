const hamburger =  document.querySelector('#hamburger');
const list = document.querySelector('#nav-ul');

hamburger.addEventListener('click', (e) => {
    list.classList.toggle('show');
});

const z = document.querySelector('#InputPassword1');
const myInput = document.querySelector('#hide1');
const y = document.querySelector('#hide2');

myInput.addEventListener('click', (e) => {
    if (z.type === 'password') {
        z.type = 'text';
        myInput.style.display = 'block';
        y.style.display = 'none';
    } else {
        z.type = 'password';
        myInput.style.display = 'none';
        y.style.display = 'block';
    }
});

y.addEventListener('click', (e) => {
    if (z.type === 'password') {
        z.type = 'text';
        myInput.style.display = 'block';
        y.style.display = 'none';
    } else {
        z.type = 'password';
        myInput.style.display = 'none';
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

const submit = document.querySelector('#submit');

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    const numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
};