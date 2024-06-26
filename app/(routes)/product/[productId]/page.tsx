import Container from '@/app/components/container';
import { product } from '@/utils/product';
import React from 'react';
import ProductDetails from './productDetails';
import ListRating from './listRating';

interface Iprams {
  productId?: string;
}

const Product = ({ params }: { params: Iprams }) => {
  console.log(params);

  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product} />
        <div className='flex flex-col mt-20 gap-4'>
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
