import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from './index.d';

const Container = styled(TouchableOpacity)<ButtonProps>`
  width: ${({width}) => (width ? ` ${width}px` : '100%')};
  height: ${({height}) => (height ? ` ${height}px` : '100%')};
  background-color: ${({theme, background_color}) =>
    background_color || '#fff'};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  flex-direction: row;
  border-color: ${({theme, border_color}) => border_color || '#fff'};
  border: ${({border, theme}) => (border ? `1px #c3c3c3` : '1px white')};
  margin-bottom: ${({marginBottom = 0}: any) => `${marginBottom}px`};
  margin-top: ${({marginTop = 0}: any) => `${marginTop}px`};
  margin-left: ${({marginLeft = 0}: any) => `${marginLeft}px`};
  margin-right: ${({marginRight = 0}: any) => `${marginRight}px`};
`;

/**
 * EXPORT
 */
export {Container};
