import { useEffect } from "react"

import { useAppDispatch } from "./app/hooks"
import ContributionCalendar from "./components/ContributionCalendar"
import Profile from "./components/Profile"
import { fetchCommits } from "./redux/commitsSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCommits("v-limo"))
  }, [dispatch])

  return (
    <div className="mx-auto my-3 flex min-h-screen max-w-[1300px] flex-col items-center justify-center rounded-lg border-2">
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
