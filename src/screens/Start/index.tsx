import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

import * as S from './styles';
import {Icons} from '../../assets';
import {Button} from '../../components/Button';
import {RootParamList} from '../../types/routes.types';
import {StylesGlobal} from '../../uikit';

type StartScreenProps = NativeStackScreenProps<RootParamList, 'Start'>;

const {
  home: {StudyIcon},
} = Icons;

export function StartScreen({navigation}: Readonly<StartScreenProps>): React.JSX.Element {
  return (
    <S.Container>
      <StylesGlobal.ContentWrapper>
        <View>
          <S.WrapperImage>
            <StudyIcon width={350} height={350} />
          </S.WrapperImage>
          <S.Title>Expand vocabulary</S.Title>
          <S.Description>
            Enhance your language skills, memorize new words & phrases, and improve your English
            proficiency through interactive.
          </S.Description>
        </View>
        <StylesGlobal.BoxAlignBottom>
          <S.WrapperButton>
            <Button text="Start Leaning" onPress={() => navigation.navigate('Home')} />
          </S.WrapperButton>
        </StylesGlobal.BoxAlignBottom>
      </StylesGlobal.ContentWrapper>
    </S.Container>
  );
}
