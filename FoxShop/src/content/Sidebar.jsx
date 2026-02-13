export function Sidebar({ isCategoriesOpen, setIsCategoriesOpen }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav navigation">
        <ul className="navigation__list">
          <li className="navigation__item navigation__item--active">
            <a href="/">Home</a>
          </li>

          <li className="navigation__item">
            <button
              type="button"
              className="navigation__dropdown-btn"
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
            >
              <span>Categories</span>
              <svg
                className={`navigation__arrow ${
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
              className={`navigation__dropdown-list ${
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
  );
}
