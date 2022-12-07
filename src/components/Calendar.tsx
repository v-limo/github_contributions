import { CommitComponent } from './CommitComponent';
import WeekDays from './WeekDays';
import { YearComponent } from './YearComponent';

type Props = {
  name: string
  contributions: number
  returnRandom: () => number
  ReturnMonths: () => string[]
  weeks: number
  days: Date[]
  random: number
  year: number
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Calendar = ({
  name,
  contributions,
  ReturnMonths,
  returnRandom,
  weeks,
  days,
  random,
  year,
  handleClick,
}: Props) => {
  return (
    <div className="flex  m- auto w-auto items-center justify-around rounded-md border border-solid p-2">
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
      <YearComponent handleClick={handleClick} year={year} />
    </div>
  )
}

export default Calendar
