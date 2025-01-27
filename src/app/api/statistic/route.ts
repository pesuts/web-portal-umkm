import { calculateTotalDocument } from "@/lib/firebase/service";
import { getTotalProducts } from "@/services/products";
import { getTotalUMKM } from "@/services/umkm";
import { NextResponse } from "next/server";

export async function GET() {
  // const totalProducts = getTotalProducts();
  const totalProducts = await calculateTotalDocument("products");
  // const totalUMKM = getTotalUMKM();
  const totalUMKM = await calculateTotalDocument("umkm");
  return NextResponse.json(
    {
      status: "success",
      data: { totalProducts, totalUMKM },
    },
    { status: 200 }
  );
}
