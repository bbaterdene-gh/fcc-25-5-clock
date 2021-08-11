import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export const BreakLength = () => {
  return (
    <div className="flex flex-col text-xl py-1">
      <div>
        Break Length
      </div>
      <div className="flex justify-center items-center">
        <FaArrowUp className="cursor-pointer"/>
        <span className="mx-2">5</span>
        <FaArrowDown className="cursor-pointer"/>
      </div>
    </div>
  )
}
