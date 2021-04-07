import { MouseEventHandler } from 'react';

export interface IItem {
  label: string;
  icon: React.ReactNode;
  onPress: MouseEventHandler;
}

export interface ItemIconProps {
  name: string;
}
