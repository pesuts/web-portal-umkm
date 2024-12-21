import GoogleMapComponent from "@/components/GoogleMapComponent";

const Map = () => {
  return (
    <div className="h-screen">
      <GoogleMapComponent disabled={false} />
    </div>
  );
};

export default Map;
