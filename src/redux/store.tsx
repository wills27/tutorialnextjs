import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import rootReducer from "./root_reducer";
  
const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>

export default store