
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
const now = new Date().getTime()
const future = now + 25 * 60 * 1000

const initialState = {
  inSession: true,
  interval: undefined as number | undefined,
  break: 5,
  session: 25,
  time: {
    now,
    future,
  },
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      if (state.break < 60) {
        state.break += 1
      }
    },
    decrementBreak: (state) => {
      if (state.break > 1) {
        state.break -= 1
      }
    },
    incrementSession: (state) => {
      if (state.session < 60) {
        state.session += 1
        state.time.future = state.time.now + state.session * 60 * 1000
      }
    },
    decrementSession: (state) => {
      if (state.session > 1) {
        state.session -= 1
      }
      state.time.future = state.time.now + state.session * 60 * 1000
    },
    decrementFuture: (state) => {
      if (state.time.future !== state.time.now) {
        state.time.future = state.time.future - 1 * 1000
      } else {
        state.inSession = !state.inSession
        const audio = document.getElementById('beep') as HTMLAudioElement
        audio.play()
        if (state.inSession) {
          state.time.now = new Date().getTime()
          state.time.future = state.time.now + state.session * 60 * 1000
        } else {
          state.time.now = new Date().getTime()
          state.time.future = state.time.now + state.break * 60 * 1000
        }
      }
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
  const diff = state.timer.time.future - state.timer.time.now
  const diffTime = new Date(diff)
  let minutes
  if ( diffTime.getMinutes() === 0 && diffTime.getSeconds() === 0 && diff !== 0) {
    minutes = 60
  } else {
    minutes = diffTime.getMinutes()
  }
  return {
    minutes,
    seconds: diffTime.getSeconds(),
  }
}
export const selectInterval = (state: RootState) => state.timer.interval
export const selectInSession = (state: RootState) => state.timer.inSession
export default timerSlice.reducer;