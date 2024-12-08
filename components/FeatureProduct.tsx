import React from 'react'
import Image from 'next/image'
import i1 from '../public/1.svg'
import i2 from '../public/2.svg'
import i3 from '../public/3.svg'
import i4 from '../public/4.svg'
import i5 from '../public/5.svg'




function FeatureProduct() {
  return (
    <div className='w-full md:h-[410px] sm:h-full bg-white space-y-16'>
        <div className='flex items-center justify-between '>
        <h1 className='text-black text-3xl tracking-[0.2em]'>FEATURED PRODUCTS</h1>
        <h1 className='text-black text-lg underline decoration-black'>View all</h1>
        </div>
        <div className='grid md:grid-cols-5 sm:grid-cols-1 gap-8'>
        <div className='flex flex-col space-y-5'>
        <Image
        src={i1}
        alt='image'
        width={263}
        height={306}
        />
        <div className='flex items-center justify-between'>
            <h3 className='text-secondary'>Library Stool Chair</h3>
            <h1 className='text-black text-sm '>$99</h1>
        </div>
        </div>
        <div className='flex flex-col space-y-5'>
        <Image
        src={i2}
        alt='image'
        width={263}
        height={306}
        />
        <div className='flex items-center justify-between'>
            <h3 className='text-secondary'>Library Stool Chair</h3>
            <h1 className='text-black text-sm '>$99</h1>
        </div>
        </div>
        <div className='flex flex-col space-y-5'>
        <Image
        src={i3}
        alt='image'
        width={263}
        height={306}
        />
        <div className='flex items-center justify-between'>
            <h3 className='text-secondary'>Library Stool Chair</h3>
            <h1 className='text-black text-sm '>$99</h1>
        </div>
        </div>
        <div className='flex flex-col space-y-5'>
        <Image
        src={i4}
        alt='image'
        width={263}
        height={306}
        />
        <div className='flex items-center justify-between'>
            <h3 className='text-secondary'>Library Stool Chair</h3>
            <h1 className='text-black text-sm '>$99</h1>
        </div>
        </div>
        <div className='flex flex-col space-y-5'>
        <Image
        src={i5}
        alt='image'
        width={263}
        height={306}
        />
        <div className='flex items-center justify-between'>
            <h3 className='text-secondary'>Library Stool Chair</h3>
            <h1 className='text-black text-sm '>$99</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FeatureProduct