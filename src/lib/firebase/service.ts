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

export async function calculateTotalDocument(collectionName: string) {
  try {
    const collectionRef = collection(firestore, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const documentCount = querySnapshot.size;
    return documentCount;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retrieveDataProducts(
  productCollection: string,
  umkmCollection: string
) {
  const productSnapshot = await getDocs(
    collection(firestore, productCollection)
  );
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

export async function getDataByDocumentName(collectionName: string, documentName: string) {
  try {
    // Membuat referensi ke dokumen
    const docRef = doc(firestore, collectionName, documentName);

    // Mengambil dokumen
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const umkm = docSnap.data();

      const productSnapshot = await getDocs(collection(firestore, "products"));
      const products: productType[] = [];
      // console.log(productSnapshot.docs.);
      productSnapshot.docs.forEach((doc) => {
        // console.log(doc.data());
        if (doc.data().umkmId === umkm.id) {
          // if (doc.id === "umkm-1dPlSIZVy3eCO3U9") {
          products.push({
            id: doc.id,
            // id:doc.data().id, 
            name:doc.data().name, 
            price:doc.data().price, 
            description:doc.data().description, 
            images:doc.data().images, 
            featured:doc.data().featured, 
            umkmId:doc.data().umkmId, 
            umkmName:doc.data().umkmName, 
            umkmDetail:doc.data().umkmDetail, 
            category:doc.data().category, 
            // ...doc.data(),
          })
        }
      });

      const umkmWithProducts = {
        ...umkm, products
      }

      return umkmWithProducts;
      // return umkm;
      // console.log("Data dokumen:", docSnap.data());
    } else {
      // Dokumen tidak ditemukan
      // return "tidak ada dokumen dengan id";
      return null;
      // console.log("Tidak ada dokumen dengan ID tersebut!");
    }
  } catch (error) {
    return null;
    // console.error("Gagal mengambil data:", error);
  }
}

export async function getProductByDocumentName(documentName: string) {
  try {
    const productRef = doc(firestore, "products", documentName);

    const productSnap = await getDoc(productRef);
    const productData = productSnap.data();

    if (productSnap.exists()) {
      if (productData?.umkmId) {
        const umkmId = productData.umkmId;
        const umkmRef = doc(firestore, "umkm", umkmId);
        const umkmSnap = await getDoc(umkmRef);
        const umkmData = umkmSnap.data();
        if (umkmSnap.exists()) {
          const newData = {
            ...productData,
            umkmDetail: umkmData,
          };

          return newData;
        } else {
          // console.log("Tidak ada dokumen dengan ID tersebut!");
          return null;
        }
      } else return null;
    } else {
      return null;
      // console.log("Tidak ada dokumen dengan ID tersebut!");
    }
  } catch (error) {
    return null;
    // console.error("Gagal mengambil data:", error);
  }
}
