// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Actvity 1
  const food = document.getElementById("favorite-foods");
  function itterateAndAppendItem(item) {
    let liElement = document.createElement("li");
    liElement.textContent = item;
    food.appendChild(liElement);
  }
  myInfo.favoriteFoods.forEach(itterateAndAppendItem);

  const food2 = document.createElement("ul");
  function mapItem(item) {
    let liElement = document.createElement("li");
    liElement.textContent = item;
    food2.appendChild(liElement);
  }
  myInfo.favoriteFoods.map(mapItem);
  document.body.appendChild(food2);
  /*
  let list1 = document.createElement("ul");
  myInfo.favoriteFoods.forEach(element => {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = element;
    list1.appendChild(favoriteFood);
  });
  document.body.appendChild(list1);

  let list2 = document.createElement("ul");
  let hobbyList = myInfo.hobbies.map((element) => {
    let hobby = document.createElement("li");
    hobby.textContent = element;
    list2.appendChild(hobby);
  });
  document.body.appendChild(list2);
  */

  // Activity 3
  const foods = document.querySelector("#favorite-foods");
  const places = document.querySelector("#places-lived");

  function embedFoodInHTML(food) {
    return `<li>${food}</li>`;
  }

  function embedPlaceInHTML(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }

  function embedListInHTML(arrayList, callBack) {
    let htmlList = arrayList.map(callBack);
    let HTML = htmlList.join("");
    return HTML;
  }

  foods.innerHTML = embedListInHTML(myInfo.favoriteFoods, embedFoodInHTML);
  places.innerHTML = embedListInHTML(myInfo.placesLived, embedPlaceInHTML);
  /*
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);
  */