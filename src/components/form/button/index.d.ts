/**
 * IMPORTS
 */
import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
interface ButtonProps extends TouchableOpacityProps {
  width?: number;
  height: number;
  background_color: string;
  border?: boolean;
  border_color?: string;
  children: ReactNode;
  padding?: number;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
}

/**
 * EXPORTS
 */
export {ButtonProps};
