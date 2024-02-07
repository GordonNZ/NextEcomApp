'use client';
import { formatPrice } from '@/utils/formatPrice';
import { truncateText } from '@/utils/truncateText';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ProductCardProps {
  data: any;
}

const ProductCard = (data: ProductCardProps) => {
  const router = useRouter();

  const productRating =
    data.data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.data.reviews.length;

  return (
    <div
      className='col-span-1 cursor-pointer border-[1.2px] border-slate-200
    bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm'
      onClick={() => router.push(`/product/${data.data.id}`)}
    >
      <div className='flex flex-col items-center w-full gap-1 '>
        <div className='aspect-square overflow-hidden relative w-full'>
          <Image
            fill
            src={data.data.images[0].image}
            className='w-full h-full object-contain'
            alt={data.data.name}
          />
        </div>
        <div className='mt-4'>{truncateText(data.data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.data.reviews.length} reviews</div>
        <div className='font-semibold'>{formatPrice(data.data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
