/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(addNumber1, addNumber2);
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.getElementById("subtract1").value);
    let subtractNumber2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.getElementById("factor1").value);
    let multiplyNumber2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(multiplyNumber1, multiplyNumber2);
};
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let divideNumber1 = Number(document.getElementById("dividend").value);
    let divideNumber2 = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(divideNumber1, divideNumber2);
};
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const getSubtotal = () => {
    const subtotalElement = document.getElementById("subtotal");
    let subtotal = Number(subtotalElement.value);
    let isMember = document.getElementById("member");
    if (isNaN(subtotal)) {
        subtotalElement.value = "Input not valid";
    }
    else {
        if (isMember.checked === true) {
            let discountAmount = subtotal * 0.2;
            subtotal -= discountAmount;
        }
        document.getElementById("total").textContent = `$ ${subtotal}`;
    }
};
document.getElementById("getTotal").addEventListener("click", getSubtotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter((number) => number % 2 !== 0);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter((number) => number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map((number) => number * 2).reduce((sum, number) => sum + number, 0);
/*
    OR - document.getElementById("sumOfMultiplied").innerHTML = (numbersArray.reduce((sum, number) => sum + number, 0)) * 2;
*/