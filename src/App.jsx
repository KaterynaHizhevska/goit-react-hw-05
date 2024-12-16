import Navigation from "./components/Navigation/Navigation"
import { lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePages/HomePages'));

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
