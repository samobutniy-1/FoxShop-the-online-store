import { Goods } from "./Goods";
import { Sidebar } from "./Sidebar";

export function Content({
  isCategoriesOpen,
  setIsCategoriesOpen,
  addToCart,
  setFilteredGoods,
  setGoods,
  filteredGoods,
}) {
  return (
    <>
      <div className="content__container">
        <div className="burger-menu"></div>

        <Sidebar
          isCategoriesOpen={isCategoriesOpen}
          setIsCategoriesOpen={setIsCategoriesOpen}
        />
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
