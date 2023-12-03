import { generateComponents } from "@uploadthing/react";
import type { UploadFilesRouter } from "../../app/api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<UploadFilesRouter>();
