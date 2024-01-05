// console.log("connection secure");
let itemsOnToBagObj;
onBagPageLoad();
function onBagPageLoad() {
  loadItemsOnBagObj();
  showBagItem();
  showBagSummery();
}
// bag page pricing section  =>  bag-summery section
function showBagSummery() {
  let bagSummary = document.querySelector(".bag-summary");
  let totalItems = itemsOnToBagObj.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  itemsOnToBagObj.forEach((bagItem) => {
    totalMRP += bagItem.originalPrice;
    totalDiscount += bagItem.originalPrice - bagItem.shirtCurrentPrice;
  });
  // if (totalMRP == 0) {
  //
  // } else {
  finalPayment = totalMRP - totalDiscount + 99;
  // }
  bagSummary.innerHTML = /* HTML */ `<div class="bagSummary-container">
      <div class="top-header">PRICE DETAILS (${totalItems} Items)</div>
      <div class="itemPrice">
        <span class="item-priceTag">Total MRP</span>
        <span class="item-value">₹ ${totalMRP}</span>
      </div>
      <div class="itemPrice">
        <span class="item-priceTag">Discount on MRP</span>
        <span class="item-value discount-details">₹ ${totalDiscount}</span>
      </div>
      <div class="itemPrice">
        <span class="item-priceTag">Convenience Fee</span>
        <span class="item-value">₹ 99</span>
      </div>
      <hr />
      <div class="priceTotal">
        <span class="item-priceTag">Total Amount</span>
        <span class="item-value">₹ ${finalPayment}</span>
      </div>
    </div>
    <button class="order-btn">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>`;
}
//bag page => item added to bag section
// console.log(menShirtsListArr);
// console.log(onload());
function loadItemsOnBagObj() {
  console.log(itemsAddedToBag);

  itemsOnToBagObj = itemsAddedToBag.map((itemId) => {
    for (let i = 0; i < menShirtsListArr.length; i++) {
      if (itemId == menShirtsListArr[i].id) {
        return menShirtsListArr[i];
      }
    }
  });
  console.log(itemsOnToBagObj);
}
function showBagItem() {
  let bagPAgeInnerHtml = "";
  let bagPageContainer = document.querySelector(".bagPage-container");
  // console.log(itemsAddedToBag);
  // console.log(bagPageContainer);
  // let bagPAgeInnerHtml = "";
  itemsOnToBagObj.forEach((bagItem) => {
    bagPAgeInnerHtml += generateItemHtml(bagItem);
  });
  bagPageContainer.innerHTML = bagPAgeInnerHtml;
}
function handleRemoveFromBag(id) {
  itemsAddedToBag = itemsAddedToBag.filter((bagItemId) => bagItemId != id);
  localStorage.setItem("itemsAddedToBag", JSON.stringify(itemsAddedToBag));
  loadItemsOnBagObj();
  showBagCount();
  showBagItem();
  showBagSummery();
}
function generateItemHtml(item) {
  return `<div class="bagItem-container">
    <div class="item-box">
      <img
        class="item-image"
        src="./${item.shirt_img}"
        alt="shirtImageId-01"
      />
    </div>  
    <div class="itemDetails-box">
      <div class="item-brand">${item.shirtBrand}</div>
      <div class="item-details">${item.shirtDetails}</div>
      <div class="price-section">
        <span class="currentPrice">${item.shirtCurrentPrice}</span>
        <span class="originalPrice">${item.originalPrice}</span>
        < class="discountPercentage">(${item.discountPercent}%)</  span>
      </div>
      <div class="return-section">
        <span class="return-period">${item.returnPeriod} days</span>   retun   available
      </div>
      <div class="delevery-section">
        // Delevery by <span class="delevery-period">${item.deleveryDate}</span>
      </div>
    </div>
    <div class="removeFrom-cart" onclick="handleRemoveFromBag(${item.id})">
      <i class="fa-sharp fa-solid fa-xmark"></i>
    </div>
  </div>`;
}

// });
// bagPageContainer.innerHTML = bagPAgeInnerHtml;
