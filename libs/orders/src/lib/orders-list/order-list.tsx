import { Title } from '@code-camp-demo/shared-ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrderListProps {}

const StyledOrderList = styled.div`
  color: pink;
`;

export function OrderList(props: OrderListProps) {
  return (
    <StyledOrderList>
      <Title title="Welcome to OrderList!" />
    </StyledOrderList>
  );
}

export default OrderList;
