import Axios from 'axios';
import { decamelizeKeys } from 'humps';
import queryStringify from 'qs-stringify';
import { Dimensions } from 'react-native';
import { LayoutProvider } from 'recyclerlistview';

import config from '../../../../config';
import theme from '../../../../theme';
import { $fixme } from '../../../../typings/fixme';
import { isOK } from '../../../../utils/requests';

const { width, height } = Dimensions.get('window');

// To deal with precision issues on android
// Adjustment for margin given to the
// RecyclerListView + List Content Container theme.spacing(0.75) * 2;
const getWindowWidth = () => {
  return Math.round(width * 1000) / 1000 - theme.spacingUnit(width, 0.7) * 2;
};

export const MOVIE_CARD_HEIGHT = height * 0.7;
export const MOVIE_CARD_BOTTOM_MARGIN = height * 0.08;

export const getLayoutProvider = () => {
  return new LayoutProvider(
    () => {
      return 'MOVIE_CARD';
    },
    (type, dim) => {
      switch (type) {
        case 'MOVIE_CARD':
          dim.width = getWindowWidth();
          dim.height = MOVIE_CARD_HEIGHT + MOVIE_CARD_BOTTOM_MARGIN;
          break;
        default:
          dim.width = getWindowWidth();
          dim.height = 0;
      }
    },
  );
};

export const fetchMovies: (
  key: string,
  locale: string,
  page: number,
) => Promise<{ results: IMovie[]; page: number }> = async (
  key,
  locale,
  page = 1,
) => {
  console.log('lang: ', locale);
  const { API_URL, API_KEY } = config;
  const params = decamelizeKeys({
    apiKey: API_KEY,
    sortBy: 'popularity.desc',
    language: locale,
    page,
  });
  const url = `${API_URL}/discover/movie/?${queryStringify(params)}`;

  console.log('url: ', url);

  const res = await Axios.get(url);
  if (isOK(res.status)) {
    return res.data;
  }
  console.log(e.response);
};

export enum ViewTypes {
  MOVIE_CARD = 'MOVIE_CARD',
}

export interface IMovie {
  backdropPath: string;
  id: number;
  originalTitle: string;
  popularity: 2007.928;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
}
