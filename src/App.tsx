import './App.css'
import { StateProvider } from './Core/StateManager'
import { HomePage } from './UI/HomePage'

function App() {

  return (
    <StateProvider>
      <HomePage/>
    </StateProvider>
  )
}

export default App
