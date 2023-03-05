{
    const welcome = () => {
    console.log("Szanowni Państwo! Ten kod jest już w repozytorium git");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("silverBackground");
        themeName.innerText = body.classList.contains("silverBackground")
            ? "na biały"
            : "na szary";
    };

const init =() => {
const button = document.querySelector(".js-button");
button.addEventListener("click",toggleBackground);

welcome();
};

init();

}
