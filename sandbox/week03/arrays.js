// Activity #1
const steps = ["one", "two", "three"];

 htmlSteps = steps.map(function (step) {
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = htmlSteps.join("");

// Activity #2
const grades = ["A", "B", "A"];

const gpas = grades.map(function (grade) {
    if (grade === "A") {
        return 4;
    }
    else if (grade === "B") {
        return 3;
    }
});

// Activity #3
const gpaAvg = gpas.reduce((total, current) => total + current, 0) / gpas.length;

// Activity #4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const filteredFruit = fruits.filter((fruit) => fruit.length < 6);

// Activity #5
const numbers = [12, 34, 21, 54];

const luckNumber = 21;

let luckyIndex = numbers.indexOf(luckNumber);