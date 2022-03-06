import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {},
  },
})

//Actions
export const { addToBasket, removeFromBasket }: any = basketSlice.actions

//Selectors- This is how we information from Global store slick
export const selectItems = (state: any) => state?.basket?.items

export default basketSlice.reducer
