export function Header({ openCart, cart }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo-container">
            <p className="header__logo">FoxShop</p>
            <img className="header__img" src="/fox-logo.png" alt="logo" />
          </a>
          <input
            type="text"
            className="header__input"
            placeholder="I am looking for.."
          />
          <div className="header__buttons">
            <button
              type="button"
              className="header__cart-open-button"
              onClick={openCart}
            >
              <svg className="header__icon-cart">
                <use href="svg/sprite.svg#cart"></use>
              </svg>
              <span
                className="indicator"
                style={{ display: cart.length > 0 ? "block" : "none" }}
              ></span>
            </button>
            <button type="button" className="header__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line burger__line--short"></span>
              <span className="burger__line"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
