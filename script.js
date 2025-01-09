/* variable declarations */


let num1 = '';
let num2 = '';
let currentNum = true;
let operater = '';


let resultValue = '';
let result = document.querySelector("#result");

const buttonArea = document.querySelector(".button-area");
let buttonNum = 1;
const num0fButtons = 19;
for (let i = 0; i < num0fButtons; i++) {
    let button = document.createElement("div");
    console.log("button created");
    

    button.classList.add("button", `btn_${buttonNum}`);

    buttonNum += 1;

    buttonArea.appendChild(button);
}

// retrieve buttons
let btn_0 = document.querySelector(".btn_17");
console.log(btn_0);
console.log(btn_0.className);
btn_0.innerHTML = "0";
let btn_1 = document.querySelector(".btn_13");
btn_1.innerHTML = "1";
let btn_2 = document.querySelector(".btn_14");
btn_2.innerHTML = "2";
let btn_3 = document.querySelector(".btn_15");
btn_3.innerHTML = "3";
let btn_4 = document.querySelector(".btn_9");
btn_4.innerHTML = "4";
let btn_5 = document.querySelector(".btn_10");
btn_5.innerHTML = "5";
let btn_6 = document.querySelector(".btn_11");
btn_6.innerHTML = "6";
let btn_7 = document.querySelector(".btn_5");
btn_7.innerHTML = "7";
let btn_8 = document.querySelector(".btn_6");
btn_8.innerHTML = "8";
let btn_9 = document.querySelector(".btn_7");
btn_9.innerHTML = "9";
let btn_c = document.querySelector(".btn_1");
btn_c.innerHTML = "C";
let btn_mod = document.querySelector(".btn_3");
btn_mod.innerHTML = "%";
let btn_div = document.querySelector(".btn_4");
btn_div.innerHTML = "/";
let btn_mult = document.querySelector(".btn_8");
btn_mult.innerHTML = "x";
let btn_minus = document.querySelector(".btn_12");
btn_minus.innerHTML = "-";
let btn_add = document.querySelector(".btn_16");
btn_add.innerHTML = "+";
let btn_eq = document.querySelector(".btn_19");
btn_eq.innerHTML = "=";
let btn_neg = document.querySelector(".btn_2");
btn_neg.innerHTML = "+ / -";

/* functions */

let add = (num1, num2) => {return (Number(num1) + Number(num2))};
let subtract = (num1, num2) => {return (Number(num1) - Number(num2))};
let divide = (num1, num2) => {return (Number(num1) / Number(num2))};
let multiply = (num1, num2) => {return (Number(num1) * Number(num2))};
// let modulus = (num1, num2) {

// };

function operate() {
    switch(operater) {
        case '+':
            resultValue = add(num1, num2);
            break;
        case '-':
            resultValue = subtract(num1, num2);
            break;
        case '/':
            resultValue = divide(num1, num2);
            break;
        case '*':
            resultValue = multiply(num1, num2); 
            break;
    }
}


function populateScreenNum() {
    if (num1 == '') {
        result.innerHTML = '';
    }
    result.innerHTML += `${this.innerHTML}`;
}

function populateScreenOperator() {
    result.innerHTML += ` ${this.innerHTML} `;
}

function populateScreenResult(){
    result.innerHTML = resultValue;
    
}


function toggleNum() {
    currentNum =! currentNum;
    if (currentNum) {
        this.innerHTML = '';
    }  
}

function clearData() {
    num1 = '';
    num2 = '';
    currentNum = true;
    operater = '';
}

btn_0.addEventListener("click", populateScreenNum);
btn_1.addEventListener("click", populateScreenNum);
btn_2.addEventListener("click", populateScreenNum);
btn_3.addEventListener("click", populateScreenNum);
btn_4.addEventListener("click", populateScreenNum);
btn_5.addEventListener("click", populateScreenNum);
btn_6.addEventListener("click", populateScreenNum);
btn_7.addEventListener("click", populateScreenNum);
btn_8.addEventListener("click", populateScreenNum);
btn_9.addEventListener("click", populateScreenNum);

btn_0.addEventListener("click", () => {
    currentNum ? num1 += 0 : num2 += 0; 
});
btn_1.addEventListener("click", () => {
    currentNum ? num1 += 1 : num2 += 1;
});
btn_2.addEventListener("click", () => {
    currentNum ? num1 += 2 : num2 += 2;
});
btn_3.addEventListener("click", () => {
    currentNum ? num1 += 3 : num2 += 3;
});
btn_4.addEventListener("click", () => {
    currentNum ? num1 += 4 : num2 += 4;
});
btn_5.addEventListener("click", () => {
    currentNum ? num1 += 5 : num2 += 5;
});
btn_6.addEventListener("click", () => {
    currentNum ? num1 += 6 : num2 += 6;
});
btn_7.addEventListener("click", () => {
    currentNum ? num1 += 7 : num2 += 7;
});
btn_8.addEventListener("click", () => {
    currentNum ? num1 += 8 : num2 += 8;
});
btn_9.addEventListener("click", () => {
    currentNum ? num1 += 9 : num2 += 9;
});

btn_c.addEventListener("click", () => result.innerHTML = '');
btn_c.addEventListener("click", clearData);

btn_add.addEventListener("click", populateScreenOperator);
btn_add.addEventListener("click", () => {operater = '+'});
btn_minus.addEventListener("click", populateScreenOperator);
btn_minus.addEventListener("click", () => {operater = '-'});
btn_mod.addEventListener("click", populateScreenOperator);
btn_mod.addEventListener("click", () => {operater = '%'});
btn_div.addEventListener("click", populateScreenOperator);
btn_div.addEventListener("click", () => {operater = '/'});

btn_add.addEventListener("click", toggleNum);
btn_minus.addEventListener("click", toggleNum);
btn_mod.addEventListener("click", toggleNum);
btn_div.addEventListener("click", toggleNum);
btn_neg.addEventListener("click", toggleNum);

btn_eq.addEventListener("click", operate);
btn_eq.addEventListener("click", populateScreenResult);
btn_eq.addEventListener("click", clearData);


// solution 1: display and number variable is different
