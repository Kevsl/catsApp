import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const dayInformationsSlice = createSlice({
  name: 'dayInformations',
  initialState: {
    drivingTime: 0,
    dailyDrivingTime: 0,
    dailyServiceTime: 0,
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
    isDoubleCrew: false,
    showSecondaryMenu: false,
    dateChronomode: 0,
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
    resetAmplitude(state) {
      state.amplitude = 0
    },
    resetDateChronomode(state) {
      state.amplitude = 0
    },
    resetDailyServiceTime(state) {
      state.dailyServiceTime = 0
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
    resetDay: (state, action) => {
      // prettier-ignore
      state.dailyServiceTime = 0,
      state.dailyDrivingTime = 0,
      state.drivingTime = 0,
      state.chronoMode = 0,
      state.amplitude = 0,
      state.serviceTime = 0,
      state.dispositionTime= 0
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload
    },
    setSaveNeeded: (state, action) => {
      state.saveNeeded = action.payload
    },
    setDateChronomode: (state, action) => {
      state.dateChronomode = action.payload
    },
    setDriveIncrement: (state, action) => {
      ;(state.drivingTime += action.payload),
        (state.amplitude += action.payload),
        (state.serviceTime += action.payload),
        (state.dailyServiceTime += action.payload),
        (state.dailyDrivingTime += action.payload)
    },
    setWorkIncrement: (state, action) => {
      ;(state.workingTime += action.payload),
        (state.amplitude += action.payload),
        (state.serviceTime += action.payload),
        (state.dailyServiceTime += action.payload)
    },
    setDispositionIncrement: (state, action) => {
      ;(state.dispositionTime += action.payload),
        (state.amplitude += action.payload),
        (state.serviceTime += action.payload),
        (state.dailyServiceTime += action.payload)
    },
    setRestIncrement: (state, action) => {
      //prettier-ignore
      (state.dispositionTime = action.payload),
      (state.amplitude = action.payload)
    },
    setReset45: (state, action) => {
      //prettier-ignore
      state.workingTime = 0,
      state.drivingTime = 0,
      state.serviceTime = 0,
      state.dispositionTime= 0
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
export const getDateChronomode = (state) => state.dayInformations.dateChronomode

export const {
  incrementAmplitude,
  incrementDailyDrivingTime,
  incrementDailyServiceTime,
  incrementDispositionTime,
  incrementDrivingTime,
  incrementRestTime,
  incrementServiceTime,
  incrementWorkingTime,
  resetAmplitude,
  resetDrivingTime,
  resetRestTime,
  resetDailyServiceTime,
  resetWorkingTime,
  resetAll,
  resetDay,
  resetServiceTime,
  setChronoMode,
  setDateChronomode,
  setDispositionIncrement,
  setDoubleCrew,
  setDriveIncrement,
  setIsActive,
  setReset45,
  setRestTime,
  setRestIncrement,
  setSaveNeeded,
  setShowSecondaryMenu,
  setWorkIncrement,
} = dayInformationsSlice.actions

export default dayInformationsSlice.reducer
