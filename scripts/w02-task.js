/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Eric Martinez";
let currentYear = "2024";
let profilePicture = "images/person.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", `${profilePicture}`);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ["Mashed potato", "Potato chips", "Meat and potato pie", "French fries"];
foodElement.innerHTML = `${favFoods}`;
let aFavFood = "Russian salad";
favFoods.push(aFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;