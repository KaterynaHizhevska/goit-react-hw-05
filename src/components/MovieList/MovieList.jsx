import s from "./MovieList.module.css"
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
    const location = useLocation();

  return (
      <div>
          <ul className={s.list}>
              {data.map((movie) => {
                  return (
                      <li key={movie.id}>
                          <Link to={`/movies/${movie.id.toString()}`} state={location}> 
                              <p>{movie.original_title}</p>
                          </Link>
                      </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default MovieList