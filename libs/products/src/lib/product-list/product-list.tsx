import { Title } from '@code-camp-demo/shared-ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductListProps {}

const StyledProductList = styled.div`
  color: pink;
`;

export function ProductList(props: ProductListProps) {
  return (
    <StyledProductList>
      <Title title="Welcome to ProductList!" />
    </StyledProductList>
  );
}

export default ProductList;
