import { useEffect, useState } from "react";

export function Header({
  openCart,
  cart,
  goods,
  setFilteredGoods,
  isCategoriesOpen,
  setIsCategoriesOpen,
}) {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchProduct = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSearch = () => {
    const filtered = goods.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredGoods(filtered);
  };

  const openMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <>
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo-container">
            <p className="header__logo">FoxShop</p>
            <img className="header__img" src="/fox-logo.png" alt="logo" />
          </a>
          <div className="header__nav-container">
            <div className="header__search-container">
              <input
                type="text"
                className="header__input"
                placeholder="I am looking for.."
                onChange={searchProduct}
                value={search}
              />

              <button className="header__input-button" onClick={handleSearch}>
                Search
              </button>
            </div>

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
              <button
                type="button"
                className="header__burger burger"
                onClick={openMenu}
              >
                <span className="burger__line"></span>
                <span className="burger__line burger__line--short"></span>
                <span className="burger__line"></span>
              </button>
              {isMenuOpen && (
                <div
                  className="header__overlay"
                  onClick={() => setIsMenuOpen(false)}
                ></div>
              )}

              <nav
                className={`header__menu-navigation menu-navigation ${
                  isMenuOpen ? "menu-navigation--open" : ""
                }`}
              >
                <button
                  className="menu-navigation__close-btn"
                  onClick={openMenu}
                >
                  <svg className="menu-navigation__close-icon">
                    <use href="/svg/sprite.svg#close"></use>
                  </svg>
                </button>
                <ul className="menu-navigation__list">
                  <li className="menu-navigation__item menu-navigation__item--active">
                    <a href="/">Home</a>
                  </li>

                  <li className="menu-navigation__item">
                    <button
                      type="button"
                      className="menu-navigation__dropdown-btn"
                      onClick={() => setIsCategoriesOpen((prev) => !prev)}
                    >
                      <span>Categories</span>
                      <svg
                        className={`menu-navigation__arrow ${
                          isCategoriesOpen ? "rotated" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        width="24"
                        height="24"
                      >
                        <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                      </svg>
                    </button>

                    <ul
                      className={`menu-navigation__dropdown-list ${
                        isCategoriesOpen ? "open" : ""
                      }`}
                    >
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

                  <li className="menu-navigation__item">
                    <a href="/">About Us</a>
                  </li>
                  <li className="menu-navigation__item">
                    <a href="/">Best Sellers</a>
                  </li>
                  <li className="menu-navigation__item">
                    <a href="/">Special Offers</a>
                  </li>
                  <li className="menu-navigation__item">
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
