import { getDataByDocumentName, retrieveData } from "@/lib/firebase/service";
import { getAllUMKM, getUMKMByIdWithProducts } from "@/services/umkm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const data2 = await retrieveData("list_umkm");
  const UMKM = await retrieveData("umkm");
  if (id) {
    const umkmDetail = await getDataByDocumentName("umkm", id);
    // const umkm = getUMKMByIdWithProducts(id);
    return NextResponse.json(
      {
        status: "success",
        // data2,
        // data: umkm,
        // data: data2,
        data: umkmDetail,
        // data,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      status: "success",
      // data: getAllUMKM(),
      data: UMKM,
    },
    { status: 200 }
  );
}
