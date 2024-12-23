import { getAllUMKM, getUMKMByIdWithProducts } from "@/services/umkm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const data = umkm;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const [product] = data.filter((product) => product.id === id);
    const umkm = getUMKMByIdWithProducts(id);
    return NextResponse.json(
      {
        status: "success",
        data: umkm,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      status: "success",
      data: getAllUMKM(),
    },
    { status: 200 }
  );
}
