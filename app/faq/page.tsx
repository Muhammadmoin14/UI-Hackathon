import React from 'react'
import { PlusIcon } from '@heroicons/react/solid';

function page() {
  return (
    <div className='w-full h-full md:px-[150px] sm:px-0 py-[41px] '>
        <h1 className='font-Helvetica font-bold text-5xl text-center'>Questions Looks Here</h1>
        <h3 className='text-[#4F4F4F] pt-[21px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h3>
        <div className='grid md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-6 gap-6 mt-[72px] sm:scale-90 '>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>What types of chairs do you offer?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>How can we get in touch with you?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>Do your chairs come with a warranty?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>What will be delivered? And When?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>Can I try a chair before purchasing?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>
            <div className='w-[600px] h-[170px] bg-[#F7F7F7] px-6 py-6 '>
                <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>How do I clean and maintain my Comforty chair?</h3>
                <PlusIcon className="h-6 w-6 text-black"  />

                </div>
                <h3 className='text-[#4F4F4F] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</h3>
            </div>

        </div>

    </div>
  )
}

export default page