const listEl = document.querySelectorAll(".item");
const numCategories = function () {
  return `Number of categories:${listEl.length}`;
};
console.log(numCategories());
// --------------------------------------------------------------
const listCategory = listEl.forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);
  console.log(`Elements:${element.lastElementChild.children.length}`);
});
