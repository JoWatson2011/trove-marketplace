import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useRouter } from "next/navigation";
function Home() {
  const { categories } = useContext(CategoriesContext);

  const router = useRouter();
  return (
    <main className="grid grid-cols-1">
      <h2 className="mx-10 my-5 font-bold italic text-xl">SHOP BY CATEGORY</h2>

      <nav className="place-self-center grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 place-items-center gap-[60px]">
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
