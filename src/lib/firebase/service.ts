import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  // updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import { productType } from "@/data/product";
// import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retrieveDataProducts(productCollection: string, umkmCollection: string) {
  const productSnapshot = await getDocs(collection(firestore, productCollection));
  const products: productType[] = productSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      umkmId: data.umkmId,
      umkmName: data.umkmName,
      images: data?.images,
      category: data?.category,
      featured: data?.featured,
    };
  });

  const umkmSnapshot = await getDocs(collection(firestore, umkmCollection));
  const umkms = umkmSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const combinedData = products.map((product) => {
    const umkmDetail = umkms.find((umkm) => umkm.id === product.umkmId);
    return {
      ...product,
      umkmDetail,
    };
  });

  return combinedData;
}