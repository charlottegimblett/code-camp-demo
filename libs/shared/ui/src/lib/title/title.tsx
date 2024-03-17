import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TitleProps {
  title: string;
}

const StyledTitle = styled.div`
  color: pink;
`;

export function Title(props: TitleProps) {
  return (
    <StyledTitle>
      <h1>{props.title}</h1>
    </StyledTitle>
  );
}

export default Title;
