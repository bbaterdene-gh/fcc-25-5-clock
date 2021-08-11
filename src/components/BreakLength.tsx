import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrementBreak, incrementBreak, selectBreak } from '../features/timerSlice'

export const BreakLength = () => {
  const dispatch = useAppDispatch()
  const breakValue = useAppSelector(selectBreak)

  const handleUpClick = () => {
    dispatch(incrementBreak())
  }

  const handleDownClick = () => {
    dispatch(decrementBreak())
  }

  return (
    <div className="flex flex-col text-xl py-1">
      <div>
        Break Length
      </div>
      <div className="flex justify-center items-center">
        <FaArrowUp className="cursor-pointer" onClick={handleUpClick}/>
        <span className="mx-2">{breakValue}</span>
        <FaArrowDown className="cursor-pointer" onClick={handleDownClick}/>
      </div>
    </div>
  )
}