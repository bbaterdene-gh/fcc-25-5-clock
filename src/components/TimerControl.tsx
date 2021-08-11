import { IoMdPause, IoMdPlay, IoMdRefresh } from "react-icons/io"
import { useAppDispatch } from "../app/hooks"
import { decrementFuture } from "../features/timerSlice"

export const TimerControl = () => {
  const dispatch = useAppDispatch()
  let timeInterval

  const handlePlay = () => {
    timeInterval = setInterval(() => {
      dispatch(decrementFuture())
    }, 1000)
  }

  const handlePause = () => {
    
  }

  const handleRefresh = () => {
    
  }

  return (
    <div className="flex text-2xl mt-2">
      <IoMdPlay className="cursor-pointer" onClick={handlePlay}/>
      <IoMdPause className="cursor-pointer mx-2" onClick={handlePause}/>
      <IoMdRefresh className="cursor-pointer" onClick={handleRefresh}/>
    </div>
  )
}
