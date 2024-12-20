/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Polygon,
} from "@react-google-maps/api";
import kelurahanTanjungrejoPoly from "@/data/kelurahanTanjungrejo";
import type { MarkerData } from "@/types/Map";
import InfoMap from "./map/InfoMap";
import { createCustomIcon, urlToBase64 } from "@/utils/imageUtils";

const mapContainerStyle = { width: "100%", height: "100%" };
const center = { lng: 109.67127000011146, lat: -7.7295 };

const locations: MarkerData[] = [
  {
    lng: 109.66671999892986,
    lat: -7.723059999318707,
    title: "Location 1",
    description: "Description for Location 1",
    image: "https://example.com/image1.png",
  },
  {
    lng: 109.67177000068602,
    lat: -7.735830000053681,
    title: "Location 2",
    description: "Description for Location 2",
    image: "https://example.com/image2.png",
  },
  {
    lng: 109.67528000067256,
    lat: -7.734900000333937,
    title: "Location 3",
    description: "Description for Location 3",
    image: "https://example.com/image3.png",
  },
  {
    lng: 109.67541999993409,
    lat: -7.731869999999674,
    title: "Location 4",
    description: "Description for Location 4",
    image: "https://example.com/image4.png",
  },
  {
    lng: 109.67251000063709,
    lat: -7.724219999752393,
    title: "Location 5",
    description: "Description for Location 5",
    image: "https://example.com/image5.png",
  },
];

const polygonOptions = {
  fillColor: "#FF0000",
  fillOpacity: 0.4,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
};

const disabledOptions = {
  disableDefaultUI: false,
  clickableIcons: false,
  draggable: false,
  zoomControl: false,
  gestureHandling: "none",
};

const defaultOptions = {
  disableDefaultUI: false,
};

const GoogleMapComponent = ({ disabled }: { disabled: boolean }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "",
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [base64, setBase64] = useState<any | null>(null);

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
      zoom={14.8}
      center={center}
      options={disabled ? disabledOptions : defaultOptions}
    >
      <Polygon
        path={kelurahanTanjungrejoPoly.coordinates}
        options={polygonOptions}
      />
      {locations.map((location) => {
        // {locations.map(async (location) => {
        const markerKey = `${location.lat}+${location.lng}`;
        return (
          <Marker
            position={{ lat: location.lat, lng: location.lng }}
            key={markerKey}
            icon={{
              // url: hoveredMarker === markerKey ? location.image : defaultIcon,
              url: createCustomIcon(base64),
              scaledSize:
                hoveredMarker === markerKey
                  ? new window.google.maps.Size(100, 100)
                  : new window.google.maps.Size(40, 40),
            }}
            onClick={() => {
              setSelectedMarker({
                lat: location.lat,
                lng: location.lng,
                title: location.title,
                description: location.description,
                image: location.image,
              });
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
