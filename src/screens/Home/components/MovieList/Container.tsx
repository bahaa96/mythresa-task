import flatMap from 'lodash/flatMap';
import React, { useContext } from 'react';
import { useInfiniteQuery } from 'react-query';

import LocaleContext from '../../../../context/LocaleContext';
import MovieList from '.';
import { fetchMovies } from './Model';

const MovieListContainer: React.FC = () => {
  const { locale } = useContext(LocaleContext);
  const {
    status,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    data,
    error,
    refetch,
  } = useInfiniteQuery(['movies', locale], fetchMovies, {
    cacheTime: 0,
    getFetchMore: (lastGroup) => {
      return lastGroup.page + 1;
    },
  });

  const concatenatedGroup = flatMap(data, (group) => {
    return group.results;
  });

  return (
    <MovieList
      data={concatenatedGroup}
      {...{
        isFetchingMore,
        status,
        fetchMore,
        canFetchMore,
        error,
        refetch,
      }}
    />
  );
};

export default MovieListContainer;
