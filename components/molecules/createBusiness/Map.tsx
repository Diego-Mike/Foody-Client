import { IGeo } from "@/components/organisms/createBusiness/NewBusinessForm";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FC } from "react";

interface Props {
  businessPlace: IGeo;
}

const Map: FC<Props> = ({ businessPlace }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  return (
    <div className="w-[80%] h-[300px] mt-12">
      {isLoaded ? (
        <GoogleMap
          center={businessPlace}
          zoom={businessPlace.searched ? 15 : 10}
          options={{ mapTypeControlOptions: { mapTypeIds: [] } }}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        >
          <Marker
            position={businessPlace}
            icon={{
              url: "./createBusiness/fast-food-burger-marker.png",
              scaledSize: new google.maps.Size(55, 55),
            }}
          />
        </GoogleMap>
      ) : (
        <div className="w-full h-full rounded-lg animate-pulse" />
      )}
    </div>
  );
};

export default Map;
