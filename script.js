// ===============================
// Select Elements
// ===============================

const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// ===============================
// Hamburger Menu
// ===============================

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// Close Mobile Menu
// ===============================

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

// ===============================
// Smooth Scrolling
// ===============================

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".hidden, .fade-left, .fade-right, .zoom-in"
).forEach((el)=>{

    observer.observe(el);

});

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const size=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.style.left=(e.offsetX-size/2)+"px";
        circle.style.top=(e.offsetY-size/2)+"px";

        circle.classList.add("ripple");

        const ripple=this.querySelector(".ripple");

        if(ripple){
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

// ===============================
// Contact Form Validation
// ===============================

const form=document.getElementById("contactForm");
const successMessage=document.getElementById("successMessage");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const fullname=document.getElementById("fullname").value.trim();
    const email=document.getElementById("email").value.trim();
    const subject=document.getElementById("subject").value.trim();
    const message=document.getElementById("message").value.trim();

    if(
        fullname==="" ||
        email==="" ||
        subject==="" ||
        message===""){
        alert("Please fill in all required fields.");
        return;
    }

   successMessage.textContent =
    "✅ Application submitted successfully! Our team will contact you shortly via email.";

    successMessage.classList.add("show");

    form.reset();

    setTimeout(()=>{

        successMessage.classList.remove("show");

        successMessage.textContent="";

    },4000);

});
// ======================================
// Course Card Click -> Application Form
// ======================================

const courseCards = document.querySelectorAll(".card");
const subjectInput = document.getElementById("subject");

courseCards.forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const course = card.dataset.course;

        subjectInput.value = course + " Application";

        document.querySelector("#contact").scrollIntoView({

            behavior: "smooth"

        });

        subjectInput.focus();

    });

});