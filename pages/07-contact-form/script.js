function validateForm() {
      let valid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      nameError.style.display = "none";
      emailError.style.display = "none";
      messageError.style.display = "none";

      if (name === "") {
        nameError.style.display = "block";
        valid = false;
      }

      if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.style.display = "block";
        valid = false;
      }

      if (message === "") {
        messageError.style.display = "block";
        valid = false;
      }

      if (valid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      }

      return false;
    }