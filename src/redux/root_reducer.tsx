import { ProductItemProps } from "@/components/ProductItem"
import { combineReducers } from "@reduxjs/toolkit"
import cartSliceReducer from "./slices/cartSlice"

const rootReducer = combineReducers({
    cart: cartSliceReducer,
});

export default rootReducer