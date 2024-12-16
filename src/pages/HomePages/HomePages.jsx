import { useEffect, useState } from "react";
import { TrendingMovies } from "../../../movies-api";
import MovieList from "../../components/MovieList/MovieList";


function HomePages() {
    const [filmList, setFilmList] = useState([]);
    useEffect(() => {
        const data = async () => {
            try {
                const response = await TrendingMovies();
                setFilmList(response.results);
            } catch (Error) {
                console.log(Error);
            }
        }
        data();
    }, [])

  return (
      <div>
          <h1>Treding Today</h1>
          <MovieList data={filmList} />
    </div>
  )
}

export default HomePages