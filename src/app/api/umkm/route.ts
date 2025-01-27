import { retrieveData } from "@/lib/firebase/service";
import { getAllUMKM, getUMKMByIdWithProducts } from "@/services/umkm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const data2 = await retrieveData("list_umkm");
  const data2 = await retrieveData("umkm");
  if (id) {

    // const umkm = getUMKMByIdWithProducts(id);
    return NextResponse.json(
      {
        status: "success",
        // data2,
        // data: umkm,
        data: data2,
        // data,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      status: "success",
      // data: getAllUMKM(),
      data: data2,
    },
    { status: 200 }
  );
}
