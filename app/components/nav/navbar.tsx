import React from 'react';
import Container from '../container';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div
      className='
  sticky
  top-0
  w-full
  bg-slate-200
  z-30
  shadow-sm'
    >
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div
            className='
          flex
          items-center
          justify-between
          gap-3
          md:gap-0'
          >
            <Link href='/' className='font-bold text-2xl'>
              Eazy Ecom
            </Link>
            <div className='hidden md:block'>Search</div>
            <div className='flex items-center gap-8 md:gap-12'>
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
