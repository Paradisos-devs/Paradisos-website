emailjs.init("KEzb8JM-NI3MB_4ZW"); //dashboard του emailjs.com

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_i0oixiw", "template_qv9zrg1", this)
        .then(() => {
            alert("✅ Το μήνυμα στάλθηκε με επιτυχία!");
        }, (err) => {
            alert("❌ Σφάλμα: " + JSON.stringify(err));
        });
});