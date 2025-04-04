document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Thank you for reaching out, " + name + "! We will get back to you soon.";
        formMessage.className = "success";
    } else {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.className = "error";
    }

    formMessage.classList.remove("hidden");
});
