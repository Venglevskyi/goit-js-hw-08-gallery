const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const linkIdIngredient = document.querySelector('#ingredients');
const creatIngredients = ingredients.map(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  return li;
});

linkIdIngredient.append(...creatIngredients);
