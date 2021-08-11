
import { useAppSelector } from "../app/hooks"
import { selectCountdown } from "../features/timerSlice"

export const Timer = () => {
  const timer = useAppSelector(selectCountdown)

  return (
    <div className="flex flex-col items-center rounded-4xl border-8 py-4 px-6 my-2">
      <div className="text-xl">
        Session
      </div>
      <div className="text-6xl">
        {`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}
      </div>
    </div>
  )
}
