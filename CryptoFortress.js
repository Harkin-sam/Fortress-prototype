window.onload = () => {
     setTimeout(() => { document.querySelector("body").classList.add("display")}, 3000);
};

const closeButton = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const menuLinks = document.querySelectorAll(".menu-links");

hamburgerMenu.addEventListener("click", () => {
    sideBar.classList.add("open-nav")
})

closeButton.addEventListener("click", () => {
    sideBar.classList.remove("open-nav")
})


menuLinks.forEach((menu) => { menu.addEventListener("click", () =>{ 
    sideBar.classList.remove("open-nav")
})
    
});
