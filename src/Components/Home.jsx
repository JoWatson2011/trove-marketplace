import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
function Home() {
  const { categories } = useContext(CategoriesContext);

  return (
    <main>
      <h2 className="mx-10 my-5  font-bold italic">
        SHOP BY CATEGORY
      </h2>

      <nav className="flex flex-wrap justify-around">
        {categories.map((c) => {
          return (
            <button
              className="w-32 h-32 bg-lime-700 rounded-full overflow-visible flex items-center justify-center relative hover:bg-stripes hover:bg-green-800"
              key={c}
              onClick={() => {
                router.push(`/items?category=${c}`);
              }}
            >
              <div className="absolute inset-0 bg-stripes rounded-full clip-half-right "></div>
              <p className="relative z-10 text-white text-center italic font-bold">
                {c.toUpperCase()}
              </p>
            </button>
          );
        })}
      </nav>
    </main>
  );
}

export default Home;
