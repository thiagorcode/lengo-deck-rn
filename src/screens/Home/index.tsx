import {DataStore} from '@aws-amplify/datastore';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, View} from 'react-native';

import * as S from './styles';
import {Button} from '../../components/Button';
import {TopBar} from '../../components/TopBar';
import {Deck, LazyDeck} from '../../models';
import {RootParamList} from '../../types/routes.types';
import {StylesGlobal} from '../../uikit';

type HomeScreenProps = NativeStackScreenProps<RootParamList, 'Home'>;

function Home({navigation}: HomeScreenProps): React.JSX.Element {
  const [listDecks, setListDecks] = useState<LazyDeck[]>([]);
  const loadDecks = async () => {
    const decks = await DataStore.query(Deck);
    console.log(decks);
    setListDecks(decks);
  };
  useFocusEffect(
    useCallback(() => {
      loadDecks();
    }, []),
  );

  return (
    <StylesGlobal.ContentWrapper>
      <TopBar layout="custom" label="LengoDeck" />
      <StylesGlobal.ContentMain>
        <View>
          <S.TextBold>Good morning Thiago,</S.TextBold>
        </View>
        <View>
          <S.TextBold>My Decks</S.TextBold>
          <S.DeckCard>
            <S.ImageWrapper>
              <Image
                width={106}
                height={119}
                style={{width: 106, height: 119, borderRadius: 8}}
                source={require('../../assets/images/englishboard.jpg')}
              />
            </S.ImageWrapper>
            <S.WrapperDeckText>
              {listDecks[1]?.name && <S.TextNameDeck>{listDecks[1].name}</S.TextNameDeck>}
              <S.TextDeck>Total Cards: 34</S.TextDeck>
              <S.TextDeck>Practice Today: 20</S.TextDeck>
            </S.WrapperDeckText>
          </S.DeckCard>
        </View>
      </StylesGlobal.ContentMain>
      <StylesGlobal.BoxAlignBottom>
        <Button text="Create Deck" onPress={() => navigation.navigate('CreateDeck')} />
      </StylesGlobal.BoxAlignBottom>
    </StylesGlobal.ContentWrapper>
  );
}
const HomeScreen = withAuthenticator(Home);
export {HomeScreen};
