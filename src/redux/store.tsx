import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import rootReducer from "./root_reducer"; // Import your root reducer here
  
const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>; // Infer RootState from rootReducer

export default store;