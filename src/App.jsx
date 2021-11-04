import { useState } from "react"
import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        <Footer />
      </div>
    </div>
  )
}

export default App
