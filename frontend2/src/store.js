import { configureStore } from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'

// create a new store
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})
