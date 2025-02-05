import Item from "../../../Components/Item";
import { getRequest } from "../../../utils/api";

export async function generateStaticParams() {
  const items = await getRequest("/products");

  return items.map(
    (item: {
      id: string;
      image: string;
      title: string;
      price: number;
      description: string;
    }) => ({
      slug: `${item.id}`,
    })
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <Item id={slug} />;
}
