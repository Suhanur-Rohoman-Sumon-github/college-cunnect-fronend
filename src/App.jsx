
import './App.css'
import ToggleThem from './ToggleThem'

function App() {

  return (
    <>
      <div className="bg-white text-black dark:bg-darkModeBg dark:text-darkModeText">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="text-lg">This is some sample content in your website.</p>

        <ToggleThem />
      </div>
    </>
  )
}

export default App
