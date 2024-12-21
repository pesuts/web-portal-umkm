export interface Polygon {
  kodeDesa: string,
  desa: string,
  kecamatan: string,
  kabupaten: string,
  provinsi: string,
  kode: number,
  generated: string,
  coordinates: Coordinate[];
}

export interface Coordinate { 
  lat: number;
  lng: number;
}

export interface MarkerData {
  id: string;
  lat: number;
  lng: number;
  title: string;
  description: string;
  image: string;
  dusun: string;
}