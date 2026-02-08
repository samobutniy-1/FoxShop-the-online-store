import { Sidebar } from "./Sidebar";

export function Products() {
  return (
    <>
      <div className="content__container">
        <div className="burger-menu"></div>

        <Sidebar />
        <main className="main">
          <section className="goods-section">
            <ul className="goods-section__list"></ul>
          </section>
        </main>
      </div>
    </>
  );
}
