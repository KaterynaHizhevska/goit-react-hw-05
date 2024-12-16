import axios from "axios";

const url = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmIwMmIwNzAwMzA5ZjU5NjJiMWRkYmNkNTFmY2JmMiIsIm5iZiI6MTczNDMwNzAxOC4wNiwic3ViIjoiNjc1ZjZjY2FkNmY1ZTg0NThiOGI0ZDYxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DbpksYA7nHcS9m15WFMIyR4ziUYhLfmqizG48Z0B-Y0'
  }
};

export const TrendingMovies = async () => {
    const response = await axios.get(`${url}trending/movie/day?language=en-US`, options);
    return response.data;
}

export const MovieId = async (id) => {
    const response = await axios.get(`${url}movie/${id}`, options);
    return response.data;
}

export const MovieReviews = async (id) => {
    const response = await axios.get(`${url}movie/${id}/reviews`, options);
    return response.data;
}

export const MovieCast = async (id) => {
    const response = await axios.get(`${url}movie/${id}/credits`, options);
    return response.data;
}

export const MovieQuery = async (query) => {
    const response = await axios.get(`${url}search/movie?query=${query}`, options);
    return response;
}