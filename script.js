const buttonArea = document.querySelector(".button-area");
const num0fButtons = 19;

for (let i = 0; i < num0fButtons; i++) {
    let widthOrHeight = "30px";
    let button = document.createElement("div");
    console.log("button created");
    let buttonNum = 1;

    button.classList.add("button", `btn_${buttonNum}`);

    button.style.width = button.style.height = widthOrHeight;

    buttonNum++;

    buttonArea.appendChild(button);
}