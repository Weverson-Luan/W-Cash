/**
 * IMPORT
 */
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {ITextProps} from './index.d';

const TextNative = styled(Text)<ITextProps>`
  color: ${({color}: any) => color || '#000'};
  font-size: ${({size = 16}) => `${size}px`};
  width: ${({width = 100}: any) => `${width}%`};
  text-align: ${({align = 'center'}: any) => align};
  margin: ${({margin = 0}: any) => margin}px;
  line-height: ${({size = 16}: any) => `${(size * 1.3)}px`};
  padding: ${({padding = 0}: any) => `${(padding)}px`};
  margin-bottom: ${({marginBottom = 0}: any) => `${(marginBottom)}px`};
  margin-top: ${({marginTop = 0}: any) => `${(marginTop)}px`};
  margin-left: ${({marginLeft = 0}: any) => `${(marginLeft)}px`};
  margin-right: ${({marginRight = 0}: any) => `${(marginRight)}px`};
  font-weight: ${({weight = '400'}: any) => weight};
  font-family: ${({fontFamily}: any) => (fontFamily ? fontFamily : 'OpenSans')};
  text-decoration-line: ${({textDecoration}: any) => textDecoration || 'none'};
  letter-spacing: ${({letterSpacing = 1}: any) =>
    `${(letterSpacing)}px`};
  line-height: ${({letterHeight = 20}: any) => `${(letterHeight)}px`};
`;

/**
 * EXPORT
 */
export {TextNative};
