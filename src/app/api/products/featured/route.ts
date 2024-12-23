import {
  getAllFeaturedProducts,
} from "@/services/products";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "success",
      data: getAllFeaturedProducts(),
    },
    { status: 200 }
  );
}
