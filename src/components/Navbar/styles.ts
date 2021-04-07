import { StyleSheet } from 'react-native';
import { ITheme } from '../../theme';


export const stylesFactory = (theme: ITheme) => StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: theme.spacing(0.6),
    paddingHorizontal: theme.spacing(0.75),
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  button: {
    height: 35
  },
  controls: {
    flexDirection: 'row'
  },
  icon: {
    width: 25,
    height: 25,
  }
})

