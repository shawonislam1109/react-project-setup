import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducer";
import { api } from "../api/apiConfig";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
