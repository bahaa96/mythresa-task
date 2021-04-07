import React, { useContext } from 'react';

import FavoritesContext from '../../../../context/FavoritesContext/FavoritesContext';
import { IMovie } from '../MovieList/Model';
import MovieCard from '.';

interface IProps {
  movie: IMovie;
}

const MovieCardContainer: React.FC<IProps> = (props) => {
  const { addToFavorites, removeFromFavorites, data } = useContext(
    FavoritesContext,
  );

  let isLiked = false;

  if (data) {
    isLiked = data.hasId(props.movie.id);
  }

  return (
    <MovieCard
      {...{
        ...props,
        addToFavorites,
        removeFromFavorites,
        liked: isLiked,
      }}
    />
  );
};

export default MovieCardContainer;
