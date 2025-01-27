import { getProductByDocumentName, retrieveDataProducts } from "@/lib/firebase/service";
import {
  getAllProductsWithUMKM, getProductByIdWithUMKM
} from "@/services/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const product = getProductByIdWithUMKM(id);
    const product = await getProductByDocumentName(id);
    if (!product) {
      return NextResponse.json(
        {
          status: "error",
          data: product,
          id
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        status: "success",
        data: product,
      },
      { status: 200 }
    );
  }
  const products = await retrieveDataProducts("products", "umkm");
  return NextResponse.json(
    {
      status: "success",
      // data: getAllProductsWithUMKM(),
      data: products,
    },
    { status: 200 }
  );
}
