import { Goods } from "./Goods";
import { Sidebar } from "./Sidebar";

export function Content() {
  return (
    <>
      <div className="content__container">
        <div className="burger-menu"></div>

        <Sidebar />
        <Goods />
      </div>
    </>
  );
}
