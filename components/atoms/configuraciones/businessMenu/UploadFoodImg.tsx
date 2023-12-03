import { Dispatch, FC, SetStateAction } from "react";
import { UploadDropzone } from "../../uploadthing";

interface Props {
  uploadImg: {
    url: string;
    key: string;
    imgValidation: boolean;
    deletingImgInProgress: boolean;
  };
  setUploadImg: Dispatch<
    SetStateAction<{
      url: string;
      key: string;
      imgValidation: boolean;
      deletingImgInProgress: boolean;
    }>
  >;
}

const UploadFoodImg: FC<Props> = ({ uploadImg, setUploadImg }) => {
  return (
    <UploadDropzone
      className={`w-full h-full px-5 py-0 mt-0 ${
        uploadImg.imgValidation && "ut-label:text-[rgb(191,22,80)]"
      } ut-uploading:cursor-not-allowed ut-allowed-content:ut-uploading:hidden ut-label:ut-uploading:hidden`}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // console.log("upload complete");
        // console.log("file uploaded", res);
        if (uploadImg.imgValidation) {
          setUploadImg({ ...uploadImg, imgValidation: false });
          // setUploadingImgValidation(false);
        }
        res?.forEach((file) => {
          setUploadImg({ ...uploadImg, url: file.url, key: file.key });
        });
      }}
      onUploadError={(error: Error) => {
        // FIXME: what if uploading fails
        console.log("ERROR uploading file", error);
      }}
      content={{
        label: "Sube foto de tu comida !",
        allowedContent: "Imagen máximo de 4MB",
      }}
      config={{ mode: "auto" }}
    />
  );
};

export default UploadFoodImg;
