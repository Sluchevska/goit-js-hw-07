const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const elements = ingredients.map(ingredient => {
    const ingrEl = document.createElement('li');
    ingrEl.textContent = ingredient
    console.log(ingrEl)
    return ingrEl
})

console.log(elements)
const addIngrEl = document.querySelector('#ingredients')
addIngrEl.append(...elements)
