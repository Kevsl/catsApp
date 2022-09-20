import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    access_token: '',
    firstName: '',
    subscriptionOK: false,
    id: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.firstName = action.payload
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
    setSubscription: (state, action) => {
      state.subscriptionOK = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    resetUserInfos: (state, action) => initialState,
  },
})

//Selectors

export const getUserName = (state) => state.user.firstName
export const getAccessToken = (state) => state.user.access_token
export const getSubscription = (state) => state.user.subscriptionOK
export const getId = (state) => state.user.id

// Action creators are userted for each case reducer function
export const {
  setUserName,
  setAccessToken,
  setSubscription,
  setId,
  resetUserInfos,
} = userSlice.actions

export default userSlice.reducer
