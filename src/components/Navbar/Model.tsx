import React from 'react';
import { Icon, useTheme } from '@ui-kitten/components';
import { stylesFactory } from './styles';


export const avatarPlaceholder = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=74daec1914d1d105202bca8a310a6a71' 

export const SettingsIcon = () => {
  const theme = useTheme();
  const styles = stylesFactory(theme)
  
  return (
    <Icon
      style={styles.icon}
      fill={''}
      name='options-2-outline'
    />
  )
}
