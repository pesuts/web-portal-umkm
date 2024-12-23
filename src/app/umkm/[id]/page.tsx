import UMKMDetailView from "@/views/UMKMDetailView";
import { notFound } from "next/navigation";

let isLoading = false;

async function fetchUMKM(idProduct: string) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/umkm?id=${idProduct}`, {
    cache: "no-store"
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function UMKMPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const UMKM = await fetchUMKM(id);

  return (
    <div>
      <UMKMDetailView UMKM={UMKM} isLoading={isLoading} />
    </div>
  );
}
