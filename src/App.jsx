import Navigation from "./components/Navigation/Navigation"
import { lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import('./pages/HomePages/HomePages'));

function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
