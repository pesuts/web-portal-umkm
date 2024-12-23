import UMKMView from "@/views/UMKMView";

let isLoading = false;

async function fetchUMKM() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/umkm`, {
    cache: "no-store"
  });
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function ProductDetailPage() {
  const UMKMs = await fetchUMKM();

  return (
    <div>
      <UMKMView UMKM={UMKMs} isLoading={isLoading} />
    </div>
  );
}
