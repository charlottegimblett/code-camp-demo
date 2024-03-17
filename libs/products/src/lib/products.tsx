import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductsProps {}

const StyledProducts = styled.div`
  color: pink;
`;

export function Products(props: ProductsProps) {
  return (
    <StyledProducts>
      <h1>Welcome to Products!</h1>
    </StyledProducts>
  );
}

export default Products;
