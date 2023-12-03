import { motion } from "framer-motion";
import { FC, MouseEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { deleteImg } from "@/app/negocio/[business-id]/admin/configuraciones/deleteFileAction";
import LoadingSpinner from "@/components/atoms/global/LoadingSpinner";
import UploadFoodImg from "@/components/atoms/configuraciones/businessMenu/UploadFoodImg";
import FoodImg from "@/components/atoms/configuraciones/businessMenu/FoodImg";
import InsertTitleFood from "@/components/atoms/configuraciones/businessMenu/InsertTitleFood";
import InsertFoodDescription from "@/components/atoms/configuraciones/businessMenu/InsertFoodDescription";
import InsertFoodPrice from "@/components/atoms/configuraciones/businessMenu/InsertFoodPrice";
import InsertFoodAmount from "@/components/atoms/configuraciones/businessMenu/InsertFoodAmount";
import CreateFoodBtn from "@/components/atoms/configuraciones/businessMenu/CreateFoodBtn";
import CancelFoodBtn from "@/components/atoms/configuraciones/businessMenu/CancelFoodBtn";
import { CreateFoodPayload, useCreateFood } from "@/customHooks";
import { useParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export interface NewFoodForm {
  title: string;
  description?: string;
  price: number;
  foodAvailable?: number;
}

interface Props {
  toggle: () => void;
}

const FoodModal: FC<Props> = ({ toggle }) => {
  const [uploadImg, setUploadImg] = useState<{
    url: string;
    key: string;
    imgValidation: boolean;
    deletingImgInProgress: boolean;
  }>({
    url: "",
    key: "",
    imgValidation: false,
    deletingImgInProgress: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
    resetField,
    getValues,
  } = useForm<NewFoodForm>();

  useEffect(() => {
    register("price", { required: true });
    register("foodAvailable", { required: false });
  }, []);

  const urlParams = useParams<{ "business-id": string }>();
  const { mutate, error } = useCreateFood(urlParams["business-id"], toggle);

  const onSubmit: SubmitHandler<NewFoodForm> = useDebouncedCallback(
    ({ foodAvailable, price, title, description }: NewFoodForm) => {
      if (uploadImg.url != "") {
        const body: CreateFoodPayload = {
          food_title: title,
          food_description: description,
          food_price: price,
          food_available_per_day: foodAvailable,
          food_img: uploadImg.url,
        };
        // console.log("body for creating food", body);
        mutate(body);
      } else {
        setUploadImg({ ...uploadImg, imgValidation: true });
      }
    },
    300
  );

  const handleCancel = async () => {
    if (uploadImg.url != "") {
      setUploadImg({ ...uploadImg, deletingImgInProgress: true });
      await deleteImg(uploadImg.key);
    }
    toggle();
  };

  return (
    <motion.section
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      onClick={() => {
        // if deleting img or req in progress, don't let the user close the modal
        if (!uploadImg.deletingImgInProgress && !isSubmitting) {
          handleCancel();
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {uploadImg.deletingImgInProgress ? (
        <LoadingSpinner width="w-10" height="h-10" color="text-cyan-200" />
      ) : (
        <motion.form
          className="border border-[#393C49] bg-[rgb(17,17,17)] w-[320px] h-[480px] rounded-[10px] flex items-center flex-col"
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
          }}
        >
          {/* upload image */}
          <div className="w-full h-[120px] mt-5 flex items-center justify-center">
            {uploadImg.url === "" ? (
              <UploadFoodImg
                uploadImg={uploadImg}
                setUploadImg={setUploadImg}
              />
            ) : (
              <FoodImg foodUrl={uploadImg.url} />
            )}
          </div>

          {/* insert title */}
          <InsertTitleFood
            inputErrValidation={errors.title}
            inputRegister={register}
          />

          {/* insert description */}
          <InsertFoodDescription
            inputErrValidation={errors.description}
            inputRegister={register}
          />

          <div className="flex w-[90%] justify-center items-center mt-5">
            <InsertFoodPrice
              inputValue={getValues("price")}
              setValue={setValue}
              setError={setError}
              inputErr={errors.price}
              resetField={resetField}
            />
            <span className="px-3 text-lg text-white">-</span>
            {/* food available per day */}
            <InsertFoodAmount
              inputValue={getValues("foodAvailable")}
              setValue={setValue}
            />
          </div>

          {/* buttons */}
          <div className="w-[90%] flex items-center justify-between mt-7">
            <CreateFoodBtn loading={isSubmitting} />
            <CancelFoodBtn handleCancel={handleCancel} loading={isSubmitting} />
          </div>
        </motion.form>
      )}
    </motion.section>
  );
};

export default FoodModal;
