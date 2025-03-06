import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useRouter } from "next/navigation";

interface CategoriesContextType {
  categories: string[];
}

function CategorySelector({
  category,
  setCategory,
}: {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { categories } = useContext(CategoriesContext) as CategoriesContextType;
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <label className="font-bold italic px-2" htmlFor="select-category">
        CATEGORY
      </label>
      <select
        className="border border-black rounded-full p-1 mx-2"
        id="select-category"
        onChange={(e) => {
          setCategory(e.target.value);
          router.push(`/items?category=${e.target.value}`);
        }}
        defaultValue={category}
      >
        <option value="">All items</option>
        {categories.map((categoryOption: string) => {
          if (categoryOption === category)
            return (
              <option
                value={categoryOption}
                defaultValue={categoryOption}
                key={categoryOption}
              >
                {categoryOption}
              </option>
            );
          else
            return (
              <option value={categoryOption} key={categoryOption}>
                {categoryOption}
              </option>
            );
        })}
      </select>
    </div>
  );
}

export default CategorySelector;
