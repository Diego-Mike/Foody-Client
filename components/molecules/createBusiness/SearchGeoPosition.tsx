import GeoInputSearch from "@/components/atoms/crearNegocio/GeoInputSearch";
import GeoLoadingReq from "@/components/atoms/crearNegocio/GeoLoadingReq";
import InputIconWrapper from "@/components/atoms/crearNegocio/InputIconWrapper";
import {
  IBusinessForm,
  IGeo,
} from "@/components/organisms/createBusiness/NewBusinessForm";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, KeyboardEvent, SetStateAction } from "react";
import { FieldError, UseFormGetValues, UseFormRegister } from "react-hook-form";

interface Props {
  geoBusinessPlace: IGeo;
  setGeoBusinessPlace: Dispatch<SetStateAction<IGeo>>;
  getValues: UseFormGetValues<IBusinessForm>;
  registerInput: UseFormRegister<IBusinessForm>;
  inputErr?: FieldError;
}

const SearchGeoPosition: FC<Props> = ({
  geoBusinessPlace,
  setGeoBusinessPlace,
  getValues,
  registerInput,
  inputErr,
}) => {
  const getAddressLatLong = (address: string) => {
    setGeoBusinessPlace((prev) => ({ ...prev, loading: true }));
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results) {
          setGeoBusinessPlace({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      } else {
        // FIXME: handle api error call
        console.log(
          "Geocode was not successful for the following reason: " + status
        );
      }
      setGeoBusinessPlace((prev) => ({
        ...prev,
        loading: false,
        searched: true,
      }));
    });
  };

  const searchPlace = (e: KeyboardEvent<HTMLInputElement>) => {
    setGeoBusinessPlace((prev) => ({ ...prev, searched: false }));
    if (e.key === "Enter") {
      const address = `${getValues("address")} ${getValues("city")} Colombia`;
      getAddressLatLong(address);
    }
  };

  return (
    <>
      <div className="relative mt-10">
        <InputIconWrapper>
          {geoBusinessPlace.loading ? (
            <GeoLoadingReq width="w-[18px]" height="h-[18px]" />
          ) : (
            <MagnifyingGlassIcon className="w-[18px] text-white" />
          )}
        </InputIconWrapper>
        <GeoInputSearch
          register={registerInput}
          inputErr={inputErr}
          loading={geoBusinessPlace.loading!}
          onKeyDownFn={(e) => {
            searchPlace(e);
          }}
        />
      </div>
      <AnimatePresence>
        {geoBusinessPlace.validationFailed && (
          <motion.div
            className="w-full h-14"
            layout
            initial={{ height: "0px" }}
            animate={{ height: "50px" }}
            exit={{ height: "0px" }}
          >
            <motion.p
              className="text-sm text-[rgb(191,22,80)] font-medium pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Presiona enter para buscar tu negocio en el mapa !
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchGeoPosition;
