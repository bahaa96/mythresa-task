import React from 'react';
import { Color } from 'react-native-svg';
import { Icon } from '@ui-kitten/components'


export const HeartIcon = ({ color }: { color: Color }) => <Icon style={{ width: 30, height: 30 }} fill={color || '#fff'} name={'heart'} />
export const ShareIcon = () => <Icon style={{ width: 30, height: 30 }} fill={'#fff'} name={'share'} />