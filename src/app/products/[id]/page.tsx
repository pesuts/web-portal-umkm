import ProductView from "@/views/ProductDetailView";
import { notFound } from "next/navigation";

let isLoading = false;

async function fetchProduct(idProduct: string) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products?id=${idProduct}`, {
    cache: "no-store"
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function ProductDetailPage({
  params,
}: {
  // params: Promise<{ id: string }>;
  params: { id: string };
}) {
  // const { id } = await params;
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div>
      <ProductView product={product} isLoading={isLoading} />
    </div>
  );
}
