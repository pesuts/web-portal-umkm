// import { retrieveData } from "@/lib/firebase/service";
import { getAllUMKM, getUMKMByIdWithProducts } from "@/services/umkm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const data = await retrieveData("location");

    const umkm = getUMKMByIdWithProducts(id);
    return NextResponse.json(
      {
        status: "success",
        // data2: umkm,
        data: umkm,
        // data,
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
