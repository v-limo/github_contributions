type Props = {
  handleClick: () => void
}

export const YearComponent = ({ handleClick }: Props) => {
  return (
    <div
      className="flex h-full  flex-col
          items-center justify-between
        "
    >
      <p onClick={handleClick} className="cursor-pointer  p-3  text-sm">
        {new Date().getFullYear()}
      </p>
      <p onClick={handleClick} className="cursor-pointer  p-3  text-sm">
        {new Date().getFullYear() - 1}
      </p>
      <p onClick={handleClick} className="cursor-pointer  p-3  text-sm">
        {new Date().getFullYear() - 2}
      </p>
    </div>
  )
}
