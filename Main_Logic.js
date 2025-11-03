const products = [
  {
    id: 1,
    title:
      "گوشی موبایل اپل مدل iPhone 16 CH/A ظرفیت 128 گیگابایت رم 8 گیگابایت رجیستر شده",
    price: 105_000_000,
    img: "./Image/product1.webp",
    description: " Apple iPhone 16 128/8GB CH/A - Not Active  ",
  },
  {
    id: 2,
    title:
      "گوشی موبایل سامسونگ Galaxy S25 Ultra 5G ظرفیت 256 گیگابایت رم 12 گیگابایت - ویتنام",
    price: 126_000_000,
    img: "./Image/product2.webp",
    description: "Samsung Galaxy S25 Ultra 256/12GB Vietnam",
  },
  {
    id: 3,
    title:
      "گوشی موبایل اپل iPhone 14 CH نات اکتیو ظرفیت 128 گیگابایت رم 6 گیگابایت رجیستر شده",
    price: 72_799_000,
    img: "./Image/product3.webp",
    description: "Apple iPhone 14 128/6GB",
  },
  {
    id: 4,
    title:
      "  گوشی موبایل داریا Bond II Lite 5G ظرفیت 256 گیگابایت رم 8 گیگابایت - DM-B51104  ",
    price: 14_028_000,
    img: "./Image/product4.webp",
    description: " Daria Bond II Lite 5G 256/8GB - DM-B51104 ",
  },
  {
    id: 5,
    title: "گوشی موبایل اپل مدل iPhone 16 Pro Max ZA/A ظرفیت 256 گیگابایت رم 8 گیگابایت رجیستر شده",
    price: 195_999_000,
    img: "./Image/product5.webp",
    description:
      "Apple iPhone 16 Pro Max 256/8GB ZA/A - Not Active",
  },
  {
    id: 6,
    title:
      "گوشی موبایل داریا Bond II 4G ظرفیت 512 گیگابایت رم 12 گیگابایت - DM-B70104",
    price: 24_990_000,
    img: "./Image/product6.webp",
    description:
      "Daria Bond II 5G 512/12GB - DM-B70104",
  },
  {
    id: 7,
    title:
      "گوشی موبایل داریا Bond II 5G ظرفیت 512 گیگابایت رم 12 گیگابایت - DM-B70104",
    price: 30_999_000,
    img: "./Image/product7.webp",
    description:
      "Daria Bond II 5G 512/12GB - DM-B70104",
  },
  {
    id: 8,
    title: "گوشی موبايل شیائومی مدل 14T Pro ظرفیت 512 گیگابایت رم 12 گیگابایت",
    price: 66_900_000,
    img: "./Image/product8.webp",
    description:
      "Xiaomi 14T Pro 512/12GB",
  },
  {
    id: 9,
    title: "گوشی موبایل سامسونگ Galaxy S25 Ultra 5G ظرفیت 512 گیگابایت رم 12 گیگابایت - ویتنام",
    price: 152_399_000,
    img: "./Image/product9.webp",
    description:
      "Samsung Galaxy S25 Ultra 512/12GB - Vietnam",
  },
  {
    id: 10,
    title:
      "گوشی موبایل اپل iPhone 17 Pro Max ZA/A ظرفیت 256 گیگابایت رم 12 گیگابایت - Not Active رجیستر شده",
    price: 215_399_000,
    img: "./Image/product10.webp",
    description:
      "Apple iPhone 17 Pro Max ZA/A 256/12GB - Not Active",
  },
  {
    id: 11,
    title: "گوشی موبايل شیائومی 5G 15 Ultra ظرفیت 512 گیگابایت رم 16 گیگابایت",
    price: 137_500_000,
    img: "./Image/product11.webp",
    description:
    "Xiaomi 15 Ultra 5G 512/16GB",
  },
  {
    id: 12,
    title: "گوشی موبایل گوگل مدل Pixel 10 ظرفیت 128 گیگابایت رم 12 گیگابایت",
    price: 85000000,
    img: "./Image/product12.webp",
    description:
      "Google Pixel 10 5G 128/12GB RAM",
  },
];


let basket = [];

const productsContainer = document.querySelector(".wrapper");
const basketProductsContainer = document.querySelector(".basket-main");
const openBasketBtn = document.querySelector(".open-basket");
const basketScreen = document.querySelector(".basket-screen");
const basketBox = document.querySelector(".basket"); 
const closeBasketBtn = document.querySelector(".close-basket");
const totalPriceElem = document.querySelector(".total-price");
const clearBasketButton = document.querySelector(".clear-button");
const productCountElem = document.querySelector(".count");
const productCountElemInBasket = document.querySelector(".products-count");

const safe = (el, name) => {
  if (!el) console.warn(`Warning: ${name} not found in DOM.`);
  return !!el;
};


const showProducts = () => {
  if (!safe(productsContainer, "productsContainer")) return;
  productsContainer.innerHTML = ""; 
  products.forEach((product) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <article>
          <header class="product-header">
            <img src="${product.img}" class="product-img" alt="" />
          </header>
          <main class="product-body">
            <h3 class="product-title">${product.title}</h3>
            <p class="desc">${product.description}</p>
          </main>
          <footer class="product-footer">
            <p class="price">${product.price.toLocaleString()} ت</p>
            <button class="add-to-cart" data-id="${product.id}">
              <i class="bx bx-cart-alt"></i>
              افزودن به سبد
            </button>
          </footer>
        </article>
      `
    );
  });

  productsContainer.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = Number(btn.dataset.id);
      addProductToBasket(id);
    });
  });
};

const addProductToBasket = (productID) => {
  const mainProduct = products.find((product) => product.id === productID);

  if (!mainProduct) {
    console.error("addProductToBasket: product not found", productID);
    return;
  }

  const id = mainProduct.id;

  const isProductInBasket = basket.some((product) => product.id === mainProduct.id);

  if (isProductInBasket) {
    increaseProductCount(mainProduct.id);
  } else {
    const basketNewProduct = {
      id,
      title: mainProduct.title,
      description: mainProduct.description,
      img: mainProduct.img,
      price: mainProduct.price,
      count: 1,
    };
    basket.push(basketNewProduct);
  }

  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProductsCount();
};


const saveBasketInLocalStorage = () => {
  localStorage.setItem("basket", JSON.stringify(basket));
};


const showBasketProducts = () => {
  if (!safe(basketProductsContainer, "basketProductsContainer")) return;


  if (basketScreen) basketScreen.classList.remove("hidden");

  if (basketBox) basketBox.classList.add("active");

  basketProductsContainer.innerHTML = "";

  if (basket.length) {
    basket.forEach((product) => {
      basketProductsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <article class="basket-item" data-id="${product.id}">
          <div class="flex-center">
            <img src="${product.img}" alt="" />
            <div class="basket-item_details">
              <p class="basket-item_title">${product.title}</p>
              <p class="basket-item_price">${product.price.toLocaleString()} ت</p>
            </div>
            <div>
              <div class="buttons">
                <button class="increase" data-id="${product.id}"><i class="bx bx-plus"></i></button>
                <button class="remove-button" data-id="${product.id}"><i class="bx bx-trash"></i></button>
                <button class="decrease" data-id="${product.id}"><i class="bx bx-minus"></i></button>
              </div>
              <div class="product-count-card">
                <span>تعداد:</span>
                <span class="product-count">${product.count}</span>
              </div>
            </div>
          </div>
        </article>
      `
      );
    });

    
    basketProductsContainer.querySelectorAll(".increase").forEach(b => {
      b.addEventListener("click", () => increaseProductCount(Number(b.dataset.id)));
    });
    basketProductsContainer.querySelectorAll(".decrease").forEach(b => {
      b.addEventListener("click", () => decreaseProductCount(Number(b.dataset.id)));
    });
    basketProductsContainer.querySelectorAll(".remove-button").forEach(b => {
      b.addEventListener("click", () => removeProductFromBasket(Number(b.dataset.id)));
    });

  } else {
    basketProductsContainer.innerHTML = `<p class="empty-basket">سبد خرید شما خالی می باشد :(</p>`;
  }

  calculateTotalPrice();
  showBasketProductsCount();
};

const increaseProductCount = (productID) => {
  const productToIncreaseCount = basket.find((p) => p.id === productID);
  if (!productToIncreaseCount) return;
  productToIncreaseCount.count += 1;
  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProducts();
};

const decreaseProductCount = (productID) => {
  const productToDecrease = basket.find((p) => p.id === productID);
  if (!productToDecrease) return;
  productToDecrease.count -= 1;
  if (productToDecrease.count <= 0) {
    const idx = basket.findIndex((p) => p.id === productID);
    if (idx > -1) basket.splice(idx, 1);
  }
  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProducts();
};

const hideBasket = () => {
  if (basketScreen) basketScreen.classList.add("hidden");
  if (basketBox) basketBox.classList.remove("active");
};

const getProductsFromLocalStorage = () => {
  try {
    const localBasket = JSON.parse(localStorage.getItem("basket"));
    if (Array.isArray(localBasket)) basket = localBasket;
  } catch (e) {
    console.warn("Could not parse basket from localStorage:", e);
  }
  showProducts();
  showBasketProductsCount();
};

const calculateTotalPrice = () => {
  if (!totalPriceElem) return;
  let totalPrice = 0;
  basket.forEach((product) => (totalPrice += product.price * product.count));
  totalPriceElem.innerHTML = totalPrice.toLocaleString();
};

const clearBasket = () => {
  basket = [];
  saveBasketInLocalStorage();
  showBasketProducts();
  calculateTotalPrice();
  showBasketProductsCount();
};

const showBasketProductsCount = () => {
  if (productCountElem) productCountElem.innerHTML = basket.length;
  if (productCountElemInBasket) productCountElemInBasket.innerHTML = `(${basket.length})`;
};

const removeProductFromBasket = (productID) => {
  const mainProductIndex = basket.findIndex((product) => product.id === productID);
  if (mainProductIndex > -1) {
    basket.splice(mainProductIndex, 1);
    saveBasketInLocalStorage();
    calculateTotalPrice();
    showBasketProductsCount();
    showBasketProducts();
  }
};


if (openBasketBtn) openBasketBtn.addEventListener("click", showBasketProducts);
if (closeBasketBtn) closeBasketBtn.addEventListener("click", hideBasket);
if (clearBasketButton) clearBasketButton.addEventListener("click", clearBasket);




// toglle---------------------------------------------
const change_them_btn=document.querySelector(".switch")
const Darktheme='<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg>'
const Lighttheme='<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path</svg>'

change_them_btn.addEventListener("click" , function(){
   document.documentElement.classList.toggle("Dark-theme")
   if(document.documentElement.classList.contains("Dark-theme")){
    this.innerHTML=Darktheme
    window.localStorage.setItem("theme","Dark-theme")
    
   }else{
    window.localStorage.setItem("theme" ,"Light-theme")
    this.innerHTML=Lighttheme
   }
   
})

if(window.localStorage.getItem("theme")==="Dark-theme"){
  document.documentElement.classList.add("Dark-theme")
  change_them_btn.innerHTML=Lighttheme
}

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
