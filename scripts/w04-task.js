/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Eric Martinez",
    photo: "images/person.jpg",
    favoriteFoods: [
        "Mashed Potato",
        "Potato Chips",
        "Meat and Potato Pie",
        "French Fries",
        "Russian Salad"
    ],
    hobbies: [
        "Playing Video Games",
        "Making 2D Sprites",
        "Extracting 3D Models"
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Other Places",
        length: "? years"
    }
);
myProfile.placesLived.push(
    {
        place: "Provo, UT",
        length: "5 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Ensenada, Mexico",
        length: "6 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

