import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Cart } from "../content/cart/Cart";

import { useState } from "react";

export function HomePage() {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  function openCart() {
    setIsCartOpened((prev) => !prev);
  }
  return (
    <>
      <div className="wrapper">
        <Header
          isCartOpened={setIsCartOpened}
          openCart={openCart}
          cart={cart}
        />

        <Content addToCart={addToCart} />

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
