import styled from 'styled-components/native';

import {METRICS} from './../../uikit';

export const Container = styled.View`
  padding-left: ${METRICS.insideSpacingMedium};
  padding-right: ${METRICS.insideSpacingMedium};
`;

export const WrapperImage = styled.View`
  margin-top: ${METRICS.insideSpacingXLarge};
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  color: #f4f3ff;
  font-size: ${METRICS.font.medium};
  margin-top: ${METRICS.insideSpacingXMedium};
`;

export const Description = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  color: #f4f3ff;
  font-size: ${METRICS.font.small};
  margin-top: ${METRICS.insideSpacingMedium};
`;
export const WrapperButton = styled.View`
  margin-bottom: ${METRICS.insideSpacingMedium};
`;
