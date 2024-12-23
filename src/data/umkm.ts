import { productType } from "./product";

export interface UMKMType {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  totalProducts: number;
  dusun: string;
  lng: number;
  lat: number;
  image: string;
  productsId: string[];
  products?: productType[];
}

const umkm: UMKMType[] = [
  {
    id: "123",
    name: "Suryati",
    address:
      "Ketileng, Tanjungrejo, Jl. Raya Timur No. 15, Kebumen, Jawa Tengah",
    phoneNumber: "+62 812 3456 7890",
    totalProducts: 1,
    dusun: "Ketileng",
    lng: 109.66671999892986,
    lat: -7.723059999318707,
    image: "https://example.com/image1.png",
    productsId: [
      "b1f7c4a3-13f1-4e2d-8ec4-5c5cc7a58f61",
      "4f60c033-87a4-4a92-b6ab-06d7f6e428b1",
    ],
  },
  {
    id: "124",
    name: "Lanthing Mas Yanto",
    address: "Ganggeng, Tanjungrejo, Kebumen, Jawa Tengah",
    phoneNumber: "+62 811 9876 5432",
    totalProducts: 1,
    dusun: "Ganggeng",
    lng: 109.67177000068602,
    lat: -7.735830000053681,
    image: "https://example.com/image2.png",
    productsId: ["b4c35456-507f-47d5-b0a7-fc1c23c7e0bc"],
  },
  {
    id: "125",
    name: "Pisang Sale Mbak Yuni",
    address:
      "Gebyog, Tanjungrejo, Jl. Pasar Tradisional No. 8, Kebumen, Jawa Tengah",
    phoneNumber: "+62 856 7890 1234",
    totalProducts: 1,
    dusun: "Gebyog",
    lng: 109.67528000067256,
    lat: -7.734900000333937,
    image: "https://example.com/image3.png",
    productsId: ["8b7d2f9a-97c4-473a-85b6-b559c43f042b"],
  },
  {
    id: "126",
    name: "Jenang Jaket Pak Joko",
    address:
      "Tinesek, Tanjungrejo, Jl. Pantai Selatan No. 5, Kebumen, Jawa Tengah",
    phoneNumber: "+62 857 6789 4567",
    totalProducts: 1,
    dusun: "Tinesek",
    lng: 109.67541999993409,
    lat: -7.731869999999674,
    image: "https://example.com/image4.png",
    productsId: ["e12b4a39-86da-46f2-b0f3-78f7e5b08ea3"],
  },
  {
    id: "127",
    name: "Nopia Sari Rasa",
    address:
      "Ketileng, Tanjungrejo, Jl. Perbukitan No. 3, Kebumen, Jawa Tengah",
    phoneNumber: "+62 856 5432 9876",
    totalProducts: 1,
    dusun: "Ketileng",
    lng: 109.67251000063709,
    lat: -7.724219999752393,
    image: "https://example.com/image5.png",
    productsId: ["db582438-9fd7-47a4-b2b9-84513c4825d4"],
  },
  {
    id: "128",
    name: "UMKM Bu Tini",
    address: "Ganggeng, Tanjungrejo, Jl. Tepi Laut No. 7, Kebumen, Jawa Tengah",
    phoneNumber: "+62 812 6789 4321",
    totalProducts: 1,
    dusun: "Ganggeng",
    lng: 109.67541999993409,
    lat: -7.735830000053681,
    image: "https://example.com/image6.png",
    productsId: ["ce17c0f2-0f9c-4686-8c7e-f6be22c4b105"],
  },
  {
    id: "129",
    name: "Emping Jagung Barokah",
    address: "Gebyog, Tanjungrejo, Jl. Desa No. 10, Kebumen, Jawa Tengah",
    phoneNumber: "+62 813 4567 8901",
    totalProducts: 1,
    dusun: "Gebyog",
    lng: 109.66671999892986,
    lat: -7.735830000053681,
    image: "https://example.com/image7.png",
    productsId: ["c98a9fa8-b1b9-47ba-b4d7-02ff1842340b"],
  },
  {
    name: "Sate Ambal Pak Raji",
    id: "130",
    address: "Tinesek, Tanjungrejo, Jl. Pedesaan No. 6, Kebumen, Jawa Tengah",
    phoneNumber: "+62 855 6789 1234",
    totalProducts: 1,
    dusun: "Tinesek",
    lng: 109.67177000068602,
    lat: -7.724219999752393,
    image: "https://example.com/image8.png",
    productsId: ["1a85b6ae-7c71-4575-8d78-0e1a58b47044"],
  },
];

export default umkm;
