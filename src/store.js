import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice.js"

export default configureStore({
  reducer: {
    shopingCart: cartReducer,
  },
})
