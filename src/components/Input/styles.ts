import styled from 'styled-components/native';

import {Colors, METRICS} from '../../uikit';

export const InputWrapper = styled.TextInput`
  border-radius: ${METRICS.radius8};
  height: 60px;
  padding-left: ${METRICS.insideSpacingMedium};
  border-width: 1px;
  border-color: #c0c0c0;
  margin-top: ${METRICS.insideSpacingXSmall};
  color: ${Colors.main[100]};
  font-size: ${METRICS.font.regular};
`;

export const Text = styled.Text`
  font-family: 'Poppins';
  color: #f4f3ff;
  font-size: ${METRICS.font.regular};
`;
