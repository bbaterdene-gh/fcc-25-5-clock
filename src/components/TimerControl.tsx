import { IoMdPause, IoMdPlay, IoMdRefresh } from "react-icons/io"

export const TimerControl = () => {
  return (
    <div className="flex text-2xl mt-2">
      <IoMdPlay className="cursor-pointer"/>
      <IoMdPause className="cursor-pointer mx-2"/>
      <IoMdRefresh className="cursor-pointer"/>
    </div>
  )
}
