import { Goods } from "./Goods";
import { Sidebar } from "./Sidebar";

export function Content({
  addToCart,
  setFilteredGoods,
  setGoods,
  filteredGoods,
}) {
  return (
    <>
      <div className="content__container">
        <div className="burger-menu"></div>

        <Sidebar />
        <Goods
          addToCart={addToCart}
          setGoods={setGoods}
          filteredGoods={filteredGoods}
          setFilteredGoods={setFilteredGoods}
        />
      </div>
    </>
  );
}
