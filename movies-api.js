import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmIwMmIwNzAwMzA5ZjU5NjJiMWRkYmNkNTFmY2JmMiIsIm5iZiI6MTczNDMwNzAxOC4wNiwic3ViIjoiNjc1ZjZjY2FkNmY1ZTg0NThiOGI0ZDYxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DbpksYA7nHcS9m15WFMIyR4ziUYhLfmqizG48Z0B-Y0'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));