import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrementSession, incrementSession, selectSession } from '../features/timerSlice'

export const SessionLength = () => {
  const dispatch = useAppDispatch()
  const session = useAppSelector(selectSession)

  const handleUpClick = () => {
    dispatch(incrementSession())
  }

  const handleDownClick = () => {
    dispatch(decrementSession())
  }

  return (
    <div className="flex flex-col text-xl py-1">
      <div>
        Session Length
      </div>
      <div className="flex justify-center items-center">
        <FaArrowUp className="cursor-pointer" onClick={handleUpClick}/>
        <span className="mx-2">{session}</span>
        <FaArrowDown className="cursor-pointer" onClick={handleDownClick}/>
      </div>
    </div>
  )
}
