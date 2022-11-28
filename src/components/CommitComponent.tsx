type Props = {
  name: string
  contributions: number
  ReturnMonths: () => string[]
  returnRandom: () => number
  weeks: number
  days: Date[]
  random: number
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const CommitComponent = ({
  ReturnMonths,
  returnRandom,
  name,
  weeks,
  days,
  random,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="align-center mb-2 flex justify-evenly ">
          {ReturnMonths().map((month) => {
            return (
              <p key={month} className="text-xs">
                {month}
              </p>
            )
          })}
        </div>

        <div
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: `repeat(${weeks}, 1fr)`,
            gridTemplateRows: `repeat(7, 1fr)`,
          }}
        >
          {days.map((day) => {
            const randomColor = `hsl(${
              Math.ceil(Math.random() * 8) * 36
            }, 70%, 50%)`

            return (
              <div
                style={{
                  backgroundColor:
                    name === "You" && returnRandom() !== random
                      ? "#ebedf1"
                      : randomColor,
                }}
                key={day.toDateString()}
                className={`m-[1px] flex h-auto w-auto items-center justify-center  rounded-sm p-2 text-xs`}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
