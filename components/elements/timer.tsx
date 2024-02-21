import {useCallback, useEffect, useState} from "react";

interface TimerProps {
  countTo: Date
}
export default function Timer ({countTo}: TimerProps) {

  const expiredTime = '00:00'

  function formatSeconds (seconds: number): string {
    if (Math.floor(seconds) > 9) {
      return String(Math.floor(seconds))
    } else {
      return `0${Math.floor(seconds)}`
    }
  }

  const renderTime = useCallback(() => {
    const currentTimeMs = new Date().getTime()
    const targetTimeMs = new Date(countTo).getTime()
    const differenceMs = targetTimeMs - currentTimeMs
    if (differenceMs > 0) {
      return `${formatSeconds(differenceMs / (1000 * 60))}:${formatSeconds((differenceMs % (1000 * 60)) / 1000)}`
    } else {
      return expiredTime
    }
  }, [countTo])

  const [time, setTime] = useState(renderTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const timeString = renderTime()
      setTime(timeString)
      if(timeString === expiredTime) {
        clearInterval(interval)
      }
    }, 1000)
  }, [renderTime])

  return (
    <>{time}</>
  )
}
