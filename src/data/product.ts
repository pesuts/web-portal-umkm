import { UMKMType } from "./umkm";

export interface productType {
  id: string;
  name: string;
  price?: number;
  description: string;
  images?: string[];
  featured?: boolean;
  umkmId: string;
  umkmName: string;
  umkmDetail?: UMKMType;
}

export const product = {
  id: "b1f7c4a3-13f1-4e2d-8ec4-5c5cc7a58f61",
  name: "Golak",
  price: 5000,
  description:
    "Golak merupakan makanan khas yang telah ada sejak nenek moyang, dengan tekstur yang kenyal, gurih dan bentuknya unik (menyerupai angka 8) sangat enak untuk camilan.",
  images: ["/images/golak.png"],
  umkmId: "123",
  umkmName: "Suryati",
};

export const products: productType[] = [
  {
    id: "b1f7c4a3-13f1-4e2d-8ec4-5c5cc7a58f61",
    name: "Golak",
    price: 5000,
    description:
      "Golak merupakan makanan khas yang telah ada sejak nenek moyang, dengan tekstur yang kenyal, gurih dan bentuknya unik (menyerupai angka 8) sangat enak untuk camilan.",
    images: ["/images/golak.png"],
    umkmId: "123",
    umkmName: "Suryati",
    featured: true,
  },
  {
    id: "b4c35456-507f-47d5-b0a7-fc1c23c7e0bc",
    name: "Lanthing",
    price: 8000,
    description:
      "Lanthing adalah camilan khas Kebumen yang terbuat dari singkong, berbentuk lingkaran kecil, dengan rasa gurih dan renyah.",
    umkmId: "124",
    umkmName: "Lanthing Mas Yanto",
    featured: false,
  },
  {
    id: "8b7d2f9a-97c4-473a-85b6-b559c43f042b",
    name: "Sale Pisang",
    price: 7500,
    description:
      "Sale pisang adalah makanan manis khas Kebumen yang terbuat dari pisang yang dikeringkan dan digoreng, memiliki rasa manis alami dan aroma khas.",
    umkmId: "125",
    umkmName: "Pisang Sale Mbak Yuni",
    featured: false,
  },
  {
    id: "e12b4a39-86da-46f2-b0f3-78f7e5b08ea3",
    name: "Jenang Jaket",
    description:
      "Jenang Jaket adalah jenang khas Kebumen yang memiliki tekstur kenyal dan rasa manis yang nikmat, cocok sebagai oleh-oleh.",
    umkmId: "126",
    umkmName: "Jenang Jaket Pak Joko",
    featured: true,
  },
  {
    id: "db582438-9fd7-47a4-b2b9-84513c4825d4",
    name: "Nopia",
    description:
      "Nopia adalah makanan khas Kebumen berupa kue bertekstur renyah di luar dan berisi gula merah di dalamnya, berbentuk bulat kecil.",
    images: ["/images/nopia.png"],
    umkmId: "127",
    umkmName: "Nopia Sari Rasa",
    featured: false,
  },
  {
    id: "ce17c0f2-0f9c-4686-8c7e-f6be22c4b105",
    name: "Lanting Singkong",
    description:
      "Lanting singkong adalah camilan khas Kebumen dengan rasa gurih yang terbuat dari singkong, berbentuk seperti angka delapan.",
    images: ["/images/lanting_singkong.png"],
    umkmId: "128",
    umkmName: "UMKM Bu Tini",
    featured: true,
  },
  {
    id: "c98a9fa8-b1b9-47ba-b4d7-02ff1842340b",
    name: "Emping Jagung",
    description:
      "Emping Jagung khas Kebumen memiliki rasa gurih dan renyah, cocok untuk camilan saat bersantai.",
    images: ["/images/emping_jagung.png"],
    umkmId: "129",
    umkmName: "Emping Jagung Barokah",
    featured: false,
  },
  {
    id: "1a85b6ae-7c71-4575-8d78-0e1a58b47044",
    name: "Sate Ambal",
    description:
      "Sate Ambal adalah sate ayam khas Kebumen yang memiliki bumbu khas berbahan dasar tempe, rasanya unik dan menggugah selera.",
    umkmId: "130",
    umkmName: "Sate Ambal Pak Raji",
    featured: true,
  },
  {
    id: "4f60c033-87a4-4a92-b6ab-06d7f6e428b1",
    name: "Kue Sagon",
    description:
      "Kue Sagon khas Kebumen berbahan dasar kelapa parut dan tepung ketan, memiliki rasa manis dan tekstur yang lembut.",
    umkmId: "123",
    umkmName: "Suryati",
    featured: false,
  },
];
