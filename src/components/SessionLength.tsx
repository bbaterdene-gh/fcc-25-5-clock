import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrementSession, incrementSession, selectInterval, selectSession } from '../features/timerSlice'

export const SessionLength = () => {
  const dispatch = useAppDispatch()
  const session = useAppSelector(selectSession)
  const interval = useAppSelector(selectInterval)

  const handleUpClick = () => {
    if (!interval) dispatch(incrementSession())
  }

  const handleDownClick = () => {
    if (!interval) dispatch(decrementSession())
  }

  return (
    <div className="flex flex-col text-xl py-1 items-center md:ml-4">
      <div id="session-label">
        Session Length
      </div>
      <div className="flex justify-center items-center">
        <FaArrowUp className="cursor-pointer" onClick={handleUpClick} id="session-increment"/>
        <span className="mx-2" id="session-length">{session}</span>
        <FaArrowDown className="cursor-pointer" onClick={handleDownClick} id="session-decrement"/>
      </div>
    </div>
  )
}
