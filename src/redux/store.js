import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import rootreducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: [],
    whitelist:['todo'],
}
const persistedReducer =persistReducer(persistConfig,rootreducer)
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => {
          return  getDefaultMiddleware(
                {
               serializableCheck:{
                ignoreActions: [    FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE]
               },
                },
            )
    }
});
    export const persistor = persistStore(store)