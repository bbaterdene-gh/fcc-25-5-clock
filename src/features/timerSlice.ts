
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    break: 5,
    session: 25,
    time: 25,
  },
  reducers: {
    incrementBreak: (state) => {
      state.break += 1
    },
    decrementBreak: (state) => {
      if (state.break > 1) {
        state.break -= 1
      }
    },
    incrementSession: (state) => {
      state.session += 1
    },
    decrementSession: (state) => {
      if (state.session > 1) {
        state.session -= 1
      }
    },
  },
})

export const { incrementBreak, decrementBreak, incrementSession, decrementSession } = timerSlice.actions
export const selectBreak = (state: RootState) => state.timer.break
export const selectSession = (state: RootState) => state.timer.session
export const selectTime = (state: RootState) => state.timer.time
export default timerSlice.reducer;