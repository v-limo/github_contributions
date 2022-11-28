import React, { useEffect } from 'react';

import { useAppSelector } from '../app/hooks';
import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';

type Props = {
  name: string
  contributions: number
}

function ContributionCalendar({ name, contributions }: Props) {
  const [days, setDays] = React.useState<Date[]>([])
  const [year, setYear] = React.useState<number>(2022)
  const [weeks, setWeeks] = React.useState<number>(0)

  const { allCommits } = useAppSelector((state) => state.commits)

  const dates = allCommits.map((commit) => commit.commit.author.date)

  console.log(dates.length)

  const [random, setRandom] = React.useState<number>(
    Math.ceil(Math.random() * 8) * 36
  )

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let newYear = parseInt(e.currentTarget.value)

    if (newYear !== year) {
      setYear(newYear)
    }
  }

  const returnRandom = () => {
    return Math.ceil(Math.random() * 8) * 36
  }

  const ReturnMonths = () => {
    let uniqueMonths: string[] = []
    days.map((day) => uniqueMonths.push(months[day.getMonth()]))

    // remove duplicates
    uniqueMonths = uniqueMonths.filter((v, i, a) => a.indexOf(v) === i)
    return uniqueMonths
  }

  // randomize the color of the calendar on year change
  useEffect(() => {
    setRandom(Math.ceil(Math.random() * 8) * 36)
  }, [year])

  useEffect(() => {
    const updateDays = () => {
      const days: Date[] = []

      const first = new Date(year, 0, 1)
      const last = new Date(year, 11, 31)

      const difference = last.getTime() - first.getTime()

      const weeks = Math.ceil(difference / (1000 * 60 * 60 * 24 * 7))

      setWeeks(weeks)

      const daysInYear = Math.ceil(difference / (1000 * 3600 * 24))

      for (let i = 0; i < daysInYear; i++) {
        const day = new Date(first)
        day.setDate(day.getDate() + i)
        days.push(day)
      }
      setDays(days)
    }

    updateDays()
  }, [year])

  return (
    <div className="m-2 flex w-full flex-col p-5">
      <CalendarHeader name={name} contributions={contributions} />
      <Calendar
        {...{
          name,
          contributions,
          returnRandom,
          ReturnMonths,
          weeks,
          days,
          year,
          random,
          handleClick,
        }}
      />
    </div>
  )
}

export default ContributionCalendar
