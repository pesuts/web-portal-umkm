import { getTotalProducts } from "@/services/products";
import { getTotalUMKM } from "@/services/umkm";
import { NextResponse } from "next/server";

export async function GET() {
  const totalProducts = getTotalProducts();
  const totalUMKM = getTotalUMKM();
  return NextResponse.json(
    {
      status: "success",
      data: { totalProducts, totalUMKM },
    },
    { status: 200 }
  );
}
