const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listTitle = document.querySelector("ul");
// -----------------old------------------------------
const listArr = [];
ingredients.forEach((element) => {
  const createItem = document.createElement("li");
  const addTextContent = (createItem.textContent = element);
  const addClass = createItem.classList.add("item");
  return listArr.push(createItem);
});
listTitle.append(...listArr);
// -----------------newUse------------------------------
const listNew = ingredients.map((element) => {
  const createItem = document.createElement("li");
  const addTextContent = (createItem.textContent = element);
  const addClass = createItem.classList.add("item");
  return createItem;
});

listTitle.append(...listNew);
// ----------------newUse+function-----------------------------------------
const makeList = (option) => {
  return option.map((element) => {
    const createItem = document.createElement("li");
    const addTextContent = (createItem.textContent = element);
    const addClass = createItem.classList.add("item");
    return createItem;
  });
};
const vegetablesList = makeList(ingredients);
listTitle.append(...vegetablesList);
