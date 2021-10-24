const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listTitle = document.querySelector("ul");
const list = function itemsCreator(arr) {
  arr.forEach((element) => {
    const createItem = document.createElement("li");
    const addTextContent = (createItem.textContent = element);
    const addClass = createItem.classList.add("item");
    const pushItem = listTitle.append(createItem);
  });
};
console.log(list(ingredients));
