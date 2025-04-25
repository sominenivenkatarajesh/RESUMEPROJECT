document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            if (email.trim() === "" || message.trim() === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }
});
