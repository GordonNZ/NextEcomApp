import Container from '@/app/components/container';
import React from 'react';
import CartClient from './cartClient';

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className='pt-8'>
      <Container>
        <CartClient />
      </Container>
    </div>
  );
};

export default Cart;
