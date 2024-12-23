import ProductsView from "@/views/ProductsView";

let isLoading = true;

async function fetchProduct() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function ProductDetailPage() {
  const products = await fetchProduct();

  return (
    <div>
      <ProductsView products={products} isLoading={isLoading} />
    </div>
  );
}
