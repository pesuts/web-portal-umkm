import { products } from "@/data/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = products;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const [product] = data.filter((product) => product.id === id);
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
      data,
    },
    { status: 200 }
  );
}
