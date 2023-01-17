import Image from 'next/image';
import React from 'react';
import Button from './Button';

type Props = {};

const Landing = (props: Props) => {
  return (
    // Parent <main/> tag ni height=200vh uchraas delgetsnii deed tald tulaad sticky, top-0 bolj hodolgoongv zogsono...
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
      {/* BIG TEXTs */}
      <div className='space-y-8'>
        <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
          <span className='block bg-gradient-to-r from-pink-500 to-violet-500'>
            Powered by
          </span>
          <span className='block'>By Intellect</span>
          <span className='block'>Driven by values by</span>
        </h1>

        {/* BIG TEXTs */}
        <div className='space-x-8'>
          <Button title='Buy Now' />
          <a className='link'>Learn More</a>
        </div>
      </div>

      {/* BIG PHONE image. 1024px-ees doosh hidden.  */}
      <div className='relative hidden h-[450px] transition-all duration-500 md:inline lg:h-]650px] lg:w-[600px]'>
        <Image src='/iphone.png' fill className='object-contain' alt='' />
      </div>
    </section>
  );
};

export default Landing;
