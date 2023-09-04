document.addEventListener("DOMContentLoaded", function() {
    // Navbar menu handling
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar'
    });

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Submit form contact
    contactForm = document.getElementById("form-contact");
    firstName = document.getElementById("firstName");
    lastName = document.getElementById("lastName");
    email = document.getElementById("emailInput");
    message = document.getElementById("message");

    contactForm.addEventListener("submit", function(){
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            yourMessage: message.value
        };
        alert(JSON.stringify(formData, null, 2));
        contactForm.reset();
    });

});