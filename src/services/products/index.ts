export const getData = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = response.json();
  return data;
}