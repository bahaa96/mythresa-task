import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, useTheme } from '@ui-kitten/components';
import React from 'react';
import { Text, View } from 'react-native';

import { HOME_STACK_PATHS } from '../../router/paths';
import HorizontalDivider from '../HorizontalDivider';
import { avatarPlaceholder, SettingsIcon } from './Model';
import { stylesFactory } from './styles';

interface IProps {
  title: React.ReactNode;
  showActions: boolean;
}

const Navbar: React.FC<IProps> = ({ title, showActions }) => {
  const theme = useTheme();
  const styles = stylesFactory(theme);
  const { navigate } = useNavigation();
  const handleSettingsPress = () => {
    navigate(HOME_STACK_PATHS.SETTINGS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {showActions && (
        <View style={styles.controls}>
          <Button
            appearance="ghost"
            style={styles.button}
            onPress={handleSettingsPress}
            accessoryLeft={SettingsIcon}
          />
          <HorizontalDivider />
          <Avatar source={{ uri: avatarPlaceholder }} />
        </View>
      )}
    </View>
  );
};
export default Navbar;
