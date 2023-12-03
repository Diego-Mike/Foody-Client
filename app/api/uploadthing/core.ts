import { createUploadthing, type FileRouter } from "uploadthing/next";

const instance = createUploadthing();

export const uploadFilesRouter = {
  imageUploader: instance({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req, res }) => {
      // TODO: authorize user
      return {};
    })
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("metadata from middleware:", metadata);
      console.log("file generated", file.url);
    }),
} satisfies FileRouter;

export type UploadFilesRouter = typeof uploadFilesRouter;
