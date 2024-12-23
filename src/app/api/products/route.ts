import { getAllProducts, getProductByIdWithUMKM } from "@/services/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const product = getProductByIdWithUMKM(id);
    return NextResponse.json(
      {
        status: "success",
        data: product,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      status: "success",
      data: getAllProducts(),
    },
    { status: 200 }
  );
}
