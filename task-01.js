const findLiItem = document.querySelectorAll('li.item').length;
console.log(`В списке ${findLiItem} категории`);

const findH2 = document.querySelectorAll('h2');
console.log([...findH2.textContent]);
const findLi = document.querySelectorAll('li.item>ul>li').length;

