const categoryList = document.querySelectorAll('li.item');
console.log("Кількість категорій: " + categoryList.length);

categoryList.forEach(category => {
  const title = category.querySelector('h2').innerText;
  const items = category.querySelectorAll('li').length;
  console.log("Категорія: " + title);
  console.log("Кількість елементів: " + items);
});
