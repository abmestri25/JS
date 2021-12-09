const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// console.log(window.getComputedStyle(red).backgroundColor);

const getBg = (selectElement) => {
    return window.getComputedStyle(selectElement).backgroundColor;
};

const magicColorChanger = (element,color) => {
    return element.addEventListener("mouseenter",() => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBg(red));
magicColorChanger(cyan,getBg(cyan));
magicColorChanger(violet,getBg(violet));
magicColorChanger(orange,getBg(orange));
magicColorChanger(pink,getBg(pink));
