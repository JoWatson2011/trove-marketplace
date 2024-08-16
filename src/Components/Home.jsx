import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
function Home() {
  const { categories } = useContext(CategoriesContext);

  return (
    <main>
      <div className="relative overflow-hidden inline-block whitespace-nowrap animate-ticker my-4  space-x-3">
        <h3 className="font-bold italic">
          SHOP BY CATEGORY{" "}
          <span aria-hidden="true" className="font-bold italic ">
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
            SHOP BY CATEGORY SHOP BY CATEGORY SHOP BY CATEGORY
          </span>
        </h3>
      </div>
      <ul className="flex flex-wrap justify-around">
        {categories.map((c) => {
          return (
            <button
              className="w-32 h-32 bg-lime-700 rounded-full overflow-visible flex items-center justify-center relative hover:bg-stripes hover:bg-green-800"
              key={c}
            >
              <div className="absolute inset-0 bg-stripes rounded-full clip-half-right "></div>
              <div className="relative z-10 text-white text-center italic font-bold">
                {c.toUpperCase()}
              </div>
            </button>
          );
        })}
      </ul>
      <h3></h3>
    </main>
  );
}

export default Home;
