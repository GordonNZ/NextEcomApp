import Container from '@/app/components/container';
import { product } from '@/utils/product';
import React from 'react';
import ProductDetails from './productDetasils';

interface Iprams {
  productId?: string;
}

const Product = ({ params }: { params: Iprams }) => {
  console.log(params);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
