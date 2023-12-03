import { createNextRouteHandler } from "uploadthing/next";

import { uploadFilesRouter } from "./core";

// export routes for Next app router
export const { GET, POST } = createNextRouteHandler({
  router: uploadFilesRouter,
});
