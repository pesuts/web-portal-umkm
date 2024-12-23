import umkm from "@/data/umkm";
import { getProductById } from "../products";

export const getAllUMKM = () => {
  return umkm;
};

export const getUMKMById = (id: string) => {
  const [UMKM] = umkm.filter((product) => product.id === id);
  return UMKM;
};

export const getUMKMByIdWithProducts = (id: string) => {
  const [UMKM] = umkm.filter((product) => product.id === id);
  if (Array.isArray(UMKM.productsId)) {
    const products = UMKM.productsId.map((id) => {
      return getProductById(id);
    });
    return { ...UMKM, products };
  }
  return UMKM;
};
