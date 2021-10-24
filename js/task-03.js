const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listTitle = document.querySelector(".gallery");
listTitle.setAttribute("style", "display:flex;justify-content: space-between;");

const list = function itemsCreator(arr) {
  arr.forEach((element) => {
    const createItem = document.createElement("li");
    createItem.setAttribute("style", "list-style: none;");
    const pushItem = listTitle.append(createItem);
    const addImage = createItem.insertAdjacentHTML("afterbegin", "<img></img>");
    const imageEl = createItem.querySelector("img");
    imageEl.src = element.url;
    imageEl.alt = element.alt;
    imageEl.height = 150;
  });
};
console.log(list(images));
