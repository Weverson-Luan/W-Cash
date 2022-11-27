import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
const Container = styled.View`
  background-color: ${theme.colors.green_200};
  flex: 1;
`;
const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 116px;

`;
const WrapperTitle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 68px;

`;

const WrapperDescription = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 68px;

`;
const WrapperFooter = styled.View`
  width: 100%;
  height: 246px;
  flex-direction: column;
  background-color: ${theme.colors.purple_50};
  position: relative;

`;

const WrapperButton = styled.View`
  width: 100%;
  height: 286px;
  background-color: ${theme.colors.purple_50};
  position: absolute;
  align-items: center;

`;
const Text = styled.Text`
  font-size: 12px;
  color: red;
`;

/**
 * EXPORT
 */
export {Container, WrapperHeader, WrapperTitle,WrapperDescription, WrapperFooter,WrapperButton,Text};
