
const menuBtn = document.querySelector("#menuBtn")
const nav = document.querySelector(".nav")


    menuBtn.addEventListener("click", ()=>{
        nav.classList.toggle("toggle")
        document.body.classList.toggle("overflow")
    })