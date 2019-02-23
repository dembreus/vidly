import http from "./httpService";
import { apiUrl } from "../config.json";

const url = `${apiUrl}/movies`;

export function getMovies() {
  return http.get(url);
}

export function getMovie(movieId) {
  return http.get(`${url}/${movieId}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${url}/${movie._id}`, body);
  }

  return http.post(url, movie);
}

export function deleteMovie(movieId) {
  return http.delete(`${url}/${movieId}`);
}
