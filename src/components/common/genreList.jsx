import React from "react";
import { getGenres } from "../../services/fakeGenreService";

const genreList = props => {
  const genres = getGenres();
  const { onGenreChange, onDisplayAll } = props;
  return (
    <ul className="list-group">
      <li key={0} className="list-group-item list-group-item-action active">
        <a onClick={() => onDisplayAll} className="genre-link">
          All Genres
        </a>
      </li>
      {genres.map(g => {
        const index = genres.indexOf(g.name) + 1;
        return (
          <li key={index} className="list-group-item list-group-item-action">
            <a onClick={() => onGenreChange(g)} className="genre-link">
              {g.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default genreList;
