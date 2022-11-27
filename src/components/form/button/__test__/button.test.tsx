import React from 'react';
import {render} from '@testing-library/react-native';
import theme from '../../../../global/styles/theme';
import {Button} from '../index';
import {Text} from '../../../text';

describe('Button component is being rendered', () => {
  it('Rendering button component correctly', () => {
    render(
      <Button
        width={80}
        height={40}
        background_color={theme.colors.blue_dark_900}>
        <Text>I am button</Text>
      </Button>,
    );
  });
});
