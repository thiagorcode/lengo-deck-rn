import styled from 'styled-components/native';

import {Colors, METRICS} from '../../uikit';

export const ContainerTouchable = styled.TouchableOpacity`
  border-radius: ${METRICS.radius8};
  background-color: ${Colors.primary};
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  color: #f4f3ff;
  font-size: ${METRICS.font.regular};
`;
