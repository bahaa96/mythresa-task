import { StyleSheet } from 'react-native';

import { ITheme } from '../../../../theme/index';

export const stylesFactory = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      flex: 1,
    },
    listContentContainer: {
      paddingVertical: theme.spacing(0.6),
      paddingHorizontal: theme.spacing(0.75),
    },
  });
