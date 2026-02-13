import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Cart } from "../content/cart/Cart";

import { useState } from "react";

export function HomePage() {
  const [goods, setGoods] = useState([]);
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (good) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === good.id);

      if (existing) {
        return prev.map((item) => {
          return item.id === good.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }

      return [...prev, { ...good, quantity: 1 }];
    });
  };

  function openCart() {
    setIsCartOpened((prev) => !prev);
  }
  return (
    <>
      <div className="wrapper">
        <Header
          isCategoriesOpen={isCategoriesOpen}
          setIsCategoriesOpen={setIsCategoriesOpen}
          isCartOpened={setIsCartOpened}
          openCart={openCart}
          cart={cart}
          setCart={setCart}
          goods={goods}
          setFilteredGoods={setFilteredGoods}
        />

        <Content
          isCategoriesOpen={isCategoriesOpen}
          setIsCategoriesOpen={setIsCategoriesOpen}
          addToCart={addToCart}
          setGoods={setGoods}
          filteredGoods={filteredGoods}
          setFilteredGoods={setFilteredGoods}
        />

        <footer className="footer"></footer>
      </div>
      <Cart
        cart={cart}
        setCart={setCart}
        isCartOpened={isCartOpened}
        setIsCartOpened={setIsCartOpened}
        openCart={openCart}
      />
    </>
  );
}
