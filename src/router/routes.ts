import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { HOME_STACK_PATHS } from './paths';

export const HOME_STACK_ROUTES = [
  {
    name: HOME_STACK_PATHS.HOME,
    component: Home,
  },
  {
    name: HOME_STACK_PATHS.SETTINGS,
    component: Settings,
  },
  {
    name: HOME_STACK_PATHS.FAVORITES,
    component: Favorites,
  },
];
