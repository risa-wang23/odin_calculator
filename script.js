// global variables
let num1 = 0;
let num2 = 0;
let operater ='';

const buttonArea = document.querySelector(".button-area");
const num0fButtons = 19;

let buttonNum = 1;
for (let i = 0; i < num0fButtons; i++) {
    let button = document.createElement("div");
    console.log("button created");
    

    button.classList.add("button", `btn_${buttonNum}`);

    buttonNum += 1;

    buttonArea.appendChild(button);
}

let btn_c = document.querySelector(".btn_1");
btn_c.innerHTML = "C";
let btn_neg = document.querySelector(".btn_2");
btn_neg.innerHTML = "+ / -";
let btn_mod = document.querySelector(".btn_3");
btn_mod.innerHTML = "%";
let btn_div = document.querySelector(".btn_4");
btn_div.innerHTML = "/";

let btn_7 = document.querySelector(".btn_5");
btn_7.innerHTML = "7";
let btn_8 = document.querySelector(".btn_6");
btn_8.innerHTML = "8";
let btn_9 = document.querySelector(".btn_7");
btn_9.innerHTML = "9";
let btn_4 = document.querySelector(".btn_9");
btn_4.innerHTML = "4";
let btn_5 = document.querySelector(".btn_10");
btn_5.innerHTML = "5";
let btn_6 = document.querySelector(".btn_11");
btn_6.innerHTML = "6";
let btn_1 = document.querySelector(".btn_13");
btn_1.innerHTML = "1";
let btn_2 = document.querySelector(".btn_14");
btn_2.innerHTML = "2";
let btn_3 = document.querySelector(".btn_15");
btn_3.innerHTML = "3";

let btn_0 = document.querySelector(".btn_17");
btn_0.innerHTML = "0";

let btn_mult = document.querySelector(".btn_8");
btn_mult.innerHTML = "x";
let btn_minus = document.querySelector(".btn_12");
btn_minus.innerHTML = "-";
let btn_add = document.querySelector(".btn_16");
btn_add.innerHTML = "+";
let btn_eq = document.querySelector(".btn_19");
btn_eq.innerHTML = "=";

// add innerHTML values

//logic
let add = (num1, num2) => {num1 + num2};
let subtract = (num1, num2) => {num1 - num2};
let divide = (num1, num2) => {num1 / num2};
let multiply = (num1, num2) => {num1 * num2};
// let modulus = (num1, num2) {

// };

function operate() {
    switch(operater) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2); 
    }
}

// btn_eq.addEventListener("click", operate)

// btn_1.addEventListener("click", () => num1 = 1);
// btn_2.addEventListener("clicl", () => num2 = 2);
// btn_add.addEventListener("click", () => operater = '+');

// console.log()
let result = document.querySelector("#result");
let resultValue = '';

btn_1.addEventListener("click", populateScreenNum);
function populateScreenNum() {
    result.innerHTML += `${this.innerHTML}`;
}

function populateScreenOperator() {
    result.innerHTML += ` ${this.innerHTML} `;
}

function populateScreenResult(){
    result.innerHTML = '';
    result.innerHTML = `${}`
}

btn_0.addEventListener("click", populateScreenNum);
btn_2.addEventListener("click", populateScreenNum);
btn_3.addEventListener("click", populateScreenNum);
btn_4.addEventListener("click", populateScreenNum);
btn_5.addEventListener("click", populateScreenNum);
btn_6.addEventListener("click", populateScreenNum);
btn_7.addEventListener("click", populateScreenNum);
btn_8.addEventListener("click", populateScreenNum);
btn_9.addEventListener("click", populateScreenNum);



btn_add.addEventListener("click", populateScreenOperator);
btn_minus.addEventListener("click", populateScreenOperator);
btn_mod.addEventListener("click", populateScreenOperator);
btn_div.addEventListener("click", populateScreenOperator);

btn_neg.addEventListener("click", populateScreenOperator);

btn_eq.addEventListener("click", operate)