import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
}

export function Button({text, ...props}: Readonly<ButtonProps>): React.JSX.Element {
  return (
    <S.ContainerTouchable {...props}>
      <S.Text>{text}</S.Text>
    </S.ContainerTouchable>
  );
}
