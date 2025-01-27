/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Polygon,
} from "@react-google-maps/api";
import kelurahanTanjungrejoPoly from "@/data/kelurahanTanjungrejo";
import type { MarkerData } from "@/types/Map";
import InfoMap from "./map/InfoMap";
import { createCustomIcon, urlToBase64 } from "@/utils/imageUtils";
import { UMKMType, UMKMTypeEdit } from "@/data/umkm";

const mapContainerStyle = { width: "100%", height: "100%" };
const center = { lng: 109.671, lat: -7.7305 };

const polygonOptions = {
  fillColor: "#528D5C",
  fillOpacity: 0.4,
  strokeColor: "#63AB45",
  strokeOpacity: 1,
  strokeWeight: 4,
  clickable: false,
  draggable: false,
  editable: false,
};

const disabledOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  draggable: false,
  zoomControl: false,
  gestureHandling: "none",
};

const defaultOptions = {
  disableDefaultUI: false,
};

const GoogleMapComponent = ({
  disabled,
  data,
  mapTypeId,
}: {
  disabled: boolean;
  data: UMKMTypeEdit[];
  // data: UMKMType[];
  // satellite?: boolean;
  mapTypeId?: "hybrid" | "satellite" | "roadmap" | "terrain";
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "",
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [base64, setBase64] = useState<any | null>(null);

  // const mapTypeId = satellite ? "roadmap" : "hybrid";

  useEffect(() => {
    const fetchData = async () => {
      const base64 = await urlToBase64();
      setBase64(base64);
    };
    fetchData();
  }, []);

  const handleSelectedMarker = (value: any) => {
    setSelectedMarker(value);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options={disabled ? disabledOptions : defaultOptions}
      // mapTypeId={satellite ? "hybrid" : "roadmap"}
      // mapTypeId={mapTypeId ?? "hybrid"}
      mapTypeId="satellite"
      // mapTypeId={mapTypeId}
    >
      <Polygon
        path={kelurahanTanjungrejoPoly.coordinates}
        options={polygonOptions}
      />
      {data.map((location) => {
        // const markerKey = `${location.lat}+${location.lng}`;
        const markerKey = `${location?.position?.lat}+${location?.position?.lng}`;
        return (
          <Marker
            position={{ lat: location?.position?.lat, lng: location?.position?.lng }}
            // position={{ lat: location.lat, lng: location.lng }}
            key={markerKey}
            icon={{
              url: createCustomIcon(base64),
              scaledSize:
                hoveredMarker === markerKey
                  ? new window.google.maps.Size(100, 100)
                  : new window.google.maps.Size(40, 40),
            }}
            onClick={() => {
              if (!disabled) {
                setSelectedMarker({
                  id: location.id,
                  // lat: location.lat,
                  // lng: location.lng,
                  lat: location.position.lat,
                  lng: location.position.lng,
                  title: location.name,
                  // description: location.address,
                  description: location.contact.address,
                  // totalProducts: location.totalProducts,
                  totalProducts: location?.totalProducts ? Number(location.totalProducts) : undefined,
                  // image: location.image,
                  image: location.imageUrl,
                  dusun: location.dusun,
                });
              }
            }}
            onMouseOver={() => setHoveredMarker(markerKey)}
            onMouseOut={() => setHoveredMarker(null)}
          />
        );
      })}
      {selectedMarker && (
        <InfoMap
          selectedMarker={selectedMarker}
          handleSelectedMarker={handleSelectedMarker}
        />
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
