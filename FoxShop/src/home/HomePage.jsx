import { Header } from "../header/Header";
import { Content } from "../content/Content";
import { Cart } from "../content/cart/Cart";

import { useState } from "react";

export function HomePage() {
  const [isCartOpened, setIsCartOpened] = useState(false);

  function openCart() {
    setIsCartOpened((prev) => !prev);
  }
  return (
    <>
      <div className="wrapper">
        <Header isCartOpened={setIsCartOpened} openCart={openCart} />

        <Content />

        <footer className="footer"></footer>
      </div>
      <Cart
        isCartOpened={isCartOpened}
        setIsCartOpened={setIsCartOpened}
        openCart={openCart}
      />
    </>
  );
}
