import { ShippingFormData } from '@/app/shipping/page';
import { ProductItemProps } from '@/components/ProductItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'

export interface CartState {
  loading: boolean,
  cartItems: ProductItemProps[],
  shippingAddress: ShippingFormData,
  paymentMethod: string,
  itemsPrice: number,
  shippingPrice: number,
  taxPrice: number,
  totalPrice: number,
}

const initialState = Cookies.get('cart') 
? { ...JSON.parse(Cookies.get('cart') || 'null') as CartState, loading: true}
: {
    loading: true,
    cartItems: [],
    shippingAddress: {},
    paymentMethod: '',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
};

const addDecimals = (num : number) => {
  return parseFloat((Math.round(num * 100) / 100).toFixed(2))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItemProps>) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.id === item.id)

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice))
      )
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      )
      Cookies.set('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice))
      );
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      );
      Cookies.set('cart', JSON.stringify(state));
    },
    saveShippingAddress: (state, action: PayloadAction<ShippingFormData>) => {
      state.shippingAddress = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    hideLoading: (state) => {
      state.loading = false
    },
  },
})

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, hideLoading } = cartSlice.actions

export default cartSlice.reducer
