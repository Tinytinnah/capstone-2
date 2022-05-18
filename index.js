const hamburger =  document.querySelector('#hamburger');
const list = document.querySelector('#nav-ul');

hamburger.addEventListener('click', (e) => {
    list.classList.toggle('show');
});