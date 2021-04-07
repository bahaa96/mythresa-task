import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Navbar from '../../components/Navbar';
import T from '../../components/Transliteration';
import FavoritesContext from '../../context/FavoritesContext/FavoritesContext';
import { RootStackComponent } from '../../typings/routing';
import MovieList from '../Home/components/MovieList';
import { IMovie } from '../Home/components/MovieList/Model';

const Favorites: RootStackComponent<'Favorites'> = () => {
  const { data } = useContext(FavoritesContext);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title={<T name="FAVORITES_PAGE_TITLE" />} showActions={false} />
      <MovieList data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Favorites;
