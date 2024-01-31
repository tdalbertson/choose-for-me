const submitButton = document.getElementById("submit-button");
let choice1, choice2, inputs;


submitButton.addEventListener("click", () => {
    inputs = document.querySelectorAll("[data-input-id]");
    choice1 = inputs[0].value;
    choice2 = inputs[1].value;
    console.log(`choice1 = ${choice1}\nchoice2 = ${choice2}`);
});