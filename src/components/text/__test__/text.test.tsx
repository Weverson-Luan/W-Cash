import React from 'react';
import {Text} from '../index';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import theme from '../../../global/styles/theme';

describe('I am the text component test !', () => {
  it('I am testing renders correctly', () => {
    render(<Text />);
  });

  it('I am testing text component is being rendered with the correct properties', () => {
    const {getByText} = render(
      <Text
        text="I am Title"
        color={theme.colors.blue}
        size={18}
        align="center"
        textDecoration="none"
      />,
    );

    //verificando se dentro do componente tem o texto I am Title !!!
    const element = getByText('I am Title');

    expect(element).toBeTruthy();
  });
});
