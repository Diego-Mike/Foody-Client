"use server";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export const deleteImg = async (key: string): Promise<boolean | undefined> => {
  // console.log("deleting file", key);
  await utapi.deleteFiles(key);

  return;
};
