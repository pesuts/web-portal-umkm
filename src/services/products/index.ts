import { products } from "@/data/product";
import { getUMKMById } from "../umkm";

export const getTotalProducts = () => {
  return products.length;
};

export const getProductById = (id: string) => {
  const [product] = products.filter((product) => product.id === id);
  return product;
};

export const getProductByIdWithUMKM = (id: string) => {
  const [product] = products.filter((product) => product.id === id);
  if (product.umkmId) {
    const umkmDetail = getUMKMById(product.umkmId);
    return { ...product, umkmDetail };
  }
  return product;
};

export const getAllProducts = () => {
  return products;
};

export const getAllFeaturedProducts = () => {
  const featuredProducts = products.filter((product) => product.featured === true);

  const productsWithUMKM = featuredProducts.map((product) => { 
    const umkmDetail = getUMKMById(product.umkmId);
    return { ...product, umkmDetail };
  })
  return productsWithUMKM;
};

export const getAllProductsWithUMKM = () => {
  const productsWithUMKM = products.map((product) => { 
    const umkmDetail = getUMKMById(product.umkmId);
    return { ...product, umkmDetail };
  })
  return productsWithUMKM;
};
