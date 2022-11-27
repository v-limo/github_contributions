import ContributionCalendar from "./components/ContributionCalendar"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

function App() {
  return (
    <div className=" m-5 flex h-screen flex-col items-center justify-between rounded-lg  border-2 border-solid border-gray-200">
      <Profile />
      <ContributionCalendar />
      <Footer />
    </div>
  )
}

export default App
