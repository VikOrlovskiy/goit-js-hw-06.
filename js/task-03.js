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
// -----------------------------------------------------------
const listTitle = document.querySelector(".gallery");
listTitle.setAttribute(
  "style",
  "list-style: none;display:flex;flex-direction: column;justify-content: space-around;"
);
// ------------oldUse-----------------------------------
// const listArr = [];
// images.forEach((element) => {
//   const createItem = document.createElement("li");
//   createItem.setAttribute("style", "list-style: none;");
//   const addImage = createItem.insertAdjacentHTML("afterbegin", "<img></img>");
//   const imageEl = createItem.querySelector("img");
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;
//   imageEl.height = 150;
//   return listArr.push(createItem);
// });

// listTitle.append(...listArr);
// ----------------newUse-----------------------------------------
const listNew = images.forEach(({ url, alt }) => {
  listTitle.insertAdjacentHTML(
    "beforeend",
    `<li ><img src ="${url}",alt ="${alt}" width = "300px"></li>`
  );
});
// ----------------newUse+function-----------------------------------------
// const makeList = (option) => {
//   return option.map((element) => {
//     const createItemNew = document.createElement("li");
//     const addImageNew = createItemNew.insertAdjacentHTML(
//       "afterbegin",
//       "<img></img>"
//     );
//     const imageElNew = createItemNew.querySelector("img");
//     imageElNew.src = element.url;
//     imageElNew.alt = element.alt;
//     imageElNew.height = 50;
//     return createItemNew;
//   });
// };
// const imageList = makeList(images);
// listTitle.append(...imageList);
