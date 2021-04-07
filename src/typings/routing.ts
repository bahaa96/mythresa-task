import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Favorites: undefined
};

export type RootStackComponent<
  RouteName extends keyof RootStackParamList
> = React.FC<{
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}>;
