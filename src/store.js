import { configureStore } from '@reduxjs/toolkit'
import scoreSlice from './features/scoreSlice'

export const store = configureStore({
  reducer: scoreSlice,
})