'use client'
import React, {useContext, useState} from 'react'
// import carticon1 from "../../public/Cart.svg";
import Image from 'next/image';
import CartContext from '@/Context/NewContext';
// import { useCart } from '../Context/CartContext';
import deleteicon from '../public/Deleteicon.webp'



function ButtonCart() {
        
    const {decrementCart} = useContext(CartContext)!
    

    return (
    <div >
        <button onClick={decrementCart} className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
        <Image src={deleteicon} alt="image" width={24} height={24} />
        </button>
    
    </div>
  )
}

export default ButtonCart