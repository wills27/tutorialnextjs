import { ProductItemProps } from "@/components/ProductItem";
import { combineReducers } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

interface RootState {
    cart: {
      cartItems: ProductItemProps[];
    };
}

const rootReducer = combineReducers({
    cart: cartSliceReducer,
});

export default rootReducer;