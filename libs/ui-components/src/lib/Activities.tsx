import { Colours, FontSize, FontWeights } from '@code-camp-demo/design-system';
import styled from 'styled-components';

export const ActivitiesBox = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Activity = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Colours.Red};
  color: ${Colours.White};
  font-size: ${FontSize.large};
  font-weight: ${FontWeights.Bold};
  align-items: center;
  padding-top: 1rem;
  height: 20rem;
  flex-direction: column;
  justify-content: space-between;

  > img {
    height: 17rem;
    width: 100%;
  }
`;
