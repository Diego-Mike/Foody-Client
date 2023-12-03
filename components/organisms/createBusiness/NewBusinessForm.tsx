import { AnimatePresence } from "framer-motion";
import { KeyboardEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "@/customHooks";
import Map from "@/components/molecules/createBusiness/Map";
import TermsOfService from "@/components/molecules/createBusiness/TermsOfService";
import FormButton from "@/components/atoms/crearNegocio/FormButton";
import InputContainer from "@/components/molecules/createBusiness/InputContainer";
import DropDownContainer from "@/components/molecules/createBusiness/DropDownContainer";
import SearchGeoPosition from "@/components/molecules/createBusiness/SearchGeoPosition";
import {
  CreateBusinessPayload,
  useCreateBusiness,
} from "@/customHooks/useCreateBusiness";
import { useStore } from "@/globalState";
import LodingCreateBusinessReq from "@/components/molecules/createBusiness/LodingCreateBusinessReq";
import InputBusinessPresentation from "@/components/molecules/createBusiness/InputBusinessPresentation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export interface IBusinessForm {
  name: string;
  city: string;
  owner: string;
  clients_max_amount?: number;
  presentation: string;
  address: string;
  termsAndConditions: boolean;
}

export interface IGeo {
  lat: number;
  lng: number;
  loading?: boolean;
  validationFailed?: boolean;
  searched?: boolean;
}

const medallo: IGeo = {
  lat: 6.2476,
  lng: -75.5658,
};

// FIXME: comment all logs globally when in production
// FIXME: when creating new business, user info does not update to business member
const NewBusinessForm = () => {
  const { isShowing, toggle } = useModal(false);

  const [geoBusinessPlace, setGeoBusinessPlace] = useState<IGeo>({
    lat: medallo.lat,
    lng: medallo.lng,
    validationFailed: false,
    loading: false,
    searched: false,
  });

  const router = useRouter();
  const user = useStore((state) => state.user);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IBusinessForm>({
    defaultValues: { owner: user.username },
  });

  // make the request to create new business
  const { mutate, isError, error, isSuccess } = useCreateBusiness();

  const onSubmit: SubmitHandler<IBusinessForm> = useDebouncedCallback(
    (data: IBusinessForm) => {
      // check we have geo of the business
      if (geoBusinessPlace.searched) {
        const newBusinessPayload: CreateBusinessPayload = {
          user_id: user.user_id,
          business_position: "Dueño",
          address: data.address,
          city: data.city,
          name: data.name,
          presentation: data.presentation,
          clients_max_amount: data.clients_max_amount,
          latitude: geoBusinessPlace.lat.toString(),
          longitude: geoBusinessPlace.lng.toString(),
        };
        // console.log(newBusinessPayload);
        mutate(newBusinessPayload);
      } else {
        setGeoBusinessPlace((prev) => ({ ...prev, validationFailed: true }));
      }
    },
    200
  );

  const cityContainerRef = useRef<HTMLParagraphElement | null>(null);
  const [cityOptions, setCityOptions] = useState<number>(0);

  const tabPressd = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      await toggle();
      document.body.style.overflow = "hidden";
      const childElement = cityContainerRef.current!.children[0].children[
        cityOptions
      ] as HTMLParagraphElement;
      childElement.focus();
    }
  };

  const arrowPressd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" || e.key === "Tab") {
      const nextCityOption = cityOptions + 1;

      if (nextCityOption >= 0 && nextCityOption <= 2) {
        const childElement = cityContainerRef.current!.children[0].children[
          nextCityOption
        ] as HTMLParagraphElement;
        childElement.focus();

        setCityOptions(nextCityOption);
      }
    } else if (e.key === "ArrowUp") {
      if (cityOptions >= 1 && cityOptions <= 2) {
        const childElement = cityContainerRef.current!.children[0].children[
          cityOptions - 1
        ] as HTMLParagraphElement;
        childElement.focus();
        setCityOptions(cityOptions - 1);
      }
    }
  };

  return (
    <section className="flex flex-col w-2/4 ml-14">
      <h1 className="text-4xl font-semibold text-white pt-14">
        Registrar Negocio
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-20">
        {/* contains main inputs */}
        <div className="flex flex-wrap w-full">
          <InputContainer
            container={{
              inputTitle: "Nombre",
            }}
            input={{
              inputName: "name",
              inputErr: errors.name,
              register,
              rules: { required: true },
              width: "w-[260px]",
              placeHolder: "Mandingas calatrava",
              maxLength: 30,
            }}
          />

          <InputContainer
            container={{
              inputTitle: "Ubicación",
              containerCustomStyles: "relative pl-8",
              arrowPressd,
            }}
            input={{
              inputName: "city",
              inputErr: errors.city,
              register,
              rules: { required: true },
              placeHolder: "Itagui",
              width: "w-[260px]",
              onClickFn: async () => {
                if (!isShowing) {
                  await toggle();
                  document.body.style.overflow = "hidden";
                  const childElement = cityContainerRef.current!.children[0]
                    .children[cityOptions] as HTMLParagraphElement;
                  childElement.focus();
                }
              },
              onKeyUpFn: tabPressd,
              readOnly: true,
            }}
          >
            <AnimatePresence>
              {isShowing && (
                <>
                  <DropDownContainer
                    cityContainerRef={cityContainerRef}
                    setCityOptions={setCityOptions}
                    setInputValue={setValue}
                    toggle={toggle}
                  />
                </>
              )}
            </AnimatePresence>
          </InputContainer>

          <InputContainer
            container={{
              inputTitle: "Dueño",
              containerCustomStyles: "pt-7",
            }}
            input={{
              inputName: "owner",
              inputErr: errors.owner,
              register,
              rules: { required: true },
              width: "w-[260px]",
              placeHolder: user.username,
              readOnly: true,
            }}
          />

          <InputContainer
            container={{
              inputTitle: "Máximo clientes (no obligatorio)",
              containerCustomStyles: "pt-7 pl-8",
            }}
            input={{
              type: "number",
              inputName: "clients_max_amount",
              inputErr: errors.clients_max_amount,
              register,
              rules: { required: false, valueAsNumber: true },
              width: "w-[260px]",
              placeHolder: "",
            }}
          />

          <InputBusinessPresentation
            register={register}
            inputErr={errors.presentation}
          />
        </div>

        {/* restaurant geo position */}
        <SearchGeoPosition
          geoBusinessPlace={geoBusinessPlace}
          setGeoBusinessPlace={setGeoBusinessPlace}
          registerInput={register}
          getValues={getValues}
          inputErr={errors.address}
        />

        {/* w map */}
        <Map businessPlace={geoBusinessPlace} />

        {/* user terms of service */}
        <TermsOfService
          control={control}
          inputErr={errors.termsAndConditions}
        />

        {/* submit form */}
        <FormButton loading={isSubmitting || isSuccess} />
      </form>

      {/* loading req */}
      <LodingCreateBusinessReq isLoading={isSubmitting || isSuccess} />
    </section>
  );
};

export default NewBusinessForm;
