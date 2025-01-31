import { productType } from "@/data/product";
import { retrieveData, retrieveDataProducts } from "@/lib/firebase/service";
import { getAllFeaturedProducts } from "@/services/products";
import { NextResponse } from "next/server";

export async function GET() {
  // const products: productType[] = (await retrieveData("products")).map(
  const products: productType[] = (await retrieveDataProducts("products", "umkm")).map(
    (product: any) => ({
      id: product.id,
      name: product.name || "",
      price: product.price || "",
      description: product.description || "",
      images: product.images || "",
      featured: product.featured || "",
      umkmId: product.umkmId || "",
      umkmName: product.umkmName || "",
      umkmDetail: product.umkmDetail || {},
      category: product.category || false,
    })
  );
  const featuredProducts: productType[] = [];
  products.forEach((product) => {
    if (product?.featured) featuredProducts.push(product);
  });

  return NextResponse.json(
    {
      status: "success",
      // data: getAllFeaturedProducts(),
      data: featuredProducts,
    },
    { status: 200 }
  );
}
