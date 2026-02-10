export function Cart({ isCartOpened, openCart, cart, setCart }) {
  const changeQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, quantity: newQuantity } : item;
      });
    });
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const deleteProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div
        className="modal"
        style={{ display: isCartOpened ? "flex" : "none" }}
      >
        <div className="modal__content">
          <h2 className="modal__title">Your cart</h2>
          <button
            type="button"
            className="modal__cart-close-button"
            onClick={openCart}
          >
            <svg className="modal__icon-close">
              <use href="/svg/sprite.svg#close"></use>
            </svg>
          </button>

          {cart.length === 0 && (
            <div className="modal__empty-cart empty-cart">
              <h3 className="empty-cart__title">Your cart is empty</h3>
              <img
                src="/empty-cart-image.png"
                alt="Your cart is empty"
                className="empty-cart__image"
              />
              <p className="empty-cart__messagge">but you can change it :3</p>
            </div>
          )}

          {cart.length > 0 && (
            <div className="modal__full-cart">
              <ul className="modal__list">
                {cart.map((cartItem) => {
                  return (
                    <li key={cartItem.id} className="modal__item">
                      <div className="modal__product-info">
                        <img className="modal__image" src={cartItem.image} />
                        <h4 className="modal__product-name">
                          {cartItem.title}
                        </h4>
                      </div>
                      <p className="modal__price">
                        ${cartItem.price.toFixed(2)}
                      </p>
                      <div className="modal__quantity-info">
                        <div className="modal__input-info">
                          <button
                            className="modal__minus-button"
                            type="button"
                            onClick={() =>
                              changeQuantity(cartItem.id, cartItem.quantity - 1)
                            }
                          >
                            −
                          </button>

                          <input
                            className="modal__input"
                            type="number"
                            value={cartItem.quantity}
                            readOnly
                          />

                          <button
                            className="modal__plus-button"
                            type="button"
                            onClick={() =>
                              changeQuantity(cartItem.id, cartItem.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="modal__delete-button"
                          onClick={() => deleteProduct(cartItem.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="modal__total-price total-price">
                <p className="total-price__text">Total price:</p>
                <span className="total-price__amount">
                  ${totalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
