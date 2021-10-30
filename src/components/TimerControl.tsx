import { IoMdPause, IoMdPlay, IoMdRefresh } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { decrementFuture, reset, selectInterval, setTimerInterval } from "../features/timerSlice"

export const TimerControl = () => {
  const dispatch = useAppDispatch()
  const interval = useAppSelector(selectInterval)

  const handlePlay = () => {
    const timerInterval = setInterval(() => {
      dispatch(decrementFuture())
    }, 1000)
    dispatch(setTimerInterval(timerInterval))
  }

  const handlePause = () => {
    clearInterval(interval)
    dispatch(setTimerInterval(undefined))
  }

  const handleRefresh = () => {
    dispatch(reset())
  }

  const handleStartStop = () => {
    if ( !interval ) {
      handlePlay()
    } else {
      handlePause()
    }
  }

  return (
    <div className="flex text-2xl mt-2">
      <div id="start_stop" className="flex mr-3" onClick={handleStartStop}>
        <IoMdPlay className="cursor-pointer"/>
        <IoMdPause className="cursor-pointer"/>
      </div>
      <IoMdRefresh className="cursor-pointer" onClick={handleRefresh} id="reset"/>
    </div>
  )
}
