import { StyleSheet } from 'react-native';
import { MOVIE_CARD_HEIGHT, MOVIE_CARD_BOTTOM_MARGIN } from './../MovieList/Model';
import { ITheme } from '../../../../theme';

export const stylesFactory = (theme: ITheme) => StyleSheet.create({ 
  container: {
    height: MOVIE_CARD_HEIGHT,
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
    marginBottom: MOVIE_CARD_BOTTOM_MARGIN
  },
  posterWrapper: {
    flex: 1,
    borderRadius: 23,
    overflow: 'hidden'
  },
  posterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 2,
    borderRadius: 23,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing(0.75),
    paddingHorizontal: theme.spacing(0.65),
  },
  headerActions: {
    flexDirection: 'row'
  },
  rating: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 50,
    padding: 5
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  movieTitle: {
    marginBottom: theme.spacing(0.6)
  },
  movieTitleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'center',
  },  
  metaText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing(1),
    paddingHorizontal: theme.spacing(0.65),
  },
  genres: {
    flex: 1,
    flexDirection: 'row',
    flexBasis: '50%',
    flexWrap: 'wrap',
  },
  genre: {
    height: 0,
    marginHorizontal: theme.spacing(0.25),
    borderColor: '#fff',
    backgroundColor: 'transparent',
    borderRadius: 23,

  },
  submit: {
    flex: 1,
    borderRadius: 23,
  },
})
