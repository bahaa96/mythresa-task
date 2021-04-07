import { Button, useTheme } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import * as Localization from 'expo-localization';
import { camelizeKeys } from 'humps';
import React, { useContext } from 'react';
import { Share, Text, View } from 'react-native';

import HorizontalDivider from '../../../../components/HorizontalDivider';
import ImageRenderer from '../../../../components/ImageRenderer';
import T from '../../../../components/Transliteration';
import config from '../../../../config';
import LocaleContext from '../../../../context/LocaleContext';
import KEYS from '../../../../locale/keys';
import { toLocalDate } from '../../../../utils';
import { IMovie } from '../MovieList/Model';
import { HeartIcon, ShareIcon } from './Model';
import { stylesFactory } from './styles';

interface IProps {
  movie: IMovie;
  liked: boolean;
}

const MovieCard: React.FC<IProps> = React.memo(
  ({ liked, movie, addToFavorites, removeFromFavorites }) => {
    movie = camelizeKeys(movie);
    const theme = useTheme();
    const styles = stylesFactory(theme);
    const { locale } = useContext(LocaleContext);

    const handleLike = () => {
      if (liked) {
        removeFromFavorites(movie.id);
      } else {
        addToFavorites(movie);
      }
    };

    const handleShare = async () => {
      const movieUrl = `https://www.themoviedb.org/movie/${movie.id}`;
      try {
        const result = await Share.share({
          message: movie.title,
          url: movieUrl,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (e) {
        alert(e.message);
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.posterWrapper}>
          <ImageRenderer
            style={styles.posterImage}
            imageUrl={`${config.CDN_URL}/t/p/w300${movie.posterPath}`}
          />
        </View>
        <View style={styles.overlay}>
          <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={styles.header}
          >
            <View style={styles.ratingWrapper}>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>
                  {movie.voteAverage.toLocaleString(locale)}
                </Text>
              </View>
            </View>
            <View style={styles.headerActions}>
              <Button
                appearance="ghost"
                onPress={handleLike}
                accessoryLeft={() => {
                  return <HeartIcon color={liked ? 'red' : ''} />;
                }}
              />
              <Button
                appearance="ghost"
                onPress={handleShare}
                accessoryLeft={ShareIcon}
              />
            </View>
          </LinearGradient>
          <View style={styles.content}>
            <View style={styles.movieTitle}>
              <Text style={styles.movieTitleText} numberOfLines={2}>
                {movie.title}
              </Text>
            </View>
            <View style={styles.meta}>
              <Text style={styles.metaText}>
                {toLocalDate(movie.releaseDate, 'year')}
              </Text>
              <HorizontalDivider />
              <Text style={styles.metaText}>
                {toLocalDate(movie.releaseDate)}
              </Text>
            </View>
          </View>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.footer}
          >
            <View style={styles.genres}>
              <Button style={styles.genre} size="small" status="primary">
                <T name={KEYS.MOVIE_ACTION_GENRE} />
              </Button>
              <Button style={styles.genre} size="small" status="primary">
                <T name={KEYS.MOVIE_HORROR_GENRE} />
              </Button>
            </View>
            <Button status="warning" style={styles.submit}>
              <T name={KEYS.MOVIE_CARD_BOOK_ACTION} />
            </Button>
          </LinearGradient>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.liked === nextProps.liked;
  },
);
export default MovieCard;
