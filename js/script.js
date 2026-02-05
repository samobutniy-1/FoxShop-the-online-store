let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  checkCart();
});

const openCartBtn = document.querySelector(".header__cart-open-button");
const modal = document.querySelector(".modal");
openCartBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

const closeCartBtn = document.querySelector(".modal__cart-close-button");
closeCartBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

//Getting products
const getProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

//Rendering products
const renderProducts = async () => {
  const products = await getProduct();
  const ul = document.querySelector(".goods-section__list");
  for (const item of products) {
    //Creating elements
    const li = document.createElement("li");
    const article = document.createElement("article");
    const anchor = document.createElement("a");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("p");
    const AddBtn = document.createElement("button");
    const itemActions = document.createElement("div");
    //Setting class names
    li.className = "goods-section__item item";
    article.className = "item__article";
    anchor.className = "item__anchor";
    image.className = "item__image";
    title.className = "item__title";
    itemActions.className = "item__actions";
    price.className = "item__price";
    AddBtn.className = "item__add-button";
    //Setting values
    image.src = item.image;
    title.textContent = item.title;
    price.textContent = `$${item.price}`;
    AddBtn.textContent = "Add to cart";
    anchor.href = "/"; // змінити на картку товару
    AddBtn.addEventListener("click", () => {
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      });
    });

    itemActions.append(price, AddBtn);
    li.append(article, itemActions);
    article.append(anchor);
    anchor.append(image, title);
    ul.appendChild(li);
  }
};

//Adding function
const addToCart = function (product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  checkCart();
  saveCart();
  totalPrice();
};

//Removing function
const removeFromCart = function (productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
  checkCart();
  saveCart();
  totalPrice();
};

//Rendering cart
const renderCart = () => {
  const cartList = document.querySelector(".modal__list");
  cartList.innerHTML = "";
  for (const item of cart) {
    //Creating elements
    const li = document.createElement("li");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("p");
    const quantity = document.createElement("input");
    const productContainer = document.createElement("div");
    const quantityConatiner = document.createElement("div");
    const dltBtn = document.createElement("button");

    //Setting class names
    li.className = "modal__item";
    image.className = "modal__image";
    title.className = "modal__product-name";
    price.className = "modal__price";
    quantity.className = "modal__quantity";
    productContainer.className = "modal__product-info";
    quantityConatiner.className = "modal__quantity-info";
    dltBtn.className = "modal__delete-button";

    //Setting values
    image.src = item.image;
    title.textContent = item.title;
    price.textContent = `$${item.price}`;
    quantity.type = "number";
    quantity.value = item.quantity;
    quantity.min = "1";
    dltBtn.textContent = "Remove";

    productContainer.append(image, title);
    quantityConatiner.append(quantity, dltBtn);
    li.append(productContainer, price, quantityConatiner);
    cartList.appendChild(li);

    dltBtn.addEventListener("click", () => {
      removeFromCart(item.id);
    });

    quantity.addEventListener("input", (e) => {
      const newQuantity = parseInt(e.target.value);
      item.quantity = newQuantity;
      saveCart();
      totalPrice();
    });
  }
};

//Checking either cart empty or not
const checkCart = function () {
  const indicator = document.querySelector(".indicator");
  const message = document.querySelector(".modal__empty-cart");
  const emptyContent = document.querySelector(".modal__content");

  if (cart.length > 0) {
    indicator.style.display = "block";
    message.style.display = "none";
    emptyContent.style.display = "block";
    emptyContent.style.padding = "100px 30px 30px 30px";
  } else {
    indicator.style.display = "none";
    message.style.display = "flex";
  }
};

//Calcucating total price
const totalPrice = function () {
  const total = document.querySelector(".total-price");
  const totalText = document.querySelector(".total-price__text");
  const totalAmount = document.querySelector(".total-price__amount");
  if (cart.length > 0) {
    total.style.display = "flex";

    const counter = cart.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    const formatted = counter.toFixed(2);
    totalAmount.textContent = `$${formatted}`;
  } else {
    total.style.display = "none";
  }
};

checkCart();
renderProducts();
totalPrice();

const burgerMenu = document.querySelector(".burger-menu");
function openSidebar() {
  burgerMenu.classList.add("show");
}

function closeSidebar() {
  burgerMenu.classList.remove("show");
}

// burgerMenu.addEventListener("click", (e) => {
//   if (e.target === burgerMenu) {
//     burgerMenu.classList.remove("show");
//   }
// });

const dropdownBtn = document.querySelector(".navigation__dropdown-btn");
const dropdownList = document.querySelector(".navigation__dropdown-list");
const dropdownSvg = document.getElementById("svg");

dropdownBtn.addEventListener("click", () => {
  dropdownList.classList.toggle("open");
  dropdownSvg.classList.toggle("rotated");
});
