import { Header } from "../header/Header";

export function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content__container">
          <div className="burger-menu"></div>

          <aside className="sidebar">
            <nav className="sidebar__nav navigation">
              <ul className="navigation__list">
                <li className="navigation__item navigation__item--active">
                  <a href="/">Home</a>
                </li>
                <li className="navigation__item">
                  <button type="button" className="navigation__dropdown-btn">
                    <span>Categories</span>
                    <svg
                      id="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                    >
                      <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                    </svg>
                  </button>
                  <ul className="navigation__dropdown-list">
                    <li>
                      <a href="#">Category 1</a>
                    </li>
                    <li>
                      <a href="#">Category 2</a>
                    </li>
                    <li>
                      <a href="#">Category 3</a>
                    </li>
                    <li>
                      <a href="#">Category 4</a>
                    </li>
                  </ul>
                </li>
                <li className="navigation__item">
                  <a href="/">About Us</a>
                </li>
                <li className="navigation__item">
                  <a href="/">Best Sellers</a>
                </li>
                <li className="navigation__item">
                  <a href="/">Special Offers</a>
                </li>
                <li className="navigation__item">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="main">
            <section className="goods-section">
              <ul className="goods-section__list"></ul>
            </section>
          </main>
        </div>

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
