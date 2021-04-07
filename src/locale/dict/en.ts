import KEYS from '../keys';

type Shape = {
  [key: string]: string;
};

const EN: Shape = {
  // messages: {
  local: 'english',
  [KEYS.HOME_PAGE_TITLE]: 'Home',
  [KEYS.FAVORITES_PAGE_TITLE]: 'Favorites',
  [KEYS.SETTINGS_PAGE_TITLE]: 'Settings',

  // Settings
  [KEYS.SETTINGS_ITEM_CHANGE_LANGUAGE]: 'Change Language',
  [KEYS.SETTINGS_ITEM_FAVORITES]: 'Favorites',
  [KEYS.CHANGE_LANGUAGE_TEXT]: 'Change Language 🌎',
  [KEYS.ENGLISH_LANGUAGE]: 'English',
  [KEYS.ARABIC_LANGUAGE]: 'العربيه',

  [KEYS.MOVIE_CARD_BOOK_ACTION]: 'Book',

  // genres
  [KEYS.MOVIE_ACTION_GENRE]: 'Action',
  [KEYS.MOVIE_HORROR_GENRE]: 'Horror',
  // }
};

export default EN;
