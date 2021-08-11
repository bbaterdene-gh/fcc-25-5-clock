import { IoMdPause, IoMdPlay, IoMdRefresh } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { decrementFuture, reset, selectInterval, setTimerInterval } from "../features/timerSlice"

export const TimerControl = () => {
  const dispatch = useAppDispatch()
  const interval = useAppSelector(selectInterval)

  const handlePlay = () => {
    if ( !interval ) {
      const timerInterval = setInterval(() => {
        dispatch(decrementFuture())
      }, 1000)
      dispatch(setTimerInterval(timerInterval))
    }
  }

  const handlePause = () => {
    
  }

  const handleRefresh = () => {
    dispatch(reset())
  }

  return (
    <div className="flex text-2xl mt-2">
      <IoMdPlay className="cursor-pointer" onClick={handlePlay}/>
      <IoMdPause className="cursor-pointer mx-2" onClick={handlePause}/>
      <IoMdRefresh className="cursor-pointer" onClick={handleRefresh}/>
    </div>
  )
}
