import { configureStore } from "@reduxjs/toolkit"
import commonSliceReducer from "./reducers/reducer"

export const store = configureStore({
  reducer: {
    common: commonSliceReducer,
  },
})
