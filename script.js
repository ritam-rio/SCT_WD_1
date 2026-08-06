const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

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

const form=document.getElementById("contactForm");
const successMessage=document.getElementById("successMessage");
if (form) {
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
}

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

    });

});
