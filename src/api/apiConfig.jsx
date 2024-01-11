import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  mode: "cors",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});
