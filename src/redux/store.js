import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./ProjectSlice"
export const store = configureStore({
  reducer: {
    app:appReducer
  },
})