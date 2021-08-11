
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
const now = new Date().getTime()
const future = now + 25 * 60 * 1000

const initialState = {
  interval: undefined as number | undefined,
  break: 5,
  session: 25,
  timer: {
    now,
    future,
  },
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
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
      state.timer.future = state.timer.now + state.session * 60 * 1000
    },
    decrementSession: (state) => {
      if (state.session > 1) {
        state.session -= 1
      }
      state.timer.future = state.timer.now + state.session * 60 * 1000
    },
    decrementFuture: (state) => {
      state.timer.future = state.timer.future - 1 * 1000
    },
    setTimerInterval: (state, action) => {
      state.interval = action.payload
    },
    reset: (state) => {
      clearInterval(state.interval)
      return initialState
    }
  },
})

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  decrementFuture,
  setTimerInterval,
  reset,
} = timerSlice.actions

export const selectBreak = (state: RootState) => state.timer.break
export const selectSession = (state: RootState) => state.timer.session
export const selectCountdown = (state: RootState) => {
  const diff = state.timer.timer.future - state.timer.timer.now
  const diffTime = new Date(diff)
  return {
    minutes: diffTime.getMinutes(),
    seconds: diffTime.getSeconds(),
  }
}
export const selectInterval = (state: RootState) => state.timer.interval
export default timerSlice.reducer;