import React from 'react';

//typings
import {ButtonProps} from './index.d';

//styles
import {Container} from './styles';

function Button({
  width,
  height = 55,
  background_color,
  border_color,
  border,
  children,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  margin,
  ...rest
}: ButtonProps) {
  return (
    <Container
      {...rest}
      width={width}
      height={height}
      background_color={background_color}
      border_color={border_color}
      border={border}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      margin={margin}>
      {children}
    </Container>
  );
}

/**
 * EXPORT
 */
export {Button};
