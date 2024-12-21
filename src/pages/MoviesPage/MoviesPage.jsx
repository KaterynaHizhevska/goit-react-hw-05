
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar"
import MovieList from "../../components/MovieList/MovieList";
import { getMovieQuery } from '../../../movies-api';
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css"
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query') ?? "";
  const [movieList, setMovieList] = useState([]);

   const getMovieList = (searchQuery) => {
        searchParams.set('query', searchQuery);
        setSearchParams(searchParams);
  }
  
   useEffect(() => {
        const movieList = async () => {
            const response = await getMovieQuery(paramsQuery);
            const { data: { results } } = response;
            if (!results.length) {
            setMovieList(null);
            return;
        }
            setMovieList(results);
        };
        if (paramsQuery === "") {
            return;
        };
        movieList();
    }, [paramsQuery]);

  return (
    <div>
      <SearchBar onSubmit={getMovieList} />
      {movieList ? <MovieList data={movieList} /> : (
                <p className={s.text}>{`No results were found for your search, please change your search and try again!`}</p>
            )}
    </div>
  )
}

export default MoviesPage