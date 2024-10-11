// Final Project

// Declared and initialized global variables
const sonicAPI = "https://e-i-m-c.github.io/sonicthehedgehog-character-api/characters.json";
const sonicCharactersElement = document.getElementById("characters");
let characterList = [];

// showExtraInfo function
// Creates and appends an h4 element if showHeight, showAge or showSpecies is true
const showExtraInfo = (character, article, showHeight, showAge, showSpecies) => {
    const h4 = document.createElement("h4");
    if (showHeight) {
        switch (character.height) {
            case 0:
                h4.textContent = `Unknown Height`;
                break;
            default:
                h4.textContent = `${character.height} m`;
        }
        article.appendChild(h4);
    } else if (showAge) {
        switch (character.age) {
            case 0:
                h4.textContent = `Unknown Age`;
                break;
            case 1:
                h4.textContent = `${character.age} Year Old`;
                break;
            default:
                h4.textContent = `${character.age} Years Old`;
        }
        article.appendChild(h4);
    } else if (showSpecies) {
        h4.textContent = character.species.toUpperCase();
        article.appendChild(h4);
    }
}

// displayCharacters function
const displayCharacters = (characters, showHeight = false, showAge = false, showSpecies = false) => {
    characters.forEach(character => {
        // Create elements
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        // Assign values to elements
        h3.textContent = character.name;
        img.setAttribute("src", character.imageUrl);
        img.setAttribute("alt", character.name);
        // Append child elements
        article.appendChild(h3);
        article.appendChild(img);
        // Calls the showExtraInfo function
        showExtraInfo(character, article, showHeight, showAge, showSpecies);
        // Append to main element
        sonicCharactersElement.appendChild(article);
    });
};

// async getCharacterInfo fucntion
const getCharcterInfo = async () => {
    // Get charcter info
    const response = await fetch(sonicAPI);
    // See if info was obtained and call displayCharacters
    if (response.ok) {
        characterList = await response.json();
        displayCharacters(characterList);
    }
};

// resetCharacters function
const resetCharaters = () => {
    // Wipe sonicCharactersElement
    sonicCharactersElement.innerHTML = ``;
};

/* filterTemples Function */
const filterCharacters = (characters) => {
    // Clear sonicCharactersElement
    resetCharaters();
    const filter = document.getElementById("filter").value;
    let newList = [];
    for (let i = 0; i < characters.length; i++) {
        newList[i] = characters[i];
    }
    let showHeight = false;
    let showAge = false;
    let showSpecies = false;
    if (filter == "name") {
        function compare(a, b) {
            if (a.name < b.name) {return -1;}
            else if (a.name > b.name) {return 1;}
            else {return 0;} 
        }
        newList.sort(compare);
    } else if (filter == "height") {
        function compare(a, b) {
            if (a.height < b.height) {return -1;}
            else if (a.height > b.height) {return 1;}
            else {return 0;} 
        }
        showHeight = true;
        newList.sort(compare);
    } else if (filter == "age") {
        function compare(a, b) {
            if (a.age < b.age) {return -1;}
            if (a.age > b.age) {return 1;}
            else {return 0;} 
        }
        showAge = true;
        newList.sort(compare);
    } else if (filter == "none") {
        for (let i = 0; i < characters.length; i++) {
            newList[i] = characters[i];
        }
    } else {
        newList = characters.filter((character) =>{
            switch (filter) {
                case "hero":
                    return character.hero == true;
                case "villain":
                    return character.hero == false;
                case "male":
                    return character.gender == "male";
                case "female":
                    return character.gender == "female";
                case "team_hero":
                    return character.team == "team heroes";
                case "team_dark":
                    return character.team == "team dark";
                case "team_rose":
                    return character.team == "team rose";
                case "team_chaotix":
                    return character.team == "team chaotix";
                case "team_eggman":
                    return character.team == "team eggman";
                case "team_babylon":
                    return character.team == "team babylon";
                case "team_diamond":
                    return character.team == "team diamond";
                case "team_unknown":
                    return character.team == "unknown";
                case "hedgehog":
                    return character.species == "hedgehog";
                case "fox":
                    return character.species == "fox";
                case "cat":
                    return character.species == "cat";
                case "rabbit":
                    return character.species == "rabbit";
                case "badnik":
                    return character.species == "badnik";
                case "echidna":
                    return character.species == "echidna";
                case "bird":
                    showSpecies = true;
                    return character.generalSpecies == "bird";
                case "human":
                    return character.species == "human";
                case "misc":
                    showSpecies = true;
                    return character.generalSpecies == "misc";
                case "red":
                    return character.color == "red";
                case "orange":
                    return character.color == "orange";
                case "yellow":
                    return character.color == "yellow";
                case "green":
                    return character.color == "green";
                case "blue":
                    return character.color == "blue";
                case "purple":
                    return character.color == "purple";
                case "pink":
                    return character.color == "pink";
                case "white":
                    return character.color == "white";
                case "gray":
                    return character.color == "gray";
                case "black":
                    return character.color == "black";
            }
        });
    }
    displayCharacters(newList, showHeight, showAge, showSpecies);
};

getCharcterInfo();

/* Event Listener */
document.getElementById("filter").addEventListener("change", () => {filterCharacters(characterList);});
