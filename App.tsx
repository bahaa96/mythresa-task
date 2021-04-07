import './src/locale/config';
import './src/utils';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { FavoritesContextProvider } from './src/context/FavoritesContext/FavoritesContext';
import { LocaleContextProvider } from './src/context/LocaleContext';
import Router from './src/router';
import theme from './src/theme';

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      // Prevent native splash screen from auto hiding
      // This shows up a warning due to an expo deprecation issue.
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Layout style={styles.container}>
          <LocaleContextProvider>
            <FavoritesContextProvider>
              <Router />
            </FavoritesContextProvider>
          </LocaleContextProvider>
        </Layout>
      </ApplicationProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
