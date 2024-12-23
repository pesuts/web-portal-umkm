import UMKMView from "@/views/UMKMView";
import { notFound } from "next/navigation";

let isLoading = true;

async function fetchUMKM(idProduct: string) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/umkm?id=${idProduct}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function UMKMPage({
  params,
}: {
  params: { id: string };
}) {
  const UMKM = await fetchUMKM(params.id);

  return (
    <div>
      <UMKMView UMKM={UMKM} isLoading={isLoading} />
    </div>
  );
}