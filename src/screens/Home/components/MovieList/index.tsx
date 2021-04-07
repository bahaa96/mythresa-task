import { useTheme } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import {
 ActivityIndicator, RefreshControl, Text, View 
} from 'react-native';
import { QueryResultBase } from 'react-query';
import { DataProvider, RecyclerListView } from 'recyclerlistview';

import { wait } from '../../../../utils';
import MovieCard from '../MovieCard/Container';
import { getLayoutProvider, IMovie } from './Model';
import { stylesFactory } from './styles';

interface IProps extends Partial<QueryResultBase<IMovie[]>> {
  data: IMovie[];
}

const MovieList: React.FC<IProps> = ({
  status,
  error,
  data,
  isFetchingMore,
  canFetchMore,
  fetchMore,
  refetch,
}) => {
  const theme = useTheme();
  const styles = stylesFactory(theme);
  const [refreshing, setRefreshing] = React.useState(false);

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    }),
  );
  const [layoutProvider, setLayoutProvider] = useState(getLayoutProvider());

  const handleListEnd = () => {
    if (canFetchMore) {
      if (fetchMore) {
        // TODO: add a fallback
        fetchMore();
      }
    }
  };

  const renderFooter = () => {
    if (isFetchingMore) {
      return (
        <ActivityIndicator style={{ margin: 10 }} size="large" color="black" />
      );
    }

    return <View style={{ height: 60 }} />;
  };

  const rowRenderer = (type: string, movie: IMovie) => {
    return <MovieCard {...{ movie }} key={movie.id} />;
  };

  useEffect(() => {
    if (data) {
      setDataProvider(dataProvider.cloneWithRows(data));
    }
  }, [data]);

  if (status === 'loading') {
    // TODO: Content loader
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return (
      <Text>
        Error:
        {error.message}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <RecyclerListView
        style={styles.list}
        contentContainerStyle={styles.listContentContainer}
        onEndReached={handleListEnd}
        onEndReachedThreshold={200}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={renderFooter}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          refreshControl: (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => {
                if (refetch) {
                  setRefreshing(true);
                  wait(2000).then(() => {
                    // TODO: add a fallback
                    refetch();
                    setRefreshing(false);
                  });
                }
              }}
            />
          ),
        }}
      />
    </View>
  );
};

export default MovieList;
