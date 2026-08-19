/* ==============================
   Contact Form
   ============================== */

const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formStatus = document.getElementById("formStatus");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let valid = true;


    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }


    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }


    if (message.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    }


    if (valid) {
        formStatus.textContent = "Message submitted successfully!";
        form.reset();
    }

});


/* ==============================
   Navbar Active Highlight
   ============================== */

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==============================
   Navbar Click Highlight
   ============================== */

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* ==============================
   Back To Top Button
   ============================== */

const backToTop = document.getElementById("backToTop");


if (backToTop) {

    backToTop.style.display = "none";


    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

}


