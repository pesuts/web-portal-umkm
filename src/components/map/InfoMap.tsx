import { InfoWindow } from "@react-google-maps/api";
import type { MarkerData } from "@/types/Map";
import Image from "next/image";

const InfoMap = ({
  selectedMarker,
  handleSelectedMarker,
}: {
  selectedMarker: MarkerData;
  handleSelectedMarker: (marker: MarkerData | null) => void;
}) => {
  return (
    <InfoWindow
      position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
      // onCloseClick={() => setSelectedMarker(null)}
      onCloseClick={() => handleSelectedMarker(null)}
    >
      <div className="p-4 outline-2 mb-10">
        <div className="flex">
          <Image
            src={selectedMarker.image}
            alt={selectedMarker.title}
            className="rounded-md mb-2"
            width={300}
            height={250}
          />
          <div className="flex items-center justify-center mx-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedMarker.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {selectedMarker.description}
              </p>
              <button className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default InfoMap;
