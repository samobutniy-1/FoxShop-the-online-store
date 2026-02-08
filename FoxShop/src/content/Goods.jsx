import axios from "axios";
import { useState, useEffect } from "react";

export function Goods() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setGoods(response.data);
    };

    fetchGoods();
  }, []);
  return (
    <>
      <main className="main">
        <section className="goods-section">
          <ul className="goods-section__list">
            {goods.map((good) => {
              return (
                <li key={good.id} className="goods-section__item item">
                  <article className="item__article">
                    <a href="#" className="item__anchor">
                      <img
                        className="item__image"
                        src={good.image}
                        alt={good.title}
                      ></img>
                      <h4 className="item__title">{good.title}</h4>
                    </a>
                  </article>
                  <div className="item__actions">
                    <p className="item__price">${good.price.toFixed(2)}</p>
                    <button className="item__add-button">Add to cart</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
