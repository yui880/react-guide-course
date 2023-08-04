import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import { MovieType } from "../App";

const MoviesList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
