const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = () => {
  backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form submission
    (function () {
        emailjs.init("rp8RURzAOtz11tbnD"); // Your Public Key
    })();

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_s8eqrwm", "template_o2nl02l", this)
            .then(function () {
                document.getElementById("form-message").textContent = "✅ Message sent successfully!";
                document.getElementById("form-message").style.color = "green";
                document.getElementById("contact-form").reset();
            }, function (error) {
                document.getElementById("form-message").textContent = "❌ Failed to send message: " + error.text;
                document.getElementById("form-message").style.color = "red";
            });
    });
