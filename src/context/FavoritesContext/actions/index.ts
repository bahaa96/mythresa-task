import { action, ActionType } from 'typesafe-actions';

import { IMovie } from '../../../screens/Home/components/MovieList/Model';
import { $fixme } from '../../../typings/fixme';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_FAVORITES,
} from './actions';

export const set = (movies: IMovie[]): $fixme => {
  return action(SET_FAVORITES, movies);
};

export const add = (movie: IMovie): $fixme => {
  return action(ADD_TO_FAVORITES, movie);
};

export const remove = (movieId: number): $fixme => {
  return action(REMOVE_FROM_FAVORITES, { movieId });
};
