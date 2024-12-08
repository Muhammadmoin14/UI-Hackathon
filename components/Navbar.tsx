import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full h-[74px] bg-white md:px-[150px] flex justify-between items-center border border-b-[#636270]'>
        <div>
        <ul className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'><li className='font-Inter font-medium text-sm text-[#636270]'>Home</li></Link>
        <Link href='/shop'><li className='font-Inter font-medium text-sm text-[#636270]'>Shop</li></Link>
        <Link href='/products'><li className='font-Inter font-medium text-sm text-[#636270]'>Product</li></Link>
        <Link href='/singleproduct'><li className='font-Inter font-medium text-sm text-[#636270]'>Page</li></Link>
        <Link href='/about'><li className='font-Inter font-medium text-sm text-[#636270]'>About</li></Link>
        </ul>
        </div>
        <div className='flex items-center space-x-1'>
        <h4 className='font-normal text-[#636270]'>Contact:</h4>
        <h4 className='text-secondary md:text-sm sm:text-xs'>(808) 555-0111</h4>
        </div>
    </div>
  )
}

export default Navbar