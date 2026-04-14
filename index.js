const dualImage = document.getElementById("top");

const firstSlider = document.querySelector("#fourth .battle");
const secondSlider = document.querySelector("#soviet-image .battle");
const caption = document.getElementById("caption");
const floatingCarousel = document.getElementById("float-image");
const captions = ["", "Танк Hetzer", "Танк Jagdpanzer", "Танк Panzerkampfwagen V - Пантера", "Танк Panzerkampfwagen V - Пантера", "Танк Panzerkampfwagen IV", "Набор от различни танкове", "Танк Т-34-85"];

setInterval(() => {
    let val = dualImage.getAttribute("i");
    let newValue = val == 4 ? 1 : ++val;

    dualImage.setAttribute("i", newValue);
    dualImage.style.backgroundImage = `url("./img/mask.png"), url("./img/sofia${newValue}.jpg")`
}, 4000)


function firstNext() {
    let val = firstSlider.getAttribute("i");
    let newValue = val == 7 ? 1 : ++val;

    firstSlider.setAttribute("i", newValue);
    firstSlider.setAttribute("src", `./img/battle/${newValue}.jpg`);
}

function firstPrev() {
    let val = firstSlider.getAttribute("i");
    let newValue = val == 1 ? 7 : --val;

    firstSlider.setAttribute("i", newValue);
    firstSlider.setAttribute("src", `./img/battle/${newValue}.jpg`);
}


function secondNext() {
    let val = secondSlider.getAttribute("i");
    let newValue = val == 7 ? 1 : ++val;

    secondSlider.setAttribute("i", newValue);
    secondSlider.setAttribute("src", `./img/soviet/${newValue}.jpg`);
    caption.textContent = captions[newValue];
}

function secondPrev() {
    let val = secondSlider.getAttribute("i");
    let newValue = val == 1 ? 7 : --val;

    secondSlider.setAttribute("i", newValue);
    secondSlider.setAttribute("src", `./img/soviet/${newValue}.jpg`);
    caption.textContent = captions[newValue];
}

setInterval(() => {
    let val = floatingCarousel.getAttribute("i");
    let newValue = val == 6 ? 1 : ++val;

    floatingCarousel.setAttribute("i", newValue);
    floatingCarousel.setAttribute("src", `./img/bunker/${newValue}.jpg`);
}, 3000)