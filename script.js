window.onload = () => {
    var typed = new Typed(".input", {
        strings:["Jeselyn Arviana.", "an Undergraduate Student."],
        typeSpeed: 60,
        backSpeed : 50,
        loop:true
    });
    let hamburger = document.querySelector(".hamb");
    let navList = document.querySelector(".nav-list");

    hamburger.onclick = () => {
        hamburger.classList.toggle("bx-x");
        navList.classList.toggle("open");
    };
    window.onscroll = () => {
        hamburger.classList.remove("bx-x");
        navList.classList.remove("open");
    }
};