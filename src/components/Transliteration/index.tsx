import i18n from 'i18n-js';
import React from 'react';
import { Text, TextStyle } from 'react-native';

interface IProps {
  name: string;
  style?: TextStyle;
}

const T: React.FC<IProps> = ({ name, style, ...rest }) => {
  return (
    <Text {...rest} style={[{ textAlign: 'left' }, style]}>
      {i18n.t(name)}
    </Text>
  );
};

export default T;
