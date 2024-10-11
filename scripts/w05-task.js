/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
      }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ``;
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    const filtered = templeList.filter((temple) =>{
        let parts = temple.dedicated.split(', ');
        // Converts month name to the correct int representation
        if (parts[1] === "January") {
            parts[1] = 0;
        } else if (parts[1] === "February") {
            parts[1] = 1;
        } else if (parts[1] === "March") {
            parts[1] = 2;
        } else if (parts[1] === "April") {
            parts[1] = 3;
        } else if (parts[1] === "May") {
            parts[1] = 4;
        } else if (parts[1] === "June") {
            parts[1] = 5;
        } else if (parts[1] === "July") {
            parts[1] = 6;
        } else if (parts[1] === "August") {
            parts[1] = 7;
        } else if (parts[1] === "September") {
            parts[1] = 8;
        } else if (parts[1] === "October") {
            parts[1] = 9;
        } else if (parts[1] === "November") {
            parts[1] = 10;
        } else if (parts[1] === "December") {
            parts[1] = 11;
        }
        switch (filter) {
            case "utah":
                return temple.location.includes("Utah");
            case "notutah":
                return !temple.location.includes("Utah");
            case "older":
                return new Date(parts[0], parts[1], parts[2]) < new Date(1950, 0, 1);
            case "all":
                return true;
        }
    });
    displayTemples(filtered);
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList);});