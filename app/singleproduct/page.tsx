import React from 'react'
import product from '../../public/0.webp'
import Image from 'next/image'
import carticon from '../../public/Cart.webp'
import FeatureProduct from '@/components/FeatureProduct'

function page() {
  return (
    <div className='w-full h-full md:px-[150px] sm:px-[25px] py-[132px] flex flex-col space-y-36 bg-white'>
        <div className='flex md:flex-row sm:flex-col items-center'>
        <div className='md:w-1/2 sm:w-full'>
        <Image
        src={product}
        alt='product'
        width={675}
        height={607}
        />
        </div>
        <div className='md:w-1/2 sm:w-full flex flex-col sm:justify-normal md:justify-center px-24 space-y-10'>
        <h1 className='text-secondary md:text-6xl sm:text-4xl'>Library Stool <br/>Chair</h1>
        <div className='w-[144px] h-[44px] bg-bluesecond rounded-full flex justify-center items-center'>
            <h2 className='text-xl text-white te'>$20.00 USD</h2>
        </div>
        <div className=' w-full border border-[#D9D9D9]'></div>
        <div>
            <h3 className='text-lg text-[#9A9CAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
        </div>
        <div>
            <button className='w-48 h-14 bg-bluesecond rounded-md flex items-center justify-center gap-3 text-white font-semibold text-xl'><Image
            src={carticon}
            alt='carticon'
            width={29}
            height={29}
            
            />Add to Cart</button>
        </div>
        </div>
        </div>
        <div className=''>
        <FeatureProduct/>
        </div>
    </div>
  )
}

export default page