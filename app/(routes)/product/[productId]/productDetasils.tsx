'use client';

import Button from '@/app/components/products/button';
import SetColor from '@/app/components/products/setColor';
import SetQuantity from '@/app/components/products/setQuantity';
import { product } from '@/utils/product';
import { Rating } from '@mui/material';
import React, { useCallback, useState } from 'react';

interface ProductDetailsProps {
  product: any;
}
// type for cartProduct useState
export type CartProductType = {
  id: string;
  name: string;
  desc: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};
// creating type for selectedImg in CartProductType
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className='w-[40%] my-2' />;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [CartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    desc: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [CartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (CartProduct.quantity === 20) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity++ };
    });
  }, [CartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (CartProduct.quantity === 1) {
      return;
    } else {
      setCartProduct((prev) => {
        return { ...prev, quantity: prev.quantity-- };
      });
    }
  }, [CartProduct]);

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
        <SetColor
          cartProduct={CartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={CartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div>add to cart</div>
        <div className='max-w-[300px]'>
          <Button label='Add To Cart' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
