import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const dayInformationsSlice = createSlice({
  name: 'dayInformations',
  initialState: {
    drivingTime: 0,
    dailyDrivingTime: 0,
    restTime: 0,
    workingTime: 0,
    dispositionTime: 0,
    sleepTime: 0,
    amplitude: 0,
    latitude: 0,
    oldLatitude: 0,
    longitude: 0,
    oldLongitude: 0,
    chronoMode: '',
    serviceTime: 0,
    dailyServiceTime: 0,
    isDoubleCrew: false,
    showSecondaryMenu: false,
    date_chronomode: Date,
    isActive: false,
    saveNeeded: false,
  },
  reducers: {
    incrementAmplitude(state, action) {
      state.amplitude += action.payload
    },
    incrementDrivingTime(state, action) {
      state.drivingTime += action.payload
    },
    incrementDailyDrivingTime(state, action) {
      state.dailyDrivingTime += action.payload
    },
    incrementWorkingTime(state, action) {
      state.workingTime += action.payload
    },
    incrementRestTime(state, action) {
      state.restTime += action.payload
    },
    incrementDispositionTime(state, action) {
      state.dispositionTime += action.payload
    },
    incrementServiceTime(state, action) {
      state.serviceTime += action.payload
    },
    incrementDailyServiceTime(state, action) {
      state.dailyServiceTime += action.payload
    },
    setChronoMode(state, action) {
      state.chronoMode = action.payload
    },
    resetDrivingTime(state) {
      state.drivingTime = 0
    },
    resetRestTime(state) {
      state.restTime = 0
    },
    resetWorkingTime(state) {
      state.workingTime = 0
    },
    resetServiceTime(state) {
      state.serviceTime = 0
    },
    setRestTime: (state, action) => {
      state.restTime = action.payload
    },
    setDoubleCrew: (state, action) => {
      state.isDoubleCrew = action.payload
    },
    setShowSecondaryMenu: (state, action) => {
      state.showSecondaryMenu = action.payload
    },
    setShowSecondaryMenu: (state, action) => {
      state.showSecondaryMenu = action.payload
    },
    resetAll: (state, action) => {
      return dayInformationsSlice.initialState
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload
    },
    setSaveNeeded: (state, action) => {
      state.saveNeeded = action.payload
    },
  },
})

export const getAmplitude = (state) => state.dayInformations.amplitude
export const getWorkingTime = (state) => state.dayInformations.workingTime
export const getRestTime = (state) => state.dayInformations.restTime
export const getDispositionTime = (state) =>
  state.dayInformations.dispositionTime
export const getSleepTime = (state) => state.dayInformations.sleepTime
export const getDrivingTime = (state) => state.dayInformations.drivingTime
export const getDailyDrivingTime = (state) =>
  state.dayInformations.dailyDrivingTime
export const getServiceTime = (state) => state.dayInformations.serviceTime

export const getDailyServiceTime = (state) =>
  state.dayInformations.dailyServiceTime
export const getChronoMode = (state) => state.dayInformations.chronoMode
export const getDoubleCrew = (state) => state.dayInformations.isDoubleCrew
export const getShowSecondaryMenu = (state) =>
  state.dayInformations.showSecondaryMenu
export const getIsActive = (state) => state.dayInformations.isActive
export const getSaveNeeded = (state) => state.dayInformations.saveNeeded

export const {
  incrementAmplitude,
  incrementDailyDrivingTime,
  incrementDailyServiceTime,
  incrementDispositionTime,
  incrementDrivingTime,
  incrementRestTime,
  incrementServiceTime,
  incrementWorkingTime,
  resetDrivingTime,
  resetRestTime,
  resetWorkingTime,
  resetAll,
  resetServiceTime,
  setSaveNeeded,
  setRestTime,
  setChronoMode,
  setDoubleCrew,
  setShowSecondaryMenu,
  setIsActive,
} = dayInformationsSlice.actions

export default dayInformationsSlice.reducer
