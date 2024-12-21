import Navigation from "./components/Navigation/Navigation"
import { lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import('./pages/HomePages/HomePages'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage/MovieDetailPage'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader/>}>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
