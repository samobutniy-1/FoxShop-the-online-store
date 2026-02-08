import { Header } from "../header/Header";
import { Products } from "../products/Products";

export function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Products />

        <footer className="footer"></footer>
      </div>
      <div className="modal">
        <div className="modal__content">
          <h2 className="modal__title">Your cart</h2>
          <button type="button" className="modal__cart-close-button">
            <svg className="modal__icon-close">
              <use href="/svg/sprite.svg#close"></use>
            </svg>
          </button>
          <div className="modal__empty-cart empty-cart">
            <h3 className="empty-cart__title">Your cart is empty</h3>
            <img
              src="/empty-cart-image.png"
              alt="Your cart is empty"
              className="empty-cart__image"
            />
            <p className="empty-cart__messagge">but you can change it :3</p>
          </div>
          <div className="modal__full-cart">
            <ul className="modal__list"></ul>
            <div className="modal__total-price total-price">
              <p className="total-price__text">Total price:</p>
              <span className="total-price__amount"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
