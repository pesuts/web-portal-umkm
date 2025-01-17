import { InfoWindow } from "@react-google-maps/api";
import type { MarkerData } from "@/types/Map";
import Image from "next/image";
import Link from "next/link";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

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
      onCloseClick={() => handleSelectedMarker(null)}
    >
      <div className="p-4 outline-2 mb-10">
        <div className="flex flex-col lg:flex-row">
          <Image
            src={
              selectedMarker.image
                ? selectedMarker.image
                : `/images/placeholder-card.jpg`
            }
            alt={selectedMarker.title}
            className="rounded-md mb-2 lg:hidden"
            width={190}
            height={190}
          />
          <Image
            src={
              selectedMarker.image
                ? selectedMarker.image
                : `/images/placeholder-card.jpg`
            }
            alt={selectedMarker.title}
            className="rounded-md mb-2 hidden lg:block"
            width={300}
            height={250}
          />
          <div className="flex items-center justify-center lg:mx-10">
            <div>
              <Link
                href={`/umkm/${selectedMarker.id}`}
                className="text-lg font-semibold text-gray-800 hover:text-primary"
              >
                {selectedMarker.title}
              </Link>
              <div className="py-2 lg:p-4 ">
                <div className="flex gap-2 -ms-0.5 items-center">
                  <div className="flex">
                    <MdLocationPin
                      className="text-primary-2 mt-0.5"
                      size={20}
                    />
                  </div>
                  <p className="text-gray-600">{selectedMarker.description}</p>
                </div>
                {/* <p className="text-gray-600 text-sm">
                  {selectedMarker.description}
                </p> */}
                {selectedMarker?.totalProducts && (
                  <div className="flex items-center gap-3 py-2">
                    <BsBoxSeamFill className="text-primary-2" size={15} />
                    <p className="text-gray-600">
                      Total Produk :
                      <span className="font-bold text-primary">
                        {selectedMarker?.totalProducts}
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <Link
                href={`/umkm/${selectedMarker.id}`}
                className="block text-center mt-2 px-4 py-3 text-white bg-primary rounded hover:bg-primary-hover"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default InfoMap;
