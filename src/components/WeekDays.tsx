import React from 'react';

const WeekDays = () => {
  const days = ["Mon", "Wed", "Fri"]
  return (
      <div className=" flex flex-col items-center justify-between">
        {days.map((day) => {
          return <p
            key={day}
            className="p-3 text-xs">{day}</p>
        })}
      </div>
  )
}

export default WeekDays
