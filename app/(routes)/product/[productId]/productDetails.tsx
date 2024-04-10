'use client';

import Button from '@/app/components/products/button';
import ProductImage from '@/app/components/products/productImage';
import SetColor from '@/app/components/products/setColor';
import SetQuantity from '@/app/components/products/setQuantity';
import { useCart } from '@/hooks/useCart';
import { product } from '@/utils/product';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

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
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { cartTotalQty } = useCart();
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

  const router = useRouter();

  console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex >= 0) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

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
      <ProductImage
        cartProduct={CartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
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
        {isProductInCart ? (
          <>
            <p className='mb-2 text-slate-500 flex items-center gap-1'>
              <MdCheckCircle className='text-teal-400' size={20} />
              <span>Product Added to Cart</span>
            </p>
            <div className='max-w-[300px]'>
              <Button
                label='View Cart'
                outline
                onClick={() => router.push('/cart')}
              />
            </div>
          </>
        ) : (
          <>
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
            <div className='max-w-[300px]'>
              <Button
                label='Add To Cart'
                onClick={() => {
                  handleAddProductToCart(CartProduct);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
