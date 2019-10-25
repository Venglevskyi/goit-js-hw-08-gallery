const findCategories = document.querySelectorAll('li.item').length;
console.log(`В списке ${findCategories} категории`);

const findItemCategories = [...categories.children];
const result = findItemCategories
  .map(
    elem =>
      `Категория: ${elem.children[0].textContent} \nКоличество элементов: ${elem.children[1].children.length}`
  )
  .join('\n');
console.log(result);
