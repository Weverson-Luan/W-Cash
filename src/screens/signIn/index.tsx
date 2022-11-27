/**
 * IMPORT
 */
import React from 'react';

//styles
import {
  Container,
  WrapperHeader,
  WrapperTitle,
  WrapperDescription,
  WrapperFooter,
  WrapperButton,
} from './styles';

//components
import {Text} from '../../components/text';

//assets
import LogoAppSvg from '../../assets/icons-main/logo-app.svg';
import GithubSvg from '../../assets/icons-svg/github.svg';
import GoogleSvg from '../../assets/icons-svg/google.svg';

//styes in global
import theme from '../../global/styles/theme';
import {Button} from '../../components/form/button';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <WrapperHeader>
          <LogoAppSvg width={100} height={72} />
        </WrapperHeader>
        <WrapperTitle>
          <Text
            text="Controle seus 
          Gastos de forma
          muito simples."
            color={theme.colors.neutral_25}
            size={38}
            letterHeight={45}
            align="center"
            textDecoration="none"
            width={80}
            weight={'600'}
          />
        </WrapperTitle>

        <WrapperDescription>
          <Text
            text="Faça seu login com 
            uma conta google ou github abaixo"
            color={theme.colors.neutral_25}
            size={16}
            letterHeight={24}
            align="center"
            textDecoration="none"
            width={80}
            weight={'600'}
          />
        </WrapperDescription>
      </Container>
      <WrapperFooter>
        <WrapperButton>
          <Button
            width={356}
            height={55}
            background_color={theme.colors.neutral_25}
            marginTop={-24}
            onPress={() => navigation.navigate('Home')}>
            <GoogleSvg width={24} height={24} />
            <Text
              text="Entrar com Google"
              color={theme.colors.blue_dark_900}
              size={16}
              letterHeight={24}
              align="center"
              textDecoration="none"
              width={80}
              weight={'600'}
            />
          </Button>
        </WrapperButton>

        <WrapperButton style={{marginTop: 100}}>
          <Button
            width={356}
            height={55}
            background_color={theme.colors.neutral_25}
            marginTop={-24}
            onPress={() => navigation.navigate('Home')}>
            <GithubSvg width={24} height={24} />
            <Text
              text="Entrar com Github"
              color={theme.colors.blue_dark_900}
              size={16}
              letterHeight={24}
              align="center"
              textDecoration="none"
              width={80}
              weight={'600'}
            />
          </Button>
        </WrapperButton>
      </WrapperFooter>
    </>
  );
};

/**
 * EXPORTS
 */
export {SignIn};
