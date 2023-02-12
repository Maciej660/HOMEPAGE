console.log("Szanowni Państwo!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");


button.addEventListener("click", () => {
    body.classList.toggle("silverBackground");
    
    themeName.innerText = body.classList.contains("silverBackground")
        ? "na biały"
        : "na szary";
});












