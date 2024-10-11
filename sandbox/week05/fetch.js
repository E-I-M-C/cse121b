// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  resultsHTML = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  document.querySelector("#output").innerHTML = resultsHTML;
}

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  else {
    return 0;
  } 
}
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}
function doStuffList(data) {
  console.log("first: ", data);
  pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach(pokeList => {
    resultsHTML = `<li>${pokeList.name}</li>`;
    document.querySelector("#outputList").innerHTML += resultsHTML;
  });
}

getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);