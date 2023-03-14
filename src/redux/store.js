import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage";
import DesiVibesReducer from "./DesiVibesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
  const persistedReducer = persistReducer(persistConfig, DesiVibesReducer);
  export const store = configureStore({
    reducer: { DesiVibes: persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export let persistor = persistStore(store);
  
 
  