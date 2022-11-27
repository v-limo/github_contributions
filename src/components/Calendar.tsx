import React from "react"
import { CommitComponent } from "./CommitComponent"
import WeekDays from "./WeekDays"
import { YearComponent } from "./YearComponent"

type Props = {
  name: string
  contributions: number
  returnRandom: () => number
  ReturnMonths: () => string[]
  weeks: number
  days: Date[]
  random: number
  handleClick: () => void
}

const Calendar = ({
  name,
  contributions,
  ReturnMonths,
  returnRandom,
  weeks,
  days,
  random,
  handleClick,
}: Props) => {
  return (
    <div className="flex  w-auto items-center justify-around rounded-md border border-solid p-2 shadow-sm ">
      <WeekDays />

      {/* Commits */}
      <CommitComponent
        {...{
          name,
          contributions,
          ReturnMonths,
          returnRandom,
          weeks,
          days,
          random,
          handleClick,
        }}
      />

      {/* year */}
      <YearComponent handleClick={handleClick} />
    </div>
  )
}

export default Calendar
