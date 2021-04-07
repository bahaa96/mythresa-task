import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';
import i18n from 'i18n-js';
import React from 'react';

import { HOME_STACK_PATHS } from '../../router/paths';
import { IItem, ItemIconProps } from './types';

const ItemIcon: React.FC<ItemIconProps> = ({ name }) => {
  return (
    <Icon
      style={{ width: 35, height: 35 }}
      fill="rgba(0,0,0,0.85)"
      name={name}
    />
  );
};
export const useSettingsList = (setVisible) => {
  const { navigate } = useNavigation();

  const list: IItem[] = [
    {
      label: i18n.t('SETTINGS_ITEM_CHANGE_LANGUAGE'),
      icon: <ItemIcon name="globe-outline" />,
      onPress: () => {
        setVisible(true);
      },
    },
    {
      label: i18n.t('SETTINGS_ITEM_FAVORITES'),
      icon: <ItemIcon name="heart" />,
      onPress: () => {
        navigate(HOME_STACK_PATHS.FAVORITES);
      },
    },
  ];

  return [list];
};
