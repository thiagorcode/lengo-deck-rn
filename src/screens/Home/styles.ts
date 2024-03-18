import styled from 'styled-components/native';

import {METRICS, Colors} from '../../uikit';

export const Text = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  color: #f4f3ff;
  font-size: ${METRICS.font.small};
`;

export const TextBold = styled(Text)`
  font-weight: bold;
  margin-top: ${METRICS.insideSpacingMedium};
`;

export const DeckCard = styled.TouchableOpacity`
  background-color: ${Colors.bgSecondary};
  border-radius: ${METRICS.radius8};
  margin-top: ${METRICS.insideSpacingXSmall};
  height: 140px;
  flex-direction: row;
`;
export const WrapperDeckText = styled.View`
  justify-content: space-between;
  margin-top: ${METRICS.insideSpacingSmall};
  margin-bottom: ${METRICS.insideSpacingSmall};
`;
export const TextDeck = styled(Text)``;
export const TextNameDeck = styled(Text)`
  font-weight: bold;
`;

export const ImageWrapper = styled.View`
  margin: ${METRICS.insideSpacingSmall};
`;
