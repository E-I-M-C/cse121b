// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
  // should return true if a randomly generated number is greater than .5, false if it is less than .5
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    return true;
  }
  else {
    return false;
  }
  // Simplified
  // return Math.random() > 0.5;
}
  
function shipCanFire() {
  // return true if the ships health is above 0 AND ammo is above 0 false otherwise
  if (shipHealth > 0 && shipAmmo > 0) {
    return true;
  }
  else {
    return false;
  }
  // Simplified
  // return shipAmmo > 0 && shipHealth > 0;
}
function isDestroyed(health) {
  // return true if health is zero or less
  if (health <= 0) {
    return true;
  }
  else {
    return false;
  }
  // Simplified
  // return health <= 0;
}
function reloadShip() {
  // reduce ship health by 1 and increase ammo by 3
  shipHealth -= 1;
  // shipHealth --;
  shipAmmo += 3;
}