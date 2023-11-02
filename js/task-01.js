const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});

// const userA = {
//   name: "Mango",
//   age: 5,
// };
// const userB = {
//   ...userA,

//   age: 10,
//   hay: true,
// };
// console.log(userB);
