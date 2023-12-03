import {
  GoogleMap,
  StreetViewPanorama,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FC } from "react";

export interface BusinessUbicationProps {
  lat: number;
  lng: number;
}

const BusinessUbication: FC<BusinessUbicationProps> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          center={{ lat, lng }}
          zoom={15}
          options={{ mapTypeControlOptions: { mapTypeIds: [] } }}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        >
          <StreetViewPanorama
            options={{
              visible: true,
              position: { lat, lng },
              disableDefaultUI: true,
              zoom: 0,
              zoomControl: false,
              addressControl: true,
              fullscreenControl: true,
            }}
          />
        </GoogleMap>
      )}
    </>
  );
};

export default BusinessUbication;
