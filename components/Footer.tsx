import React from 'react'
import Image from 'next/image'
import payment from '../public/Payment.svg'
import logo from '../public/Logo Icon.svg'
import social from '../public/Social Links.svg'
import Link from 'next/link'




function Footer() {
  return (
    <div className='w-full md:h-[418px] sm:h-full flex flex-col sm:px-[25px] md:px-[150px] border border-t-gray-300 justify-between bg-white'>
        <div className='grid sm:grid-cols-1 md:grid-cols-4 py-24 md:space-y-0 sm:space-y-6 '>
        
        <div className='flex flex-col space-y-6 '>
        <div className='flex items-center space-x-2'>
            <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            />
            <h2 className='text-[26px] text-black font-semibold'>Comforty</h2>
        </div>
        <div>
            <h3 className='text-[#272343]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus </h3>
        </div>
        <div>
            <Image
            src={social}
            alt='social'
            width={206}
            height={38}
            />
        </div>
        </div>

        <div className='flex flex-col space-y-[20px] '>
            <h4 className='text-[#9A9CAA]'>CATEGORY</h4>
        <div className='flex flex-col space-y-3'>
            <Link href='#'><h3 className='text-[#272343]'>Sofa</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Armchair</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Wing Chair</h3></Link>
            <Link href='#'><h3 className='text-[#029FAE] underline decoration-[#029FAE]'>Desk Chair</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Wooden Chair</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Park Bench</h3></Link>
        </div>
        </div>
        <div className='flex flex-col space-y-[20px] '>
            <h4 className='text-[#9A9CAA]'>SUPPORT</h4>
        <div className='flex flex-col space-y-3'>
            <Link href='#'><h3 className='text-[#272343]'>Help & Support</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Terms & Condition</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Privacy Policy</h3></Link>
            <Link href='#'><h3 className='text-[#272343]'>Help</h3></Link>
        </div>
        </div>

        <div className='flex flex-col space-y-4'>
        <h4 className='text-[#9A9CAA]'>NEWSLETTER</h4>
        <div className='flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-4  items-center space-x-4'>
        <input type="text" placeholder='Your Email' className='w-[285px] h-[46px] rounded-md text-start border border-[#E1E3E5] focus:outline-none px-4' />
        <button className='w-[127px] h-[46px] font-normal text-sm bg-[#029FAE] rounded-md text-white text-center'>Subscribe</button>
        </div>
        <h4 className='text-[#9A9CAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</h4>
        </div>




        </div>


        <div className='w-full h-[74px] flex items-center justify-between pb-4'>
        <h4 className='font-Poppins font-normal text-sm' >@ 2024 - Assignment - Designed & Develop by Muhammad Moin</h4>
        <Image
        src={payment}
        alt='payment'
        width={227}
        height={27}
        />
        </div>
    </div>
  )
}

export default Footer