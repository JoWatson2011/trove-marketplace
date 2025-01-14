import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CategoriesContext } from "../context/CategoriesContext";
function Home() {
  const { categories } = useContext(CategoriesContext);
  const router = useRouter();

  return (
    <main>
      <div className="relative text-clip overflow-hidden inline-block whitespace-nowrap animate-ticker my-4  space-x-3 ">
        <h2 className="font-bold italic">
          SHOP BY CATEGORY{" "}
          <span aria-hidden="true" className="font-bold italic ">
            {Array(300)
              .fill("")
              .map(() => "SHOP BY CATEGORY")
              .join(" ")}
          </span>
        </h2>
      </div>
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
