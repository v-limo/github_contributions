type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  year: number
}

export const YearComponent = ({ handleClick, year }: Props) => {
  return (
    <div
      className="flex h-full  flex-col
          items-center justify-between"
    >
      {new Array(3).fill(Math.random() * 1000).map((item, i) => {
        return (
          <button
            key={i + item}
            value={new Date().getFullYear() + i}
            onClick={(e) => handleClick(e)}
            className={`
            cursor-pointer  p-3  text-sm text-gray-500 hover:text-gray-700
            ${
              year === new Date().getFullYear() + i
                ? "text-gray-900 underline "
                : ""
            }
            `}
          >
            {new Date().getFullYear() + i}
          </button>
        )
      })}
    </div>
  )
}
