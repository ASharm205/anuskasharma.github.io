// nav switching from lectures and W3Schools 
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');
const burger = document.getElementById('hamburger');
const menu = document.querySelector('.nav-menu');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
};

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();

        burger.classList.remove('active');
        menu.classList.remove('active');

        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active');
        }
        this.classList.add('active');

        for (let k = 0; k < sections.length; k++) {
            sections[k].classList.remove('active');
        }

        let page = this.getAttribute('data-page');
        document.getElementById(page).classList.add('active');
    };
}
