
import { useAppSelector } from "../app/hooks"
import { selectCountdown, selectInSession } from "../features/timerSlice"

export const Timer = () => {
  const timer = useAppSelector(selectCountdown)
  const inSession = useAppSelector(selectInSession)
  return (
    <div className={`flex flex-col items-center rounded-4xl border-8 py-4 px-6 my-2 ${timer.minutes === 0 ? 'text-red-500' : ''}`}>
      <div className="text-xl" id="timer-label">
        {inSession ? 'Session' : 'Break'}
      </div>
      <div className="text-6xl" id="time-left">
        {`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}
      </div>
    </div>
  )
}
