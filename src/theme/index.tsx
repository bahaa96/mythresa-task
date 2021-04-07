import { colors } from './colors';
import { $fixme } from '../typings/fixme';

export type ITheme = Record<string, $fixme>; 

const theme: ITheme = {
  colors,
  spacing: (n: number) => {
    return `${n * 8}%`
  },
  spacingUnit: (width: number, n: number) => {
    return width * ( 0.08 * n )
  }
}

export default theme