const listRef = document.querySelectorAll(".item");
const numCategories = function () {
  return `Number of categories:${listRef.length}`;
};
console.log(numCategories());
// --------------------------------------------------------------
const listCategory = listRef.forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);
  console.log(`Elements:${element.lastElementChild.children.length}`);
});
