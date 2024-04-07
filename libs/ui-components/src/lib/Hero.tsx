import { Colours } from '@code-camp-demo/design-system';
import styled from 'styled-components';

export const Hero = styled.div`
  height: 25rem;
  width: 100%;
  margin: 1rem auto;
  background-color: ${Colours.Red};

  > img {
    width: 100%; /* width of container */
    height: 25rem; /* height of container */
    object-fit: cover;
  }
`;
