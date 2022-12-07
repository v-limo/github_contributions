import React from "react"

type Props = {
  name: string
  contributions: number
}

const ContributionCalendar = ({ name, contributions }: Props) => {
  return (
    <div>
      <h1 className="m-auto  text-3xl font-bold text-gray-800 ">{name}</h1>
      <div className="flex items-center justify-between ">
        <p className="mb-2 text-sm  text-gray-800">
          {contributions.toLocaleString()} contributions in the last year
        </p>
        <p
          className="mb-2 cursor-pointer  text-sm
        text-gray-800 hover:text-blue-500"
        >
          Contributions settings
        </p>
      </div>
    </div>
  )
}

export default ContributionCalendar
