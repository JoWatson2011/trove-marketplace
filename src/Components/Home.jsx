import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
function Home() {
  const { categories } = useContext(CategoriesContext);

  return (
    <main>
      <h2 className="text-center font-bold italic">SHOP BY CATEGORY</h2>
      <ul className="flex flex-wrap justify-around">
        {categories.map((c) => {
          return (
            <div class="w-32 h-32 bg-lime-700 rounded-full overflow-visible flex items-center justify-center relative ">
              <div class="absolute inset-0 bg-stripes rounded-full clip-half-right"></div>
              <div class="relative z-10 text-white text-center italic font-bold hover:not-italic">{c.toUpperCase()}</div>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
