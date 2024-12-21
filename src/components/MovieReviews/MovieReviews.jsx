import { getMovieReviews } from '../../../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await getMovieReviews(movieId);
            setMovieReviews(response.results);
        }
        getData();
    }, [movieId]);

    if (!movieReviews) return;
    return (
        <div>
            {movieReviews.length > 0 ? (
                <div>
                    <ul className={s.list}>
                        {movieReviews.map(({ id, author, content }) => {
                            return (
                                <li key={id}>
                                    <h3>{author}</h3>
                                    <p>{content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>) : (<p>{`We're sorry, but there are currently no reviews for this movie..`}</p>)
                }
        </div>
    )
}

export default MovieReviews