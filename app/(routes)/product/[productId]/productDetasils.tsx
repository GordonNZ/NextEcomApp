'use client';

import { Rating } from '@mui/material';
import React from 'react';

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className='w-[40%] my-2' />;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div>Images</div>
      <div className='flex flex-col gap-1 text-slate-500 text-sm'>
        <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
        <div className='flex items-center gap-2'>
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className='text-justify'>{product.description}H</div>
        <Horizontal />
        <div>
          <span className='font-semibold'>CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className='font-semibold'>BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        <Horizontal />

        <Horizontal />
        <Horizontal />
      </div>
    </div>
  );
};

export default ProductDetails;
