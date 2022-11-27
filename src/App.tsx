import ContributionCalendar from "./components/ContributionCalendar"
import Profile from "./components/Profile"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"

function App() {
  const dispatch = useAppDispatch()
  const { allCommits } = useAppSelector((state) => state.commits)

  useEffect(() => {
    // dispatch(fetchCommits("v-limo"))
  }, [dispatch])

  console.log(allCommits.length)

  return (
    <div
      className="max-w-screen 
    m-5
    flex min-h-screen flex-col items-center justify-between rounded-lg border-2"
    >
      <Profile />
      <ContributionCalendar name="You" contributions={212} />
      <ContributionCalendar
        name="The Guy she tells you not to worry about"
        contributions={112074}
      />
    </div>
  )
}

export default App
