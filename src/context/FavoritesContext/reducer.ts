import { ActionType } from 'typesafe-actions';

import { IMovie } from '../../screens/Home/components/MovieList/Model';
import { MyArray } from '../../utils';
import * as actions from './actions';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_FAVORITES,
} from './actions/actions';

export type RootAction = ActionType<typeof actions>;
interface IState {
  data: MyArray<IMovie>;
}

const initialState = { data: [] };

export default (state: IState = initialState, action: RootAction) => {
  let newData: IMovie[];
  let alreadyAdded: boolean;

  switch (action.type) {
    case SET_FAVORITES:
      return {
        data: action.payload,
      };
    case ADD_TO_FAVORITES:
      alreadyAdded = state.data.hasId(action.payload.id);
      if (!alreadyAdded) {
        newData = [...state.data, action.payload];
        return {
          data: newData,
        };
      }
      break;
    case REMOVE_FROM_FAVORITES:
      newData = state.data.filter((movie: IMovie) => {
        return movie.id !== action.payload.movieId;
      });
      return {
        data: newData,
      };
    default:
      return state;
  }
};
