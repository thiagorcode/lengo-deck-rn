import styled from 'styled-components/native';

import {METRICS} from './metrics';

export const StylesGlobal = {
  ContentWrapper: styled.View`
    flex-grow: 1;
    min-height: 100%;
  `,
  ContentMain: styled.View`
    padding-left: ${METRICS.insideSpacingXSmall};
    padding-right: ${METRICS.insideSpacingXSmall};
  `,
  BoxAlignBottom: styled.View`
    justify-content: flex-end;
    flex: 1;
  `,
};
