// console.log("hello world!");

// let navBar = document.querySelector(".nav-bar");
// // console.log(navBar);
// let navBarArr = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"];
// let showNavBar = "";
// navBarArr.forEach((item) => {
//   // console.log(item);

//   showNavBar += `<a href="#">${item}</a>`;
// });

// navBar.innerHTML = showNavBar;
// let showNavBar = "";
// for (let i = 0; i < navBarArr.length; i++) {
//   // console.log(navBarArr[i]);
//   showNavBar += `<a href="#">${navBarArr[i]}</a>`;
//   if (navBarArr[i] == "STUDIO") {
//     // let addElem = document.createElement("sup");
//     // addElem.textContent = "NEW";

//     // let exitingNav = document.innerHTML("showNavBar");
//     // exitingNav.appendChild(addElem);
//     showNavBar += `<a href="#">STUDIO <sup>NEW</sup></a>`;
//   }
//   navBar.innerHTML = showNavBar;
// }
function brandItemsFunc() {
  let brandItems = document.querySelector(".brand-items");
  // console.log(brandItems);
  let items = [
    { Id: "001", itemImg: "Ecom-images/Brand-img/1.png" },
    { Id: "002", itemImg: "Ecom-images/Brand-img/2.png" },
    { Id: "003", itemImg: "Ecom-images/Brand-img/3.png" },
    { Id: "004", itemImg: "Ecom-images/Brand-img/4.png" },
    { Id: "005", itemImg: "Ecom-images/Brand-img/5.png" },
    { Id: "006", itemImg: "Ecom-images/Brand-img/6.png" },
    { Id: "007", itemImg: "Ecom-images/Brand-img/7.png" },
    { Id: "008", itemImg: "Ecom-images/Brand-img/8.png" },
    { Id: "009", itemImg: "Ecom-images/Brand-img/9.png" },
    { Id: "010", itemImg: "Ecom-images/Brand-img/10.png" },
    { Id: "011", itemImg: "Ecom-images/Brand-img/11.png" },
    { Id: "012", itemImg: "Ecom-images/Brand-img/12.png" },
  ];

  // console.log(items[0].itemImg);

  let innerHtml = "";

  items.forEach((item) => {
    // console.log(item);
    innerHtml += `<a href="#">
       <img class="brand-img" src="${item.itemImg}" />
     </a>`;
  });
  brandItems.innerHTML = innerHtml;
}
brandItemsFunc();

function categoriesItemsFunc() {
  let categoriesItems = document.querySelector(".categories-items");
  // console.log(categoriesItems);
  let categoryItemsObj = [
    { Id: "001", itemImg: "Ecom-images/shopCategoriesImg/1.jpg" },
    { Id: "002", itemImg: "Ecom-images/shopCategoriesImg/2.jpg" },
    { Id: "003", itemImg: "Ecom-images/shopCategoriesImg/3.jpg" },
    { Id: "004", itemImg: "Ecom-images/shopCategoriesImg/4.jpg" },
    { Id: "005", itemImg: "Ecom-images/shopCategoriesImg/5.jpg" },
    { Id: "006", itemImg: "Ecom-images/shopCategoriesImg/6.jpg" },
    { Id: "007", itemImg: "Ecom-images/shopCategoriesImg/7.jpg" },
    { Id: "008", itemImg: "Ecom-images/shopCategoriesImg/8.jpg" },
    { Id: "009", itemImg: "Ecom-images/shopCategoriesImg/9.jpg" },
    { Id: "010", itemImg: "Ecom-images/shopCategoriesImg/10.jpg" },
  ];

  let categoriesInnerhtml = "";
  categoryItemsObj.forEach((item) => {
    categoriesInnerhtml += `<a href="#"
><img class="category-img" src="${item.itemImg}"
/></a>`;
  });
  categoriesItems.innerHTML = categoriesInnerhtml;
}
categoriesItemsFunc();
