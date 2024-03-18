import React from 'react';
import {TextInputProps, View} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
}

export function Input({label = '', ...props}: Readonly<InputProps>): React.JSX.Element {
  return (
    <View>
      <S.Text>{label}</S.Text>
      <S.InputWrapper {...props} />
    </View>
  );
}
