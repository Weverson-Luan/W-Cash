/**
 * IMPORT
 */
import React from 'react';
import {Text} from '../../components/text';

//styles
import {Container, WrapperHeader} from './styles';

const ScreenDefault = () => {
  return (
    <Container>
      <WrapperHeader />
      <Text
        text="Hi ScreenDefault !!!"
        color="#063532"
        size={18}
        align="center"
        textDecoration="underline"
      />
    </Container>
  );
};

/**
 * EXPORTS
 */
export {ScreenDefault};
