// console.log("'mainScript.js linked successfully'");

let itemsAddedToBag;
onload();

// console.log(onload());

//scrip for show mens shirt section
//____________________________________________________________________________________________________
function onload() {
  let itemsAddedToBagStr = localStorage.getItem("itemsAddedToBag");
  itemsAddedToBag = itemsAddedToBagStr ? JSON.parse(itemsAddedToBagStr) : [];
  pageOnLoad();
  showBagCount();
}
let addToBagOnClick = (item) => {
  // console.log(itemsAddedToBag);
  itemsAddedToBag.push(item);
  localStorage.setItem("itemsAddedToBag", JSON.stringify(itemsAddedToBag));
  showBagCount();
};

function showBagCount() {
  let itemAddCount = document.querySelector(".itemAddCount");
  if (itemsAddedToBag.length > 0) {
    itemAddCount.style.visibility = "visible";

    itemAddCount.innerText = itemsAddedToBag.length;
  } else {
    itemAddCount.style.visibility = "hidden";
  }
}
let menShirtsListArr = [
  {
    id: "001",
    shirt_img: "mensPage-images/category-image/mensShirtImg/01.webp",
    rating: {
      stars: 4.3,
      reviews: 1400,
    },
    shirtBrand: "RARE RABBIT",
    shirtDetails: "Checked Casual Shirt",
    shirtCurrentPrice: 1799,
    originalPrice: 3999,
    discountPercent: 55,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "002",
    shirt_img: "mensPage-images/category-image/mensShirtImg/002.webp",
    rating: {
      stars: 4.7,
      reviews: 1102,
    },
    shirtBrand: "Park Avenue",
    shirtDetails: "Slim Fit Checked Formal Shirt",
    shirtCurrentPrice: 1149,
    originalPrice: 2299,
    discountPercent: 50,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "003",
    shirt_img: "mensPage-images/category-image/mensShirtImg/003.webp",
    rating: {
      stars: 4.2,
      reviews: 340,
    },
    shirtBrand: "Arrow",
    shirtDetails: "Pure Cotton Formal Shirt",
    shirtCurrentPrice: 1374,
    originalPrice: 2499,
    discountPercent: 45,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "004",
    shirt_img: "mensPage-images/category-image/mensShirtImg/004.webp",
    rating: {
      stars: 4.9,
      reviews: 130,
    },
    shirtBrand: "Louis Philippe",
    shirtDetails: "Slim Fit Formal Shirt",
    shirtCurrentPrice: 1399,
    originalPrice: 2799,
    discountPercent: 50,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "005",
    shirt_img: "mensPage-images/category-image/mensShirtImg/005.webp",
    rating: {
      stars: 0.0,
      reviews: 78,
    },
    shirtBrand: "JAINISH",
    shirtDetails: "Pure Cotton Formal Shirt",
    shirtCurrentPrice: 554,
    originalPrice: 1499,
    discountPercent: 63,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "006",
    shirt_img: "mensPage-images/category-image/mensShirtImg/006.webp",
    rating: {
      stars: 4.6,
      reviews: 160,
    },
    shirtBrand: "Peter England",
    shirtDetails: "Pure Cotton Formal Shirt",
    shirtCurrentPrice: 1359,
    originalPrice: 1599,
    discountPercent: 15,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "007",
    shirt_img: "mensPage-images/category-image/mensShirtImg/007.webp",
    rating: {
      stars: 3.3,
      reviews: 60,
    },
    shirtBrand: "V-Mart",
    shirtDetails: "Spread Collar Formal Shirt",
    shirtCurrentPrice: 616,
    originalPrice: 649,
    discountPercent: 5,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "008",
    shirt_img: "mensPage-images/category-image/mensShirtImg/008.webp",
    rating: {
      stars: 4.7,
      reviews: 200,
    },
    shirtBrand: "FUBAR",
    shirtDetails: "Spread Collar Formal Shirt",
    shirtCurrentPrice: 799,
    originalPrice: 2599,
    discountPercent: 31,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "009",
    shirt_img: "mensPage-images/category-image/mensShirtImg/009.webp",
    rating: {
      stars: 3.9,
      reviews: 78,
    },
    shirtBrand: "FUBAR",
    shirtDetails: "Slim Fit Formal Shirt",
    shirtCurrentPrice: 439,
    originalPrice: 1999,
    discountPercent: 78,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
  {
    id: "010",
    shirt_img: "mensPage-images/category-image/mensShirtImg/010.webp",
    rating: {
      stars: 4.1,
      reviews: 100,
    },
    shirtBrand: "INVICTUS",
    shirtDetails: "Slim Fit Checked Sustainable Formal Shirt",
    shirtCurrentPrice: 1999,
    originalPrice: 3999,
    discountPercent: 50,
    returnPeriod: 14,
    deleveryDate: "10th Oct 2023",
  },
];
function pageOnLoad() {
  let mainContainer = document.querySelector(".main-container");
  if (!mainContainer) {
    return;
  }
  let menShirtsListArr = [
    {
      id: "001",
      shirt_img: "mensPage-images/category-image/mensShirtImg/01.webp",
      rating: {
        stars: 4.3,
        reviews: 1400,
      },
      shirtBrand: "RARE RABBIT",
      shirtDetails: "Checked Casual Shirt",
      shirtCurrentPrice: 1799,
      originalPrice: 3999,
      discountPercent: 55,
    },
    {
      id: "002",
      shirt_img: "mensPage-images/category-image/mensShirtImg/002.webp",
      rating: {
        stars: 4.7,
        reviews: 1102,
      },
      shirtBrand: "Park Avenue",
      shirtDetails: "Slim Fit Checked Formal Shirt",
      shirtCurrentPrice: 1149,
      originalPrice: 2299,
      discountPercent: 50,
    },
    {
      id: "003",
      shirt_img: "mensPage-images/category-image/mensShirtImg/003.webp",
      rating: {
        stars: 4.2,
        reviews: 340,
      },
      shirtBrand: "Arrow",
      shirtDetails: "Pure Cotton Formal Shirt",
      shirtCurrentPrice: 1374,
      originalPrice: 2499,
      discountPercent: 45,
    },
    {
      id: "004",
      shirt_img: "mensPage-images/category-image/mensShirtImg/004.webp",
      rating: {
        stars: 4.9,
        reviews: 130,
      },
      shirtBrand: "Louis Philippe",
      shirtDetails: "Slim Fit Formal Shirt",
      shirtCurrentPrice: 1399,
      originalPrice: 2799,
      discountPercent: 50,
    },
    {
      id: "005",
      shirt_img: "mensPage-images/category-image/mensShirtImg/005.webp",
      rating: {
        stars: 0.0,
        reviews: 78,
      },
      shirtBrand: "JAINISH",
      shirtDetails: "Pure Cotton Formal Shirt",
      shirtCurrentPrice: 554,
      originalPrice: 1499,
      discountPercent: 63,
    },
    {
      id: "006",
      shirt_img: "mensPage-images/category-image/mensShirtImg/006.webp",
      rating: {
        stars: 4.6,
        reviews: 160,
      },
      shirtBrand: "Peter England",
      shirtDetails: "Pure Cotton Formal Shirt",
      shirtCurrentPrice: 1359,
      originalPrice: 1599,
      discountPercent: 15,
    },
    {
      id: "007",
      shirt_img: "mensPage-images/category-image/mensShirtImg/007.webp",
      rating: {
        stars: 3.3,
        reviews: 60,
      },
      shirtBrand: "V-Mart",
      shirtDetails: "Spread Collar Formal Shirt",
      shirtCurrentPrice: 616,
      originalPrice: 649,
      discountPercent: 5,
    },
    {
      id: "008",
      shirt_img: "mensPage-images/category-image/mensShirtImg/008.webp",
      rating: {
        stars: 4.7,
        reviews: 200,
      },
      shirtBrand: "FUBAR",
      shirtDetails: "Spread Collar Formal Shirt",
      shirtCurrentPrice: 799,
      originalPrice: 2599,
      discountPercent: 31,
    },
    {
      id: "009",
      shirt_img: "mensPage-images/category-image/mensShirtImg/009.webp",
      rating: {
        stars: 3.9,
        reviews: 78,
      },
      shirtBrand: "FUBAR",
      shirtDetails: "Slim Fit Formal Shirt",
      shirtCurrentPrice: 439,
      originalPrice: 1999,
      discountPercent: 78,
    },
    {
      id: "010",
      shirt_img: "mensPage-images/category-image/mensShirtImg/010.webp",
      rating: {
        stars: 4.1,
        reviews: 100,
      },
      shirtBrand: "INVICTUS",
      shirtDetails: "Slim Fit Checked Sustainable Formal Shirt",
      shirtCurrentPrice: 1999,
      originalPrice: 3999,
      discountPercent: 50,
    },
  ];
  // console.log(menShirtsListArr.shirtBrand);
  let mensInnerhtml = "";

  menShirtsListArr.forEach((item) => {
    mensInnerhtml += `<div class="mens-shirts">
  <img
    class="shirt-img"
    src="${item.shirt_img}"
    alt="Mens-shirt01"
  />
  <div class="shirt-rating">${item.rating.stars} ⭐| ${item.rating.reviews}</div>
  <div class="shirt-brand">${item.shirtBrand}</div>
  <div class="shirt-details">${item.shirtDetails}</div>
  <div class="shirt-pricing">
    <span class="current-price">₹ ${item.shirtCurrentPrice}</span>
    <span class="original-price">${item.originalPrice}</span>
    <span class="discount-percent">(${item.discountPercent}% OFF)</span>
  </div>
  <button class="addToBag-btn" onclick="addToBagOnClick(${item.id})" >Add to Bag</button>
</div>`;
  });

  mainContainer.innerHTML = mensInnerhtml;
}
