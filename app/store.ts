import { configureStore } from '@reduxjs/toolkit'
import basketSlice from '../slice/basketSlice'
// ...
const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
