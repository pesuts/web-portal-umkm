import ProductView from "@/views/ProductView";
import { notFound } from "next/navigation";

let isLoading = true;

async function fetchProduct(idProduct: string) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products?id=${idProduct}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return (
    <div>
      <ProductView product={product} isLoading={isLoading} />
    </div>
  );
}