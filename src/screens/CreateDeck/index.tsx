import {DataStore} from '@aws-amplify/datastore';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import * as S from './styles';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {TopBar} from '../../components/TopBar';
import {Deck} from '../../models';
import {RootParamList} from '../../types/routes.types';
import {StylesGlobal} from '../../uikit';

type CreateDeckScreenProps = NativeStackScreenProps<RootParamList, 'CreateDeck'>;

function CreateDeck({navigation}: CreateDeckScreenProps): React.JSX.Element {
  const [nameDeck, setNameDeck] = useState('');

  const handleCreateDeck = async () => {
    if (!nameDeck) return;
    try {
      const deck = await DataStore.save(
        new Deck({name: nameDeck, description: 'test com datastore'}),
      );
      console.log('Deck saved successfully!', deck);
      navigation.goBack();
    } catch (error) {
      console.log('error creating todo:', error);
    }
  };
  return (
    <StylesGlobal.ContentWrapper>
      <TopBar layout="leftButton" label="Create a new Deck" />
      <StylesGlobal.ContentMain>
        <S.WrapperInput>
          <Input label="Name of deck" onChangeText={e => setNameDeck(e)} />
        </S.WrapperInput>
      </StylesGlobal.ContentMain>
      <StylesGlobal.BoxAlignBottom>
        <Button text="Create Deck" onPress={handleCreateDeck} />
      </StylesGlobal.BoxAlignBottom>
    </StylesGlobal.ContentWrapper>
  );
}
const CreateDeckScreen = withAuthenticator(CreateDeck);

export {CreateDeckScreen};
