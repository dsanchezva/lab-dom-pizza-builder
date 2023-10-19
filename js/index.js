// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((eachPeper) => {
    if (state.greenPeppers) {
      eachPeper.style.visibility = 'visible';
    } else {
      eachPeper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceNode = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceNode.style.visibility = 'visible';
  } else {
    sauceNode.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenNode = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenNode.classList.remove('crust-gluten-free');
  } else {
    glutenNode.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let peperBtnNode = document.querySelector('.btn-pepperoni');
  if (state.pepperoni === false) {
    peperBtnNode.classList.remove('active');
  } else {
    peperBtnNode.classList.add('active');
  }
  let mushBtnNode = document.querySelector('.btn-mushrooms');
  if (state.mushrooms === false) {
    mushBtnNode.classList.remove('active');
  } else {
    mushBtnNode.classList.add('active');
  }
  let grennPeperBtnNode = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers === false) {
    grennPeperBtnNode.classList.remove('active');
  } else {
    grennPeperBtnNode.classList.add('active');
  }
  let sauceBtnNode = document.querySelector('.btn-sauce');
  if (state.whiteSauce === false) {
    sauceBtnNode.classList.remove('active');
  } else {
    sauceBtnNode.classList.add('active');
  }
  let crustBtnNode = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust === false) {
    crustBtnNode.classList.remove('active');
  } else {
    crustBtnNode.classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceNode = document.querySelector('.panel.price');
  let priceListNode = priceNode.querySelectorAll('li');
  priceListNode.forEach((eachElement) => {
    eachElement.remove();
  });
  let priceList = document.querySelector('.price ul');
  let newPeperPriceNode = document.createElement('li');
  let newMushPriceNode = document.createElement('li');
  let newGreenPeprPriceNode = document.createElement('li');
  let newSaucePriceNode = document.createElement('li');
  let newgGlutenPriceNode = document.createElement('li');

  let priceTotal = 10;
  console.log(priceList);
  if (state.pepperoni) {
    newPeperPriceNode.innerText = '$1 pepperoni';
    priceList.append(newPeperPriceNode);
    priceTotal++;
  } else {
    priceTotal;
  }
  if (state.mushrooms) {
    newMushPriceNode.innerText = '$1 mushrooms';
    priceList.append(newMushPriceNode);
    priceTotal++;
  } else {
    priceTotal;
  }
  if (state.greenPeppers) {
    newGreenPeprPriceNode.innerText = '$1 green peppers';
    priceList.append(newGreenPeprPriceNode);
    priceTotal++;
  } else {
    priceTotal;
  }
  if (state.whiteSauce) {
    newSaucePriceNode.innerText = '$3 white sauce';
    priceList.append(newSaucePriceNode);
    priceTotal += 3;
  } else {
    priceTotal;
  }
  if (state.glutenFreeCrust) {
    newgGlutenPriceNode.innerText = '$5 gluten-free crust';
    priceList.append(newgGlutenPriceNode);
    priceTotal += 5;
  } else {
    priceTotal;
  }

  let priceValueNode = document.querySelector('.price strong');
  priceValueNode.innerText = priceTotal;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
