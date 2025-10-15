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

 // service page navigation
 let serviceItems = document.querySelectorAll('.clickable-service');
 for(let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].onclick = function() {
    let servicePage = this.getAttribute('data-service');
                
// hide all pages
    for(let k = 0; k < sections.length; k++) {
         sections[k].classList.remove('active');
 }
                
    document.getElementById(servicePage).classList.add('active');
         };
}
        // back buttons
        let backBtns = document.querySelectorAll('.back-btn');
        for(let i = 0; i < backBtns.length; i++) {
            backBtns[i].onclick = function() {
                let backPage = this.getAttribute('data-back');
                
                // hide all pages
                for(let k = 0; k < sections.length; k++) {
                    sections[k].classList.remove('active');
                }
                
                document.getElementById(backPage).classList.add('active');
            };
        }

        // simple modal for case studies
        let modal = document.getElementById('case-modal');
        let cases = document.querySelectorAll('.clickable-case');
        let closeBtn = document.querySelector('.close');

        for(let i = 0; i < cases.length; i++) {
            cases[i].onclick = function() {
                let caseId = this.getAttribute('data-case');
                document.getElementById('modal-body').innerHTML = '<h2>Case Study: ' + caseId + '</h2><p>More details about this project would go here.</p>';
                modal.style.display = 'block';
            };
        }

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        };


// contact form submission web3forms 
const contactForm = document.getElementById('contact-form');
const resultDiv = document.getElementById('contact-result');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    resultDiv.innerHTML = '<p class="sending">Sending message...</p>';
    
    const formData = new FormData(contactForm);
    formData.append('access_key', '197d5ab0-4c88-4b15-ba3b-27ff057aa275');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            resultDiv.innerHTML = '<p class="success">Thank you! Your message has been sent successfully. We will get back to you within 24 hours.</p>';
            contactForm.reset();
        } else {
            resultDiv.innerHTML = '<p class="error">Oops! Something went wrong. Please try again or email us directly.</p>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<p class="error">Network error. Please check your connection and try again.</p>';
    }
});