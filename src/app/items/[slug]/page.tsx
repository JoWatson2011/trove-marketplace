import Item from "../../../Components/Item";
import { getRequest } from "../../../utils/api";

export async function generateStaticParams() {
  const items = await getRequest("/products");

  return items.map(
    (item: {
      id: number;
      image: string;
      title: string;
      price: number;
      description: string;
    }) => ({
      slug: `${item.id}`,
    })
  );
}
export default function Page() {
  return <Item />;
}
