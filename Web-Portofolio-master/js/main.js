document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a'); 
    const sections = Array.from(navLinks).map(link => {
      const id = link.getAttribute('href').substring(1); 
      return document.getElementById(id); 
    });

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY; 
      let activeSection = null;
  
      sections.forEach(section => {
        const offset = section.offsetTop - 150; 
        const height = section.offsetHeight;
  
        if (scrollY >= offset && scrollY < offset + height) {
          activeSection = section.getAttribute('id'); 
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active'); 
        if (link.getAttribute('href').substring(1) === activeSection) {
          link.classList.add('active'); 
        }
      });
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
  
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form'); 
    const nameInput = form.querySelector('input[name="name"]'); 
    const emailInput = form.querySelector('input[name="email"]'); 
    const messageInput = form.querySelector('#message'); 
    const submitButton = form.querySelector('.btn-submit'); 

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        let isValid = true; 
        let errorMessages = []; 

        if (nameInput.value.trim() === '') {
            isValid = false;
            errorMessages.push("Name must be filled in."); 
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            errorMessages.push("Email must be valid."); 
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            errorMessages.push("Message must be filled in."); 
        }

        if (!isValid) {
            alert(errorMessages.join("\n")); 
        } else {
            alert("Message has been sent successfully!"); 
            form.reset(); 
        }
    });
});