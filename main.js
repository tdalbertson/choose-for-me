const submitButton = document.getElementById("submit-button");
let choice1, choice2, inputs;

submitButton.addEventListener("click", () => {
    inputs = document.querySelectorAll("[data-input-id]");
    choice1 = inputs[0].value;
    choice2 = inputs[1].value;
    console.log(`choice1 = ${choice1}\nchoice2 = ${choice2}`);
});

// For setting yellow "border" of main content container
let contentWrapper = document.querySelector(".content-wrapper");
let wrapperHeight = contentWrapper.offsetHeight;
let wrapperWidth = contentWrapper.offsetWidth;

function setWrapperHeightWidth(height, width) {
    let wrapper = document.querySelector(".wrapper");
    wrapper.style.height = height + "px";
    wrapper.style.width = width + "px";
}

setWrapperHeightWidth(wrapperHeight, wrapperWidth);
