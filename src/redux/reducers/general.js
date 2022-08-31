import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

//Selectors

export const getCounter = state => state.counter;

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = generalSlice.actions

export default generalSlice.reducer